# Landing Page Content Brief — Final Copy

**Date**: 2026-03-17
**Status**: DRAFT — needs Petre's review before copy.ts update
**Purpose**: Phase 9 polish. Every field has real copy. Replaces placeholders and tightens language.

---

## Decisions for Petre (resolve before implementation)

1. **Cal.com URL**: Currently `https://cal.com/petre-laskov-discovery/30min`. Is this set up and working? Is the slug correct?
2. **Formspree endpoint**: Currently `https://formspree.io/f/xkoqpgap`. Is this confirmed and receiving test submissions?
3. **Discovery call length**: copy.ts says 30 minutes, FAQ says 15 minutes, build plan says 15 minutes. Pick one. My recommendation: **30 minutes**. A 15-minute call with a stranger about a technical service is too short to build trust or do useful scoping. 30 is honest.
4. **Email address**: Currently `petre@laskov.dev`. Is this real and receiving mail?
5. **LinkedIn URL**: Currently `https://www.linkedin.com/in/petrelaskov/`. Confirm.
6. **Case study metrics**: The current copy fabricates "15+ hours saved weekly" and "8 workflows automated." I replaced these with real numbers from the MONIV engagement. If you have harder numbers, swap them in.
7. **Case study quote**: The current quote is made up. I replaced it with a description of what happened (no fabricated attribution). If you have a real statement from the young founder, use it. Otherwise the no-quote approach below is better than a fake one.
8. **"Three years" vs "two years"**: cyborgism-framing.md says three years. copy.ts says two. I used three. Confirm which is accurate.
9. **Pricing tier features**: The current pricing.ts has "1 guided build session (90 min)" for Personal. The MCP product design says "up to 15 sessions, 60-day window." These are different products (consulting vs. MCP self-serve). Which is the landing page selling? My read: the landing page sells consulting NOW (what you can deliver today), with MCP product coming later. I wrote the pricing for the consulting offer. Confirm.

---

## HEADER

```
Logo text: Petre Laskov
Nav links: Problem | Solution | How It Works | FAQ
Header CTA button: Book a call
```

**Notes**: Nav links are clean as-is. No additions needed. Pricing is deliberately absent from nav -- the page flows into it naturally and putting it in nav makes it feel like a product page rather than a consulting page.

---

## HERO

```
Headline: Your AI tools don't know your business. I fix that.
Subheadline: I build custom AI environments that encode your domain knowledge, your processes, and your standards -- so AI works the way your business does. Not chatbots. Infrastructure.
Primary CTA: Book a discovery call --> #contact
Secondary CTA: See how it works --> #how-it-works
Social proof line: Three-year methodology. Real deployments. Working systems in days, not months.
```

**Rationale**: Current headline ("AI that actually knows your business") is decent but passive. The rewrite makes Petre the actor and names the problem in the same breath. "I fix that" is PG register -- direct, unhedged. The subheadline does the work of explaining what "fix" means. "Infrastructure" at the end is the Collison move -- naming the real category.

---

## PROBLEM

```
Eyebrow: The problem
Headline: Most AI deployments fail at context, not capability

Paragraph 1:
You've tried ChatGPT. Maybe Copilot. Maybe a vendor who sold you an "AI-powered platform." They produce impressive demos and mediocre results -- because they don't know your processes, your data, or your standards.

Paragraph 2:
Every session is a cold start. Every output needs editing. The AI doesn't remember what you told it yesterday, doesn't know your suppliers format invoices differently, doesn't understand that "urgent" means something specific in your operations. You're doing the cognitive work the AI should be doing.

Pain point 1:
Title: Zero memory
Description: Generic tools start fresh every session. Your domain knowledge, naming conventions, quality standards, edge cases -- none of it carries over.

Pain point 2:
Title: Manual babysitting
Description: You spend more time correcting AI output than you save generating it. The "productivity gain" is a net loss once you count the review cycles.

Pain point 3:
Title: Vendor theater
Description: Enterprise AI platforms take months to integrate, cost six figures, and still need constant human oversight. The ROI deck was more impressive than the product.
```

