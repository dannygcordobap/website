import React from 'react';
import ReactMarkdown from 'react-markdown';

// Turns ==text== into <mark>text</mark> inside markdown text nodes.
function remarkHighlight() {
  const pattern = /==([^=]+)==/g;

  const split = (node) => {
    if (!node.children) return;
    const next = [];
    for (const child of node.children) {
      if (child.type === 'text' && pattern.test(child.value)) {
        pattern.lastIndex = 0;
        let last = 0;
        let m;
        while ((m = pattern.exec(child.value)) !== null) {
          if (m.index > last) next.push({ type: 'text', value: child.value.slice(last, m.index) });
          next.push({
            type: 'highlight',
            data: { hName: 'mark' },
            children: [{ type: 'text', value: m[1] }],
          });
          last = m.index + m[0].length;
        }
        if (last < child.value.length) next.push({ type: 'text', value: child.value.slice(last) });
      } else {
        split(child);
        next.push(child);
      }
    }
    node.children = next;
  };

  return (tree) => split(tree);
}

const textOf = (children) =>
  React.Children.toArray(children)
    .map((c) => (typeof c === 'string' ? c : ''))
    .join('');

// Paragraphs still marked TODO get the amber "unfinished" style on beta.
const paragraph = ({ children }) =>
  /\[TODO/i.test(textOf(children)) ? (
    <p>
      <span className="is-todo">{children}</span>
    </p>
  ) : (
    <p>{children}</p>
  );

const externalLink = ({ href, children }) => {
  const external = /^https?:\/\//.test(href || '');
  return (
    <a href={href} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>
      {children}
    </a>
  );
};

// Block markdown: paragraphs, headings, lists.
export function Md({ children, className }) {
  if (!children) return null;
  return (
    <div className={className}>
      <ReactMarkdown remarkPlugins={[remarkHighlight]} components={{ a: externalLink, p: paragraph }}>
        {children}
      </ReactMarkdown>
    </div>
  );
}

// Inline markdown: renders a single line without wrapping it in a <p>.
export function MdInline({ children }) {
  if (!children) return null;
  return (
    <ReactMarkdown
      remarkPlugins={[remarkHighlight]}
      components={{ p: ({ children: c }) => <>{c}</>, a: externalLink }}
    >
      {String(children)}
    </ReactMarkdown>
  );
}
