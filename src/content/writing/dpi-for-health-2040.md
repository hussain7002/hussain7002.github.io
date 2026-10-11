---
title: "A day in 2040, when nobody talks about health DPI"
summary: "An essay about a future in which digital public infrastructure for health works so well that it disappears, and what Estonia's X-Road already teaches us about getting there."
topic: "DPI"
date: 2026-10-11
minutes: 7
featured: false
draft: false
image: "/img/writing/dpi-for-health-2040.webp"
imageAlt: "Men in a wooden boat crossing floodwater in Assam"
caption: "Assam floods, August 2012. In the essay, Rupa leaves by boat before the road closes."
credit: "Photo: EU Civil Protection and Humanitarian Aid, CC BY-SA 2.0, via Wikimedia Commons"
creditUrl: "https://commons.wikimedia.org/wiki/File:EU_Civil_Protection_and_Humanitarian_Aid,_India_-_Assam_floods,_aug_2012.jpg"
---

*This is a piece of imagination, not a forecast. The people are invented. The infrastructure is not far away.*

## 5:40 a.m., a village on the Brahmaputra

Rupa is thirty-two weeks pregnant and the river is rising.

She does not know the words "digital public infrastructure". She knows that last night her phone spoke to her in Assamese, in the voice of the ASHA didi she has known since she was a girl, and said that the road to the hospital might close in four days, and that the waiting home near the community health centre has a bed for her from tomorrow. It said her blood pressure readings from last week were fine, and that the boat would come at eight.

She did not fill in a form. She did not carry a file. The waiting home already knows her due date, her blood group and that her first baby came by caesarean. Nobody typed it in again.

## 7:15 a.m., the ASHA's phone

Anjali, the ASHA, has eleven names on her list this morning, sorted by who is closest to the water. The list was not made by a person in an office. It was put together overnight from things that already existed: the flood forecast from the water resources department, the village map, the pregnancy records at the sub-centre, the bed register at the waiting home.

None of those systems belongs to the health department. They do not need to. Each keeps its own data and answers questions from the others, with permission, over the same common rails.

Anjali gets paid on Friday for each woman she helps move before the flood. That payment, too, comes from a record nobody had to re-enter.

## 10:00 a.m., the district office

The district health officer opens nothing. There is no dashboard to open. Her phone shows her three things that need her today: a stock of a blood pressure medicine running low in one block, a doctor's post vacant for ninety days in another, and a waiting home that will be full by Thursday if the rain continues.

She remembers 2026, when a meeting like this one began with forty slides and an argument about whose numbers were right. Now the numbers are simply the numbers. They come from records, not reports.

## 2:30 p.m., the medical college

A team is checking whether an AI model that reads fetal heart traces still works as well as it did when it was approved. They do not have the patients' records, and do not need them. The model goes to the data, not the data to the model. Results come back by region, age and facility type. In one district, performance has slipped since a new monitor was introduced. The vendor is told on the same day.

Every query they ran is logged. Any woman whose trace was used can see, if she wants to, that it was used for a check like this, and by whom.

## 9:00 p.m., Rupa again

At the waiting home, a nurse checks Rupa's blood pressure and it is higher than last week. The obstetrician at the district hospital sees the reading and the trace, and asks for her to be moved before the road closes. Rupa does not know that seven systems were involved in that decision. She knows that someone was watching.

---

## What made this possible

Nothing in this story requires technology that does not exist today. What it requires is something rarer: **rails that everyone uses, and that nobody notices.**

Estonia built its version of those rails in 2001. It is called **X-Road**, and it is worth understanding because it is so modest. X-Road is not a giant central database. It is a secure way for separate databases, owned by separate agencies, to ask each other questions. The population register keeps people's addresses. The health system keeps medical records. The tax office keeps tax records. None of them hands its data over. Each answers authorised queries, and each query is signed and logged.

Three ideas from X-Road sit underneath my 2040:

1. **Data stays where it is born.** Every agency remains responsible for its own data. There is no single central store to fail or to be stolen. This is federated, not centralised.
2. **Ask once.** Estonia's "once-only" principle means the state should not ask a citizen for information it already has. Rupa never fills in her due date twice.
3. **People can see who looked.** Estonians can check which official accessed their data and why. Trust is not demanded; it is made visible.

X-Road is now run jointly with Finland, and its ideas have travelled further. India's own path, through ABDM, already has many of the right pieces: a health ID, registries of facilities and professionals, and a consent framework for sharing records. What remains is the hard part: making every programme, department and private provider actually use the rails, so that they disappear.

## The measure of success

The best infrastructure is the kind you stop noticing. Nobody thanks the electricity grid when the light comes on, or the payment system when a transfer arrives in a second.

In 2040, if we have done this well, no health worker will talk about DPI. They will talk about patients. The district officer will not ask for a dashboard. The woman on the riverbank will not know any of the words in this essay. She will just know that the system knew her, and that someone came in time.

*Views are my own.*

## Sources

- [X-Road (Nordic Institute for Interoperability Solutions)](https://x-road.global/)
- [e-Estonia, X-Road](https://e-estonia.com/solutions/interoperability-services/x-road/)
