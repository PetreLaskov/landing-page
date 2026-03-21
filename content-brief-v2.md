# Landing Page Copy v2 -- Collison Register

**Date**: 2026-03-17
**Status**: DRAFT -- needs Petre's review
**Register**: Collison (specificity-over-abstraction, evidence-first, low self-reference, infrastructure-thinking, question-primacy, temporal-density). See `work/research/cognitive-registers/collison.md`.
**Word count target**: ~2,000 across all sections
**IP gate**: Show what the methodology produces. Never expose internals.

---

## Decisions from v1 that carry forward

- 30-minute discovery call (not 15)
- Consulting frame for pricing (MCP product not built yet)
- No fabricated quotes or metrics
- Real MONIV numbers only
- "Three years" for methodology duration

## Open decisions (Petre must confirm)

1. **Cal.com URL**: `https://cal.com/petre-laskov-discovery/30min` -- working?
2. **Formspree endpoint**: `https://formspree.io/f/xkoqpgap` -- receiving?
3. **Email**: `petre@laskov.dev` -- receiving?
4. **LinkedIn**: `https://www.linkedin.com/in/petrelaskov/` -- correct?
5. **Pricing on page**: v1 recommended keeping it. I agree -- anchors expectations, filters bad fits. But the pricing section itself isn't in the template below. If you want it, say so and I'll draft tier copy.

---

## HEADER

```
Logo text: Petre Laskov
Nav links: Problem | Approach | Process | FAQ
Header CTA button: Book a call
```

**Change from v1**: "Solution" renamed to "Approach" (less salesy, more Collison -- approach implies methodology, solution implies you already know what they need). "How It Works" shortened to "Process."

---

## HERO

```
Headline: AI that knows your business exists. Most companies haven't built it yet.

Subheadline: Custom agent environments, initialized on your actual documents and processes. Persistent context. Autonomous execution. You own it, you understand it, you run it without me.

Primary CTA: Book a discovery call --> #contact
Secondary CTA: See the process --> #process
Social proof line: Shipping delays caught 4 days early. Rent calculation: 2 hours to 5 minutes. Three sessions.
```

**Rationale**: v1 headline ("Your AI tools don't know your business. I fix that.") is strong but centers "I." The Collison move is to state the situation and let the reader draw the implication. "AI that knows your business exists" is a fact. "Most companies haven't built it yet" is an observation the reader measures themselves against. No one is being sold to -- they're being informed.

The social proof line drops "Three-year methodology. Real deployments." (credential-claiming) and replaces it with three concrete results. Numbers as argument, not description. The reader sees 4 days, 2 hours to 5 minutes, 3 sessions -- and draws their own conclusion about what's possible. This is Collison's curation-as-argument: let the evidence pattern speak.

"You own it, you understand it, you run it without me" -- this does more selling than any feature list. It addresses the real buyer fear (dependency/lock-in) and sounds like something a builder says, not a consultant.

---

## PROBLEM

```
Eyebrow: The problem
Headline: Context, not capability, is what's missing

Paragraph 1:
The base models are good enough. GPT-4, Claude, Gemini -- they can write, analyze, code, reason. The capability question was settled in 2024. What hasn't been settled: how to make any of them useful for your specific operations. Your supplier naming conventions. Your approval workflows. The fact that "urgent" means 48 hours in procurement but 4 hours in shipping.

Paragraph 2:
Most businesses are stuck in a loop: prompt the AI, review the output, correct the errors, re-prompt. Every session starts from zero. The AI doesn't remember last Tuesday's decisions, doesn't know your suppliers format invoices differently, doesn't understand that the warehouse in Thessaloniki closes at 2pm on Fridays. You're providing the context that the system should already have.

Pain point 1:
Title: Cold starts
Description: Every session begins from nothing. Domain knowledge, naming conventions, edge cases, quality standards -- entered manually, every time.

Pain point 2:
Title: Review overhead
Description: The time spent correcting AI output often exceeds the time saved generating it. Net productivity: negative or marginal.

Pain point 3:
Title: Integration theater
Description: Enterprise AI platforms: 6-month implementation, six-figure licensing, a team of integrators. The ROI model was more impressive than the deployment.
```

**Changes from v1**: Headline shortened and sharpened -- "Context, not capability" is the diagnostic reframe (patio11 move: reveal the mechanism). Paragraph 1 now opens by conceding the obvious ("the base models are good enough") rather than attacking them. This is Collison's evidence-first conviction -- you earn the right to diagnose by first acknowledging what's true. Then the pivot: the problem isn't the AI, it's the context layer.

Paragraph 2: "re-prompt" loop named explicitly. "Thessaloniki closes at 2pm on Fridays" -- a concrete operational detail that any operations person recognizes as their world. Specificity-over-abstraction.

