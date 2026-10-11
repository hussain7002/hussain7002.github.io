---
title: "OxyChat: small AI before it had a name"
summary: "After COVID-19's second wave, we built a multilingual WhatsApp assistant for the engineers keeping hospital oxygen running. No large language model, no GPU, 500+ users. The World Bank now calls this kind of thing small AI."
topic: "AI"
date: 2026-10-11
minutes: 7
featured: false
draft: false
---

In August 2026 the World Bank published its *World Development Report 2026: The Promise of Artificial Intelligence*. One of its central arguments is that developing countries do not need to build frontier models or giant data centres to benefit from AI. They should **adopt** tools that already exist, **adapt** them to local needs, and only later **advance** to building their own. It calls the cheap, local, practical end of this spectrum **small AI**, and names health as one of the sectors where it can make an immediate difference.

Reading that, I thought of a WhatsApp chatbot we built a few years ago for engineers working on hospital oxygen. We did not call it small AI. We did not call it much at all. But it was exactly that, and building it taught me most of what I believe about AI in public health.

## The problem: new oxygen, few experts

COVID-19's second wave in 2021 exposed how fragile hospital oxygen was in India. In response, states received a great deal of new oxygen infrastructure very quickly: oxygen plants on hospital premises (PSA plants), liquid oxygen tanks, pipeline systems, and thousands of oxygen concentrators.

Equipment is the easy part. Keeping it running safely is harder. Oxygen plants need regular maintenance, pipelines need checks, concentrators fail in predictable ways, and oxygen is a fire risk. The people responsible for all of this were biomedical engineers and technicians, often one or two for many facilities, many of them new to oxygen systems. When something went wrong at night in a district hospital, there was often nobody to ask.

At PATH, I was a technical adviser on medical oxygen to the governments of Telangana, Andhra Pradesh and Tamil Nadu, working across about a hundred district hospitals. We were also contributing to WHO South-East Asia Regional Office technical guidance and training modules on oxygen and respiratory care equipment. We had the knowledge in documents. The engineers needed it in their pocket, in their language, at 2 a.m.

## What we built

OxyChat was a multilingual assistant on WhatsApp, the app every engineer already had.

It was built on Google's Dialogflow, a conversational platform. There was no large language model and no generated text. The approach was simple:

1. **We wrote the answers ourselves**, from the technical documents and guidance we already trusted: how to check a PSA plant's oxygen purity, what a particular alarm means, how to maintain a concentrator, what to do in an emergency.
2. **We defined the questions people would ask**, many ways of asking each, in each language.
3. **Natural language processing matched** an engineer's question to the closest answer we had written. If it could not match confidently, it said so and pointed to a human.

We built it with the CSR arm of a technology company.
It reached **more than 500 engineers and technicians**.

## Why "small" was the point

At the time, we might have described these choices as limitations. Looking back, each one was a strength:

- **Every answer was written and checked by experts.** The bot could not make up an answer, because it could not generate anything. In a domain where a wrong answer can start a fire, that matters more than fluency.
- **It ran on what people already had.** No app to install, no new device, no training session. WhatsApp, on the phone in their pocket, on a weak connection.
- **It was cheap.** No GPUs, no per-query model costs that grow with every user.
- **It worked in local languages,** because we wrote the content in them, rather than relying on a model's uneven ability in languages with less training data.
- **It knew what it did not know.** When the match was weak, it said so. Generative models are still learning to do that reliably.

This is very close to what the World Bank now recommends: take an existing tool, adapt it to a specific local need, and get it working for real users, rather than waiting for something bigger.

## What it could not do

Small AI has real limits, and we hit them:

- **It only knew what we wrote.** Every new question type meant writing a new answer. Coverage grew slowly.
- **Phrasing outside what we anticipated** confused it, especially mixed languages, which is how many engineers actually write.
- **It could not reason across documents** or help diagnose an unusual combination of faults.
- **Keeping it current** took effort. When guidance changed, the content had to be updated by hand.

## If I built it today

Today I would use a language model, but in a way that keeps what made OxyChat safe:

1. **Retrieval, not free generation.** The model should answer only from a curated library of trusted documents, and cite which one it used.
2. **The expert-written answers stay** for safety-critical questions: the model should hand those over word for word, not paraphrase them.
3. **A clear boundary.** Some questions, like a suspected oxygen leak, should always escalate to a human and a phone number immediately.
4. **Evaluation in local languages** before launch, with real engineers' questions, not translated test sets.
5. **Monitoring after launch:** which questions fail, which answers are wrong, and what is missing from the library.

That is still small AI. A modest model, a curated knowledge base, an existing channel, and a clear sense of what it is for.

## The lesson

The most useful AI in public health may not be the most impressive. It will be the tool that a technician in a district hospital can reach on a bad connection, in their language, and trust. We managed a version of that with a chatbot that did not generate a single word. With today's tools, and the same discipline, we can do far more.

*Views are my own.*

## Sources

- [World Bank (2026), World Development Report 2026: The Promise of Artificial Intelligence](https://hdl.handle.net/10986/45296)
- [WHO SEARO, Regional manual with operating guides on respiratory care equipment and devices](https://www.who.int/publications/i/item/9789292800055)
- [WHO SEARO, Generic training modules on oxygen/respiratory care equipment](https://www.who.int/publications/i/item/9789292800062)
