---
title: "HL7 FHIR, explained by someone still learning it"
summary: "What HL7 and FHIR actually are, what 'FHIR adoption' means, and where the standard fits in public health, written from the point of view of a practitioner working it out."
topic: "Health data"
minutes: 9
featured: false
draft: false
keyPoints:
  - "HL7 is the organisation and family of standards for exchanging health information. FHIR is its newest standard, built from small building blocks called resources."
  - "Choosing FHIR is the easy part. Recent assessments of India and Sri Lanka found strong national foundations, but ecosystem-wide adoption still at an early stage."
  - "For public health, FHIR matters most where records need to move: between facilities, programmes and levels of care. It carries data faithfully, but it cannot make the data right."

image: "/img/writing/health-facility-in-fhir.webp"
imageAlt: "Diagram of a FHIR Location resource linked to an Organization resource"
caption: "One facility as two FHIR resources: the place (Location) and the institution (Organization), linked by a reference."
credit: "Diagram: Hussain MS · illustrative facility"
---

FHIR appears in almost every digital health strategy I read. It is in national plans, donor proposals and procurement documents, usually in a sentence that says a system "must be FHIR-compliant". For a long time I nodded along without being sure what that meant in practice. So I set out to understand it properly, as a public health practitioner rather than a software engineer. This piece is what I have learned so far, written for anyone else in the same position.

## First, the names

**HL7** stands for Health Level Seven. It is both an organisation, HL7 International, a standards body founded in the late 1980s, and a family of standards for exchanging health information between computer systems. The "Level Seven" refers to the seventh layer of a classic model of computer networking: the application layer, where systems exchange meaningful content rather than just bits.

Over the decades HL7 has produced several generations of standards. Its Version 2 messaging standard is still everywhere in hospitals, quietly moving lab results and admission messages between systems. Later came Version 3 and the Clinical Document Architecture (CDA), which were more rigorous but also harder to implement.

**FHIR** (pronounced "fire") stands for Fast Healthcare Interoperability Resources. HL7 describes it simply as "a standard for exchanging healthcare information electronically", one that "aims to simplify implementation without sacrificing information integrity." It was designed using the lessons of the earlier standards, and it can sit alongside them rather than replacing them overnight.

## The idea behind FHIR: resources

The idea I found most helpful is this. FHIR breaks health information into small, standard building blocks called **resources**. In HL7's own words, "all exchangeable content is defined as a resource."

There is a resource for a Patient, a Practitioner, an Organization, a Location, an Encounter (a visit), an Observation (such as a blood pressure reading or a lab result), a MedicationRequest (a prescription), an Immunization, and many more. Each resource has a defined structure, so a blood pressure reading means the same thing to every system that reads it. Resources can point to each other: an Observation refers to the Patient it is about and the Encounter where it was taken.

FHIR is also built the way modern web applications are. Resources can be exchanged in familiar formats such as JSON, and systems can ask for them over the web, in much the same way a phone app asks a server for information. That is a large part of why developers find it easier than the earlier standards.

## A small example: one health facility

It helped me to take something simple and write it out. In many government systems, a primary health centre is just a row in a table: a name, a type, a district, coordinates and a phone number. That works inside one system. The trouble starts when a second system needs to refer to the same facility. It may spell the name differently ("Rampur PHC", "PHC Rampur"), use its own code, or store the district as a number.

In FHIR, the same facility becomes a Location resource (the physical place) linked to an Organization resource (the institution). In simplified form:

```json
{
  "resourceType": "Location",
  "identifier": [{ "system": "<national facility registry>", "value": "<facility ID>" }],
  "name": "Primary Health Centre, Rampur",
  "alias": ["Rampur PHC", "PHC Rampur"],
  "position": { "latitude": 17.05, "longitude": 79.27 },
  "managingOrganization": { "reference": "Organization/rampur-phc" }
}
```

*An illustrative facility, not a real one.*

Two details make all the difference. The identifier says *whose* identifier it is, here a national facility registry, so any system knows which list to check. And names are separated from identity: the aliases are recorded, but the facility is known by its ID. If every system describes facilities this way and uses the same registry, a third system can combine their data without guessing.

## What "FHIR adoption" means

