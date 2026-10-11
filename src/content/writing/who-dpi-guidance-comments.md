---
title: "What I told WHO about its blueprint for health DPI"
summary: "WHO's draft reference architecture for digital public infrastructure in health is the most complete blueprint yet. I submitted eight comments in the public consultation. Most were about the same thing: health systems are judged on their worst days."
topic: "DPI"
date: 2026-10-11
minutes: 9
featured: false
draft: false
---

Every country building digital health infrastructure eventually asks the same question: what, exactly, should be shared? Which registries, which records, which services should be national public infrastructure, and which should be left to programmes and vendors?

In July 2026, WHO put a 254-page answer out for public consultation: the draft **Reference Architecture and Guidance for Digital Public Infrastructure for the Health Sector (DPI-H)**. I reviewed it and submitted eight comments before the consultation closed on 6 September. This piece sets out what the draft gets right, what I suggested, and the single idea behind most of my suggestions.

## What the draft is

Digital public infrastructure (DPI) usually means three foundational layers that any sector can use: digital identity, data exchange and payments. India's Aadhaar, UPI and data-sharing rails are the best-known examples. The draft's starting point is that **health needs more than these foundations**. A national ID does not tell you which facility a patient visited; a payment rail does not know what a valid prescription looks like.

So the draft defines **DPI-H**: health-specific shared infrastructure that sits on top of foundational DPI. It includes core registries (clients, facilities, health workers, products), a **Lifelong Health Record** that follows a person across their life and every part of the health system, terminology and standards services, and shared services such as consent and clinical decision support. It maps all of this to seven priority health goals, from "capture once, use many times" data foundations to supply chains and health financing.

It also introduces **REDDHI**, Resilient Essential Data and Digital Health Infrastructure: a minimum starting set of components, framed as a direction of travel rather than a finish line, with four entry points for countries starting from very different places.

## What it gets right

Three things stood out, and I said so in my review.

**Interoperability is treated as a property, not a product.** The draft is explicit that interoperability "is not a component to be built once but a property that should pervade the architecture through shared standards, common data models, and defined exchange patterns." This is the single most important correction to how digital health is usually discussed. I have [written separately](/writing/interoperability-is-not-a-solution/) about why.

**Data models come before software.** The implementation chapter opens with a sentence every ministry should pin to the wall: "The most consequential implementation decision a country makes is not which software to procure but what data to capture and how to structure it."

**It is honest about where countries start.** The entry points acknowledge real risks, including donor-funded projects moving faster than national governance and "creating new silos before shared infrastructure is in place." That is not a theoretical concern in most of the South-East Asia Region.

## My eight comments

The comments fall into five themes.

### 1. Cover the services that cannot wait

The architecture's examples and components lean towards routine care. Two essential services are barely visible: **emergency medical response** and **blood and transfusion services**. Both appear in WHO's own classification of digital health interventions, and both depend on exactly the shared infrastructure the draft describes: knowing which facilities exist, what they can do, and where supplies are.

I suggested small, concrete changes: adding blood banks and ambulance or EMS stations to the illustrative facility types in the Facility Registry, adding emergency care and transfusion services to its list of services offered, and considering whether these domains deserve their own business processes.

### 2. Test for the bad day, not just the normal day

The draft's conformance and testing chapter is thorough on **functional** conformance: does a system do what the specification says? It says much less about how shared infrastructure behaves under stress.

A pandemic is the obvious case. Registrations, laboratory results, surveillance reports and supply requests all surge at once, often while connectivity is degraded. The registries and the Lifelong Health Record are exactly the components everything else depends on. If they slow down or fail, everything fails with them.

I proposed a new subsection on **non-functional and resilience testing**: simulating peak loads consistent with a major public-health event, testing under degraded connectivity, and documenting how systems degrade when they cannot cope. COVID-19 taught every health system that infrastructure designed for average demand breaks at the moment it matters most.

### 3. Make the data useful beyond the clinic

**Secondary use should be required, not optional.** The draft sensibly lets countries implement the Lifelong Health Record as a central store, a federated network or a virtual record assembled on demand. But the capability to export data for secondary use (for the health management information system, surveillance, research and analytics) is only "Recommended". In a federated or virtual model, if that capability is not designed in from the start, the only way to get population-level data is to collect it again, separately. That is exactly the duplication DPI-H is meant to end. I suggested making it **Required** for federated, hybrid and virtual implementations.

