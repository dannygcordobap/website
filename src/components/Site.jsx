import React, { useEffect, useState } from 'react';
import { loadContent, show, isTodo, imageUrl, SHOW_TODO } from '../content';
import { Md, MdInline } from './Md';

const pad = (n) => String(n).padStart(2, '0');
const label = (side, n, name) => `[ ${pad(n)} / ${String(name).toUpperCase()} ]`;
const asList = (v) => (Array.isArray(v) ? v : []);

const THEME_KEY = 'dc-theme';

const systemTheme = () => {
  try {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'day';
  } catch (e) {
    return 'day';
  }
};

const storedTheme = () => {
  try {
    const v = window.localStorage.getItem(THEME_KEY);
    return v === 'day' || v === 'night' ? v : null;
  } catch (e) {
    return null;
  }
};

const initialSide = () => {
  try {
    return new URLSearchParams(window.location.search).get('side') === 'b' ? 'B' : 'A';
  } catch (e) {
    return 'A';
  }
};

function Tag({ children, kind = 'plain' }) {
  if (!show(children)) return null;
  return <span className={`tag tag-${kind}${isTodo(children) ? ' is-todo' : ''}`}>{children}</span>;
}

function Tags({ items, first = 'plain', size }) {
  const list = asList(items).filter(show);
  if (!list.length) return null;
  return (
    <div className={`tags${size ? ` tags-${size}` : ''}`}>
      {list.map((t, i) => (
        <Tag key={t} kind={i === 0 ? first : 'plain'}>
          {t}
        </Tag>
      ))}
    </div>
  );
}

// Plays once per page load: types a typo, backspaces to where it went wrong,
// then types the correct value. Screen readers and reduced-motion visitors
// get the final value immediately.
let typedOnce = false;

function TypedValue({ value, typo }) {
  // Decided once on mount, so marking it played doesn't cancel the animation.
  const [skip] = useState(() => {
    let reduce = true;
    try {
      reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    } catch (e) {}
    return reduce || typedOnce || !typo;
  });
  const [text, setText] = useState(skip ? value : '');
  const [cursor, setCursor] = useState(!skip);

  useEffect(() => {
    if (skip) return undefined;
    typedOnce = true;
    const final = String(value);
    const wrong = String(typo);
    let common = 0;
    while (common < final.length && final[common] === wrong[common]) common += 1;

    const steps = [];
    let t = 900;
    for (let i = 1; i <= wrong.length; i += 1) {
      t += 55 + Math.random() * 60;
      steps.push([t, wrong.slice(0, i)]);
    }
    t += 450;
    for (let i = wrong.length - 1; i >= common; i -= 1) {
      t += 60;
      steps.push([t, wrong.slice(0, i)]);
    }
    t += 220;
    for (let i = common + 1; i <= final.length; i += 1) {
      t += 55 + Math.random() * 60;
      steps.push([t, final.slice(0, i)]);
    }
    const timers = steps.map(([at, s]) => setTimeout(() => setText(s), at));
    timers.push(setTimeout(() => setCursor(false), t + 1600));
    return () => timers.forEach(clearTimeout);
  }, [skip, value, typo]);

  return (
    <span className="typed">
      <span className="visually-hidden">{value}</span>
      <span className="typed-stage" aria-hidden="true">
        <span className="typed-ghost">{String(value).length >= String(typo || '').length ? value : typo}</span>
        <span className="typed-live">
          {text}
          {cursor && <span className="typed-cursor" />}
        </span>
      </span>
    </span>
  );
}

