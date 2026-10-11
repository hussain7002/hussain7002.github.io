---
title: "Designing for everyone in the health system, not just the dashboard viewer"
summary: "A health system is not one user. It is a minister, a district manager, a doctor, a pharmacist, an ANM and an ASHA, each with a different decision, device and day. Design has to start there."
topic: "Health data"
date: 2026-10-11
minutes: 8
featured: false
draft: false
image: "/img/writing/designing-for-the-whole-health-system.webp"
imageAlt: "List of seven health-system users and what each needs from a data product"
caption: "Seven users of the same data. Most of them need a list to act on, not a chart."
credit: "Diagram: Hussain MS"
---

When a government health programme asks for "a dashboard", it usually means one screen, designed for the people who commissioned it: senior officers who want to see how the programme is doing. That screen is often well made. It has maps, charts and colour-coded indicators. It is reviewed in a meeting, admired, and then opened rarely.

The problem is not the design of the screen. It is the assumption behind it: that the health system has one user. It has dozens. The data on that dashboard was entered by someone, checked by someone, acted on (or not) by someone else, and each of those people has a job that a well-designed product could make easier. Most products ignore all of them except the person at the top.

I have spent the last few years designing digital products for public health, from facility assessment apps and state dashboards to national decision-support prototypes. This is what I have learned about designing for the whole system.

## Start with the decision, not the data

The first question for any screen is not "what data do we have?" It is **"who is going to decide what, and when?"** A dashboard that does not support a specific decision by a specific person is a report, and reports are read once.

So for each user, write one sentence: *When [moment], [user] needs to decide [decision], and today they rely on [current source].* If you cannot write that sentence, you do not yet know enough to design.

## The users of a public health system

Here is a simplified map for a programme like maternal health or urban primary care in India. Each row is a different product, even if they share the same data.

| User | Typical decision | Time and setting | What they need |
|---|---|---|---|
| **National leadership** | Where to put money and attention next quarter | A review meeting, minutes per state | A few trends, outliers, and comparison between states; trust in the numbers |
| **State programme managers** | Which districts to follow up, what to fix in the plan | Weekly review, desk and laptop | District comparison, progress against plan, drill-down to the reason |
| **District programme managers** | Which facilities and blocks need a visit, which supplies to move | Daily, often on a phone between field visits | Exceptions: what is off-track today, with names and numbers to call |
| **Medical officers and doctors** | Who among today's patients needs what care | Between patients, seconds, not minutes | The patient's history and risk at a glance, not indicators |
| **Pharmacists and supply-chain staff** | What to order, what to redistribute, what is expiring | Weekly ordering cycle | Stock levels, consumption trends, stock-out warnings |
| **ANMs (auxiliary nurse midwives)** | Which women and children to see this week | Field days, low connectivity, basic phones | A due list: names, what is due, what is overdue |
| **ASHAs (community health workers)** | Which households to visit and what to tell them | Village visits; varied literacy; local language | Very simple lists, pictures and voice, reminders, and credit for their work |
| **Data entry operators** | Getting this month's reporting done correctly | Month-end crunch, desktop | Fewer fields, validation that catches errors at entry, no double entry |

Look at the last column. Almost none of these people need a chart. Most of them need a **list**: of people to see, facilities to call, stock to move. The chart is for the top of the table. The list is for everyone else.

## Seven principles

**1. Every screen answers one question.** If a screen tries to serve the minister and the ANM, it serves neither. Same data, different products.

**2. Show exceptions, not everything.** A district manager does not need 200 green indicators. They need the five red ones, with the facility name and the phone number.

**3. Design for the real device and connection.** An ASHA's phone and network are not a state office laptop. If the product does not work offline, on a small screen, in her language, it does not work.

**4. Give back to the people who enter the data.** Frontline workers enter most of the data in the system and rarely see anything useful come back. If the product turns what they entered into their own due list for next week, data quality improves, because the data now matters to them.

**5. Make the definition one tap away.** Every number should say what it counts, from which source, as of when. Most arguments in review meetings are about definitions, not performance.

**6. Prototype with real users before building.** A clickable prototype shown to five district managers in their office will reveal more than a month of requirement meetings. Watch where they hesitate.

**7. Measure use, not launch.** A product's success is not its launch. It is whether people open it the week after, and whether a decision changed because of it. Build usage tracking in from day one.

## The handoffs matter most

The most important design work is often between users, not within one screen. A high-risk pregnancy flagged by an ANM must show up on the medical officer's list at the next visit, and on the district manager's exception list if she misses it. A stock-out flagged by a pharmacist should reach the person who can move stock from the next facility. A product that serves each user perfectly but drops the handoff will still lose the patient.

So I map the **journey**, not just the users: the woman's path from first contact to safe delivery and beyond, and every person and system that touches her along the way. The products follow from the journey.

## What this means for those who commission products

If you are a government officer or a funder commissioning a dashboard, three questions will improve it more than any design brief:

1. Who, below the person in this room, will use this, and what will they do differently on Monday?
2. Have we shown it to them yet?
3. What does the person who enters the data get back?

A health system works when the people in it can see what they need to act on. Our products should be designed for all of them.

*Views are my own.*
