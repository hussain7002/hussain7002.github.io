---
title: "Where AI fits in a health system: a map using WHO's classification"
summary: "AI in health is often discussed one product at a time. WHO's classification of digital health interventions offers a way to see the whole picture, from patients and clinicians to managers, insurers and data systems."
topic: "AI"
minutes: 11
featured: false
draft: false
keyPoints:
  - "WHO's Classification of digital interventions, services and applications in health groups digital health by who uses it: persons, healthcare providers, health management and support personnel, and data services."
  - "Mapping AI onto that classification shows how wide its reach already is: clinical care, but also supply chains, financing, surveillance, workforce and research."
  - "Maturity varies enormously, from AI that WHO already recommends for TB screening to tools that are still experimental."
---

Conversations about AI in health tend to happen one product at a time: a chest X-ray reader, a chatbot, a risk score. Each is discussed on its own merits, and it is easy to lose sight of the larger picture. Where, across a whole health system, is AI actually being used? Which parts are mature, and which are still experiments? And are there areas where it could help that nobody is talking about?

WHO has already given us a good framework for answering those questions, even though it was not written specifically about AI. Its *Classification of digital interventions, services and applications in health*, updated in 2023, is a shared language for describing what digital technology does in health. This piece uses it as a map for AI.

## The map

The WHO classification organises digital health interventions by their **primary user**, in four groups:

- **Persons**: members of the public who use health services, including patients and caregivers.
- **Healthcare providers**: the health workers who deliver care.
- **Health management and support personnel**: the people who run the health system, including its supply chains, finances and workforce.
- **Data services**: the cross-cutting functions that collect, manage, analyse and exchange data.

That structure is useful for AI because it forces a wider view. Clinical care is part of public health, but so are the pharmacist forecasting next month's stock, the insurer checking a claim, the surveillance officer watching for an outbreak and the planner deciding where to post nurses.

For the other axis, it helps to group AI by what it does rather than by its technical name:

- **Predict**: models that estimate risk or forecast demand from structured data.
- **See**: computer vision that reads images, scans or video.
- **Language and speech**: models that understand or produce text and voice, including large language models.
- **Plan**: optimisation that decides how to allocate resources, route vehicles or schedule work.

WHO's own guidance on AI points in the same direction. Its 2024 guidance on large multi-modal models identified five broad areas of use: diagnosis and clinical care, patient-guided use, clerical and administrative tasks, medical and nursing education, and scientific research and drug development.

## AI across the four user groups

| WHO user group | Predict | See | Language and speech | Plan |
|---|---|---|---|---|
| **Persons** | Personal risk alerts from wearables and home monitors *(emerging)* | Smartphone apps that check skin conditions or wounds *(emerging)* | Health information chatbots and voice assistants in local languages *(emerging)* | Personalised reminders timed to when people are most likely to act *(early)* |
| **Healthcare providers** | Risk scores for conditions such as sepsis or high-risk pregnancy *(established in some settings, uneven evidence)* | Computer-aided detection of TB on chest X-rays; diabetic retinopathy screening *(established)* | Clinical documentation and ambient note-taking; decision support assistants *(emerging)* | Prioritising which patients a health worker should see first *(early)* |
| **Health management and support personnel** | Forecasting demand for medicines and commodities *(emerging)* | Reading scanned forms and registers into digital records *(emerging)* | Summarising reports, answering programme managers' questions over documents *(early)* | Optimising delivery routes, ambulance placement and staff deployment *(emerging)* |
| **Data services** | Detecting outbreaks and anomalies in surveillance data; flagging unusual claims *(emerging)* | Satellite imagery for population and settlement mapping *(emerging)* | Scanning news and open sources for public health signals *(established in specialist use)* | Matching records across systems; data quality checks *(emerging)* |

*Maturity labels are my own judgement of the general picture, not a formal assessment.*

## A closer look

