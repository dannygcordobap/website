import { parse } from 'yaml';

// Beta builds show unfinished [TODO: ...] content so it can be filled in;
// production builds hide anything still marked TODO.
export const SHOW_TODO = process.env.REACT_APP_SHOW_TODO === 'true';

export const isTodo = (value) => typeof value === 'string' && /\[TODO/i.test(value);

// True when a value should render: present, and either finished or allowed as a TODO.
export const show = (value) => {
  if (value === undefined || value === null || value === '') return false;
  return SHOW_TODO || !isTodo(value);
};

const FILES = [
  'site',
  'side-a/hero',
  'side-a/about',
  'side-a/now',
  'side-a/experience',
  'side-a/projects',
  'side-b/hero',
  'side-b/writing',
  'side-b/shelf',
  'side-b/film',
  'side-b/builds',
  'side-b/someday',
];

// Splits "---\nyaml\n---\nbody" into { data, body }.
function parseFile(text) {
  const match = text.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  let data = {};
  let error = null;
  if (match) {
    try {
      data = parse(match[1]) || {};
    } catch (e) {
      // One broken header shouldn't take the whole site down.
      error = e.message.split('\n')[0];
    }
  }
  let body = match ? match[2] : text;

  // HTML comments are notes for the author, never content.
  body = body.replace(/<!--[\s\S]*?-->/g, '');

  if (!SHOW_TODO) {
    // Drop whole paragraphs that are still marked TODO.
    body = body
      .split(/\n{2,}/)
      .filter((para) => !isTodo(para))
      .join('\n\n');
  }

  return { data, body: body.trim(), error };
}

export async function loadContent() {
  const base = `${process.env.PUBLIC_URL}/content`;
  const entries = await Promise.all(
    FILES.map(async (name) => {
      const res = await fetch(`${base}/${name}.md`);
      const text = res.ok ? await res.text() : '';
      return [name, parseFile(text)];
    })
  );
  return Object.fromEntries(entries);
}

export const imageUrl = (file) => `${process.env.PUBLIC_URL}/images/${file}`;