**Citizens should be contributors, not just users.** The draft treats people mainly as users of services. But self-testing kits, home blood-pressure monitors and wearables are becoming real sources of health data. I suggested an optional, governed pathway for **patient-generated health data** to enter the Lifelong Health Record, under the same consent and data-quality safeguards as any other source, and a fuller treatment of this in the chapter on future-proofing.

### 4. Govern clinical safety like clinical software

The draft includes a clinical decision support engine (CDSE) as shared infrastructure, with sensible provisions on safe failure, knowledge review and liability. What it lacks is a structured **clinical risk-management method**.

Established practice for clinical software has three elements: a **hazard log** of what can go wrong and what harm it could cause, a **risk classification** for likelihood and severity, and a **named, accountable clinical safety role**. These are the backbone of ISO 14971 and of the UK's DCB0129 and DCB0160 clinical risk standards. As decision support increasingly includes AI, this becomes more important, not less. I suggested adding it as an explicit governance expectation.

### 5. Make the case in the language of money and trust

**Fraud-proof the benefits layer.** Health financing schemes in many countries run separate systems for enrolment and claims. The draft describes how benefits registries and contract and benefits management systems relate to the shared client identity. I suggested a minimum requirement that every scheme **reconcile enrolment and claims against the shared client identity**, with a standard cross-scheme check for duplicate enrolment. It is a modest technical requirement with a large effect on leakage and on public trust.

**Give finance ministries numbers.** The section on engaging ministries of finance argues, correctly, that shared infrastructure reduces leakage and improves efficiency. Finance ministries respond to figures. I suggested including a small number of quantified, well-sourced examples from countries that have documented benefits from government data-exchange infrastructure, such as Estonia's X-Road or Singapore's API exchange.

**Say exactly where consent is checked.** The draft establishes an important principle: consent should travel with a person's data. But the architecture supports three exchange patterns: centralised, federated and hybrid. For each one, implementers need to know **where** consent status is checked, **when**, and **how** the result is enforced, especially when systems exchange data directly rather than through a central hub. I suggested making that explicit, for example: in a federated exchange, the requesting system verifies the person's current consent status with the source system or a consent service at the time of each query, before any data is returned. Principles become trustworthy only when they become specified behaviour.

## The idea behind the comments

Reading my comments back, most of them make the same point. The draft is an excellent architecture for **a normal day**: routine visits, routine reporting, routine claims. Health systems, though, are judged on their worst days: a pandemic surge, an emergency that needs blood in an hour, a decision-support error that harms a patient, a fraud that drains a scheme, a breach of trust over consent.

Good infrastructure is designed for those days from the start. Most of what I suggested is small in drafting terms: a field in a registry, a word changed from "Recommended" to "Required", a subsection on testing. Each one moves the architecture a little closer to the moments that matter most.

## Why take part

It is easy to treat global guidance as something that arrives finished. This one did not. WHO opened an eight-week public consultation and asked for line-by-line comments with suggested wording. The final document will be read by ministries, architects, donors and vendors in dozens of countries, and will shape what they build.

For practitioners working inside national and state health systems, consultations like this are one of the few direct routes from implementation experience to global norms. I would encourage anyone doing this work to use them.

*Views are my own. Quotations are from the public consultation draft (Draft V1.0), which may change in the final publication.*

## Sources

- WHO, *Reference Architecture and Guidance for Digital Public Infrastructure for the Health Sector*, Draft V1.0 for public consultation (2026)
- [WHO, Classification of digital interventions, services and applications in health, 2nd edition](https://www.who.int/publications/i/item/9789240081949)
- ISO 14971, Medical devices: Application of risk management to medical devices
- [NHS England, DCB0129 and DCB0160 clinical risk management standards](https://digital.nhs.uk/data-and-information/information-standards/governance/latest-activity/standards-and-collections/dcb0129-clinical-risk-management-its-application-in-the-manufacture-of-health-it-systems)
- [X-Road (Nordic Institute for Interoperability Solutions)](https://x-road.global/)