**Persons.** The most visible change is in how people find health information. In 2024, WHO itself launched S.A.R.A.H., a prototype digital health promoter powered by generative AI. Chatbots and voice assistants can answer questions at any hour and in many languages. The risk is equally visible: a fluent answer is not necessarily a correct one, and people may trust it more than they should.

**Healthcare providers.** This is where AI is most mature. In 2021, WHO recommended for the first time that computer-aided detection software may be used in place of human readers to interpret digital chest X-rays when screening people aged 15 and over for TB, in populations where screening is recommended. In 2018, the US Food and Drug Administration authorised an AI-based device to detect diabetic retinopathy without a specialist interpreting the image. Newer tools listen to consultations and draft clinical notes, promising to give clinicians time back. Risk prediction is widespread but uneven: a model's performance in one population does not guarantee it in another.

**Health management and support personnel.** This group gets less attention, but it may be where AI saves the most money. Forecasting demand for medicines can reduce both stock-outs and waste. Optimisation can place ambulances where they reach the most people in time. In health financing, models can flag claims that look unusual for human review. None of this is glamorous, and much of it depends on data quality that health systems are still building.

**Data services.** AI is increasingly part of how health systems watch for threats. WHO's Epidemic Intelligence from Open Sources (EIOS) initiative brings together signals from news and other open sources to help detect public health events early. Satellite imagery and machine learning are being used to map where people live, which matters for planning services and campaigns. And at the most basic level, AI can help match records that refer to the same person or facility across different systems, one of the oldest problems in health data.

**Beyond the four groups.** Some of the most important uses sit at the edge of the classification. In research, AlphaFold's prediction of protein structures earned its creators a share of the 2024 Nobel Prize in Chemistry and is changing how new medicines are discovered. In medical and nursing education, AI can simulate patients for trainees to practise on.

## Where my own work fits

A few pieces of my own work sit on this map. The OxyHelp chatbot, the multilingual WhatsApp assistant we built for oxygen technicians in 2022, was a language tool for healthcare providers, though it used no generative AI. The maternal-risk model I tested on a public dataset sits in the provider row, under prediction, and showed how much an evaluation can change a headline number. And an AI-assisted dashboard prototype I worked on sits in the management row: language models answering programme managers' questions about their own data. Seeing them side by side reminds me how different AI in health can be from one cell of the map to the next.

## Reading the map

Three things stand out when AI is laid out this way.

First, **AI's reach is far wider than clinical care.** Supply chains, financing, surveillance and planning are all part of the map, and in many health systems they are where the practical gains may come soonest.

Second, **maturity varies enormously.** Some uses have WHO recommendations and regulatory authorisations behind them. Others are prototypes. Talking about "AI in health" as if it were one thing hides that difference.

Third, **the map shows the gaps.** Many cells, especially in the management and data services rows, have relatively few well-evaluated tools. That is where careful, practical work could make a real difference to how health systems function.

WHO's classification was designed to give the digital health community a shared language. Used as a map for AI, it does the same job: it helps us see the whole system, not just the product in front of us.

*Views are my own.*

## Sources
- [WHO, Classification of digital interventions, services and applications in health, 2nd edition (2023)](https://www.who.int/publications/i/item/9789240081949)
- [WHO, Ethics and governance of artificial intelligence for health: guidance on large multi-modal models (2024)](https://www.who.int/news/item/18-01-2024-who-releases-ai-ethics-and-governance-guidance-for-large-multi-modal-models)
- [WHO, Updated guidance on the systematic screening for tuberculosis (2021)](https://www.who.int/news/item/22-03-2021-who-announces-updated-guidance-on-the-systematic-screening-for-tuberculosis)
- US Food and Drug Administration, FDA permits marketing of artificial intelligence-based device to detect certain diabetes-related eye problems (April 2018)
- WHO, S.A.R.A.H., Smart AI Resource Assistant for Health (2024)
- WHO, Epidemic Intelligence from Open Sources (EIOS)
- Nobel Prize in Chemistry 2024 (protein structure prediction)
