---
title: "Interoperability is not a solution"
summary: "Everyone in digital health says the answer is interoperability. It is not an answer. It is what you get after doing harder, older, more boring work, and most systems skip that work."
topic: "Health data"
date: 2026-10-11
minutes: 8
featured: false
draft: false
---

In almost every digital health meeting I attend, someone says the problem is that our systems don't talk to each other, and the solution is interoperability. Heads nod. Someone mentions APIs. Someone mentions FHIR. The meeting moves on, satisfied.

I have started to find this frustrating. Not because interoperability is unimportant (it is essential) but because the word is used as if it were a product you could buy or a switch you could flip. It is neither. Interoperability is an **outcome**. It is what you get when a lot of more fundamental, more technical and much less glamorous work has been done properly. When that work has not been done, connecting systems just moves inconsistent data around faster.

## How we got here

India's public health programmes have each built their own digital system, for good reasons. Each programme had urgent reporting needs, its own funding and its own timelines. So today a state health department works with HMIS for facility reporting, the RCH portal for mothers and children, Ni-kshay for TB, IHIP for disease surveillance, eSanjeevani for teleconsultation, drug and supply-chain systems, HR systems, and many more, each with its own logins, forms, identifiers and definitions.

A district programme manager who wants to answer a simple question, such as "are the pregnant women in this block who are anaemic also getting their iron tablets and their check-ups?", may need three portals, two spreadsheets and a phone call. And at the end the numbers may not agree.

The usual diagnosis is: these portals are not interoperable. True. But the usual prescription, build integrations, misses why they are not.

## The idea that came before interoperability

In 1970, a researcher at IBM named Edgar F. Codd published a paper proposing the **relational model** of data. Its ideas are so basic to computing now that we forget they had to be invented. A few years later, a small company that would become Oracle shipped one of the first commercial databases built on them. Almost every serious information system since has stood on these ideas.

The relational model rests on a few disciplines:

- **Every real thing is an entity** with a defined set of attributes: a patient, a facility, a health worker, a visit.
- **Every entity has a key**, an identifier that is unique and stable. Facility number 1234 is always the same facility, everywhere.
- **Relationships are explicit.** A visit belongs to one patient and one facility, and the database knows that.
- **Data means one thing.** A field called "date of registration" has one definition, and the system enforces it.
- **Integrity is enforced.** You cannot record a visit at a facility that does not exist.

None of this is about connecting systems. It is about each system being **internally disciplined**. And here is the point: two systems can only exchange data meaningfully if they agree, at least at the boundary, on these same things. Interoperability is the relational discipline, applied **between** systems instead of within one.

## What is actually missing

When I look at why two health portals cannot be joined, the reason is almost never the absence of an API. It is one of these:

1. **No shared identifiers.** One portal identifies a facility by its own code, another by a different code, a third by its name typed by hand ("PHC Rampur", "Rampur PHC", "Rampur P.H.C."). Without a master list of facilities with stable identifiers, used by every programme, nothing joins.
2. **No shared definitions.** One programme counts a pregnancy as "registered" at the first contact, another at the first full antenatal check-up. Both report "registrations". The totals differ and both are correct by their own rules.
3. **No shared person.** The same woman appears in three systems with three spellings of her name, two dates of birth and no common ID. Linking her records is a probabilistic guess.
4. **Aggregate data where records are needed.** Many systems only store monthly totals. You cannot link totals. You can only put them side by side.
5. **No owner of the reference data.** Facilities open, close, upgrade and change names. If nobody is responsible for keeping the master lists up to date, they decay within a year.

Each of these is a **data modelling and governance problem**, not an integration problem. An API on top of them gives you a fast pipe full of mismatched data.

## Where standards fit

People sometimes hear this and say: that is what standards like FHIR and HL7 are for. Partly. Standards are essential, and every new system should use them. FHIR gives you a common format for a patient, a facility or an observation, and a common way to request them.

But a standard defines the **shape** of the data, not its **truth**. FHIR will happily carry a facility record with the wrong identifier, or an observation coded with a local definition nobody else shares. The classic way to describe interoperability has four levels: **foundational** (the systems can connect), **structural** (the format is agreed), **semantic** (the meaning is agreed) and **organisational** (the governance, policies and incentives are agreed). Most of our effort and most of our vocabulary is at the first two levels. Most of our problems are at the last two.

India's digital health architecture is moving in the right direction here. The ABDM registries for facilities and health professionals, and the health ID, are exactly the shared keys that were missing. But registries only help when every programme system actually uses them as the key, rather than as one more field to fill in.

## What I would do instead of "integrating"

1. **Fix the keys first.** One master facility list, one health worker registry, one person identifier, used as the primary reference by every programme system. Make using them a condition of funding new systems.
2. **Write a data dictionary across programmes.** For the 50 or 100 indicators that matter most, agree one definition, one formula, one source. Publish it.
3. **Give reference data an owner.** Someone in the state whose job is keeping the master lists correct, with a process for adding, closing and merging records.
4. **Move from totals to records where it matters.** Not everywhere, but for the pathways where linking is the point: pregnancy, TB, chronic disease.
5. **Then build the interfaces**, using standards, on top of a foundation that makes them worth having.

This is slower and less exciting than announcing an integration platform. It does not photograph well. But it is the work that makes systems talk to each other, and the reason so many integration projects end up with dashboards that nobody trusts.

## The test

Next time someone in a meeting says "we need interoperability", try asking three questions. Which identifier will both systems use for the same facility? Whose definition of the indicator will we use? Who owns that list next year? If nobody can answer, the problem is not interoperability yet. It is the foundation underneath it.

*Views are my own.*

## Sources

- [E. F. Codd (1970), A Relational Model of Data for Large Shared Data Banks, Communications of the ACM](https://doi.org/10.1145/362384.362685)
- [HIMSS, Interoperability in healthcare](https://www.himss.org/resources/interoperability-healthcare)
- [Ayushman Bharat Digital Mission](https://abdm.gov.in/)
