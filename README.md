# Portfolio — how this is built

Two static HTML pages, one shared stylesheet, one shared script. No
framework, no build step, no dependencies. That's deliberate — it's the
whole site, and you should be able to point at any file and say what it does.

## Files

- `index.html` — the Landing page. The dark hero section, the "chaos to
  order" tag animation, the claim, the proof line, and four preview cards
  that link into the case study.
- `case-study.html` — the Case study page. Four sections (Problem, Approach,
  Finding, Recommendation) built from your actual report data, plus four
  live bar charts.
- `styles.css` — every color, font, and spacing rule for both pages, defined
  once at the top as CSS variables (`:root { --ink: ...; --paper: ...; }`)
  so the whole palette is in one place.
- `script.js` — two small pieces of logic:
  1. `buildChart()` takes a plain array like
     `[{label: "Cultural", value: 3}]` and turns it into the labeled bar
     rows you see on the case study page. No charting library — it's just
     creating `<div>` elements and setting their width as a percentage.
  2. An `IntersectionObserver` that adds a CSS class to sections as you
     scroll to them, so they fade in. If a visitor's OS has "reduce motion"
     turned on, this (and the chart animation) is skipped entirely.