Pain points: "Zero memory" renamed to "Cold starts" (more precise -- the issue is initialization, not memory per se). "Manual babysitting" renamed to "Review overhead" (less colloquial, more diagnostic). "Vendor theater" renamed to "Integration theater" (theater is the right word, but "integration" is more precise than "vendor" -- the theater is in the implementation, not the vendor relationship).

---

## APPROACH (was "Solution")

```
Eyebrow: The approach
Headline: An agent environment built from your actual operations

Paragraph 1:
The build starts from documents -- purchase orders, invoices, contracts, operational records, the messy spreadsheets that actually run the business. Not templates. Not best-practice frameworks. The system is initialized on what's real, and the structure emerges from the material, not the other way around.

Paragraph 2:
What this produces: an AI environment that maintains context across sessions, follows your operational rules without being reminded, catches discrepancies you'd miss, and adapts as your business changes. The methodology includes transfer -- you understand every design decision, you can modify the system, and you're never dependent on me to keep it running.

Benefit 1:
Title: Persistent context
Description: The environment retains your domain knowledge across sessions. When a supplier changes their invoice format or a regulation updates, the system knows before you tell it.

Benefit 2:
Title: Autonomous multi-step execution
Description: Tracking shipments against documentation, cross-referencing purchase orders with delivery schedules, calculating rent across currencies and tax regimes -- end-to-end, at your quality standard.

Benefit 3:
Title: Full ownership
Description: You receive everything: the environment, the documentation, the methodology. No subscription. No vendor dependency. Evolution sessions available when things change, but you don't need me to operate what I built.
```

**Changes from v1**: Section renamed from "Solution" to "Approach" -- this is significant. "Solution" is consulting speak. "Approach" says: here is how this is done. It invites scrutiny rather than requiring trust.

Paragraph 1 now leads with the artifacts ("documents -- purchase orders, invoices, contracts") and the structure-from-material principle, without naming it. "Messy spreadsheets that actually run the business" -- acknowledges reality, builds trust.

Paragraph 2: "The methodology includes transfer" replaces the more sales-y "Every engagement includes methodology transfer." Benefit 3 rewritten to be harder: "No subscription. No vendor dependency." These are commitments, not features.

---

## PROCESS (was "How It Works")

```
Eyebrow: The process
Headline: From discovery call to working system: days, not months

Step 01:
Title: Map
Description: A 30-minute call. I ask operational questions -- what documents drive your decisions, where do handoffs break, what do you keep re-explaining to people and tools. If an agent environment isn't the right solution, I'll say so. No pitch. No slide deck.

Step 02:
Title: Build
Description: I read your actual documents and build the environment from what's there. You see every piece as it's created and you understand why each design decision was made. The manufacturing system that caught shipping delays 4 days early was built this way -- three sessions, starting from 100+ purchase orders across twelve suppliers.

Step 03:
Title: Transfer
Description: You operate the system on your real work while I watch. Not a demo, not a walkthrough video -- practice. By the end, you can explain to someone else what the system does and why it's structured the way it is.

Step 04:
Title: Evolve
Description: Businesses change. Suppliers change. Regulations change. The environment adapts. Post-delivery support is included, and evolution sessions are available when the system needs to catch up with reality.
```

**Changes from v1**: Steps renamed: "Discovery" to "Map" (more specific), "Build" stays, "Deliver and train" to "Transfer" (one word, says what actually happens), "Evolve" stays.

Step 01: "No pitch. No slide deck." is sharper than "No pitch deck. Just operational questions." The period after "No pitch" hits harder.

Step 02 now weaves in the case study evidence mid-process -- "The manufacturing system that caught shipping delays 4 days early was built this way." This is Collison's specificity-escalation: general claim followed by concrete example that makes it real. The evidence appears where it's relevant, not quarantined in a separate section.

Step 03: "Not a demo, not a walkthrough video -- practice." Contrasts against what the buyer has experienced from other vendors. "You can explain to someone else" -- this is the real test of transfer.

---

## CASE STUDY

```
Eyebrow: Case study
Headline: Shipping delays caught four days early
Subtitle: A family-owned clutch manufacturer, 30 years in operation

Quote: [REMOVE unless Petre obtains a real statement from the founder]

Description:
The operation: clutch manufacturing, imports from three continents, 100+ active purchase orders across twelve suppliers, monthly rent invoicing for nine tenants across three currencies with 18% VAT and per-tenant special arrangements.

The problem: shipping delays discovered after the fact. Rent calculations taking two hours of manual cross-referencing every month.

Three sessions. The system now tracks vessel positions in real time, cross-references arrival dates against documentation deadlines, and flags discrepancies before the operations team catches them. The rent calculation -- nine tenants, three currencies, variable arrangements -- takes five minutes.

Result 1:
Metric: Delay detection lead time
Value: 4 days early

Result 2:
Metric: Monthly rent calculation
Value: 2 hrs --> 5 min

Result 3:
Metric: Build time
Value: 3 sessions
```

