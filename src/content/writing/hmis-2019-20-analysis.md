---
title: "A year of India's health data, and what it says about the data"
summary: "I rebuilt a full year of India's Health Management Information System from 8,447 official files. Here is what it shows about health services, about the data itself, and where AI could help."
topic: "Health data"
date: 2026-10-17
minutes: 14
featured: true
draft: false
image: "/img/writing/hmis-monthly.webp"
imageAlt: "Six small line charts of monthly totals in 2019-20: deliveries, outpatient visits, pentavalent vaccination, malaria, dengue and childhood diarrhoea, each relative to its yearly average."
caption: "Twelve months of India's Health Management Information System (April 2019 to March 2020), each series shown relative to its own monthly average. Dengue peaks in October at nearly three times its average."
credit: "Chart: Hussain MS"
---

**Key points**
- India's Health Management Information System (HMIS) recorded 21.4 million deliveries, 1.67 billion outpatient visits and 903 million laboratory tests in 2019-20, from 6,717 reporting units in 704 districts.
- The data carries real signals: the seasons of dengue, malaria and childhood diarrhoea; caesarean rates that differ several-fold between public and private facilities; 62 female sterilisations for every vasectomy.
- It also shows where the system is weakest: almost half of adult deaths are recorded with no known cause, 47 of the 285 data items are almost never used, and private-sector care is barely visible. These are design and process questions as much as data ones, and they are where digital tools and AI can help most.

Every month, every public health facility in India, and many private ones, fills in the same form: how many pregnant women registered, how many babies were born and vaccinated, how many people came to the outpatient clinic, how many tests were done, how many people died and of what. The numbers flow up from facility to block to district to state, and land in the HMIS. It is one of the largest routine health data systems in the world.

I spent a year working with HMIS data in government, and I wanted to see what a full year of it looks like when you put it all in one place and ask it questions. Not only about mothers and babies, but about the whole service, and about the system that produces the numbers.

## Building the dataset, and two traps

HMIS publishes item-wise reports for every district and month. I took all 8,447 of them for April 2019 to March 2020 (one district, Nawanshahr in Punjab, has no April file), loaded them into a single PostgreSQL database, and wrote every number in this article as a SQL query on that one table, so that each figure has exactly one definition.

Two traps are worth describing, because they are the kind any analyst, or any AI tool, would fall into.

**District totals hidden as units.** Each district file lists its blocks side by side, plus one column that looks like another unit. It is actually the district total, and it equals the sum of the blocks in every one of 2.4 million comparisons. Add everything up naively and every number doubles: 42 million live births instead of 21 million.

**Units with the same name.** Many districts have a reporting unit called "District HQ", "DHQ" or "Notional Private Facilities". Across India, 86 such names are shared by 463 reporting units. An earlier cleaned copy of this data, built before I went back to the original files, had merged units that shared a name within a state. It looked complete and was internally consistent. It was also short of the official files by 15% of institutional deliveries and 23% of caesarean sections.

The deeper point is about architecture, not about my mistake. HMIS reporting units are identified by name. A name is not an identifier. Systems that give every facility and administrative unit a stable unique code, such as India's Local Government Directory codes for administrative units or the Health Facility Registry under the Ayushman Bharat Digital Mission, remove this whole class of error.

## What the data says about health services

**Births.** Of 21.4 million reported deliveries, 94.5% happened in a health facility, and almost a third of facility births were in private facilities.

<figure class="chart"><iframe src="/charts/hmis/deliveries-sankey.html" title="Where deliveries happened, 2019-20" loading="lazy" style="height:440px"></iframe><figcaption>Where 21.4 million reported deliveries happened in 2019-20, and how many were caesarean sections. Hover for numbers.</figcaption></figure>

The caesarean rate was 14% in public facilities and 34% in private ones. That national gap hides very different states. In Bihar, 2% of public facility births were caesareans, a rate low enough to suggest women who need one may not be getting it. In West Bengal's and Jammu and Kashmir's private facilities, the reported rate was 80% and 89%. WHO's 2015 statement on caesarean rates found that, at population level, rates above about 10% are not associated with lower maternal and newborn mortality. Both ends of this range deserve a closer look.

