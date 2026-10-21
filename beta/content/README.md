# Site content

Every word on the site lives in these files. Edit them, push to `beta`, and the
preview at dannycordoba.com/beta/ updates in a minute or two.

## Layout

```
content/
  site.md            name, contact, meta description (both sides)
  side-a/            the work: what most visitors see
    hero.md
    about.md
    now.md
    experience.md
    projects.md
  side-b/            the rest: behind "flip the record"
    hero.md
    writing.md
    shelf.md
    film.md
    builds.md
    someday.md
```

## Conventions

- **The block between the `---` lines is structured data** (lists, labels,
  links). Keep the indentation and the `key: value` shape. Wrap text in quotes if
  it contains a colon.
- **Everything below the second `---` is prose,** written as normal markdown.
- **`==like this==` is a highlight** (the brass/blue-hour marker). Use one per
  section at most.
- **`[TODO: ...]` marks something only you can fill in.** Search for `TODO` to
  find them all. Anything still marked TODO won't ship.
- **Images live in `public/images/`.** Reference them by filename, like
  `film-windmill.jpg`.
- **Section numbers and brackets (`[ A / 02 / NOW ]`) are added by the site,**
  so don't type them here.

The old `about.md`, `projects.md`, and `resume.md` at this level are what the
current site reads. They'll be deleted once the redesign reads these files instead.
