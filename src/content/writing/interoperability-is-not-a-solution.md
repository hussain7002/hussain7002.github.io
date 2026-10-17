---
title: "\"Make it interoperable\" means more than you think"
summary: "Interoperability is often asked for as if it were a feature. It is a whole discipline, of shared identifiers, definitions and ownership, and the commercial world learned it decades ago."
topic: "Health data"
minutes: 10
featured: false
draft: false
keyPoints:
  - "\"We have to make it interoperable\" is easy to say. Underneath it are shared identifiers, shared definitions, shared records and someone who owns them."
  - "Two portals can both be right and still disagree, for example when one holds name-based line lists and the other holds facility totals."
  - "The commercial world learned this through the relational database, the idea that made Oracle. Interoperability is the same discipline, applied between systems."
image: "/img/writing/interoperability-is-not-a-solution.webp"
imageAlt: "Three systems naming the same facility differently, joined through a master facility list"
caption: "Three spellings, one facility. Linking starts with a shared identifier, not with an API."
credit: "Diagram: Hussain MS · illustrative facility"
---

In almost every digital health meeting I attend, someone says it: "We have to make it interoperable." Heads nod. Someone mentions APIs, someone mentions FHIR, and the meeting moves on, reassured.

Interoperability is essential. But the sentence is usually said as if interoperability were a feature that could be added at the end, like a new button. It is not. It is closer to a discipline: a set of agreements about what things are called, how they are identified, what each number means and who keeps the lists up to date. When those agreements exist, connecting systems is the easy part. When they do not, connecting systems simply moves inconsistent data around faster.

I did not learn this from a textbook. I learned it with a spreadsheet.

## Data by hand

Like many people who work with public health data, I have spent a lot of time downloading data from government portals and trying to make sense of it. The sheets that come out of most portals are built for viewing, not analysis: merged headers, totals mixed in with rows, district names spelled three ways, indicators labelled with codes that only make sense if you already know them.

So the first job is never analysis. It is understanding. What does each field actually count? Is "registered" the first contact, or the first full check-up? Which rows are totals? Where are the blanks, and do they mean zero or missing? Only after that can cleaning begin.

Then comes the moment that taught me the most. I had two portals that both reported pregnancies for the same district and the same months. The numbers did not match, and not by a little. For a while I assumed one of them was wrong.

Neither was. One was a **line list**: a name-based record of each pregnant woman, entered as she was registered and followed up. The other was a **facility aggregate**: monthly totals reported by each health facility. They counted differently, at different moments, through different people, for different purposes. Both were correct by their own rules. They simply could not be laid on top of each other without understanding those rules first.

That is the gap that "make it interoperable" skips over. The problem was not that the two systems lacked a connection. It was that they did not share a definition, a unit or a moment of counting.

## What the sentence actually asks for

When someone asks for two health systems to be interoperable, they are usually asking for all of these, whether they realise it or not:

- **Shared identifiers.** The same facility must carry the same code in every system. "PHC Rampur", "Rampur PHC" and "Rampur P.H.C." are three different strings to a computer. Without a master list of facilities, health workers and people, with stable identifiers, nothing joins reliably.
- **Shared definitions.** If one programme counts a pregnancy as registered at first contact and another at the first full antenatal check-up, their totals will never agree, however good the connection.
- **Shared records, where linking matters.** You cannot link totals. You can only put them side by side. Following a woman through pregnancy needs records about her, not just counts.
- **Owners for the reference data.** Facilities open, close, upgrade and change names. If nobody is responsible for keeping the master lists right, they decay within a year.
- **Agreement between organisations.** Who may see what, who pays to maintain the link, and what happens when one side changes its system.

HIMSS, the health information society, describes interoperability at four levels: **foundational** (systems can connect and exchange data), **structural** (the format of the data is agreed), **semantic** (its meaning is agreed, through shared terminologies), and **organisational** (the governance, policy and social considerations that make exchange work). Most of the vocabulary in our meetings sits at the first two levels. Most of the difficulty sits at the last two.

## A lesson from the commercial world

None of this is new. The commercial world worked through the same problem decades ago, and it made one of the largest software companies in the world.

In 1970, Edgar F. Codd, a researcher at IBM, published a paper proposing the **relational model** of data. Its ideas sound obvious now, which is a measure of how completely they won. Every real thing, such as a customer, a product or an order, is stored as a table with defined attributes. Every record has a **key** that identifies it uniquely. Relationships between records are explicit. Each field has one meaning, and the system enforces rules about what data is allowed. Programs ask for data in a standard way, without needing to know how it is physically stored.

IBM built a research prototype, System R, to test the ideas. But it was a small company founded in 1977 by Larry Ellison, Bob Miner and Ed Oates that moved fastest to sell them. Drawing on Codd's work and the published research, they released their database in 1979 as one of the first commercially available relational databases using SQL, the query language that grew out of IBM's research. (They called it "Version 2", reportedly because customers would be wary of a first release.) The company was later renamed after its product: Oracle.

Oracle grew because it got to market early, because its database could run on many different machines, and because it bet on SQL, which went on to become the industry standard. But the deeper reason relational databases took over is what they made possible inside organisations: one agreed set of definitions, one way to identify each thing, rules that kept data consistent, and a common language for asking questions. A bank's branches, a manufacturer's factories and an airline's booking offices could finally work from the same data.

That is exactly what interoperability asks of a health system. **It is the relational discipline, applied between systems instead of within one.** Two portals can only exchange data meaningfully if they agree, at least at the boundary, on the same things a well-designed database insists on internally: what each entity is, how it is identified, what each field means and who maintains it.

## Where standards fit

People sometimes hear this and say: that is what standards like HL7 FHIR are for. Partly, and they matter a great deal. A standard gives everyone a common shape for a patient, a facility or an observation, and a common way to request them.

But a standard defines the **shape** of the data, not its **truth**. A FHIR message will carry a facility record with the wrong identifier, or an indicator built on a local definition nobody else shares, just as faithfully as a correct one. Standards make agreement possible. They do not make it happen.

Registries help here. In India, the components of the Ayushman Bharat Digital Mission include a Health Facility Registry, a Healthcare Professionals Registry and the Ayushman Bharat Health Account (ABHA) Number, which ABDM describes as a way of accessing and sharing your health records digitally. These are the kind of shared keys that interoperability depends on. They help most when every programme system uses them as its key, rather than as one more field to fill in.

## The questions underneath

So the next time someone says "we have to make it interoperable", it is worth asking what is underneath the sentence. Which identifier will both systems use for the same facility? Whose definition of the indicator will we use? Are we linking records, or comparing totals? And who will own the master list next year?

If those questions have answers, interoperability is within reach, and the technical work will follow. If they do not, the real work has not started yet. It is less glamorous than an integration platform. It is also the work that every successful data system, in health or in commerce, has had to do first.

*Views are my own.*

## Sources
- [E. F. Codd (1970), A Relational Model of Data for Large Shared Data Banks, *Communications of the ACM*](https://doi.org/10.1145/362384.362685)
- [Computer History Museum, The relational database and the rise of SQL](https://www.computerhistory.org/revolution/memory-storage/8/265)
- [HIMSS, Interoperability in healthcare](https://www.himss.org/resources/interoperability-healthcare)
- [Ayushman Bharat Digital Mission](https://abdm.gov.in/)
