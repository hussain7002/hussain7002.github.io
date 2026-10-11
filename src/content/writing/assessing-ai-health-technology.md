---
title: "How to assess an AI health technology before a health system buys it"
summary: "A ten-part rubric from running a national maternal health innovation challenge, and what it says when applied to an AI fetal heart monitor."
topic: "AI"
date: 2026-10-11
minutes: 9
featured: false
draft: false
---

Between 2023 and 2024 I helped run the Saksham MNCH Aavishkar Challenge, a USAID-supported innovation challenge organised by PATH to find technologies that could reduce maternal and newborn deaths in Assam, Chhattisgarh and Odisha. We evaluated more than 40 innovations, identified 15 for public health adoption, and the best were published in a public compendium. Several were AI-based: a portable fetal heart monitor that interprets traces automatically, a smartphone app that reads ultrasound images to flag risky pregnancies, devices that estimate haemoglobin without drawing blood using machine learning, and a virtual maternal care platform built on wearables.

Every one of them had an impressive pitch. The job of an assessment is to find out what is behind it. This piece sets out the rubric I would use today for any AI health technology a public health system is considering, and then applies it to one real category of tool.

## Why AI needs a slightly different assessment

Health technology assessment is a mature field. For AI, three things change:

1. **Performance is not fixed.** A model that works in a Mumbai hospital may not work in a sub-centre in Kokrajhar, because the patients, the devices and the data are different.
2. **The output is advice, not action.** An AI tool usually tells someone something. Its value depends entirely on whether that person acts, correctly, in time.
3. **The failure modes are quiet.** A broken blood pressure cuff is obvious. A model that is slowly getting worse is not.

So the rubric below adds questions about local validation, workflow and monitoring to the usual questions about cost and evidence.

## The rubric: ten questions

Each question is scored 0 to 3 (0 = no evidence, 1 = claimed, 2 = shown elsewhere, 3 = shown in a setting like ours), and three of them are **gates**: a zero on a gate stops the assessment, whatever the total.

| # | Question | What good evidence looks like |
|---|---|---|
| 1 | **Problem fit (gate).** Is this a priority problem, and is AI the right answer to it? | Burden data for the target population; a clear account of what happens today without the tool |
| 2 | **Technical performance.** How accurate is it, and against what reference? | Sensitivity, specificity and predictive values against an accepted reference standard, with confidence intervals |
| 3 | **Local validation (gate).** Has it been tested on people like ours? | External validation on Indian data from similar facility levels; results by age, parity, region and device |
| 4 | **Outcome evidence.** Does using it change care or outcomes? | A comparison group, at minimum before-and-after with controls; ideally a trial |
| 5 | **Workflow.** Who uses it, when, and who acts on the result? | A tested workflow at the intended level of care, including what happens when the tool is wrong or the referral facility is far |
| 6 | **Usability and training.** Can the intended user operate it reliably? | Training time, error rates by user type, language support |
| 7 | **Infrastructure dependence.** What does it need to keep working? | Power, connectivity, smartphone, consumables, servicing; behaviour when offline |
| 8 | **Data, privacy and regulation (gate).** Is it legal and safe to deploy? | Medical device regulatory status, data storage location, DPDP compliance, security testing |
| 9 | **Cost and sustainability.** What does it cost, and who pays after the pilot? | Unit and recurring costs, cost per case detected, a route into the state budget |
| 10 | **Integration and monitoring.** Will it fit our systems and can we tell if it degrades? | Data export in open standards, links to existing registers, a plan for monitoring performance after deployment |

Two things are deliberately missing. **Technology readiness level** is in the vendor's pitch already; it says nothing about whether the tool works in your setting. And **"AI" itself** earns no points. A simpler, non-AI tool that solves the same problem should win.

## What applicants usually got wrong

