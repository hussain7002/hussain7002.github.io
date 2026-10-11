"""Validating a maternal-risk prediction model on the public UCI Maternal Health Risk dataset.

Usage: python validate.py "path/to/Maternal Health Risk Data Set.csv"
Data: https://archive.ics.uci.edu/dataset/863/maternal+health+risk (Ahmed et al., Bangladesh; CC BY 4.0)
"""
import sys
import numpy as np
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import roc_auc_score, brier_score_loss, recall_score, precision_score, accuracy_score
from sklearn.model_selection import StratifiedKFold, train_test_split
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler

RNG = 42
df = pd.read_csv(sys.argv[1])
features = ['Age', 'SystolicBP', 'DiastolicBP', 'BS', 'BodyTemp', 'HeartRate']
df['high'] = (df['RiskLevel'] == 'high risk').astype(int)

print('== 1. The data ==')
print('rows:', len(df), '| unique rows:', len(df.drop_duplicates()),
      '| duplicated rows:', df.duplicated().sum())
print(df['RiskLevel'].value_counts().to_string())
print('age range:', df.Age.min(), '-', df.Age.max(), '| median', df.Age.median())
print('implausible values: HeartRate<40:', (df.HeartRate < 40).sum(),
      '| Age<13 or >50:', ((df.Age < 13) | (df.Age > 50)).sum())

models = {
    'logistic regression': lambda: make_pipeline(StandardScaler(), LogisticRegression(max_iter=2000)),
    'random forest': lambda: RandomForestClassifier(n_estimators=300, random_state=RNG),
}

def evaluate(train, test, make):
    m = make().fit(train[features], train['high'])
    p = m.predict_proba(test[features])[:, 1]
    yhat = (p >= 0.5).astype(int)
    y = test['high']
    return dict(auc=roc_auc_score(y, p), sens=recall_score(y, yhat), ppv=precision_score(y, yhat, zero_division=0),
                acc=accuracy_score(y, yhat), brier=brier_score_loss(y, p), p=p, y=y.values)

print('\n== 2. The usual way: random 80/20 split on all rows (duplicates can leak into test) ==')
tr, te = train_test_split(df, test_size=0.2, stratify=df['high'], random_state=RNG)
leak = te.merge(tr[features + ['RiskLevel']].drop_duplicates(), how='inner', on=features + ['RiskLevel'])
print(f'test rows that also appear identically in training: {len(leak)} of {len(te)}')
for name, make in models.items():
    r = evaluate(tr, te, make)
    print(f"{name:20s} AUROC {r['auc']:.3f}  sensitivity {r['sens']:.2f}  PPV {r['ppv']:.2f}  accuracy {r['acc']:.2f}")

print('\n== 3. Honest way: deduplicate, then 5-fold stratified cross-validation ==')
dd = df.drop_duplicates().reset_index(drop=True)
skf = StratifiedKFold(n_splits=5, shuffle=True, random_state=RNG)
oof = {}
for name, make in models.items():
    rows, P = [], np.zeros(len(dd))
    for tri, tei in skf.split(dd, dd['high']):
        r = evaluate(dd.iloc[tri], dd.iloc[tei], make)
        rows.append(r); P[tei] = r['p']
    oof[name] = P
    a = lambda k: np.mean([x[k] for x in rows])
    s = lambda k: np.std([x[k] for x in rows])
    print(f"{name:20s} AUROC {a('auc'):.3f} (sd {s('auc'):.3f})  sensitivity {a('sens'):.2f}  PPV {a('ppv'):.2f}  accuracy {a('acc'):.2f}  Brier {a('brier'):.3f}")

print('\n== 4. Calibration (deduplicated, out-of-fold, logistic regression) ==')
P = oof['logistic regression']; y = dd['high'].values
bins = pd.cut(P, [0, .1, .2, .4, .6, .8, 1.0], include_lowest=True)
cal = pd.DataFrame({'bin': bins, 'pred': P, 'obs': y}).groupby('bin', observed=True).agg(n=('obs', 'size'), mean_predicted=('pred', 'mean'), observed=('obs', 'mean'))
print(cal.round(3).to_string())
P = oof['random forest']
bins = pd.cut(P, [0, .1, .2, .4, .6, .8, 1.0], include_lowest=True)
cal = pd.DataFrame({'bin': bins, 'pred': P, 'obs': y}).groupby('bin', observed=True).agg(n=('obs', 'size'), mean_predicted=('pred', 'mean'), observed=('obs', 'mean'))
print('random forest:'); print(cal.round(3).to_string())

print('\n== 5. Subgroups by age (deduplicated, out-of-fold) ==')
bands = pd.cut(dd['Age'], [0, 19, 34, 100], labels=['under 20', '20-34', '35 and over'])
for name in models:
    print(name)
    for b in bands.cat.categories:
        mask = (bands == b).values
        yb, pb = y[mask], oof[name][mask]
        yh = (pb >= 0.5).astype(int)
        auc = roc_auc_score(yb, pb) if len(set(yb)) > 1 else float('nan')
        print(f"  {b:12s} n={mask.sum():4d}  high-risk share {yb.mean():.2f}  AUROC {auc:.3f}  sensitivity {recall_score(yb, yh, zero_division=0):.2f}")

print('\n== 6. What drives the model (random forest feature importance) ==')
rf = RandomForestClassifier(n_estimators=300, random_state=RNG).fit(dd[features], dd['high'])
print(pd.Series(rf.feature_importances_, index=features).sort_values(ascending=False).round(3).to_string())

print('\n== 7. Choosing the threshold: sensitivity vs false alarms (deduplicated, out-of-fold) ==')
for name in models:
    for t in (0.5, 0.3, 0.2):
        yh = (oof[name] >= t).astype(int)
        u20 = (bands == 'under 20').values
        print(f"{name:20s} threshold {t:.1f}: sensitivity {recall_score(y, yh):.2f}  PPV {precision_score(y, yh):.2f}  "
              f"flagged {yh.mean():.0%} of women  | under-20 sensitivity {recall_score(y[u20], yh[u20], zero_division=0):.2f}")