function Spec({ items, className = '' }) {
  const list = asList(items).filter((s) => show(s.value));
  if (!list.length) return null;
  return (
    <dl className={`spec ${className}`}>
      {list.map((s) => (
        <div key={s.label} className="spec-item">
          <dt>{s.label}</dt>
          <dd className={isTodo(s.value) ? 'is-todo' : ''}>
            {/^https?:\/\//.test(String(s.value)) ? (
              <a href={s.value} target="_blank" rel="noreferrer">
                {String(s.value).replace(/^https?:\/\//, '').replace(/\/$/, '')}
              </a>
            ) : s.typo && !isTodo(s.value) ? (
              <TypedValue value={s.value} typo={s.typo} />
            ) : (
              <MdInline>{s.value}</MdInline>
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}

// A photo, or a labelled placeholder on beta when the file is still a TODO.
function Photo({ file, alt, ratio, className = '' }) {
  if (!file) return null;
  if (isTodo(file)) {
    if (!SHOW_TODO) return null;
    return (
      <div className={`photo placeholder ${className}`} style={{ aspectRatio: ratio }} role="img" aria-label={alt}>
        <span>+</span>
        <span className="is-todo">{file}</span>
      </div>
    );
  }
  return <img className={`photo ${className}`} style={{ aspectRatio: ratio }} src={imageUrl(file)} alt={alt || ''} loading="lazy" />;
}

// Section labels are the page's real h2 headings; the hero's side marker is just a label.
function SectionLabel({ children, as: Tag = 'h2' }) {
  return <Tag className="label">{children}</Tag>;
}

function OneCardLockup({ tagline }) {
  return (
    <div className="onecard" role="img" aria-label={`OneCard logo${tagline ? `: ${tagline}` : ''}`}>
      <div className="onecard-row">
        <svg aria-hidden="true" width="56" height="40" viewBox="16 26 68 48">
          <defs>
            <clipPath id="oc-clip">
              <rect x="20" y="30" width="60" height="40" rx="8" />
            </clipPath>
          </defs>
          <rect x="20" y="30" width="60" height="40" rx="8" className="oc-card" />
          <rect x="20" y="35.6" width="60" height="6.4" className="oc-ground" clipPath="url(#oc-clip)" />
          <text x="50" y="56" textAnchor="middle" dominantBaseline="central" className="oc-ground oc-one">
            ONE
          </text>
        </svg>
        <span className="onecard-name">OneCard</span>
      </div>
      {tagline && <div className="onecard-tagline">{tagline}</div>}
    </div>
  );
}

function Terminal({ lines }) {
  const list = asList(lines).filter(show);
  return (
    <div className="terminal" role="img" aria-label="Terminal output">
      {list.map((line, i) => {
        if (line.startsWith('$')) {
          return (
            <div key={i}>
              <span className="t-prompt">$</span>
              {line.slice(1)}
            </div>
          );
        }
        const m = line.match(/^(\s*)([^:]+:)(.*)$/);
        if (!m) return <div key={i}>{line}</div>;
        return (
          <div key={i} style={{ paddingLeft: m[1].length ? 16 : 0 }}>
            <span className={m[1].length ? 't-sub' : 't-key'}>{m[2]}</span>
            <span className={isTodo(m[3]) ? 'is-todo' : ''}>{m[3]}</span>
          </div>
        );
      })}
    </div>
  );
}

// About as Q&A rows, like Experience: the ## question sits in the left label
// column and its answer on the right. Text before the first question is the
// intro. The optional route renders after the first answer's first paragraph,
// and the last paragraph of the last answer is set as the closing line.
function AboutRows({ body, route }) {
  const chunks = String(body || '').split(/\n(?=## )/).filter((c) => c.trim());
  const intro = chunks.filter((c) => !c.trim().startsWith('## '));
  const qa = chunks
    .filter((c) => c.trim().startsWith('## '))
    .map((c) => {
      const [first, ...rest] = c.trim().split('\n');
      return { q: first.replace(/^##\s*/, ''), a: rest.join('\n').trim() };
    });
  const places = asList(route).filter(show);

  return (
    <div className="about">
      {intro.map((c, i) => (
        <Md key={i} className="prose about-intro">
          {c}
        </Md>
      ))}
      <div className="about-rows">
        {qa.map((row, i) => {
          const paras = row.a.split(/\n{2,}/);
          const withRoute = i === 0 && places.length > 0;
          return (
            <div key={i} className="about-row">
              <h3 className="about-q">{row.q}</h3>
              <div className="about-a prose">
                <Md>{withRoute ? paras[0] : row.a}</Md>
                {withRoute && (
                  <>
                    <ol className="route" aria-label="Places I've lived">
                      {places.map((p, j) => (
                        <li key={j} className={j === places.length - 1 ? 'route-now' : ''}>
                          {p}
                        </li>
                      ))}
                    </ol>
                    <Md>{paras.slice(1).join('\n\n')}</Md>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Footer({ id, sideKey, n, site, onFlip, flipText, showLinkedin }) {
  return (
    <footer id={id} className="footer">
      <SectionLabel>{label(sideKey, n, 'Contact')}</SectionLabel>
      <div className="footer-cols">
        <div className="footer-col">
          <a href={`mailto:${site.email}`}>{site.email}</a>
          {showLinkedin && site.linkedin && (
            <a href={site.linkedin} target="_blank" rel="noreferrer">
              {site.linkedin.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}
            </a>
          )}
        </div>
        <div className="footer-col footer-right">
          <span>
            © {new Date().getFullYear()} {site.copyright}
          </span>
          <button type="button" className="flip" onClick={onFlip}>
            {flipText}
          </button>
        </div>
      </div>
    </footer>
  );
}

function SideA({ c, site, onFlip }) {
  const hero = c['side-a/hero'];
  const about = c['side-a/about'];
  const now = c['side-a/now'];
  const exp = c['side-a/experience'];
  const proj = c['side-a/projects'];

  return (
    <>
      <nav className="nav" aria-label="Sections">
        {[about, now, exp, proj].map((s, i) => (
          <a key={i} href={`#a-${i + 1}`}>
            <span>{pad(i + 1)}</span> {s.data.nav}
          </a>
        ))}
        <a href="#a-contact">
          <span>05</span> Contact
        </a>
      </nav>

      <section className="hero">
        <SectionLabel as="div">[ SIDE A ]</SectionLabel>
        <h1 className="hero-title-a">{hero.data.title}</h1>
        <Md className="hero-lede">{hero.body}</Md>
        <Tags items={hero.data.tags} first="plain" size="lg" />
      </section>

      <Spec items={hero.data.spec} className="spec-strip" />

      <section id="a-1" className="section">
        <SectionLabel>{label('A', 1, about.data.nav)}</SectionLabel>
        <AboutRows body={about.body} route={about.data.route} />
      </section>

      <section id="a-2" className="section">
        <SectionLabel>{label('A', 2, now.data.nav)}</SectionLabel>
        <div className="now-card">
          <div className="now-main">
            <h3>{now.data.company}</h3>
            <Md className="prose">{now.body}</Md>
            <Spec items={now.data.spec} className="now-spec" />
          </div>
          {now.data.image && (
            <figure className="now-figure">
              <Photo file={now.data.image.file} alt={now.data.image.alt} ratio="1 / 1" />
              {now.data.image.caption && <figcaption>{now.data.image.caption}</figcaption>}
            </figure>
          )}
        </div>
      </section>

      <section id="a-3" className="section">
        <div className="section-head">
          <SectionLabel>{label('A', 3, exp.data.nav)}</SectionLabel>
          {site.resume && (
            <a className="mono-link" href={`${process.env.PUBLIC_URL}/${site.resume}`}>
              {exp.data.resume_link_text || 'Resume (PDF)'}
            </a>
          )}
        </div>
        <ol className="rows">
          {asList(exp.data.jobs).map((job, i) => (
            <li key={i} className="row">
              <div className="row-when">
                <span className={isTodo(job.when) ? 'is-todo' : ''}>
                  {SHOW_TODO ? job.when : String(job.when).replace(/\s*\/\s*\[TODO[^\]]*\]/i, '')}
                </span>
              </div>
              <div className="row-main">
                <div className="row-title">{job.role}</div>
                {show(job.what) && (
                  <div className="row-body">
                    <MdInline>{job.what}</MdInline>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section id="a-4" className="section">
        <SectionLabel>{label('A', 4, proj.data.nav)}</SectionLabel>
        <div className="cards">
          {asList(proj.data.projects).map((p) => (
            <article key={p.id} className="card">
              {p.visual === 'onecard-lockup' && <OneCardLockup tagline={p.tagline} />}
              {p.visual === 'terminal' && <Terminal lines={p.terminal} />}
              {p.image && <Photo file={p.image} alt={p.image_alt} ratio="16 / 10" />}
              <div className="card-id">{p.id}</div>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
              <div className="card-foot">
                <Tags items={p.tags} />
                {show(p.link) && (
                  <a className={`mono-link${isTodo(p.link) ? ' is-todo' : ''}`} href={isTodo(p.link) ? '#a-4' : p.link}>
                    {isTodo(p.link) ? p.link : 'Visit'}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
        {show(proj.data.also) && (
          <p className="also">
            <MdInline>{proj.data.also}</MdInline>
          </p>
        )}
      </section>

      <Footer id="a-contact" sideKey="A" n={5} site={site} onFlip={onFlip} flipText={site.flip_to_b} showLinkedin />
    </>
  );
}

function SideB({ c, site, onFlip }) {
  const hero = c['side-b/hero'];
  const writing = c['side-b/writing'];
  const shelf = c['side-b/shelf'];
  const film = c['side-b/film'];
  const builds = c['side-b/builds'];
  const someday = c['side-b/someday'];
  const coffee = someday.data.coffee || {};
  const photos = asList(film.data.photos);

  return (
    <>
      <nav className="nav" aria-label="Sections">
        {[writing, shelf, film, builds, someday].map((s, i) => (
          <a key={i} href={`#b-${i + 1}`}>
            <span>{pad(i + 1)}</span> {s.data.nav}
          </a>
        ))}
        <a href="#b-contact">
          <span>06</span> Contact
        </a>
      </nav>

      <section className="hero hero-split">
        <div className="hero-text">
          <SectionLabel as="div">[ SIDE B ]</SectionLabel>
          <h1 className="hero-title-b">{hero.data.title}</h1>
          <Md className="hero-lede hero-lede-b">{hero.body}</Md>
          <Tags items={hero.data.tags} first="mat" size="lg" />
        </div>
        <Photo file={hero.data.image} alt={hero.data.image_alt} ratio="4 / 5" className="hero-photo" />
      </section>

      <Spec items={hero.data.spec} className="spec-strip" />

      <section id="b-1" className="section section-ruled">
        <SectionLabel>{label('B', 1, writing.data.nav)}</SectionLabel>
        <div className="writing">
          <div>
            <h3 className="book-title">{writing.data.title}</h3>
            <Tags items={writing.data.tags} first="sig" />
            <Md className="prose prose-lg">{writing.body}</Md>
          </div>
          {show(writing.data.excerpt) && (
            <aside className="excerpt">
              <div className="mini-label excerpt-label">EXCERPT</div>
              <Md className="excerpt-body">{writing.data.excerpt}</Md>
            </aside>
          )}
        </div>
      </section>

      <section id="b-2" className="section">
        <SectionLabel>{label('B', 2, shelf.data.nav)}</SectionLabel>
        <Md className="prose prose-lg">{shelf.body}</Md>
        <Photo file={shelf.data.banner} alt={shelf.data.banner_alt} ratio="21 / 9" className="banner" />
        <div className="split shelf-split">
          <ul className="rows rows-ruled split-main">
            {asList(shelf.data.orchids).map((o, i) => (
              <li key={i} className="orchid">
                <span className="orchid-name">
                  <i>{o.genus}</i> {o.name}
                </span>
                <Tag kind={o.highlight ? 'sig' : 'plain'}>{o.note}</Tag>
              </li>
            ))}
          </ul>
          {shelf.data.side_image && (
            <figure className="side-figure">
              <Photo file={shelf.data.side_image} alt={shelf.data.side_image_alt} ratio="3 / 4" />
              {show(shelf.data.side_caption) && (
                <figcaption>
                  <MdInline>{shelf.data.side_caption}</MdInline>
                </figcaption>
              )}
            </figure>
          )}
        </div>
      </section>

      <section id="b-3" className="section">
        <SectionLabel>{label('B', 3, film.data.nav)}</SectionLabel>
        <div className="film">
          {photos.map((p, i) => (
            <figure key={p.file} className={i === 0 ? 'film-wide' : 'film-tall'}>
              <Photo file={p.file} alt={p.alt} ratio={i === 0 ? '3 / 2' : '4 / 5'} />
              <figcaption>
                F-{pad(i + 1)}
                {show(p.caption) && (
                  <>
                    {' / '}
                    <span className={isTodo(p.caption) ? 'is-todo' : ''}>
                      <MdInline>{p.caption}</MdInline>
                    </span>
                  </>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="b-4" className="section">
        <SectionLabel>{label('B', 4, builds.data.nav)}</SectionLabel>
        <Md className="prose prose-lg">{builds.body}</Md>
        <div className="cards">
          {asList(builds.data.builds).map((b) => (
            <article key={b.id} className="card">
              <Photo file={b.image} alt={b.image_alt} ratio="16 / 10" />
              <div className="card-id">{b.id}</div>
              <h3>{b.title}</h3>
              <p>
                <MdInline>{b.body}</MdInline>
              </p>
              <div className="card-foot">
                <Tags items={b.tags} first="mat" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="b-5" className="section">
        <SectionLabel>{label('B', 5, someday.data.nav)}</SectionLabel>
        <Md className="someday">{someday.body}</Md>
        {someday.data.status && (
          <div className="status">
            <span className="dot dot-dream" aria-hidden="true" />
            STATUS: {someday.data.status}
          </div>
        )}
        {coffee.title && (
          <div className="split coffee">
            <div className="split-main">
              <h3>{coffee.title}</h3>
              {show(coffee.body) && <p className="prose-lg">{coffee.body}</p>}
              <Spec items={coffee.spec} className="spec-strip spec-tight" />
            </div>
            <Photo file={coffee.image} alt={coffee.image_alt} ratio="4 / 3" className="coffee-photo" />
          </div>
        )}
      </section>

      <Footer id="b-contact" sideKey="B" n={6} site={site} onFlip={onFlip} flipText={site.flip_to_a} />
    </>
  );
}

export default function Site() {
  const [content, setContent] = useState(null);
  const [side, setSide] = useState(initialSide);
  const [picked, setPicked] = useState(storedTheme);
  const [system, setSystem] = useState(systemTheme);
  const theme = picked || system;

  // Follow the system setting until the visitor picks a mode themselves.
  useEffect(() => {
    let mq;
    try {
      mq = window.matchMedia('(prefers-color-scheme: dark)');
    } catch (e) {
      return undefined;
    }
    const onChange = () => setSystem(mq.matches ? 'night' : 'day');
    mq.addEventListener ? mq.addEventListener('change', onChange) : mq.addListener(onChange);
    return () => (mq.removeEventListener ? mq.removeEventListener('change', onChange) : mq.removeListener(onChange));
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (picked) root.setAttribute('data-theme', picked);
    else root.removeAttribute('data-theme');
  }, [picked]);

  const pickTheme = (next) => {
    setPicked(next);
    try {
      window.localStorage.setItem(THEME_KEY, next);
    } catch (e) {}
  };

  useEffect(() => {
    loadContent().then(setContent);
  }, []);

  const flip = () => {
    const next = side === 'A' ? 'B' : 'A';
    setSide(next);
    try {
      const url = new URL(window.location.href);
      if (next === 'B') url.searchParams.set('side', 'b');
      else url.searchParams.delete('side');
      window.history.replaceState(null, '', url);
    } catch (e) {}
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  if (!content) return <div className="page" aria-busy="true" />;
  const site = content.site.data;
  const broken = Object.entries(content).filter(([, f]) => f.error);

  return (
    <div className={`page side-${side.toLowerCase()}`}>
      <div className="wrap">
        {SHOW_TODO && broken.length > 0 && (
          <div className="content-error" role="alert">
            {broken.map(([name, f]) => (
              <div key={name}>
                content/{name}.md: {f.error}
              </div>
            ))}
          </div>
        )}
        <header className="topbar">
          <a href="#top" className="brand" onClick={() => window.scrollTo({ top: 0 })}>
            [ DC ] {site.domain}
          </a>
          <div className="mode-switch" role="group" aria-label="Light or dark colors">
            {['day', 'night'].map((m) => (
              <button key={m} type="button" aria-pressed={theme === m} onClick={() => pickTheme(m)}>
                {theme === m && <span className="dot" aria-hidden="true" />}
                {m === 'day' ? 'LIGHT' : 'DARK'}
              </button>
            ))}
          </div>
        </header>
        <main id="top">
          {side === 'A' ? <SideA c={content} site={site} onFlip={flip} /> : <SideB c={content} site={site} onFlip={flip} />}
        </main>
      </div>
    </div>
  );
}
