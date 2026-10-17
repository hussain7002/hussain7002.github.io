---
title: "The golden hour on Telangana's roads"
summary: "If a crash happened on a Telangana highway, how long would it take to reach a hospital? It depends on which hospitals we count, and the answer points to existing area hospitals."
topic: "Health systems"
date: 2026-10-17
minutes: 8
featured: false
draft: false
image: "/img/writing/telangana-golden-hour.webp"
imageAlt: "Two maps of Telangana's highways coloured by estimated drive time to the nearest public hospital: many red stretches when only district hospitals and medical colleges count, mostly blue when area hospitals also count."
caption: "Estimated drive time from each stretch of national and state highway to the nearest public hospital, under two definitions of which hospitals count. Survey of India boundaries; roads from OpenStreetMap; no base map."
credit: "Map: Hussain MS"
---

**Key points**
- Following the real road network, I estimated how long it would take to drive from every stretch of Telangana's highways to the nearest public hospital.
- Counting only district hospitals and medical colleges, about 45% of national-highway length is more than an hour away at the speeds assumed. Counting area and other sub-district hospitals too, it falls to about 8%.
- The gap between those two numbers is the finding: the sites that would bring the most highway within the hour are mostly area hospitals that already exist.

Road injuries kill about 1.2 million people a year worldwide, and India records more road deaths than any other country. Much of what decides whether an injured person survives happens after the crash: how quickly they reach a hospital that can stop bleeding, secure an airway and operate. This piece asks a simple version of that question for one state. If a crash happened at a given point on a Telangana highway, how long would the drive to a hospital be?

It is not a map of where crashes happen. No crash locations were available, so the question is about coverage: which stretches of road would leave an injured person farthest from care.

## The golden hour, and why it is only a guide

Trauma care has long used the idea of a "golden hour": the sooner a seriously injured person reaches definitive care, the better their chances, and the first hour matters most. The exact sixty minutes is a planning convention rather than a hard biological threshold; outcomes worsen with delay on a continuum, and the right time differs by injury. But as a yardstick for a road network, an hour is useful and widely understood, so I use it here.

## How I measured it

I took Telangana's road network from OpenStreetMap, the open map built by volunteers, including roads up to 30 km beyond the state border, so that a hospital just across the line in Andhra Pradesh, Karnataka, Maharashtra or Chhattisgarh still counts. That is about 205,000 km of road, split into 5.4 million short segments.

Each segment gets a travel time from its length and an assumed speed for its class: 50 km/h on national highways, 40 km/h on state highways and other major roads, and 25 km/h on everything else. OpenStreetMap does not carry official highway numbers in this extract, so I use its road classes ("trunk" roads, which are mostly national highways, and "primary" roads, mostly state highways) as the closest match. These speeds are assumptions, not measurements. To show how much they matter, I repeated everything at speeds a quarter slower and a quarter faster.

Then, for every point on the network, I found the quickest route to the nearest hospital, using the public facility list (April 2026) for the hospitals' locations.

The real road trip is typically 1.21 times the straight-line distance (half of all trips fall between 1.16 and 1.28 times). That is the gap between this piece and its companion on straight-line distance across India: roads add about a fifth, before traffic, hills or a closed bridge.

## Which hospitals count?

This is where the answer turns. A hospital that can manage serious trauma needs surgeons, anaesthesia, blood and an operating theatre around the clock. The facility list does not record that capability, so I used two definitions.

The strict one counts only facilities labelled district hospital or medical college hospital: 27 sites inside Telangana or within 30 km of it. The wider one adds area hospitals and other sub-district hospitals: 99 sites.

| Share of highway length more than 60 minutes from a hospital | National highways | State highways and major roads |
|---|---|---|
| District hospitals and medical colleges only | 45% | 54% |
| Any public hospital | 8% | 15% |

At baseline speeds, that is about 3,300 km of national highway beyond the hour under the strict definition, and about 600 km under the wider one.

The speed assumption moves these numbers, but not the conclusion. Under the strict definition, between about a third and three fifths of national-highway length is beyond the hour across the three speed scenarios. Under the wider one, it is between 4% and 18%.