This was the part I most wanted to understand. A country cannot simply "adopt FHIR" the way it adopts a new form. FHIR is a general framework. To use it, a country has to decide which resources it needs, which fields are mandatory, which code lists to use and how systems will exchange data. These decisions are written down in an **implementation guide**, which adapts FHIR to a national context. Adoption then means systems actually conforming to that guide, being tested against it, and exchanging data with each other in real use.

India has done a great deal of this foundational work. The FHIR Implementation Guide for ABDM, published by the National Resource Centre for EHR Standards, is based on FHIR Release 4 and, in its own words, "defines the minimum conformance requirements for accessing health data to achieve continuity of care in the Indian context." It defines profiles for records such as prescriptions, discharge summaries, diagnostic reports, immunisation records and outpatient consultation notes.

But a published guide is the beginning, not the end. Two recent assessments led by Karthik Adapa and colleagues looked at how far adoption had actually gone, in India and in Sri Lanka. Both are preprints, not yet peer-reviewed, but their findings are strikingly similar.

For **India**, the authors found a "mandate-driven national foundation" for FHIR-based exchange, including national implementation guides, sandbox environments and a growing ecosystem of certified vendors. But adoption across the wider ecosystem remained "uneven and largely compliance-driven". Most organisations they surveyed placed themselves at exploration or limited-pilot stages, and lack of funding or business incentives was among the top barriers for nearly two-thirds of respondents. Their conclusion was that the central challenge is moving beyond compliance, so that implementers can validate, trust and use FHIR as shared infrastructure.

For **Sri Lanka**, which has formally adopted FHIR Release 4 as its preferred national interoperability standard, the authors found real foundations: national implementation guides, governance structures, testing events known as connectathons, and pilots demonstrating FHIR-enabled exchange. But overall interoperability maturity was assessed as nascent, and the main challenge, they concluded, is "no longer the selection of standards alone, but their institutionalization."

Reading the two together, I took away one simple idea. **Choosing FHIR is the easy part. Making it the normal way systems work, through governance, testing, incentives, skills and procurement, is the hard part.**

## Where FHIR fits in public health

So where does this leave someone working in public health rather than hospital IT?

FHIR matters most where **records need to move**: a woman's antenatal records following her from the sub-centre to the district hospital, a child's immunisation history moving with a family that migrates for work, a lab result reaching the clinician and the surveillance system at the same time. In each case, the value comes from systems agreeing on what a record looks like.

WHO is building in the same direction. Its SMART Guidelines, "Standards-based, Machine-readable, Adaptive, Requirements-based, and Testable", aim to turn its health recommendations into digital components that countries can adapt, and some of that work is published as FHIR implementation guides.

FHIR matters less for the monthly aggregate reports that much public health monitoring still depends on, where other tools and standards are often used. And there is one thing it can never do: make the data right. A FHIR message will carry a wrong identifier or a locally defined indicator just as faithfully as a correct one. Standards make agreement possible. People and institutions still have to reach it.

## Where I have landed

I started out thinking of FHIR as a technical requirement to tick. I now think of it more like a shared language. Learning the grammar is the easy part. The real work is getting a whole health system, including vendors, hospitals, programmes and governments, to speak it every day, and to trust what they hear.

*Views are my own. I am still learning; corrections are welcome.*

## Sources
- [HL7 International, FHIR Overview](https://hl7.org/fhir/overview.html)
- [National Resource Centre for EHR Standards, FHIR Implementation Guide for ABDM](https://nrces.in/ndhm/fhir/r4/index.html)
- [Jain A., Kumar S., Vishwanath P., Garg M., Adapa K. From compliance to ecosystem adoption: a mixed-methods assessment of HL7 FHIR implementation in India. Preprints.org, 2026 (not peer-reviewed)](https://doi.org/10.20944/preprints202606.1791.v1)
- [Irfaan S., Hapudeniya M., De Silva M., Wijeratna M., Sethi R., Chauhan T., Adapa K. HL7 FHIR adoption and interoperability maturity in Sri Lanka: a mixed-methods national baseline assessment. Preprints.org, 2026 (not peer-reviewed)](https://doi.org/10.20944/preprints202606.1768.v1)
- [WHO, SMART Guidelines](https://www.who.int/teams/digital-health-and-innovation/smart-guidelines)
