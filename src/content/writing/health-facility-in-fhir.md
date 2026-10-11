---
title: "One health facility, written in FHIR"
summary: "A plain-language walk through FHIR, the standard behind modern health data exchange, using the simplest possible example: a primary health centre. What the standard fixes, and what it cannot."
topic: "Health data"
date: 2026-10-11
minutes: 6
featured: false
draft: false
image: "/img/writing/health-facility-in-fhir.webp"
imageAlt: "Diagram of a FHIR Location resource linked to an Organization resource"
caption: "One facility as two FHIR resources: the place (Location) and the institution (Organization), linked by a reference."
credit: "Diagram: Hussain MS · illustrative facility"
---

FHIR (pronounced "fire") is the standard most new health information systems now use to exchange data, including India's own ABDM, whose health records are built on FHIR profiles. It is mentioned in almost every digital health strategy. It is understood by far fewer people than mention it.

The best way to understand it is to take something simple and write it out. So here is a single primary health centre, described the way a typical government portal stores it, and then the way FHIR would.

## The facility as a portal row

In many systems, a facility is a row in a spreadsheet-like table:

| Facility name | Type | District | Block | Lat | Long | Beds | Phone |
|---|---|---|---|---|---|---|---|
| Rampur PHC | PHC | Example District | Rampur | 17.0512 | 79.2671 | 6 | 08XXX-XXXXX |

*An illustrative facility, not a real one.*

This works inside one system. The trouble starts when a second system needs to talk about the same facility. It may spell the name differently, use its own code, use "Primary Health Centre" instead of "PHC", or store the district as a number. The row has no agreed meaning outside the system that made it.

## The same facility in FHIR

FHIR breaks health information into **resources**: standard building blocks such as Patient, Practitioner, Observation, Organization and Location. Each has a defined structure and meaning, wherever it is used. A facility is usually described by two of them:

- **Organization:** the entity that provides care (the PHC as an institution).
- **Location:** the physical place where care happens (the building, with its address and coordinates).

Here is the Location:

```json
{
  "resourceType": "Location",
  "id": "rampur-phc",
  "identifier": [{
    "system": "https://facility.ndhm.gov.in",
    "value": "IN0000000000"
  }],
  "status": "active",
  "name": "Primary Health Centre, Rampur",
  "alias": ["Rampur PHC", "PHC Rampur"],
  "type": [{
    "coding": [{
      "system": "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
      "code": "HOSP",
      "display": "Hospital"
    }],
    "text": "Primary Health Centre"
  }],
  "telecom": [{ "system": "phone", "value": "08XXX-XXXXX" }],
  "address": {
    "district": "Example District",
    "state": "Example State",
    "country": "IN",
    "text": "Rampur Block"
  },
  "position": { "latitude": 17.0512, "longitude": 79.2671 },
  "managingOrganization": { "reference": "Organization/rampur-phc-org" }
}
```

*The identifier is a placeholder in the format of a facility registry ID. The type code is a generic example; a national profile would define a proper code for "Primary Health Centre".*

## What changed

Four things are different from the portal row, and each matters:

1. **The identifier has a namespace.** The `system` says *whose* identifier this is: here, the national facility registry. Any system that sees this ID knows exactly which register to check. This is the single most important line in the resource.
2. **Names are separated from identity.** The official name, and the aliases people actually use, are recorded, but the facility is identified by its ID, not its name. "Rampur PHC" and "PHC Rampur" stop being two facilities.
3. **Types are coded.** The facility type comes from a shared code list, so a machine can tell that two systems mean the same kind of facility, even if they write it differently.
4. **Relationships are explicit.** `managingOrganization` points to the Organization resource, just as a relational database links a table to another with a key. The building and the institution are connected, but not confused.

If two systems both describe facilities this way, and both use the national registry ID, a third system can combine their data without guessing. That is what interoperability looks like in practice.

## What FHIR does not fix

This is where I want to be honest, because FHIR is often oversold.

- **FHIR does not make the data correct.** If the coordinates are wrong or the facility closed last year, the FHIR version is wrong too, in a better format.
- **FHIR does not create the master list.** Someone has to maintain the facility registry, assign IDs, and close, merge and update records. That is governance, not a standard.
- **FHIR does not agree definitions for you.** The standard says *how* to write a code. It does not decide which code list a country uses for facility types, or what counts as a "PHC". Countries do that through national **profiles** and terminology decisions, as ABDM does through its published FHIR profiles.
- **FHIR does not change the old systems.** Existing portals still store their rows. Mapping them to FHIR, and keeping the mapping right as they change, is ongoing work.

So FHIR is necessary but not sufficient. It is the common language. The shared registry, the agreed definitions and the people who maintain them are what give the language something true to say. I wrote more about that in [Interoperability is not a solution](/writing/interoperability-is-not-a-solution/).

## Try it yourself

If you work with health facility data, try this exercise with one record from your own system:

1. Which ID would you put in `identifier`, and whose namespace is it?
2. Which of your fields map cleanly to FHIR, and which have no obvious home?
3. Where would a second system's version of the same facility disagree with yours?

Answering those three questions for one facility tells you more about your interoperability readiness than any assessment form.

*Views are my own. The example facility is illustrative.*

## Sources

- [HL7 FHIR R4, Location resource](https://hl7.org/fhir/R4/location.html)
- [HL7 FHIR R4, Organization resource](https://hl7.org/fhir/R4/organization.html)
- [Ayushman Bharat Digital Mission](https://abdm.gov.in/)
