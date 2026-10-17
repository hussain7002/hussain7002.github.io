---
title: "When innovation outruns the law: India's data protection rules and health"
summary: "Innovation sprints and law walks. A personal view of what India's Digital Personal Data Protection Act and Rules mean for health, how health-specific they have become, and how ready we are for AI."
topic: "DPI"
minutes: 11
featured: false
draft: false
keyPoints:
  - "Law is an institutional process that takes years, while innovation moves at the speed of a sprinter. At the frontier, the two inevitably meet."
  - "The DPDP Act treats health data like other personal data, but health shows up throughout the framework: in emergencies and epidemics, research, children's data and large data handlers."
  - "For health AI, the law answers some questions and leaves many open. How ready we are depends less on the text of the law and more on how institutions use it."
image: "/img/writing/dpdp-and-health-ai.webp"
imageAlt: "Timeline from November 2025 to May 2027 showing when DPDP Rules provisions apply"
caption: "The DPDP Rules provide an 18-month phased compliance timeline, running from their notification in November 2025."
credit: "Diagram: Hussain MS · source: DPDP Rules, 2025"
---

Watch Usain Bolt run the 100 metres and you see something that looks effortless: a burst of speed that is over before the crowd has settled. Innovation in digital health often feels like that. A team builds a new app, a model or a data platform in months. A good idea can reach thousands of users before most institutions have had a meeting about it.

Law does not run like that. It is an institutional process, and it is meant to be slow. It is drafted, consulted on, debated, passed, notified, interpreted and tested in practice, often over years. That is not a flaw. Law has to be stable, fair and legitimate, and those things take time.

So at the frontier, where innovation is fastest, the two inevitably meet. You can be as creative and inventive as you like, but sooner or later the law steps in and asks questions that the innovation did not. In health, where the data is about people's bodies and lives, that moment arrives sooner than in most fields.

India's data protection framework is a good example of that meeting. This piece is my own view of what it means for health, and how ready we are for what comes next.

## Why I care about this

Earlier this year I co-authored a paper by Deloitte India with the Confederation of Indian Industry (CII) on data governance in healthcare under the Digital Personal Data Protection (DPDP) Act, 2023 and the DPDP Rules, 2025, and presented it at a CII conference. What struck me most in that work was how many people simply wanted to know what the law meant for them. Hospitals, insurers, health-tech companies and programme teams all had the same question: what changes for us? Much of our effort went into answering it in practical terms. The views below are my own, not those of Deloitte or CII.

## The law in brief

The DPDP Act was enacted by Parliament on 11 August 2023. The Rules that put it into operation were notified in November 2025. According to the Government's announcement, they provide "an 18-month phased compliance timeline", so organisations have time to adjust before most obligations take effect.

The framework is built around a simple idea. Organisations that decide how personal data is used, which the Act calls **Data Fiduciaries**, have obligations. Individuals, called **Data Principals**, have rights. The Government describes the Act as guided by seven principles: consent and transparency, purpose limitation, data minimisation, accuracy, storage limitation, security safeguards and accountability. Individuals can access, correct, update or erase their data and nominate someone to act for them, and organisations must respond to such requests within a maximum of 90 days. Organisations must issue standalone, clear consent notices that explain the specific purpose of collecting data, and tell people promptly, in plain language, when a breach occurs.

## How health-specific it has become

At first glance, the Act is not a health law. Unlike some other data protection regimes, it does not create a special category for health data. A blood test result and a shopping history are both simply personal data.

But read closely, health runs all the way through it.

The Act lists certain **legitimate uses** for which data can be processed without consent. Two of them are about health. One is "responding to a medical emergency involving a threat to the life or immediate threat to the health of the Data Principal or any other individual." The other is "taking measures to provide medical treatment or health services to any individual during an epidemic, outbreak of disease, or any other threat to public health." Much of what public health does in a crisis will rest on these clauses.

The Act also provides a route for **research**. It does not apply to processing "necessary for research, archiving or statistical purposes if the personal data is not to be used to take any decision specific to a Data Principal", provided the processing follows prescribed standards.

