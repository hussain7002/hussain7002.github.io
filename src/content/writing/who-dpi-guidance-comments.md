---
title: "What I told WHO about its blueprint for health DPI"
summary: "WHO's draft reference architecture for digital public infrastructure in health is the most complete blueprint yet. I submitted eight comments in the public consultation. Most were about the same thing: health systems are judged on their worst days."
topic: "DPI"
minutes: 12
featured: true
draft: false
keyPoints:
  - "WHO's draft DPI-H architecture sets out what health needs on top of foundational DPI (identity, payments and data exchange): shared registries, a Lifelong Health Record, terminology services and more."
  - "I submitted eight comments in the 2026 public consultation, each with suggested wording: on emergency and blood services, resilience testing, secondary use of data, patient-generated data, clinical safety, fraud checks, evidence for finance ministries, and consent."
  - "The common thread: the draft is an excellent architecture for a normal day, and health systems are judged on their worst days."
image: "/img/writing/who-dpi-guidance-comments.webp"
imageAlt: "Diagram of the draft DPI-H architecture in three layers, with a list of the eight comments"
caption: "Where my eight comments landed, against a simplified view of the architecture in WHO's consultation draft (Draft V1.0)."
credit: "Diagram: Hussain MS"
---

In July 2026, WHO did something the digital health community had needed for a long time. It put out, for public consultation, a draft answer to a question every country building digital health infrastructure eventually asks: **what exactly should be shared?** Which registries, which records and which services should be national public infrastructure, and which should be left to individual programmes and vendors?

The draft, the **Reference Architecture and Guidance for Digital Public Infrastructure for the Health Sector (DPI-H)**, runs to 254 pages. It is the most complete blueprint I have seen for what health-specific digital public infrastructure should look like. I read it closely and submitted eight comments, each with suggested replacement wording, before the consultation closed on 6 September. This piece explains what the draft sets out to do, who it is written for, what it gets right, and what I suggested. Most of my suggestions turned out to make the same point.

## A great step forward

Digital public infrastructure (DPI) usually means three foundational layers that any sector can build on: digital identity, payments and data exchange. India's Aadhaar and UPI and Estonia's X-Road are among the best-known examples. For a while, the conversation in health was simply about using these foundations well.

The draft's starting point is that **health needs more than the foundations**. As it puts it, a national ID system establishes who a person is, but health also needs to know what that person is eligible for, what treatment they are receiving, what has been dispensed, and whether they have agreed to share specific data with specific people. Foundational identity also misses people the health sector must still serve, such as newborns before civil registration and refugees. A payment rail does not know what a valid prescription looks like.

So the draft defines **DPI-H**: shared, health-specific infrastructure that sits on top of foundational DPI rather than duplicating it. It includes core registries (clients, facilities, health workers, products), a **Lifelong Health Record** that follows a person across their life and every part of the health system, terminology services, and shared services such as consent management and clinical decision support. It anchors all of this to seven priority health goals, from building trusted data foundations to strengthening health financing and building resilience to climate change and epidemics. It also introduces **REDDHI** (Resilient Essential Data and Digital Health Infrastructure), a minimum starting set of components framed as a direction of travel rather than a finish line, with four entry points for countries starting from very different places.

That alone is a considerable piece of work. What made me take it seriously as a practitioner is that it is written for the people who will actually have to use it.

## Who it is written for

The draft names its readers explicitly: health ministries and programme managers; the authorities that run national DPI; enterprise architects and technical teams; development partners and donors; procurement teams; and policy makers. It even offers each of them a reading path, so that no single reader has to get through all 254 pages.

It is equally explicit about who should benefit. Patients get continuity of care, with their history and entitlements following them across facilities. Health workers get less duplicate data entry and better information at the point of care. Programme managers get a consistent data foundation across programmes rather than within silos. Ministries of finance get visibility into health expenditure and whether schemes are reaching the people they are meant to. Donors get infrastructure that outlasts individual funding cycles, and researchers get more complete data under appropriate consent and governance.

Having worked with state health departments, programme teams and development partners, I recognised each of these groups and the frustrations the draft is trying to solve for them. That is the lens I used for my review: for each of these readers, would the architecture hold up in the situations they actually face?

## What it gets right

Three things stood out, and I said so in my review.

**Interoperability is treated as a property, not a product.** The draft says that interoperability "is not a component to be built once but a property that should pervade the architecture through shared standards, common data models, and defined exchange patterns." This is the single most important correction to how digital health is usually discussed. I have [written separately](/writing/interoperability-is-not-a-solution/) about why.

**Data models come before software.** The implementation chapter makes a point every ministry would benefit from keeping in view: "The most consequential implementation decision a country makes is not which software to procure but what data to capture and how to structure it."

**It is honest about where countries start.** The entry points acknowledge real risks, including the risk that "donor-funded projects move faster than national governance, creating new silos before shared infrastructure is in place." That is a familiar pattern in many countries, including in the South-East Asia Region.

## My eight comments

WHO asked reviewers for line-by-line comments with suggested replacement text, and I took that seriously. Each comment points to a specific section of the draft and proposes wording that could be dropped in. The eight comments fall into five themes.

### 1. Cover the services that cannot wait

The architecture's examples and components lean towards routine care. Two essential services are barely visible: **emergency medical response** and **blood and transfusion services**. Both appear in WHO's own *Classification of digital interventions, services and applications in health*. Both depend on exactly the shared infrastructure the draft describes: knowing which facilities exist, what services they offer, and where supplies are.

The changes I suggested were small and concrete. The facility registry could list blood banks and ambulance or emergency medical services stations among its illustrative facility types, and emergency care and transfusion among the services a facility offers. The surveillance platform and product registry could consider whether they have use cases in these domains. And the guidance could consider whether emergency response and blood services deserve their own business process, given how many of the draft's capabilities they rely on.

