---
title: "A maternal-risk model that scores 96%, and why I would not deploy it"
summary: "I took a popular public dataset on pregnancy risk from Bangladesh, built two models and validated them properly. More than half the rows were duplicates, the headline accuracy was inflated, and the model missed most high-risk teenage pregnancies."
topic: "AI"
date: 2026-10-11
minutes: 9
featured: false
draft: false
---

Search for "maternal health risk prediction" and you will find dozens of notebooks and papers reporting accuracy above 95% on the same public dataset. It is a natural test case: maternal deaths are mostly preventable, risk assessment in pregnancy is often done badly, and a model that flags high-risk women early could save lives.

So I tried it. I built two simple models and then did what a health system should do before trusting any of them: validated them honestly. The model reached 96% accuracy the usual way. By the end, I would not let it near a patient. This piece explains why, step by step, because the steps matter more than the model. The code is public so anyone can repeat it.

## The data

The **Maternal Health Risk** dataset is on the UCI Machine Learning Repository. It was collected from hospitals and community clinics in rural Bangladesh through an IoT-based risk monitoring system, and is widely used for teaching and research. Each row is a pregnant woman with six measurements: age, systolic and diastolic blood pressure, blood sugar, body temperature and heart rate. Each has a risk label: low, mid or high.

I framed the task the way a programme would: **can we identify high-risk women?** That makes it a yes/no problem: high risk versus everyone else.

## Step 1: Look at the data before modelling

Three things stood out immediately:

- **More than half the rows are duplicates.** Of 1,014 rows, only 452 are unique. 562 rows are exact copies of another row: same age, same readings, same label. These may be repeated readings of the same women or a data-handling artefact; either way, they are not independent observations.
- **Some ages are implausible for pregnancy.** Ages range from 10 to 70; 134 rows have an age under 13 or over 50. Some may be data errors, some may be real; either way, they need checking with whoever collected the data.
- **We do not know exactly how the labels were assigned.** Was "high risk" decided by a doctor, a rule, or an outcome? A model can only learn to reproduce the label. If the label is a rule applied to these same six measurements, the model is learning the rule back.

None of these is unusual. All of them are routinely ignored.

## Step 2: The usual way, and the 96%

The standard approach is to split the data randomly, 80% for training and 20% for testing, and report the test accuracy.

| Model | AUROC | Sensitivity | PPV | Accuracy |
|---|---|---|---|---|
| Logistic regression | 0.93 | 0.67 | 0.78 | 0.86 |
| Random forest | 0.96 | 0.93 | 0.91 | **0.96** |

*Sensitivity: share of high-risk women the model catches. PPV (positive predictive value): share of women flagged who really are high risk. AUROC: how well the model ranks high-risk women above others, from 0.5 (chance) to 1 (perfect).*

A random forest with 96% accuracy and 93% sensitivity. This is the number that gets reported.

But because of the duplicates, **152 of the 203 test rows also appear, identically, in the training data.** The model is being tested largely on women it has already seen. That is not prediction; it is memory.

## Step 3: The honest way

I removed the duplicates and used five-fold cross-validation: the data is split into five parts, and each part takes a turn as the test set, so every result comes from women the model has never seen.

| Model | AUROC | Sensitivity | PPV | Accuracy |
|---|---|---|---|---|
| Logistic regression | 0.89 | 0.55 | 0.75 | 0.84 |
| Random forest | 0.92 | 0.70 | 0.79 | 0.88 |

The models are still reasonable at ranking women by risk (AUROC around 0.9). But **sensitivity dropped from 93% to 70%** for the random forest, and the simpler model now catches only about **half** of high-risk women. In a screening tool, missing three in ten high-risk pregnancies is not a rounding error.

## Step 4: Check the subgroups

An overall number can hide a group the model fails. I looked at performance by age.

| Age group | Women | High-risk share | Sensitivity (logistic) | Sensitivity (random forest) |
|---|---|---|---|---|
| Under 20 | 126 | 17% | **0.36** | **0.45** |
| 20 to 34 | 189 | 19% | 0.39 | 0.78 |
| 35 and over | 137 | 39% | 0.72 | 0.76 |