**Changes from current**: Headline sharpened from "Generic AI tools waste more time than they save" (negative, about tools) to "Most AI deployments fail at context, not capability" (diagnostic, about the real cause -- this is the patio11 move of revealing the mechanism). Paragraph 2 now uses concrete operational language (suppliers, invoices, "urgent"). Pain point 3 renamed from "Empty promises" to "Vendor theater" -- more specific, more memorable.

---

## SOLUTION

```
Eyebrow: The solution
Headline: An AI environment designed around how your business actually works

Paragraph 1:
Instead of forcing your workflows into generic tools, I build a custom agent environment that starts from your actual documents -- purchase orders, invoices, contracts, operational records. The system is initialized on reality, not assumptions.

Paragraph 2:
The result: AI that maintains context across sessions, follows your rules without reminders, catches what you'd miss, and improves as your business evolves. You own it. You understand it. You're never dependent on me to keep it running.

Benefit 1:
Title: Persistent context
Description: Your environment remembers your domain, your preferences, your edge cases. When a supplier changes their invoice format, the system knows. No re-explaining.

Benefit 2:
Title: Autonomous execution
Description: Agents handle multi-step workflows end-to-end -- tracking shipments, cross-referencing purchase orders, drafting invoices -- with your quality standards built in.

Benefit 3:
Title: You own the capability
Description: Every engagement includes methodology transfer. You understand what was built, why each decision was made, and how to evolve the system as your needs change. No lock-in.
```

**Changes from current**: Paragraph 1 now names "actual documents" -- grounding in the artifacts-first principle (without naming the principle). Benefit 3 changed from "Proven methodology" (which name-drops Meta-Architecture v7 and feels like a claims) to "You own the capability" -- this is the real differentiator and what the buyer cares about. The methodology proves itself through results, not through being named.

---

## HOW IT WORKS

```
Eyebrow: How it works
Headline: Discovery to working system in days

Step 01:
Title: Discovery
Description: A 30-minute call where I map your workflows, identify where an agent environment will have the highest impact, and tell you honestly if this isn't the right solution. No pitch deck. Just operational questions.

Step 02:
Title: Build
Description: I read your actual documents and build the environment from what's there -- not from templates. You're involved throughout. I explain every design decision so you understand the system you're getting.

Step 03:
Title: Deliver and train
Description: You get a working system, documentation, and a guided walkthrough. You operate it with me watching, then independently. The handover isn't a Loom video -- it's practice on your real work until you're fluent.

Step 04:
Title: Evolve
Description: Your business changes. The environment adapts. Post-delivery support is included, and evolution sessions are available when workflows shift, tools change, or your team grows.
```

**Changes from current**: Step 01 rewritten -- "No pitch deck. Just operational questions" is concrete and differentiating. Step 02 now leads with artifacts-first (showing, not naming). Step 03 sharpened with "The handover isn't a Loom video" -- contrasts against what the buyer has experienced before. Step 04 renamed from "Support & iterate" (generic) to "Evolve" (active, forward-looking).

---

## CASE STUDY

```
Eyebrow: Case study
Headline: Shipping delays caught four days early
Subtitle: A young founder running a 30-year manufacturing operation

Quote: REMOVE -- or replace with factual description (see below)

Description:
A clutch manufacturing company running imports from three continents, 100+ purchase orders across twelve suppliers, and monthly rent invoicing for nine tenants. Three sessions. The system now tracks vessel positions in real time, cross-references arrival dates against documentation, and flags discrepancies before the operations team catches them. A rent calculation that took two hours of manual work -- nine tenants, three currencies, 18% VAT, special arrangements per tenant -- now takes five minutes.

Result 1:
Metric: Shipping delay detection
Value: 4 days early

Result 2:
Metric: Rent calculation time
Value: 2 hrs to 5 min

Result 3:
Metric: Time to operational system
Value: 3 sessions
```

**Critical change**: Removed the fabricated quote and fabricated metrics. The current copy.ts invents "15+ hours saved weekly" and "8 workflows automated" with no basis. The real MONIV numbers are specific and more credible -- "4 days early" is a concrete, memorable proof point that already went viral on LinkedIn (10K impressions). "2 hrs to 5 min" is a 24x improvement on a real task. "3 sessions" demonstrates speed. All real.