<figure class="chart"><iframe src="/charts/hmis/caesarean-public-private.html" title="Caesarean sections, public and private" loading="lazy" style="height:640px"></iframe><figcaption>Caesarean sections per 100 facility births, public and private, by state (states with at least 5,000 births in each sector).</figcaption></figure>

**Seasons.** Monthly totals show the epidemiological calendar clearly. Dengue cases peaked in October at nearly three times their monthly average; malaria in September at 1.7 times. Childhood diarrhoea peaked in July, with the monsoon; childhood pneumonia in December. Deliveries rose from August to October, a seasonality of births seen in many countries. Pentavalent vaccinations surged in January and February, which coincided with the intensified immunisation rounds of that winter. March 2020, whose last week fell under the first COVID-19 lockdown, shows outpatient visits and deliveries about 8-9% below average.

<figure class="chart"><iframe src="/charts/hmis/monthly-patterns.html" title="The year, month by month" loading="lazy" style="height:460px"></iframe><figcaption>Monthly totals, each relative to its own yearly average (100). Blue: services; red: diseases.</figcaption></figure>

**Family planning.** Facilities reported 3.4 million female sterilisations and 54,815 vasectomies: 62 to 1. Spacing methods were substantial too, with 5.8 million IUCD insertions. The burden of permanent contraception in India's public programme falls almost entirely on women.

**Beyond maternal health.** Outpatient clinics recorded 34 million visits for diabetes, 40 million for hypertension and 6 million for mental illness. Emergency departments registered 60 million patients, including 4.9 million for trauma (accidents, injuries and poisoning, 8% of all emergency registrations), 259,000 for snakebite and 144,000 for burns. Malaria test positivity was highest in Mizoram (4.6%) and Chhattisgarh (2.7%).

## What the data says about the data

The same table that shows health services also shows how well the system records them.

**Reporting is complete; recording is uneven.** Almost no unit was silent: in a typical month, one or two of 6,717 units reported nothing at all. But completeness of reporting is not completeness of information.

**Causes of death are mostly unknown.** Of 2.3 million adolescent and adult deaths reported, 49% were recorded as "causes not known". For maternal deaths, 69% fell under "other causes, including causes not known". A death count without a cause tells a programme that something happened, but not what to do about it.

<figure class="chart"><iframe src="/charts/hmis/adult-death-causes.html" title="What deaths were recorded as" loading="lazy" style="height:440px"></iframe><figcaption>Adolescent and adult deaths reported to HMIS in 2019-20, by recorded cause.</figcaption></figure>

**Deaths are under-recorded, unevenly.** HMIS recorded 19,283 maternal deaths against 21.2 million recorded live births: 91 per 100,000. The Sample Registration System, India's official source, put the maternal mortality ratio at 103 for 2017-19. For infants, the gap is much larger: HMIS recorded about 11 infant deaths per 1,000 live births, against an official infant mortality rate of 30 in 2019. Most infant deaths happen at home or in the community, where a facility-based system does not see them.

**More vaccinations than births.** HMIS recorded 113 BCG doses and 120 first measles-rubella doses for every 100 live births it recorded. Children are not vaccinated twice; the denominator is incomplete. Births outside the reporting system, in private hospitals that do not report and among migrant families, are vaccinated in public facilities but never counted as births. Coverage calculated from HMIS alone can exceed 100% for this reason.

**The private sector is barely visible.** Private facilities accounted for 32% of reported facility births and 53% of caesareans, but only 5% of outpatient visits and 6% of laboratory tests. Private reporting to HMIS is strongest where programmes have pushed for it, around births, and thin elsewhere.

<figure class="chart"><iframe src="/charts/hmis/private-share.html" title="What the private sector reports" loading="lazy" style="height:320px"></iframe><figcaption>Share of each service's reported volume that came from private facilities, 2019-20.</figcaption></figure>

**Parts larger than their whole.** Some items are subsets of others: babies weighed cannot exceed babies born, positive tests cannot exceed tests done. I ran 18 such checks on every unit and month: 1.03 million comparisons. Only 1.1% failed, but half of all reporting units (3,344 of 6,713) failed at least once during the year. The most common failures were newborns weighed exceeding live births (5% of unit-months) and hypertension cases managed exceeding those detected (3%).

