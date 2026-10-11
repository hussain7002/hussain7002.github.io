---
title: "What a State AI Readiness Index for health should measure"
summary: "India now has a national strategy for AI in health. Whether it works will be decided in the states. A proposal for how to measure whether a state is ready."
topic: "AI"
date: 2026-10-11
minutes: 8
featured: false
draft: false
---

In February 2026 the Ministry of Health and Family Welfare launched SAHI, the Strategy for Artificial Intelligence in Healthcare for India, together with BODH, a benchmarking platform for health AI built by IIT Kanpur with the National Health Authority. WHO's South-East Asia office called India the first country in the region to adopt a comprehensive national strategy for AI in health.

A national strategy is a compass. It does not move anything on its own. Health in India is a state subject, and almost every AI tool that reaches a patient will do so through a state health department: its facilities, its data, its staff, its procurement rules. So the question that matters next is simple to ask and hard to answer: **which states are ready, ready for what, and what would make them more ready?**

That is what a State AI Readiness Index should answer. Here is how I would build one.

## Start with what the index is for

An index can do two very different jobs. It can **rank** states, which produces headlines and, quickly, gaming. Or it can **diagnose** them, showing each state where it is strong, where it is weak, and what to fix first. A readiness index for health AI should do the second. The output for each state should be a profile, not just a single number.

It also has to separate two questions that are often blurred:

1. **Is the state's foundation ready?** Data, infrastructure, interoperability, people, governance. These are shared across every AI use case.
2. **Is the state ready for this particular tool?** Readiness for AI chest X-ray reading in TB programmes is not the same as readiness for a maternal-risk prediction model. The second needs clean, linked antenatal records; the first needs digital X-ray machines and radiologist review.

So I would build two layers: a **foundation index** scored for every state, and a short **use-case readiness checklist** applied when a specific tool is being considered.

## The six dimensions of the foundation index

### 1. Data foundations
AI is only as good as the data it learns from and runs on.
- **Availability:** how much of the care pathway is digitised at all, and how much of it is linked to ABHA (the health ID), the facility registry and the professional registry.
- **Quality:** completeness, timeliness and internal consistency of reporting. Do facility-level figures add up to district totals? Are there months of suspiciously identical numbers?
- **Representativeness:** whether the data covers the people the tool will serve: rural and tribal blocks, urban slums, the private sector. A model trained on data from district hospitals will not necessarily work in a sub-centre.

### 2. Digital infrastructure and compute
- Connectivity, devices and reliable power at facilities, especially at the primary level where most AI-for-screening tools are meant to run.
- Hosting: a state data centre or cloud arrangement that meets security requirements, and access to compute where needed (for most states this means using national or shared capacity rather than building their own).

### 3. Interoperability
This is the dimension most likely to be overestimated. A state can have twenty portals and still be unable to answer a simple question about one patient.
- Integration with ABDM building blocks: facility and professional registries, the health information exchange.
- A single master list of facilities with stable identifiers, used by every programme.
- Common definitions for core indicators across programmes.
- Use of health data standards such as FHIR for new systems.

### 4. Workforce and skills
- Dedicated data and digital health staff at state and district levels, not borrowed programme officers.
- AI literacy among clinicians and programme managers: enough to ask the right questions of a vendor and to recognise when a tool is wrong.
- Technical support for devices in the field (the biomedical and IT teams who keep things running).

### 5. Governance and institutions
- A state digital health or AI policy, or at least a clear owner for AI in the health department.
- Rules for data sharing and consent that comply with the Digital Personal Data Protection Act.
- Procurement rules that can buy AI responsibly: asking for evidence of validation, for example through BODH, and for local performance data.
- Ethics review capacity, a grievance route for patients, and an obligation to monitor tools after deployment.

### 6. Use-case pipeline and adoption
- Has the state identified its priority health problems where AI could plausibly help?
- Are pilots designed with evaluation built in, or are they demonstrations?
- Is there a budget line for AI or digital health in the state's NHM Programme Implementation Plan?
- Has the state ever taken a digital tool from pilot to statewide scale? Past adoption is the best predictor of future adoption.

## How to score it

**Maturity levels, not yes/no.** Each indicator is scored on a short scale, for example 0 to 4, from "absent" to "institutionalised". The WHO/ITU Global Digital Health Monitor already uses maturity phases for countries; a state index should borrow that logic so the two can talk to each other.

**Evidence, not self-declaration alone.** Each score should cite its evidence: a public dashboard, a government order, a budget line, a site visit. Self-assessment is a good start; verified self-assessment is an index.

**Floors before averages.** A state with excellent infrastructure and no data governance is not "70% ready". It is not ready to deploy, whatever it can pilot. So I would set minimum floors on data governance and data quality before any state is classed as ready to scale, and only then compute averages.

**Show the profile.** Publish a radar chart per state with six dimensions rather than a league table. A state should be able to see that, for example, its gap is workforce and not infrastructure, and plan accordingly.

**Repeat it.** Readiness changes. An annual cycle, aligned with the state's planning calendar, makes the index a planning tool rather than a one-off report.

## The use-case checklist

When a specific tool is on the table, five questions decide most of it:

1. **Problem:** is this one of the state's priority problems, and is AI the best way to address it, or would a simpler process change do the job?
2. **Data:** is the input data the tool needs actually generated, at the right quality, at the point of use?
3. **Evidence:** has the tool been validated on Indian data similar to this state's population, and does it come with performance by subgroup (age, sex, region)?
4. **Workflow:** who acts on the tool's output, when, and what happens if it is wrong?
5. **Sustainability:** who pays after the pilot, who maintains it, and how will its performance be monitored?

## What could go wrong

- **Measuring what is easy rather than what matters.** Counting portals is easy; measuring whether data from those portals can be linked is not. The index has to include the hard indicators.
- **Gaming.** Any published score invites optimisation for the score. Evidence requirements and verification visits are the defence.
- **Readiness theatre.** States may launch AI pilots to look ready. Weighting the pipeline dimension towards evaluated, scaled use rather than announced pilots helps.

## Why this matters beyond India

Most countries in the South-East Asia Region have devolved or decentralised health systems in some form. The question India faces, how a national AI strategy becomes real at the level where care is delivered, is the same question every country with a strategy will face next. A well-built state index, with open methods, would be useful well beyond India's borders.

*Views are my own.*

## Sources

- [Launch of SAHI and BODH, February 2026](https://www.insightsonindia.com/2026/02/18/government-launch-sahi-and-bodh-initiatives/)
- [WHO South-East Asia, Digital health](https://www.who.int/southeastasia/health-topics/digital-health)
- [Global Digital Health Monitor](https://digitalhealthmonitor.org/)