The headline "Shipping delays caught four days early" replaces the generic "A mid-size manufacturer" -- it leads with the outcome, not the category.

**On the quote**: The current page has a fabricated quote in quotation marks attributed to no one. This is worse than no quote. Options: (a) get a real statement from the young founder (best), (b) remove the quote block entirely and let the metrics + description carry the section (recommended for now), (c) use a factual statement in non-quote format like "The system caught a four-day shipping delay before the operations manager noticed it."

---

## ABOUT

```
Eyebrow: About
Headline: Built by someone who runs on this every day

Paragraph 1:
I'm Petre Laskov, based in Skopje. I build custom AI agent environments for businesses using a methodology I developed over three years of daily practice. Not research -- operational use. Eight domains of my own life and work run on the same architecture I build for clients.

Paragraph 2:
The methodology emerged from solving real problems first -- managing complex projects, synthesizing research across hundreds of sources, coordinating multi-step workflows. When the systems I built for myself started producing reliably better outcomes than the tools everyone else was using, I started building them for others.

Credential 1:
Title: Practitioner first
Description: Every technique I use with clients, I use daily. The methodology powers my own operations before it reaches anyone else. I eat my own cooking.

Credential 2:
Title: Build-and-learn
Description: You're not buying a black box. Every engagement teaches you the methodology so you understand what you have and can evolve it independently.

Credential 3:
Title: Honest scoping
Description: If an agent environment won't solve your problem, I'll say so on the discovery call. Most AI problems are actually process problems. I'll tell you which one you have.
```

**Changes from current**: Headline sharpened from "Built by someone who uses this every day" to "runs on this every day" -- stronger commitment, echoes the "I run on it" angle from LinkedIn drafts. Paragraph 1 now says "three years" (consistent with cyborgism-framing.md). "Eight domains" is specific without naming them. Added "I eat my own cooking" to Credential 1 -- one of the strongest lines from the draft set. Credential 3 last sentence upgraded from "No upselling, no wasted time" (defensive) to "Most AI problems are actually process problems. I'll tell you which one you have" (diagnostic, patio11 register -- reveals the mechanism).

---

## FAQ (8 questions)

```
Q1: What is an AI agent environment?
A: A configured system where AI works alongside you -- not a chatbot you prompt, but an operational partner that reads your files, follows your processes, and maintains context across sessions. Think of the difference between a search engine and a colleague who already knows your business.

Q2: How is this different from ChatGPT or Copilot?
A: Generic tools are generic by design. An agent environment is built from your actual documents, processes, and standards. ChatGPT doesn't know that your supplier in Shanghai formats invoices differently from your supplier in Istanbul. An agent environment does, because it was initialized on that data.

Q3: What does the build process look like?
A: We start with a 30-minute discovery call to map your workflows. Then I build the environment in focused sessions, showing you each piece as it's created. You're involved throughout -- this isn't a black box. By the end, you understand what was built, why each decision was made, and how to extend it yourself.

Q4: How long until I have a working system?
A: Most environments are operational within days. The manufacturing system I built was running on real operations after three sessions. Timeline depends on complexity, but I scope it clearly upfront -- no open-ended engagements.

Q5: Do I need technical knowledge?
A: No. The environment runs on your machine and I handle setup. You learn the methodology during the build -- that's part of the value. Clients with zero technical background operate these systems daily.

Q6: What happens after the build is done?
A: You own everything. The environment lives on your machines, the methodology is documented, and you have support access for questions. When your business changes, evolution sessions are available to update the system.

Q7: What industries does this work for?
A: Any business that runs on documents, processes, and operational knowledge. Current work spans manufacturing operations, procurement, invoicing, and knowledge work. The methodology adapts to the domain -- that's its core design principle.

Q8: What if an agent environment isn't right for my situation?
A: I'll tell you on the discovery call. No charge, no obligation. Most AI problems are actually process problems or data problems. If yours is one of those, I'll say so and point you in the right direction. There's no point building infrastructure for a problem that has a simpler solution.
```