**The form itself.** Of 285 data items, 47 had a number above zero in fewer than 5% of all reports, and 23 in fewer than 1%. Some of these are rare events that should be rare, such as deaths after sterilisation. Others may simply not be used. Every item on a monthly form costs a health worker time, every month, in every facility.

<figure class="chart"><iframe src="/charts/hmis/item-use.html" title="How much each data item is used" loading="lazy" style="height:340px"></iframe><figcaption>The 285 HMIS data items, grouped by how often they carry a number above zero.</figcaption></figure>

## The system is a business process

It is tempting to treat these as data-cleaning problems. They are mostly process problems. A monthly aggregate form is compiled by a facility nurse or data operator from registers, often at the end of a long day, entered at block level, and checked, if at all, by people who are also running programmes. Each finding above points to a process fix, which is our interpretation:

- **Validation at entry.** The 18 consistency checks here are simple rules. Run at the moment of entry, with a prompt to correct or explain, they cost almost nothing and catch errors when the person who knows the answer is still at the desk.
- **Fewer, better items.** A form that drops or merges rarely used items gives staff time back for the items that matter, such as the cause of death.
- **Identifiers, not names.** Linking every reporting unit to a registry code would end the merging and double counting that silently distort totals.
- **Counting what happens outside the facility.** Deaths and births in the community are where HMIS is weakest. Civil registration and community health worker reporting are the routes to closing that gap, and linking them is a digital health task.

## Where AI and predictive models fit

**Finding unusual values.** I ran a simple, transparent anomaly detector on 23 headline items: for each unit and item, compare every month with that unit's own median, and flag values far above it (more than ten times the typical deviation, more than three times the median and at least 50 above it). It flagged 10,869 of 1.8 million values, in 3,598 units. Some flags are real events, such as a camp or a new service. Others look like recording errors: one block reported exactly the same outpatient figure, 5,611, in four different months, and zero in most others; several blocks with a usual monthly caesarean count of zero reported hundreds in a single month. A flag is not a finding. It is a prompt for a district data manager to make a phone call, and a tool that produced a short list of such prompts each month would be useful today.

**Forecasting for supplies and staff.** The seasonal patterns of dengue, malaria and diarrhoea are clear even in one year of data. With several years, forecasting monthly caseloads by district to pre-position test kits, ORS and zinc, or to plan staff leave, is a well-understood modelling task and a good use of routine data.

**What these data cannot do.** HMIS is aggregate and monthly. It has no individual patients, so it cannot predict which woman is at risk or which child will drop out of immunisation; those models need individual-level records with consent and governance. Models trained on HMIS also inherit its gaps: an outbreak model will not see deaths that were never recorded.

**Language models on top of the data.** An obvious idea is a chatbot that answers a district officer's question, "How did my district do on full immunisation this quarter?", in plain language. It can work, if the numbers come from a query like the ones in this article and the model only writes the sentence around them. My evaluation of an open medical AI model found it confidently wrong on guideline numbers and invented things that do not exist; a model allowed to generate health statistics on its own would do the same.

[TO ADD: personal paragraph. For example: how you used HMIS in your government work, a moment when a data problem changed a decision, or what district officers told you about the form.]

## Limits

- **One year.** April 2019 to March 2020. Patterns such as seasonality should be checked across years.
- **What HMIS records is not what happens.** All figures are as reported. Coverage, death and private-sector figures are particularly affected by under-recording.
- **Checks find inconsistencies, not truth.** A value can pass every check and still be wrong.
- **District totals as published.** I used blocks; the district totals in the files matched them exactly.
- **Missing file.** Nawanshahr (Punjab) has no April 2019 file.

## Sources

- Ministry of Health and Family Welfare. Health Management Information System, item-wise monthly reports by district, 2019-20 (HMIS portal).
- Ministry of Health and Family Welfare, Press Information Bureau releases on the Sample Registration System: maternal mortality ratio 103 for 2017-19 (Special Bulletin on Maternal Mortality, Registrar General of India) and infant mortality rate 30 for 2019 (SRS Bulletin).
- World Health Organization. WHO statement on caesarean section rates. 2015.
- Ministry of Panchayati Raj. Local Government Directory. National Health Authority. Health Facility Registry, Ayushman Bharat Digital Mission.

SQL views and code available on request.

*Views are my own.*
