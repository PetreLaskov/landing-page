export interface FAQItem {
  readonly question: string;
  readonly answer: string;
}

export const faqItems: readonly FAQItem[] = [
  {
    question: 'What is an AI agent environment?',
    answer:
      'It\u2019s a configured system where AI agents work alongside you \u2014 not a chatbot you talk to, but an operational partner that reads your files, follows your processes, and produces real output. Think of it as a new team member that already knows your workflows on day one.',
  },
  {
    question: 'How is this different from ChatGPT or off-the-shelf AI tools?',
    answer:
      'General AI tools are generic by design. An agent environment is built around your specific workflows, data, and business rules. The difference is like hiring a generalist vs. training a specialist \u2014 the specialist produces better work faster because they understand your context.',
  },
  {
    question: 'What does the build process look like?',
    answer:
      'We start with a 15-minute discovery call to understand your workflows. Then I build the environment in focused sessions, showing you each piece as it comes together. You\u2019re involved throughout \u2014 this isn\u2019t a black box. By the end, you understand what was built and can extend it yourself.',
  },
  {
    question: 'How long until I have a working system?',
    answer:
      'Personal environments are typically delivered in 1\u20132 days. Professional setups take 1\u20132 weeks across multiple sessions. Custom enterprise work varies, but we scope it clearly upfront \u2014 no open-ended engagements.',
  },
  {
    question: 'Do I need technical knowledge?',
    answer:
      'No. The environment runs on your machine and I handle all the technical setup. You\u2019ll learn the methodology during the build \u2014 part of the value is understanding what the system does and why, so you\u2019re never dependent on me.',
  },
  {
    question: 'What happens after the build is done?',
    answer:
      'You own everything. The environment lives on your machine, the methodology is documented, and you have support access for questions. Many clients start with Personal and upgrade to Professional once they see the impact.',
  },
  {
    question: 'What industries does this work for?',
    answer:
      'Any knowledge work that involves research, writing, analysis, or process execution. Current clients span manufacturing operations, consulting, content creation, and software development. The methodology adapts to the domain \u2014 that\u2019s its core strength.',
  },
  {
    question: 'Can I try it before committing?',
    answer:
      'The 15-minute discovery call is free and has no obligation. I\u2019ll tell you honestly whether an agent environment makes sense for your situation. If it doesn\u2019t, I\u2019ll say so \u2014 there\u2019s no point building something that won\u2019t deliver value.',
  },
] as const;
