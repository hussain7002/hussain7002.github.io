---
title: "Designing monitoring products for the whole health system"
summary: "A product that helps a health system monitor itself is a design discipline of its own. It starts with many users and their decisions, respects the way work is already done, and is never finished."
topic: "Health data"
minutes: 11
featured: true
draft: false
keyPoints:
  - "Monitoring products sit between data entered by many people and decisions taken by a few. Designing them well is a discipline in itself, not a matter of adding charts."
  - "WHO's digital health classification describes four groups of primary users, and most of them already have some app. Good design starts from each user's decision, device and day."
  - "Paper, review meetings and printed reports are part of how the system works. Products should fit that process, and should expect to change every few months."
image: "/img/writing/designing-for-the-whole-health-system.webp"
imageAlt: "List of health-system users and what each needs from a data product"
caption: "Many users of the same data. Most of them need a list to act on, not a chart."
credit: "Diagram: Hussain MS"
---

Designing a product is a discipline in itself. Designing a product that helps a health system **monitor itself** is a particular kind of that discipline, and in my experience it is often underestimated.

A monitoring product sits between two groups of people. On one side are the many people who generate the data: frontline workers recording visits, facility staff entering stock, data entry operators compiling monthly reports. On the other are the people who use it to decide something: where to send supervisors, which facility needs supplies, which district to discuss at the next review. The product has to be trusted by both. It has to be timely enough to act on and stable enough to compare over time. And because what gets measured tends to get attention, it quietly shapes behaviour across the system.

Unlike most consumer apps, its users rarely choose it. They are asked to use it as part of their job. That makes design more important, not less.

I have spent the last few years designing digital products for public health, from facility assessment apps and state dashboards to decision-support prototypes. This piece sets out how I now think about that work: who the users are, a few principles that have held up, and two lessons that took me longer to learn.

## A crowded landscape

WHO's *Classification of digital interventions, services and applications in health* organises digital health around who the primary user is. It describes four groups: **persons** (members of the public, including patients and caregivers), **healthcare providers**, **health management and support personnel** (the people who administer and oversee the health system, from supply chains to finance and human resources), and **data services**, the cross-cutting functions that collect, manage and use data.

It is a useful lens because it reminds you how crowded the landscape already is. In most health systems today, almost every one of these users has an app or a portal of some kind. A frontline worker may record visits on one application, check a beneficiary list on another and send reports through a third. A district officer may log into several portals in a morning. A new product does not arrive in empty space. It arrives on a phone that already has five health apps on it, and into a working day that is already full.

So design starts from the people, not from the data. For each user, I try to write one sentence: *When [moment], [user] needs to decide [decision], and today they rely on [current source].* If I cannot write that sentence, I do not yet know enough to design.

Here is a simplified map for a programme like maternal health or urban primary care, grouped by WHO's user types. Each row is effectively a different product, even when they share the same data.

| WHO user group | User | Typical decision | Time and setting | What they need |
|---|---|---|---|---|
| Health management and support personnel | National and state leadership | Where to put money and attention next quarter | Review meetings, minutes per state or district | A few trends, outliers and comparisons; trust in the numbers |
| | District programme managers | Which facilities and blocks need a visit, which supplies to move | Daily, often on a phone between field visits | Exceptions: what is off track today, with names and numbers to call |
| | Pharmacists and supply-chain staff | What to order, what to redistribute, what is expiring | Weekly ordering cycle | Stock levels, consumption trends, stock-out warnings |
| Healthcare providers | Medical officers | Who among today's patients needs what care | Between patients, in seconds | The patient's history and risk at a glance |
| | ANMs (auxiliary nurse midwives) | Which women and children to see this week | Field days, low connectivity | A due list: names, what is due, what is overdue |
| | ASHAs (community health workers) | Which households to visit and what to tell them | Village visits, local language | Simple lists, pictures and voice, reminders, credit for their work |
| Data services | Data entry operators and data managers | Getting this month's reporting done correctly | Month-end, desktop | Fewer fields, validation at entry, no double entry |

Look at the last column. Few of these people need a chart. Most need a **list**: of people to see, facilities to call, stock to move. WHO's classification even names this function for providers: identifying persons in need of services. The chart serves the top of the table. The list serves almost everyone else.

## Principles that have held up