The Rules go further. Organisations must obtain verifiable consent before processing children's data, but, in the Government's words, "with limited exemptions for essential purposes such as healthcare, education and real-time safety." And organisations designated as **Significant Data Fiduciaries**, a category the Government can notify based on factors that include "the volume and sensitivity of personal data processed", face what the Government describes as "enhanced obligations including independent audits, impact assessments and stronger due diligence for deployed technologies." Large hospital networks, insurers and health platforms are natural candidates.

So the law is general in form, but it has been shaped around health at several of its most important joints.

## What it changes in practice

The part of our paper I found most interesting was not the legal analysis but the changes in behaviour the law is likely to drive. A few ideas stayed with me.

**From "collect everything" to "collect what you need".** Health organisations have long collected data just in case it might be useful. Purpose limitation and data minimisation push the other way. In one of the scenarios we described, a hospital stops asking for information it does not need at outpatient registration. It is a small change, and it reflects a large shift.

**From owner to custodian.** Many organisations have treated the patient data they hold as theirs. The framework treats it as held on behalf of the patient, who can see it, correct it and ask for it to be erased. That changes how front-desk staff, IT teams and managers think about their role.

**Emergencies without losing accountability.** Health has a special problem: sometimes a patient cannot consent, because they are unconscious or in danger. We described a "break-glass" approach, in which clinicians can access critical information in an emergency, the access is logged, and the patient is told afterwards what was accessed and why. It respects both the urgency of care and the person's rights.

**Long data chains.** Some parts of health handle data through many hands. A health insurer, for example, may work with brokers, agents, third-party administrators and marketing partners, each of them handling personal data. Under the law, each link in that chain matters.

None of this happens on the day a law is notified. It happens over years, as organisations change their systems and, more importantly, their habits. That is the slow part of the race.

## How ready are we for AI?

This is where the gap between the sprinter and the law is widest. The DPDP Act is not an AI law, but almost every health AI project touches personal data at some point. So it is worth asking how well the framework fits, and how ready we really are.

Some questions have reasonably clear answers. Data collected to treat a patient was collected for treatment, and using it to train a model looks like a different purpose. The research route can support model development, but it stops where a model starts making decisions about specific individuals.

Many questions remain open. What standard of anonymisation is enough for health data, which is notoriously easy to re-identify? If someone asks for their data to be erased, what happens to a model already trained on it? How should "stronger due diligence for deployed technologies" be applied to an AI system that changes over time? And the law protects data, not patients from poor models: questions of bias, accuracy and safety sit largely outside it.

Readiness, in the end, is less about the text of the law than about institutions. Do state health departments have someone responsible for data protection? Do hospitals know which legal basis their AI vendors rely on? Can a district team explain to a citizen how their data is being used? In many places, honestly, not yet. The law has set out the track. Most of the running is still ahead.

## The track and the runner

It is tempting to see law as the thing that slows innovation down. I see it differently. Bolt's speed was only possible because there was a track: measured, marked and agreed by everyone. Without one, there is no race, just people running in different directions.

The DPDP framework is still a young track, and parts of it will be redrawn as courts, regulators and practice catch up with new technology. But it gives health innovation something it needs: a shared set of rules within which trust can be built. The innovators will always be faster. The job of the law is to make sure that when they arrive, people still trust what they have built.

*Views are my own and do not represent those of Deloitte, CII or any other organisation.*

## Sources
- [The Digital Personal Data Protection Act, 2023 (No. 22 of 2023), Ministry of Electronics and Information Technology](https://www.meity.gov.in/)
- [Press Information Bureau, "Government notifies DPDP Rules to empower citizens and protect privacy", 14 November 2025](https://www.pib.gov.in/PressReleasePage.aspx?PRID=2190014)
- [Deloitte India and CII, Strengthening India's healthcare ecosystem: Unlocking data governance in alignment with the DPDP Act, 2023 and the DPDP Rules, 2025 (September 2026)](https://www.deloitte.com/in/en/Industries/life-sciences-health-care/strengthening-indias-healthcare-ecosystem-unlocking-data-governance-in-alignment-with-the-digital-personal-data-protection-dpdp-act-2023-and-the-dpdp-rules-2025.html)
