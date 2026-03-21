export interface FAQItem {
  readonly question: string;
  readonly answer: string;
}

export const faqItems: readonly FAQItem[] = [
  {
    question: 'What is an AI agent environment?',
    answer:
      'A configured system where AI works alongside you \u2014 not a chatbot you prompt, but an operational partner that reads your files, follows your processes, and maintains context across sessions. Think of the difference between a search engine and a colleague who already knows your business.',
  },
  {
    question: 'How is this different from ChatGPT or Copilot?',
    answer:
      'Generic tools are generic by design. An agent environment is built from your actual documents, processes, and standards. ChatGPT doesn\u2019t know that your supplier in Shanghai formats invoices differently from your supplier in Istanbul. An agent environment does, because it was initialized on that data.',
  },
  {
    question: 'What does the build process look like?',
    answer:
      'We start with a 30-minute discovery call to map your workflows. Then I build the environment in focused sessions, showing you each piece as it\u2019s created. You\u2019re involved throughout \u2014 this isn\u2019t a black box. By the end, you understand what was built, why each decision was made, and how to extend it yourself.',
  },
  {
    question: 'How long until I have a working system?',
    answer:
      'Most environments are operational within days. The manufacturing system I built was running on real operations after three sessions. Timeline depends on complexity, but I scope it clearly upfront \u2014 no open-ended engagements.',
  },
  {
    question: 'Do I need technical knowledge?',
    answer:
      'No. The environment runs on your machine and I handle setup. You learn the methodology during the build \u2014 that\u2019s part of the value. Clients with zero technical background operate these systems daily.',
  },
  {
    question: 'What happens after the build is done?',
    answer:
      'You own everything. The environment lives on your machines, the methodology is documented, and you have support access for questions. When your business changes, evolution sessions are available to update the system.',
  },
  {
    question: 'What industries does this work for?',
    answer:
      'Any business that runs on documents, processes, and operational knowledge. Current work spans manufacturing operations, procurement, invoicing, and knowledge work. The methodology adapts to the domain \u2014 that\u2019s its core design principle.',
  },
  {
    question: 'What if an agent environment isn\u2019t right for my situation?',
    answer:
      'I\u2019ll tell you on the discovery call. No charge, no obligation. Most AI problems are actually process problems or data problems. If yours is one of those, I\u2019ll say so and point you in the right direction. There\u2019s no point building infrastructure for a problem that has a simpler solution.',
  },
] as const;