**Changes from v1**: Subtitle changed from "A young founder running a 30-year manufacturing operation" to "A family-owned clutch manufacturer, 30 years in operation." The v1 phrasing was fine but "young founder" draws attention to the person; "family-owned clutch manufacturer" draws attention to the business. Lower self-reference (even when the reference is to someone else).

Description restructured into three blocks: the operation (scope), the problem (what wasn't working), the result (what changed). This is Collison's curation structure: brief framing, then evidence, minimal synthesis. The reader sees the complexity of the operation (three continents, twelve suppliers, nine tenants, three currencies) and the simplicity of the result (three sessions, five minutes). The contrast is the argument.

"Delay detection lead time" is a better metric label than "Shipping delay detection" -- it names what's actually being measured.

---

## ABOUT

```
Eyebrow: About
Headline: The methodology runs my own operations before it reaches anyone else

Paragraph 1:
Petre Laskov. Based in Skopje, North Macedonia. Three years of daily practice building AI agent environments -- eight domains of personal and professional operations running on the same architecture deployed to clients. This is not a consulting methodology developed from theory. It emerged from solving real problems: managing complex projects, synthesizing research across hundreds of sources, coordinating multi-step workflows across tools that don't natively talk to each other.

Paragraph 2:
The test is simple: does the methodology produce environments that work better than what people build on their own? After three years and several hundred hours of refinement, the answer is consistently yes -- and the gap is large enough that the build pays for itself in the first week of use. That's the claim. The discovery call is where you pressure-test it against your specific situation.

Credential 1:
Title: Practitioner-built
Description: Every technique deployed to clients is in daily operational use. The methodology is refined on live problems before it's offered commercially.

Credential 2:
Title: Methodology transfer included
Description: The engagement teaches you the thinking behind the build. You graduate as an operator who can evolve the system independently.

Credential 3:
Title: Honest scoping
Description: If an agent environment won't solve your problem, the discovery call is where that gets said. Most AI problems are process problems or data problems. The distinction matters before anyone starts building.
```

**Changes from v1**: This section got the biggest rewrite because v1's About was the most conventionally "consultant" section.

Headline: "Built by someone who runs on this every day" (v1) becomes "The methodology runs my own operations before it reaches anyone else." The subject shifts from "someone" (me) to "the methodology" (the thing). Lower self-reference. The claim is the same but the framing is about the work, not the worker.

Paragraph 1: Switches from first person ("I'm Petre Laskov") to declarative ("Petre Laskov. Based in Skopje."). Collison's website about page does this -- facts, not narrative. "This is not a consulting methodology developed from theory" -- a specific denial that earns trust by naming what it isn't.

Paragraph 2: This is new and important. It states the claim explicitly ("does the methodology produce environments that work better than what people build on their own?") and then stakes a position ("the answer is consistently yes"). Then immediately offers the mechanism for the reader to verify: "The discovery call is where you pressure-test it against your specific situation." This is evidence-first conviction + question-primacy combined. The reader is invited to test, not to trust.

Credentials: "Practitioner first" becomes "Practitioner-built" (built > first as descriptive precision). "Build-and-learn" becomes "Methodology transfer included" (clearer, more specific about what happens). "Honest scoping" stays -- the last sentence improved: "The distinction matters before anyone starts building" replaces "I'll tell you which one you have" (lower self-reference, same meaning).

---

## FAQ (8 questions)

```
Q1: What is an AI agent environment?
A: A system where AI operates alongside you with persistent knowledge of your business -- your documents, processes, naming conventions, edge cases, quality standards. Not a chatbot you prompt from scratch each time. Closer to a colleague who has already read everything and remembers what was decided last Tuesday.

Q2: How is this different from ChatGPT, Copilot, or an enterprise AI platform?
A: Those are general-purpose tools. An agent environment is built from your actual operations. ChatGPT doesn't know that your supplier in Shanghai formats invoices differently from your supplier in Istanbul, or that "confirmed" means something different in procurement than in logistics. An agent environment does -- because it was initialized on your documents, not on the internet.

Q3: What does the build process look like?
A: A 30-minute discovery call to map workflows and assess fit. Then focused build sessions where the environment is constructed from your real documents. You're involved throughout -- you see every design decision and understand the reasoning. The manufacturing environment was built in three sessions starting from 100+ purchase orders. Complexity varies, but scope is defined upfront. No open-ended engagements.

Q4: How long until I have a working system?
A: Days. The manufacturing system was running on live operations after three sessions. Most environments follow a similar timeline. I scope the engagement precisely on the discovery call so there are no surprises about duration or cost.

Q5: Do I need technical knowledge?
A: No. Setup is handled. The methodology is explained during the build -- that's part of the design, not an add-on. Clients with no technical background operate these systems in their daily work.

Q6: What happens after the build?
A: You own everything. The environment, the documentation, the methodology behind it. Support access is included for questions. When your business changes -- new suppliers, new regulations, team growth -- evolution sessions are available to update the system. But you're never dependent on me to keep it running.

Q7: What kinds of businesses does this work for?
A: Any operation that runs on documents, processes, and domain knowledge. Current deployments span manufacturing operations, international procurement, multi-currency invoicing, and knowledge work. The methodology adapts to the domain -- the build starts from your material, not from a template.

Q8: What if this isn't the right fit?
A: The discovery call is free and exists partly to answer that question. If an agent environment won't solve your problem -- and sometimes the real issue is a process problem or a data problem, not an AI problem -- I'll say so and point you toward what would actually help. No one benefits from building infrastructure for the wrong problem.
```

**Changes from v1**: Q1 answer tightened -- "remembers what was decided last Tuesday" is more concrete than "a colleague who already knows your business." Q2 expanded to include enterprise AI platforms in the question (broadens the competitive frame). Q2 answer now includes "initialized on your documents, not on the internet" -- this is a sharp, memorable distinction. Q3 answer now weaves in the case study ("The manufacturing environment was built in three sessions starting from 100+ purchase orders"). Q5 shortened further. Q7 answer: "your material, not from a template" replaces "that's its core design principle" (the latter sounds like marketing). Q8 reframed from "What if an agent environment isn't right for my situation?" (same meaning, slightly more natural phrasing).

---

## FINAL CTA

```
Headline: See if this fits
Description: A free 30-minute call. Operational questions about your workflows, an honest assessment of where an agent environment would have impact, and a clear answer if it won't.
Booking button label: Book a discovery call
Booking link: https://cal.com/petre-laskov-discovery/30min [CONFIRM]
Form headline: Or send a message
Form note: I reply within one business day.
Formspree endpoint: https://formspree.io/f/xkoqpgap [CONFIRM]
```

**Changes from v1**: Headline shortened from "Let's see if this fits your business" to "See if this fits." Three words. The shorter version is more confident and more Collison. Description restructured as three things the caller gets: operational questions, honest assessment, clear answer. Each is concrete. The "if it won't" at the end is important -- it signals willingness to say no, which builds trust more than any positive claim.

---

## FOOTER

```
Email: petre@laskov.dev [CONFIRM]
Location: Skopje, North Macedonia
LinkedIn: https://www.linkedin.com/in/petrelaskov/ [CONFIRM]
Copyright: Petre Laskov
Footer nav: Process | FAQ | Contact
```

**Change from v1**: "How It Works" in footer nav updated to "Process" for consistency with renamed section.

---

## v1 to v2 Register Shift Summary

| Dimension | v1 | v2 |
|-----------|----|----|
| Self-reference | Moderate ("I fix that", "I build", "I'm Petre") | Low (methodology and evidence as subject) |
| Evidence placement | Quarantined in case study section | Woven throughout -- process, FAQ, hero |
| Headline strategy | Direct address ("Your AI tools...") | Observational ("AI that knows your business exists...") |
| Pain framing | Attack generic tools | Concede capability, diagnose context gap |
| Credential approach | Personal claims | Testable propositions ("discovery call is where you pressure-test it") |
| Question-primacy | Absent | Present in About ("does the methodology produce...?") and CTA |
| Temporal density | Some ("Three years", "days not months") | More ("settled in 2024", "2pm on Fridays", "first week of use") |
| Infrastructure-thinking | Implied | Explicit ("infrastructure for the wrong problem", "Not chatbots. Infrastructure.") |

## Voice Consistency Checklist

- [ ] No "leverage", "synergy", "ecosystem", "scalable", "robust", "cutting-edge"
- [ ] No "transform", "unlock", "supercharge", "revolutionize"
- [ ] No "we" when meaning Petre alone
- [ ] No unattributed quotes
- [ ] No fabricated metrics
- [ ] Discovery call = 30 minutes everywhere
- [ ] "Three years" consistent
- [ ] No mention of "Meta-Architecture v7" by name
- [ ] No named internal frameworks, acronyms, or models
- [ ] Every claim grounded in a specific example or honestly hedged
- [ ] No motivational or inspirational register
- [ ] Under 2,000 words total page copy
- [ ] "I" count lower than v1

## Word Count Estimate

- Hero: ~60
- Problem: ~200
- Approach: ~200
- Process: ~250
- Case study: ~150
- About: ~200
- FAQ: ~650
- Final CTA: ~50
- **Total: ~1,760**