**Changes from current**: Q2 answer now uses a concrete example (Shanghai vs Istanbul supplier formats) instead of an abstract analogy. Q4 uses the real MONIV timeline. Q5 shortened -- removed the patronizing "part of the value is understanding" repeat. Q8 rewritten to replace "Can I try it before committing?" (weak, implies risk) with "What if it isn't right?" (stronger, more honest, surfaces the real concern). All answers tightened to remove hedge words and consultant-speak.

---

## FINAL CTA

```
Headline: Let's see if this fits your business
Description: Book a free 30-minute discovery call. I'll map your workflows, identify where an agent environment would have the highest impact, and tell you straight if it's not the right solution.
Booking button label: Book a discovery call
Booking link: https://cal.com/petre-laskov-discovery/30min [CONFIRM]
Form headline: Or send a message
Form note: I reply within one business day.
Formspree endpoint: https://formspree.io/f/xkoqpgap [CONFIRM]
```

**Changes from current**: Headline changed from "Ready to build your AI environment?" (assumes commitment) to "Let's see if this fits your business" (lower pressure, more honest -- matches the "honest scoping" credential). Description tightened. "No commitment" removed -- it's implied and saying it sounds defensive.

---

## FOOTER

```
Email: petre@laskov.dev [CONFIRM]
Location: Skopje, North Macedonia
LinkedIn: https://www.linkedin.com/in/petrelaskov/ [CONFIRM]
Copyright: Petre Laskov
Footer nav: How It Works | FAQ | Contact
```

No changes needed. Clean as-is.

---

## Voice Consistency Checklist (Phase 9)

- [ ] No instance of "leverage", "synergy", "ecosystem", "scalable", "robust"
- [ ] No instance of "we" when meaning just Petre (use "I")
- [ ] No unattributed quotes
- [ ] No fabricated metrics
- [ ] Discovery call length consistent throughout (30 min everywhere)
- [ ] "Three years" consistent throughout
- [ ] No mention of "Meta-Architecture v7" by name (the methodology proves itself through results)
- [ ] Every claim backed by a specific example or removed
- [ ] PG register: direct, unhedged, concrete
- [ ] Under 2,000 words total page copy

---

## Implementation Notes

All copy lives in three data files:
- `/home/pece/landing-page/src/data/copy.ts` -- all section content
- `/home/pece/landing-page/src/data/faq.ts` -- FAQ questions and answers
- `/home/pece/landing-page/src/data/pricing.ts` -- tier features and descriptions

After Petre confirms the decisions above, update these three files. No component changes needed -- the components already read from data files.

### Pricing.ts needs a decision

The current pricing.ts describes a consulting service (guided build sessions, 90 min). The MCP product design describes a self-serve product (up to 15 sessions, 60-day window). The landing page should sell what Petre can deliver TODAY -- which is consulting. The MCP product isn't built yet.

If consulting is confirmed, the current pricing.ts features need minor tightening but the structure is correct. If the plan is to sell the MCP product, the features need a rewrite.

My recommendation: keep pricing on the page but reframe it as starting points, not rigid packages. The real CTA is the discovery call, where scoping happens. Pricing gives the buyer a mental anchor so they don't waste time if the budget doesn't fit.

### What the pricing cards should say (consulting frame)

```
Personal -- EUR 149
A single agent environment for your daily workflows. One build session. You learn the methodology as I build it.
- One agent environment, fully configured
- Core workflows mapped and automated
- Guided build session with methodology transfer
- Documentation and walkthrough
- 30 days email support

Professional -- EUR 499
Multi-workflow environment for complex operations or small teams. Built across multiple sessions.
- Multi-workflow agent environment
- Team onboarding documentation
- 3 build sessions
- One revision session included
- 90 days priority support

Custom -- EUR 2,000+
Full integration into your business operations. I adapt the methodology to your domain and stay until it works.
- Custom methodology adaptation
- Unlimited sessions until operational
- Team training and documentation
- Dedicated support channel
- Quarterly review and optimization
```
