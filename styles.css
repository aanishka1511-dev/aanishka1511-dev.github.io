const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

/**
 * Renders a horizontal bar chart into a container element.
 * @param {string} containerId - id of the element to render into
 * @param {Array<{label: string, value: number}>} data - the numbers to chart
 * @param {number} max - the value that should equal a full-width (100%) bar
 * @param {string} [colorClass] - optional CSS class ("flag" | "amber") per row
 */
function buildChart(containerId, data, max, colorClass) {
  const el = document.getElementById(containerId);
  if (!el) return;

  data.forEach((row) => {
    const pct = Math.max(0, Math.min(100, (row.value / max) * 100));

    const rowEl = document.createElement("div");
    rowEl.className = "bar-row";

    const label = document.createElement("div");
    label.className = "bar-label";
    label.textContent = row.label;

    const track = document.createElement("div");
    track.className = "bar-track";

    const fill = document.createElement("div");
    fill.className = "bar-fill" + (row.colorClass ? " " + row.colorClass : colorClass ? " " + colorClass : "");
    track.appendChild(fill);

    const value = document.createElement("div");
    value.className = "bar-value";
    value.textContent = row.display !== undefined ? row.display : row.value;

    rowEl.appendChild(label);
    rowEl.appendChild(track);
    rowEl.appendChild(value);
    el.appendChild(rowEl);

    // Animate the width in on the next frame (or set instantly if the
    // visitor prefers reduced motion).
    if (prefersReducedMotion) {
      fill.style.width = pct + "%";
    } else {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          fill.style.width = pct + "%";
        });
      });
    }
  });
}

// Fade/slide sections in as they scroll into view.
function initReveals() {
  const items = document.querySelectorAll(".reveal");
  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("in-view"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  items.forEach((el) => observer.observe(el));
}

document.addEventListener("DOMContentLoaded", initReveals);