### 2. Test for the bad day, not just the normal day

The draft's conformance and testing chapter is thorough on **functional** conformance: does a system do what the specification says? It says much less about how shared infrastructure behaves under stress.

A pandemic is the obvious case. Registrations, laboratory results, surveillance reports and supply requests all surge at once, often while connectivity is degraded. The registries and the Lifelong Health Record are exactly the components everything else depends on. If they slow down or fail, everything built on them fails too.

I proposed a new subsection on **non-functional and resilience testing**. It would ask implementers to test core registries and the Lifelong Health Record under peak loads consistent with a pandemic or other major public health event, and under degraded connectivity, and to record how the system degrades when it cannot cope. COVID-19 showed every health system that infrastructure designed for average demand can fail at the moment it matters most.

### 3. Make the data useful beyond the clinic

**Secondary use should be required, not optional.** The draft sensibly lets countries implement the Lifelong Health Record as a central store, a federated network or a virtual record assembled on demand. But the capability to export data for secondary use, for the health management information system, surveillance, research and analytics, is only "Recommended". In a federated or virtual model, if that capability is not designed in from the start, the only way to get population-level data may be to collect it again, separately. That is exactly the duplication DPI-H is meant to end. I suggested making it **Required** for federated, hybrid and virtual implementations, with access through agreed governance mechanisms.

**Citizens should be contributors, not just users.** The draft treats people mainly as users of services. But self-testing kits, home blood-pressure monitors and wearables are becoming real sources of health data, and the draft already recognises remote monitoring as an emerging trend. I suggested an optional, governed pathway for **patient-generated health data** to enter the Lifelong Health Record, under the same consent and data-quality safeguards as any other source, and a fuller treatment of the topic in the chapter on future-proofing.

### 4. Govern clinical safety like clinical software

The draft includes a clinical decision support engine as shared infrastructure, with sensible provisions on safe failure, continuity, knowledge review and liability. What it lacks is a structured **clinical risk-management method**.

Established practice for clinical software rests on three elements: a **hazard log** of what can go wrong and what harm could follow, a **risk classification** for likelihood and severity, and a **named, accountable clinical safety role**. These are central to ISO 14971 and to England's DCB0129 and DCB0160 clinical risk management standards. As decision support increasingly includes AI, this matters more, not less. I suggested adding clinical risk management as an explicit governance expectation, with wording that names all three elements.

### 5. Make the case in the language of money and trust

**Build fraud checks into the benefits layer.** Health financing schemes in many countries run separate systems for enrolment and claims. The draft describes how benefits registries and contract and benefits management systems relate to the shared client identity. I suggested a minimum requirement that every scheme **reconcile enrolment and claims against the shared client identity**, with a standard cross-scheme check for duplicate enrolment. It is a modest technical requirement with a potentially large effect on leakage and public trust.

**Give finance ministries numbers.** The section on engaging ministries of finance argues, correctly, that shared infrastructure reduces leakage and improves efficiency. Finance ministries respond to figures. I suggested including a small number of quantified, well-sourced examples from countries that have documented benefits from government data-exchange infrastructure, such as Estonia's X-Road or Singapore's API exchange, with enough context to show how the benefits were achieved.

**Say exactly where consent is checked.** The draft gives consent a central place. But it supports three exchange patterns: centralised, federated and hybrid. For each one, implementers need to know **where** consent status is checked, **when**, and **how** the result is enforced, especially when systems exchange data directly rather than through a central hub. I suggested making that explicit. For a federated exchange, for example, the requesting system would check the person's current consent status with the source system or a consent service at the time of each query, before any data is returned. Principles become trustworthy only when they become specified behaviour.

## The idea behind the comments

Reading my comments back, most of them make the same point. The draft is an excellent architecture for **a normal day**: routine visits, routine reporting, routine claims. Health systems, though, are judged on their worst days: a pandemic surge, an emergency that needs blood within the hour, a decision-support error that harms a patient, a fraud that drains a scheme, a breach of trust over consent.

Good infrastructure is designed for those days from the start. Most of what I suggested is small in drafting terms: a facility type in a registry, a word changed from "Recommended" to "Required", a subsection on testing. Each one moves the architecture a little closer to the moments that matter most.

## Why take part

It is easy to treat global guidance as something that arrives finished. This one did not. WHO opened an eight-week public consultation and asked for line-by-line comments with suggested wording. The final document will be read by ministries, architects, donors and vendors in many countries, and it will shape what they build.

For practitioners working inside national and state health systems, consultations like this are one of the few direct routes from implementation experience to global norms. Writing my comments took real time: reading the full draft, checking each point against WHO's own classifications and established standards, and drafting wording precise enough to be used. I would encourage anyone doing this work to take part when the next one opens.

*Views are my own. Quotations are from the public consultation draft (Draft V1.0), which may change in the final publication.*

## Sources

- WHO, *Reference Architecture and Guidance for Digital Public Infrastructure for the Health Sector*, Draft V1.0 for public consultation (2026)
- [WHO, Classification of digital interventions, services and applications in health, 2nd edition (2023)](https://www.who.int/publications/i/item/9789240081949)
- ISO 14971, Medical devices: Application of risk management to medical devices
- [NHS England, DCB0129 and DCB0160 clinical risk management standards](https://digital.nhs.uk/data-and-information/information-standards/governance/latest-activity/standards-and-collections/dcb0129-clinical-risk-management-its-application-in-the-manufacture-of-health-it-systems)
- [X-Road (Nordic Institute for Interoperability Solutions)](https://x-road.global/)