There is good writing on dashboard design, and I would rather build on it than repeat it. Stephen Few's work on information dashboards remains a sound guide to visual clarity. More recently, Benjamin Bach and colleagues reviewed 144 dashboards and described recurring **design patterns**, grouped by what a dashboard contains and how it is composed: its layout, use of screen space, structure across pages, interactions and colour. One of their most useful observations is that dashboards come in different **genres**, from analytical to narrative to embedded, and that design is largely about trade-offs, such as how much information to fit into limited space. A state review dashboard and a frontline due list are different genres. Treating them as one is where many public health products go wrong.

With that in mind, these are the principles I return to:

1. **Every screen answers one question.** If a screen tries to serve the minister and the ANM, it serves neither. Same data, different products.
2. **Show exceptions, not everything.** A district manager does not need 200 green indicators. They need the five red ones, with the facility name and the phone number.
3. **Design for the real device and connection.** A frontline worker's phone and network are not a state office laptop. If the product does not work offline, on a small screen and in the local language, it does not work.
4. **Give something back to the people who enter the data.** Frontline workers enter most of the data and rarely see anything useful come back. When their own entries become next week's due list, data quality tends to improve, because the data now matters to them.
5. **Keep the definition one tap away.** Every number should say what it counts, from which source, and as of when. Many disagreements in review meetings turn out to be about definitions, not performance.
6. **Prototype with real users before building.** A clickable prototype shown to a handful of district managers in their own offices reveals more than weeks of requirement meetings. Watch where they hesitate.
7. **Measure use, not launch.** Success is not the launch. It is whether people open the product the week after, and whether a decision changed because of it.

The most important design work often happens **between** users rather than within one screen. A high-risk pregnancy flagged by an ANM needs to appear on the medical officer's list at the next visit, and on the district manager's exception list if a follow-up is missed. A product can serve each user well and still lose the woman at the handoff. So I map the journey first, from first contact to safe delivery and beyond, and let the products follow from it.

## The printed copy

The lesson that changed my thinking most came from a request I did not expect.

We had built a set of charts and dashboards we were genuinely proud of: interactive, filterable, carefully designed. We presented them, they were well received, and then came the request: could we please send a printed copy?

My first reaction was disappointment. It took me a while to understand that the request was not a rejection of the product. It was information about how the work actually gets done. Many review meetings happen around printed tables. Officers annotate them, mark districts for follow-up, sign them and carry them into the field. A printed report needs no login, no connection and no charged battery. It can be passed across a table, and it leaves a record of what was discussed and decided. For an experienced officer running a review, paper is not a step backwards. It is a working tool, chosen for good reasons.

That changed how I design. I stopped trying to replace the existing process and started designing for it. A clean print view became a feature, not an afterthought. Tables were laid out to fit a page and to be read in a meeting. The most important numbers went where a pen would naturally mark them. The digital product and the paper report became two faces of the same thing.

The broader lesson is respect for the whole process. A health system has ways of working that have evolved for reasons, often good ones. A product that fits into them gets used. A product that asks everyone to change how they work, so that it can be used, usually does not.

## A product is never finished

The second lesson is about time. In my experience, a monitoring product in a public programme changes substantially roughly every six months. New indicators arrive with new schemes or guidelines. A review cycle shifts its focus. A feature that seemed essential at launch turns out to be opened by nobody, and something nobody asked for becomes the most-used screen.

So I now treat change as part of the design. That means building features so they can be added and removed without disrupting everything else, keeping indicator definitions versioned so that comparisons over time stay honest, and watching usage so that unused features can be retired rather than left to clutter the screen. Removing a feature is as much a design decision as adding one.

## Designing for the people in the system

A monitoring product succeeds when the people across a health system, from the ASHA planning her week to the officer chairing a review, can see what they need in order to act, in a form that fits how they already work. That is a higher bar than a beautiful dashboard. It is also a more interesting one. The work is never really about the charts. It is about understanding a system of people well enough to give each of them something useful.

*Views are my own.*

## Sources
- [WHO, Classification of digital interventions, services and applications in health, 2nd edition (2023)](https://www.who.int/publications/i/item/9789240081949)
- Bach B., Freeman E., Abdul-Rahman A., Turkay C., Khan S., Fan Y., Chen M. Dashboard Design Patterns. *IEEE Transactions on Visualization and Computer Graphics* (IEEE VIS 2022). [dashboarddesignpatterns.github.io](https://dashboarddesignpatterns.github.io)
- Few S. *Information Dashboard Design: Displaying Data for At-a-Glance Monitoring*. Analytics Press, 2nd edition, 2013.
