---
title: "The OxyHelp chatbot: small AI before it had a name"
summary: "In 2022, years before WhatsApp-based public services became common, we built a multilingual AI chatbot on WhatsApp for the technicians keeping hospital oxygen running. No large language model, 12 languages, 500+ users."
topic: "AI"
minutes: 8
featured: false
draft: false
keyPoints:
  - "After COVID-19's second wave, the technicians running new oxygen equipment needed answers in their own language, on the phones they already had."
  - "In 2022 we built an intent-based AI chatbot on WhatsApp, in English and 11 Indian languages. It came years before WhatsApp became a common channel for public services."
  - "Every answer was written by experts; the bot could not make anything up. The World Bank now calls this kind of practical, low-cost tool 'small AI'."
image: "/img/writing/oxyhelp-poster.webp"
imageAlt: "Poster for the OxyHelp chatbot by PATH and REAN Foundation, listing features (WhatsApp, voice questions, answers with images, troubleshooting) and 12 languages, with a QR code."
caption: "The poster we used to introduce the OxyHelp chatbot to technicians, listing its features and the 12 languages it supported. The QR code is no longer active."
credit: "Poster: PATH and REAN Foundation, supported by Google.org"
---

In August 2026 the World Bank published its *World Development Report 2026: The Promise of Artificial Intelligence*. One of its central arguments is that developing countries do not need to build frontier models or giant data centres to benefit from AI. It offers a framework of **adopt, adapt and advance**, and argues that low-cost tools, which it calls **small AI**, can put scarce expertise within reach of millions of people through text messages, voice calls and basic phones.

Reading that, I thought of a WhatsApp chatbot we built in 2022 for the people keeping hospital oxygen running. We did not call it small AI. But it was exactly that, and building it taught me much of what I believe about AI in public health.

## The problem: new oxygen, few experts

COVID-19's second wave in 2021 exposed how fragile hospital oxygen was in India. In response, an enormous amount of new oxygen infrastructure was installed very quickly: oxygen plants on hospital premises (PSA plants), liquid oxygen tanks, pipeline systems and large numbers of oxygen concentrators.

Equipment is the easy part. Keeping it running safely is harder. Plants need regular maintenance, pipelines need checks, concentrators fail in predictable ways, and oxygen is a fire risk. The people responsible were biomedical engineers, technicians and plant operators, often one or two for many facilities, many of them new to oxygen systems. When something went wrong at night in a district hospital, there was often nobody to ask.

At PATH, I was a technical adviser on medical oxygen to the governments of Telangana, Andhra Pradesh and Tamil Nadu, working across about a hundred district hospitals. The knowledge existed, in technical guidance, manuals and training material published by WHO, USAID and others. But it existed mostly in English and mostly in documents. The technicians needed it in their pocket, in their own language, at 2 a.m.

## Why information, and why in local languages

In development work, information, education and communication (IEC) is not an add-on. It is often the intervention itself. Equipment saves lives only if the people using it know how to run it, and that knowledge has to reach them in a form they can use.

Language was the barrier we kept running into. Many technicians and plant operators were more comfortable in Telugu, Tamil, Odia or Assamese than in English, and the guidance written for them was largely in English. PATH's own documentation of its oxygen training captured the same need in operators' words: one plant operator in Odisha asked for trainers who would speak in the local language and show more videos. We wanted to give the information for free, in the languages people actually used, on a channel they already had.

## Why WhatsApp, in 2022

The channel was the easy decision. Every technician already used WhatsApp. It needed no new app, no installation and no training, and it worked on a weak connection.

It is worth remembering how early that was. In 2022, WhatsApp was not yet widely used as a channel for public services in India. Chatbots on WhatsApp for business were still relatively new, and it was only in later years that WhatsApp became a common way for governments to deliver information and services. Choosing it then felt slightly unusual. Today it seems obvious.

## What we built

We built the **OxyHelp chatbot**, a multilingual AI chatbot on WhatsApp, with REAN Foundation and with support from Google.org. It answered questions about oxygen equipment and infrastructure, from PSA plants and liquid oxygen tanks to concentrators, cylinders and humidifiers. It supported **English and 11 Indian languages**: Hindi, Marathi, Telugu, Kannada, Tamil, Malayalam, Gujarati, Bengali, Assamese, Punjabi and Odia. Users could type or ask questions by voice, get answers with images, browse topics through simple menus and ask for help troubleshooting.

It was built on Google's Dialogflow, an intent-based conversational platform. There was no large language model and no generated text. The approach was simple:

1. **We wrote the answers ourselves**, from the technical documents and guidance we already trusted: how to check a PSA plant's oxygen purity, what a particular alarm means, how to maintain a concentrator, what to do in an emergency.
2. **We defined the questions people would ask**, with many ways of asking each, in each language.
3. **A machine learning model matched** a technician's question to the closest answer we had written. If it could not match confidently, it said so.

It reached **more than 500 engineers, technicians and operators**.

## Why "small" was the point

At the time, we might have described these choices as limitations. Looking back, each one was a strength:

- **Every answer was written and checked by experts.** The bot could not make up an answer, because it could not generate anything. In a domain where a wrong answer can start a fire, that matters more than fluency.
- **It ran on what people already had.** WhatsApp, on the phone in their pocket, on a weak connection.
- **It was cheap.** No GPUs and no per-query model costs that grow with every user.
- **It worked in local languages,** because we wrote the content in them, rather than relying on a model's uneven ability in languages with less training data.
- **It knew what it did not know.** When the match was weak, it said so.

This is very close to what the World Bank now describes: take an existing tool, adapt it to a specific local need, and get it working for real users.

## What it could not do

Small AI has real limits, and we hit them:

- **It only knew what we wrote.** Every new type of question meant writing a new answer, in every language. Coverage grew slowly.
- **Phrasing outside what we anticipated** confused it, especially mixed languages, which is how many people actually write.
- **It could not reason across documents** or help diagnose an unusual combination of faults.
- **Keeping it current took effort.** When guidance changed, the content had to be updated by hand.

## If I built it today

Today I would use a language model, but in a way that keeps what made the chatbot safe: answers drawn only from a curated library of trusted documents, with the source cited; expert-written answers kept word for word for safety-critical questions; a clear rule that some questions, such as a suspected oxygen leak, always go straight to a human and a phone number; and evaluation in local languages with real technicians' questions before launch. That is still small AI: a modest model, a curated knowledge base, an existing channel and a clear sense of what it is for.

## The lesson

The most useful AI in public health may not be the most impressive. It is the tool that a technician in a district hospital can reach on a bad connection, in their own language, and trust. We managed a version of that in 2022, with a chatbot that did not generate a single word. With today's tools, and the same discipline, we can do far more.

*Views are my own.*

## Sources
- [World Bank, World Development Report 2026: The Promise of Artificial Intelligence](https://www.worldbank.org/wdr2026)
- [PATH, Strengthening capacity to effectively manage medical oxygen systems in India](https://media.path.org/documents/Strengthening_capacity_to_effectively_manage_medical_oxygen_systems_in_India.pdf)
- [WHO SEARO, Regional manual with operating guides on respiratory care equipment and devices (2026)](https://www.who.int/publications/i/item/9789292800055)