Across a challenge like Aavishkar, the same gaps come up again and again:
- **Outcome claims without a comparison.** "X% reduction in complications" with no control group is a description, not evidence.
- **Validation in the wrong setting.** Results from tertiary hospitals presented as evidence for primary care.
- **No answer to "and then what?"** Screening tools without a referral pathway create anxiety, not health.
- **Costs that stop at the device.** Annual software fees and maintenance often cost more over five years than the hardware.

## Applying it: an AI-assisted portable fetal heart monitor

Fetal distress during pregnancy and labour is a leading cause of preventable stillbirths and newborn deaths. Cardiotocography (CTG) can detect it, but CTG machines are bulky and expensive, and reading a trace takes training most primary-level staff do not have. The category of tool I will assess here is a **portable, smartphone-linked CTG device with automated AI interpretation**, one of the winners of the Aavishkar challenge. I use only information from the public compendium and keep it brand-agnostic.

| # | Question | Assessment | Score |
|---|---|---|---|
| 1 | Problem fit | Strong. Fetal monitoring is a real gap below district level, and the tool targets it directly. | 3 |
| 2 | Technical performance | The compendium reports use in over 160,000 pregnancies but gives no accuracy figures against expert CTG reading. I would ask for them. | 1 |
| 3 | Local validation | Used widely in India, including by over 700 gynaecologists. Use is not validation; I would need agreement with expert readers at primary and community health centres. | 1 |
| 4 | Outcome evidence | Reports a 52% reduction in fetal complications. No comparison group is described, so this cannot yet be attributed to the device. | 1 |
| 5 | Workflow | Designed for remote monitoring and teleconsultation, which fits a hub-and-spoke model. The critical question is the response time from an abnormal trace to an obstetric decision. | 2 |
| 6 | Usability | Designed for general physicians and lower-level facilities. Training needs and error rates by user type are not reported. | 2 |
| 7 | Infrastructure | Portable and wireless, no consumables. Depends on a smartphone and connectivity for remote review; offline behaviour should be tested. | 2 |
| 8 | Data and regulation | Not covered in the compendium. Regulatory status as a medical device and data storage must be confirmed. | Ask |
| 9 | Cost | The basic unit is listed at about INR 1.5 lakh plus annual maintenance of 10% of the price. Affordable for a community health centre; cost per case of fetal distress detected is unknown. Included in an NHM state plan, which suggests a funding route exists. | 2 |
| 10 | Integration and monitoring | Not described. Traces and results should flow into the woman's record and the state's maternal health systems. | Ask |

**Verdict:** a promising tool for a real gap, with strong adoption and a credible design for primary-level use. It is **ready for a well-designed evaluation pilot, not for statewide procurement.** Before scale, I would ask for three things: accuracy against expert CTG reading at the intended facility level, a controlled comparison of outcomes, and confirmation of regulatory status and data handling.

That verdict is typical. Most good AI health tools today are in the same place: real promise, real use, thin evidence of the kind a health system needs. That is not a reason to reject them. It is a reason for governments to fund the evaluations, so that the next decision rests on evidence rather than on a pitch. India's new BODH benchmarking platform under SAHI is a step in exactly that direction.

## A one-page version for procurement teams

1. Do not start with the technology. Start with the problem and what happens today.
2. Ask for performance on people like yours, by subgroup, with confidence intervals.
3. Ask who acts on the result, how fast, and what happens when the tool is wrong.
4. Count five years of costs, not the device price.
5. Pilot with a comparison group and a plan to stop if it does not work.
6. Do not buy anything you cannot monitor after deployment.

*Views are my own. Information on the tool comes from the public Saksham MNCH Aavishkar compendium; figures are as reported by the innovator.*

## Sources

- [Saksham MNCH Aavishkar Challenge: A compendium of transformative solutions](https://media.path.org/documents/Saksham_Avishkar_Compendium_-_16April.pdf) (PATH / USAID)
- [WHO (2021), Generating evidence for artificial intelligence-based medical devices](https://www.who.int/publications/i/item/9789240038462)
- [NICE, Evidence standards framework for digital health technologies](https://www.nice.org.uk/corporate/ecd7)