At the default threshold, **the models miss most high-risk pregnancies in women under 20.** Teenage pregnancy is itself a recognised risk factor and common in the region. A tool that works least well for the youngest mothers would widen the gap it is meant to close.

The reason is visible in the data. The model leans most on blood sugar and blood pressure. But high-risk women under 20 in this dataset look different from older high-risk women: their average systolic blood pressure is about 96 mmHg, against about 122 to 128 in older high-risk women, and their blood sugar is lower too. Whatever made them high risk, it was mostly not the signals the model learned from older women. High-risk cases are also rarer among young women here, so the model has fewer examples to learn from.

## Step 5: Calibration

When a model says a woman has a 30% risk, about 30% of women given that score should turn out to be high risk. This is calibration, and it matters whenever a score drives decisions. The logistic model was reasonably calibrated at the extremes but **under-estimated risk in the middle**: among women it scored at 20 to 40%, almost half (49%) were actually high risk. These middle scores are exactly where a health worker most needs an honest number.

## Step 6: Choose the threshold on purpose

Most models flag a woman as high risk if her score is above 0.5. That number is a default, not a clinical decision. Lowering it catches more high-risk women at the cost of more false alarms:

| Model | Threshold | Sensitivity | Under-20 sensitivity | PPV | Women flagged |
|---|---|---|---|---|---|
| Logistic regression | 0.5 | 0.54 | 0.36 | 0.73 | 18% |
| Logistic regression | 0.2 | **0.85** | **0.86** | 0.62 | 34% |
| Random forest | 0.5 | 0.71 | 0.45 | 0.79 | 22% |
| Random forest | 0.2 | 0.84 | 0.73 | 0.64 | 33% |

At a threshold of 0.2, the simple logistic model catches 85% of high-risk women, including 86% of those under 20, while flagging a third of all women for closer follow-up. Whether that trade-off is acceptable is not a data science question. It depends on whether the health system can follow up a third of all pregnancies. That is a decision for programme managers and clinicians, and the model should be tuned to it, not the other way round.

## What would it take to deploy something like this?

Even with a better threshold, I would not deploy this model. To get there:

1. **Fix the data:** confirm what the duplicates are, resolve implausible ages, and document how labels were assigned. Ideally, the label should be an outcome (a complication that happened), not a category assigned at the visit.
2. **External validation:** test it on data from a different place and time, ideally the population where it would be used, such as women registered in an Indian district.
3. **Subgroup performance:** report results by age, parity and facility, and set minimum acceptable sensitivity for each.
4. **Compare with the simple alternative:** a frontline checklist of known risk factors. In Chhattisgarh, our high-risk pregnancy identification rose from 2% to 15% with a checklist and better use of line lists, without a model. A model has to beat that, in practice, to be worth the cost.
5. **Prospective evaluation:** pilot it with a comparison group and measure what happens to women, not just what the model predicts.

These steps map closely onto published reporting and evaluation guidance for clinical prediction models and AI, such as TRIPOD+AI (for reporting how a model was built and tested) and DECIDE-AI (for early clinical evaluation of AI decision support). India's new BODH platform under SAHI is designed to benchmark AI models on diverse real-world data before deployment, which is exactly the external validation step this model has not had.

## The lesson

The model is not the interesting part of this exercise. Anyone can get 96% on this dataset in ten minutes. The interesting part is that every honest step, deduplicating, cross-validating, checking subgroups, checking calibration, made the model look worse and made the picture more true.

When a health system is offered an AI tool with an impressive accuracy figure, these are the questions to ask. How was it tested? On whom? Who does it miss?

*Views are my own. Code: [maternal-risk-validation.py](/code/maternal-risk-validation.py) · full output: [results](/code/maternal-risk-validation-results.txt). Data: Maternal Health Risk dataset, UCI Machine Learning Repository (Ahmed et al.), CC BY 4.0.*

## Sources

- [Maternal Health Risk dataset, UCI Machine Learning Repository](https://archive.ics.uci.edu/dataset/863/maternal+health+risk) (CC BY 4.0)
- [Collins et al. (2024), TRIPOD+AI statement, BMJ](https://doi.org/10.1136/bmj-2023-078378)
- [Vasey et al. (2022), DECIDE-AI reporting guideline, BMJ](https://doi.org/10.1136/bmj-2022-070904)