<figure class="chart"><iframe src="/charts/golden-hour/golden-hour-scenarios.html" title="How the answer depends on the assumptions" loading="lazy" style="height:380px"></iframe><figcaption>Share of Telangana's national-highway length more than 60 minutes from a hospital, by speed assumption and hospital definition.</figcaption></figure>

## Where the gaps are

Under the strict definition, the districts with the most highway beyond the hour are Nagarkurnool, Siddipet, Kamareddy, Suryapet, Nirmal and Mancherial. In several of them, almost every kilometre of major road is more than an hour from a district hospital or medical college. When area hospitals count too, most of those gaps close, and Nagarkurnool stands out as the district with the most highway still beyond the hour.

| District | Major-road km beyond 60 min (strict) | Beyond 60 min (any public hospital) |
|---|---|---|
| Nagarkurnool | 474 | 207 |
| Siddipet | 387 | 49 |
| Kamareddy | 358 | 5 |
| Suryapet | 355 | 37 |
| Nirmal | 314 | 31 |
| Mancherial | 275 | 27 |

## One more trauma-capable site: where would it help most?

I tested every community health centre and sub-district hospital in Telangana as a candidate: if this one site could handle serious trauma, how much highway would come within the hour, under the strict definition? The top candidates are revealing. They include community health centres at Ramayanpet (Medak), Cherial (Siddipet) and Khanapur (Nirmal), each bringing 350 to 410 km of major road within the hour, and area hospitals at Bhongir, Siddipet and Mancherial, each around 330 km.

Many of the best candidates are area hospitals in district headquarter towns. This is our interpretation, not a verdict: the gap between the two definitions may be smaller in practice than on paper, because some of these area hospitals may already offer emergency surgery. Where they do, recognising and equipping them as trauma care points, and routing ambulances to them, could close much of the gap without building anything new. Where they do not, they are the obvious places to start.

[TO ADD: personal paragraph. For example: your earlier work on Telangana's facility data, what you learned about how facilities are labelled, or why the road network matters for referral planning. Keep it to what you did.]

## Why this matters beyond Telangana

The UN's Decade of Action for Road Safety 2021–2030 aims to halve road deaths and injuries by 2030, and the Sustainable Development Goals include a road-safety target (SDG 3.6). Prevention, through safer roads, vehicles and speeds, does most of the work. But post-crash care is one of the pillars of the global plan, and it starts with a simple question every state can answer from open data: where would an injured person be farthest from care? According to the transport ministry's *Road Accidents in India 2023*, Telangana recorded 7,660 road deaths that year: 3,058 on national highways (including expressways) and 717 on state highways. Almost half (49%) of the state's road deaths happened on the two kinds of road this piece maps.

## Limits

- **Assumed speeds.** Real speeds vary by time of day, traffic, road condition and vehicle. The scenarios show the range, not the truth.
- **Capability is unknown.** The facility list says where a hospital is, not whether it can handle trauma tonight.
- **Labels are inconsistent.** Some district headquarter hospitals appear as area or sub-district hospitals, which is why I show both definitions.
- **OpenStreetMap is volunteer data.** Telangana's major roads are well mapped; road classes are an approximation of official highway categories.
- **No ambulance dispatch time.** The clock starts at the crash in reality; here it starts when the vehicle is already moving.
- **No crash data.** This is a coverage map, not a risk map. Overlaying crash black spots would be the obvious next step.

## Sources

- Roads: OpenStreetMap contributors, extract by the Humanitarian OpenStreetMap Team (October 2026), ODbL.
- Boundaries: Survey of India, state and district boundaries.
- Facilities: public health facility list with coordinates, April 2026.
- World Health Organization. Global status report on road safety 2023.
- United Nations. Global Plan for the Decade of Action for Road Safety 2021–2030.
- Ministry of Road Transport and Highways, Transport Research Wing. Road Accidents in India 2023 (Table 5.6; Annexures 10 and 15).

Code available on request.

*Views are my own.*
