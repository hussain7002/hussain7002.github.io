---
title: "What India's data protection law means for health AI"
summary: "The DPDP Act was not written for AI, but it will shape every health AI project in India. What it covers, what it leaves open, and what teams should do before May 2027."
topic: "AI"
date: 2026-10-11
minutes: 7
featured: false
draft: false
---

I co-authored a paper by Deloitte India and the Confederation of Indian Industry on data governance under the Digital Personal Data Protection (DPDP) Act, 2023 and the DPDP Rules, 2025. That paper was about organisations in general. This piece is narrower and more personal: what the law means for people building, buying or deploying AI in health in India.

The short answer: the DPDP Act is not an AI law, but almost every health AI project touches personal data at some point in its life, so the Act sets the boundaries whether teams think about it or not.

## The timeline

The Rules were notified in November 2025 with a staggered start. The Data Protection Board and its procedures came first. Most obligations on organisations, including notice, consent, security safeguards and breach reporting, apply from around May 2027. That gap is not a grace period. It is the time to design systems that will be compliant on day one, and AI systems take longer to redesign than most.

## Five things the Act does that matter for health AI

### 1. Health data gets no special category
Europe's GDPR treats health data as a special category with stricter rules. The DPDP Act does not: health data is personal data like any other. That makes the general rules simpler, but it means the extra protection health data needs has to come from elsewhere: the ABDM Health Data Management Policy, ICMR's ethical guidelines for AI in biomedical research and healthcare, clinical establishment rules, and now SAHI.

### 2. Purpose matters, and training is a purpose
Consent under the Act has to be specific to a purpose. Data collected to treat a patient was collected for treatment. Using it to train or fine-tune a model is a new purpose. A team that wants to do that needs one of three routes: fresh consent, a legitimate use recognised by the Act, or the research exemption.

### 3. The research exemption helps, with conditions
The Act exempts processing for research, archiving or statistical purposes, as long as the data is not used to take decisions about a specific person and the processing follows standards set in the Rules. This is the natural route for model development and validation, but it stops at deployment: once a model is used to make decisions about individual patients, the exemption no longer applies.

### 4. Government programmes have their own basis
The Act allows the State to process personal data without consent to provide services and benefits, and for medical emergencies and epidemics. Much of public health in India will rely on these legitimate uses. That is a reason for more care, not less: when consent is not the safeguard, transparency, purpose limits and security have to do the work.

### 5. Large health data handlers can be designated "significant"
The government can designate some organisations as Significant Data Fiduciaries, based on factors like the volume and sensitivity of data they handle. Large hospital networks, health platforms and AI vendors could qualify. These organisations face data protection impact assessments, independent audits, and an obligation to check that the algorithmic software they use does not put people's rights at risk. That last obligation is the closest the DPDP framework comes to AI-specific regulation.

## What the Act leaves open

- **Anonymised data.** The Act covers personal data. Properly anonymised data falls outside it, which is why many AI projects plan to "just anonymise". Health records are notoriously easy to re-identify when combined with other data. The law does not yet say what standard of anonymisation is enough.
- **Erasure and trained models.** People can ask for their data to be erased. If that data was used to train a model, does the model need to "forget" it? The Act does not say, and the technology to do so reliably is immature.
- **Publicly available data.** The Act does not apply to personal data that a person has made public themselves. That will be read by some as permission to scrape. Legal permission is not the same as ethical permission, especially for health.
- **Model quality.** The Act protects data, not patients from bad models. Bias, accuracy and safety sit outside it. That is the gap SAHI and BODH are meant to fill.

## What I would do now

**If you are building health AI:**
1. Map every dataset to its original purpose and the legal route that lets you use it for training.
2. Keep training and validation inside the research exemption where you can, and document how you meet its conditions.
3. Treat anonymisation as a risk assessment, not a checkbox.
4. Write the patient-facing notice in plain language and in the languages your users speak.
5. Assume you will be asked how your model behaves on Indian subgroups, and keep the evidence.

**If you are a state health department buying AI:**
1. Ask vendors which legal basis they rely on for training data, and get it in writing.
2. Put breach reporting, data location and deletion terms in the contract.
3. Require evidence of validation, ideally through BODH, before deployment, and require post-deployment monitoring.
4. Name an owner for data protection in the health department. Most do not have one yet.

## The bigger picture

India now has three pieces that fit together: ABDM for the rails, the DPDP Act for personal data, and SAHI and BODH for AI. None of them is enough alone. The DPDP Act tells you what you may do with a person's data. It does not tell you whether the model you built with it is safe, fair or useful. Health AI in India will be trusted only when all three are working together, and when states, not only the centre, have the capacity to apply them.

*Views are my own and do not represent those of Deloitte or any other organisation.*

## Sources

- [Deloitte India and CII, Strengthening India's healthcare ecosystem: Unlocking data governance in alignment with the DPDP Act, 2023 and the DPDP Rules, 2025](https://www.deloitte.com/in/en/Industries/life-sciences-health-care/strengthening-indias-healthcare-ecosystem-unlocking-data-governance-in-alignment-with-the-digital-personal-data-protection-dpdp-act-2023-and-the-dpdp-rules-2025.html)
- [DPDP Rules, 2025: phased commencement](https://www.azbpartners.com/bank/indias-digital-personal-data-protection-act-phased-rollout-and-key-compliance-milestones/)
- [DPDP Rules, 2025: Rule 13, additional obligations of Significant Data Fiduciaries](https://www.dpdpa.com/dpdparules/rule13.html)
- [Launch of SAHI and BODH, February 2026](https://www.insightsonindia.com/2026/02/18/government-launch-sahi-and-bodh-initiatives/)
