import { describe, it, before } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { load, type CheerioAPI } from 'cheerio';

// Import data files — single source of truth for content assertions
import {
  header,
  hero,
  problem,
  solution,
  howItWorks,
  caseStudy,
  about,
  finalCta,
  footer,
} from '../src/data/copy.js';
import { faqItems } from '../src/data/faq.js';

// Defined in index.astro frontmatter, not in data files
const PAGE_TITLE = 'Petre Laskov | AI Agent Environments for Business';
const PAGE_DESCRIPTION =
  'Custom AI agent environments that integrate into your workflows. Built with a proven methodology. Discovery call to working system in days, not months.';

let $: CheerioAPI;

before(() => {
  const html = readFileSync(resolve(import.meta.dirname, '../dist/index.html'), 'utf-8');
  $ = load(html);
});

// ---------------------------------------------------------------------------
// Meta tags & SEO
// ---------------------------------------------------------------------------
describe('Meta tags and SEO', () => {
  it('has lang="en"', () => {
    assert.equal($('html').attr('lang'), 'en');
  });

  it('has correct title', () => {
    assert.equal($('title').text(), PAGE_TITLE);
  });

  it('has correct meta description', () => {
    assert.equal($('meta[name="description"]').attr('content'), PAGE_DESCRIPTION);
  });

  it('has viewport meta', () => {
    assert.match($('meta[name="viewport"]').attr('content') ?? '', /width=device-width/);
  });

  it('has canonical link', () => {
    assert.equal($('link[rel="canonical"]').length, 1);
  });

  it('has theme-color', () => {
    assert.equal($('meta[name="theme-color"]').attr('content'), '#4263eb');
  });

  it('has Open Graph tags', () => {
    for (const prop of ['og:type', 'og:title', 'og:description', 'og:image', 'og:url']) {
      assert.equal($(`meta[property="${prop}"]`).length, 1, `Missing ${prop}`);
    }
  });

  it('has Twitter Card tags', () => {
    for (const name of ['twitter:card', 'twitter:title', 'twitter:description', 'twitter:image']) {
      assert.equal($(`meta[name="${name}"]`).length, 1, `Missing ${name}`);
    }
  });
});

// ---------------------------------------------------------------------------
// JSON-LD schemas
// ---------------------------------------------------------------------------
describe('JSON-LD schemas', () => {
  it('has exactly 3 JSON-LD scripts with correct types', () => {
    const scripts = $('script[type="application/ld+json"]');
    assert.equal(scripts.length, 3);

    const parsed = scripts.toArray().map((el) => JSON.parse($(el).html()!));

    const org = parsed.find((s) => s['@type'] === 'Organization');
    assert.ok(org, 'Organization schema missing');
    assert.equal(org.name, 'Petre Laskov AI Consulting');

    const person = parsed.find((s) => s['@type'] === 'Person');
    assert.ok(person, 'Person schema missing');
    assert.equal(person.name, 'Petre Laskov');
    assert.equal(person.jobTitle, 'AI Consultant');
  });

  it('FAQPage schema matches faqItems', () => {
    const scripts = $('script[type="application/ld+json"]');
    const parsed = scripts.toArray().map((el) => JSON.parse($(el).html()!));
    const faqSchema = parsed.find((s) => s['@type'] === 'FAQPage');
    assert.ok(faqSchema, 'FAQPage schema missing');
    assert.equal(faqSchema.mainEntity.length, faqItems.length);
    for (let i = 0; i < faqItems.length; i++) {
      assert.equal(faqSchema.mainEntity[i].name, faqItems[i].question);
      assert.equal(faqSchema.mainEntity[i].acceptedAnswer.text, faqItems[i].answer);
    }
  });
});

