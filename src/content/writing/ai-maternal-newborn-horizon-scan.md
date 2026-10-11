---
title: "Horizon scan: AI in maternal and newborn care"
summary: "Eight kinds of AI tool that are reaching pregnant women and newborns in low- and middle-income countries, how mature each is, and what a health system should watch for."
topic: "AI"
date: 2026-10-11
minutes: 9
featured: false
draft: false
---

Most AI-in-health conversations are about radiology, chatbots and hospital operations. Maternal and newborn health gets less attention, even though it is where low-cost diagnostics could save the most lives in low- and middle-income countries. Most maternal deaths are preventable, and most happen where there is no specialist to read a trace, scan or blood test.

This is a horizon scan of the AI tools reaching that gap. It draws on three things: my work on USAID's Saksham maternal health programme in Assam, Chhattisgarh and Odisha, where we deployed some of these tools; the Saksham MNCH Aavishkar Challenge, which screened over 40 innovations; and published evidence. I describe categories, not brands.

For each category I give a **maturity** rating:
- **Deployed:** in routine use in public systems somewhere
- **Piloting:** in field pilots with early evidence
- **Emerging:** promising, mostly pre-pilot

## 1. Automated fetal heart-rate monitoring
**Maturity: Deployed**

Portable, wireless CTG devices that connect to a smartphone and interpret the fetal heart trace automatically, flagging abnormal patterns for referral. They bring fetal monitoring to facilities that have no CTG machine and no one trained to read one. In Saksham we deployed portable fetal heart monitors at lower-level facilities.

**What to watch:** automated interpretation is not new in high-income settings, and the evidence there is sobering. The large INFANT trial in the UK found that computerised decision support for CTG interpretation did not improve outcomes for babies. The value in low-resource settings may come less from smarter interpretation and more from simply having a monitor where there was none, plus a fast route to an obstetric decision. Evaluations should test exactly that.

## 2. AI-assisted point-of-care ultrasound
**Maturity: Piloting**

Ultrasound in pregnancy dates the pregnancy and detects problems such as multiple pregnancy, breech position and placenta praevia. Most rural women never get a scan. New tools let a health worker with no sonography training sweep a low-cost probe across the abdomen while AI interprets the images. Published studies of "blind sweep" approaches have estimated gestational age about as accurately as trained sonographers.

**What to watch:** cost (probe plus annual software licences can be substantial), regulation (India's PCPNDT rules on ultrasound use apply), and what happens after a risky finding is flagged in a village with no referral transport.

## 3. Non-invasive haemoglobin estimation
**Maturity: Piloting**

Anaemia affects over half of pregnant women in India and contributes to maternal deaths through haemorrhage. Several devices now estimate haemoglobin without a needle, shining light through a fingertip and using machine-learning models to convert the signal to a haemoglobin value. Several appeared in the Aavishkar challenge.

**What to watch:** accuracy. Independent studies of non-invasive devices have often found wide limits of agreement with laboratory values, which is acceptable for population screening but risky for clinical decisions about a single woman. Ask for agreement data across the range that matters, especially at low haemoglobin, and across skin tones.

## 4. Smartphone urine and dipstick reading
**Maturity: Piloting**

Pre-eclampsia is a leading cause of maternal death, and protein in urine is one of its signs. Smartphone apps can read a dipstick photographed under controlled conditions, removing the guesswork of reading colours by eye and producing a digital record. Some combine several tests in one kit.

**What to watch:** these tools are only as good as the test strip and the photo. Lighting, camera quality and timing all matter. The bigger gain may be the record: a result that is stored and can trigger follow-up is worth more than one written in a register.

## 5. Risk prediction for pregnancy complications
**Maturity: Piloting to deployed**

Models that combine routine data (age, parity, blood pressure, haemoglobin, history) to estimate a woman's risk of complications such as pre-eclampsia, so the highest-risk women get closer follow-up. Some well-validated tools are simple statistical models rather than "AI", and that is a feature: they are easier to check.

**What to watch:** a risk score is only useful if someone acts on it. In Chhattisgarh, the share of pregnancies identified as high risk in our intervention areas rose from 2% to 15% because of a frontline checklist and better use of line lists, not a model. Prediction should support that kind of process, not replace it. Models also need validation on local data: risk factors and their weights differ between populations.

## 6. Newborn risk and decision support
**Maturity: Piloting**

Tools that help staff in newborn care units assess sick newborns, estimate risk and decide on treatment or referral, and tools that turn paper admission and discharge forms into digital records by scanning them. Both appeared among Aavishkar entries.

**What to watch:** form-scanning is unglamorous and probably more immediately useful: newborn units generate a great deal of paper, and digitising it creates the data that later decision-support tools will need.

## 7. Remote sensing and geospatial AI
**Maturity: Deployed (for planning)**

Satellite imagery and machine learning can map where people live, how far they are from emergency obstetric care, and which areas flood. That matters for maternal health because distance and travel time to a facility that can do a caesarean section are among the strongest predictors of maternal death. In flood-prone areas such as the Brahmaputra valley, mapping which villages are cut off in which season tells planners where to pre-position birth waiting homes and transport.

**What to watch:** these tools inform planning, not individual care. Their outputs should be checked against what frontline workers know, and population estimates for small areas can be badly wrong.

## 8. Language models for frontline workers and women
**Maturity: Emerging**

Chat assistants, increasingly built on large language models, that answer health workers' questions or give pregnant women information in their own language over WhatsApp or voice. Before large language models, assistants like the oxygen chatbot I worked on matched questions to answers written by experts. The new generation can answer far more questions, and can also be confidently wrong.

**What to watch:** safety testing in local languages, a clear boundary on what the assistant will not answer, escalation to a human, and evaluation that measures whether the advice changed behaviour, not just whether users liked it.

## What this adds up to

Three patterns cut across all eight categories:

1. **The bottleneck is rarely the algorithm.** It is the referral that follows the alert, the device that needs charging, the licence fee in year two, and the staff who need training.
2. **Evidence lags adoption.** Several of these tools are already in use in India with little independent evaluation in the settings where they are used. Governments are in the best position to fix this, by funding evaluations as part of procurement.
3. **Simple often wins.** A checklist, a dipstick and a phone call have saved more mothers than any model so far. AI is worth it where it does something those cannot, such as reading a scan or a trace where no one else can.

For health systems in South-East Asia, the practical question is not which AI tool to buy. It is which of these gaps matters most in your districts, and what evidence you will require before you scale anything into it.

*Views are my own. Categories draw on the public Saksham MNCH Aavishkar Challenge compendium (PATH/USAID) and published literature; no product is endorsed.*

## Sources

- [Saksham MNCH Aavishkar Challenge: A compendium of transformative solutions](https://media.path.org/documents/Saksham_Avishkar_Compendium_-_16April.pdf) (PATH / USAID)
- [INFANT Collaborative Group (2017), Computerised interpretation of fetal heart rate during labour, The Lancet](https://doi.org/10.1016/S0140-6736%2817%2930568-8)