// ---------------------------------------------------------------------------
// Section rendering & content
// ---------------------------------------------------------------------------
describe('Sections', () => {
  it('Header — logo, nav links, CTA', () => {
    assert.equal($('header').length, 1);
    assert.ok($('header').text().includes(header.logo), 'Logo text missing');
    for (const item of header.nav) {
      assert.equal(
        $(`header a[href="${item.href}"]`).length,
        1,
        `Nav link ${item.href} missing`,
      );
    }
    assert.equal(
      $(`header a[href="${header.cta.href}"]`).length,
      1,
      'Header CTA missing',
    );
  });

  it('Hero — headline, subheadline, CTAs, proof', () => {
    const h1 = $('h1').text();
    assert.ok(h1.includes(hero.headline), `h1 should contain "${hero.headline}"`);
    const bodyText = $('body').text();
    assert.ok(bodyText.includes(hero.subheadline), 'Subheadline missing');
    assert.ok($(`a[href="${hero.primaryCta.href}"]`).length >= 1, 'Primary CTA missing');
    assert.ok($(`a[href="${hero.secondaryCta.href}"]`).length >= 1, 'Secondary CTA missing');
    assert.ok(bodyText.includes(hero.proof), 'Proof text missing');
  });

  it('Problem — headline and pain points', () => {
    const section = $('#problem');
    assert.equal(section.length, 1);
    assert.ok(section.find('h2').text().includes(problem.headline));
    for (const point of problem.painPoints) {
      assert.ok(section.text().includes(point.title), `Pain point "${point.title}" missing`);
    }
  });

  it('Solution — headline and benefits', () => {
    const section = $('#solution');
    assert.equal(section.length, 1);
    assert.ok(section.find('h2').text().includes(solution.headline));
    for (const benefit of solution.benefits) {
      assert.ok(section.text().includes(benefit.title), `Benefit "${benefit.title}" missing`);
    }
  });

  it('How It Works — headline and steps', () => {
    const section = $('#how-it-works');
    assert.equal(section.length, 1);
    assert.ok(section.find('h2').text().includes(howItWorks.headline));
    for (const step of howItWorks.steps) {
      assert.ok(section.text().includes(step.title), `Step "${step.title}" missing`);
    }
  });

  it('Case Study — headline and results', () => {
    const section = $('#case-study');
    assert.equal(section.length, 1);
    assert.ok(section.find('h2').text().includes(caseStudy.headline));
    for (const result of caseStudy.results) {
      assert.ok(section.text().includes(result.value), `Result "${result.value}" missing`);
    }
  });

  it('About — headline and credentials', () => {
    const section = $('#about');
    assert.equal(section.length, 1);
    assert.ok(section.find('h2').text().includes(about.headline));
    for (const cred of about.credentials) {
      assert.ok(section.text().includes(cred.title), `Credential "${cred.title}" missing`);
    }
  });

  it('FAQ — all questions rendered as <summary>', () => {
    const section = $('#faq');
    assert.equal(section.length, 1);
    const summaries = section.find('summary');
    assert.equal(summaries.length, faqItems.length, `Expected ${faqItems.length} FAQ summaries`);
    for (const item of faqItems) {
      assert.ok(section.text().includes(item.question), `FAQ "${item.question}" missing`);
    }
  });

  it('Contact — headline, Cal.com CTA, form with fields', () => {
    const section = $('#contact');
    assert.equal(section.length, 1);
    assert.ok(section.find('h2').text().includes(finalCta.headline));
    // Cal.com link
    assert.equal(
      section.find(`a[href="${finalCta.calCta.href}"]`).length,
      1,
      'Cal.com CTA missing',
    );
    // Form
    const form = section.find('form');
    assert.equal(form.attr('action'), finalCta.formAction);
    assert.equal(form.attr('method'), 'POST');
    assert.equal(section.find('#name').length, 1, 'Name input missing');
    assert.equal(section.find('#email').length, 1, 'Email input missing');
    assert.equal(section.find('#message').length, 1, 'Message input missing');
    assert.equal(section.find('button[type="submit"]').length, 1, 'Submit button missing');
  });

  it('Footer — email, LinkedIn, nav links', () => {
    const footerEl = $('footer');
    assert.equal(footerEl.length, 1);
    assert.equal(
      footerEl.find(`a[href="mailto:${footer.email}"]`).length,
      1,
      'Email link missing',
    );
    assert.equal(
      footerEl.find(`a[href="${footer.linkedin}"]`).length,
      1,
      'LinkedIn link missing',
    );
    for (const item of footer.nav) {
      assert.equal(
        footerEl.find(`a[href="${item.href}"]`).length,
        1,
        `Footer nav ${item.href} missing`,
      );
    }
  });
});

// ---------------------------------------------------------------------------
// Internal link integrity
// ---------------------------------------------------------------------------
describe('Internal links', () => {
  it('all anchor links resolve to existing elements', () => {
    const hrefs = new Set<string>();
    $('a[href^="#"]').each((_, el) => {
      const href = $(el).attr('href');
      if (href) hrefs.add(href);
    });
    for (const href of hrefs) {
      assert.equal($(href).length, 1, `Anchor target ${href} not found`);
    }
  });

  it('skip-to-content targets #main-content', () => {
    const skip = $('a.skip-to-content');
    assert.equal(skip.attr('href'), '#main-content');
    assert.equal($('#main-content').length, 1);
  });
});

// ---------------------------------------------------------------------------
// External links
// ---------------------------------------------------------------------------
describe('External links', () => {
  it('Cal.com link opens in new tab with noopener noreferrer', () => {
    const link = $(`a[href="${finalCta.calCta.href}"]`);
    assert.equal(link.attr('target'), '_blank');
    assert.match(link.attr('rel') ?? '', /noopener/);
    assert.match(link.attr('rel') ?? '', /noreferrer/);
  });

  it('LinkedIn link opens in new tab with noopener', () => {
    const link = $(`a[href="${footer.linkedin}"]`);
    assert.equal(link.attr('target'), '_blank');
    assert.match(link.attr('rel') ?? '', /noopener/);
  });

  it('email mailto link exists', () => {
    assert.equal($(`a[href="mailto:${footer.email}"]`).length, 1);
  });
});

// ---------------------------------------------------------------------------
// Accessibility
// ---------------------------------------------------------------------------
describe('Accessibility', () => {
  it('form inputs have labels', () => {
    for (const id of ['name', 'email', 'message']) {
      assert.equal($(`label[for="${id}"]`).length, 1, `Label for #${id} missing`);
    }
  });

  it('nav elements have aria-labels', () => {
    assert.equal($('nav[aria-label="Main"]').length, 1, 'Main nav aria-label missing');
    assert.equal($('nav[aria-label="Footer"]').length, 1, 'Footer nav aria-label missing');
  });

  it('honeypot input is hidden from assistive tech', () => {
    const honeypot = $('input[name="_gotcha"]');
    assert.equal(honeypot.attr('aria-hidden'), 'true');
    assert.equal(honeypot.attr('tabindex'), '-1');
  });

  it('no images without alt text', () => {
    assert.equal($('img:not([alt])').length, 0, 'Found images without alt text');
  });
});
