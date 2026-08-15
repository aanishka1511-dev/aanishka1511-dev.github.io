(function () {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const checks = [
    { name: "name", test: (v) => v.trim().length > 0, msg: "Please add your name." },
    {
      name: "email",
      test: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
      msg: "Please add a valid email so I can reply.",
    },
    { name: "message", test: (v) => v.trim().length > 0, msg: "Please add a short message." },
  ];

  form.addEventListener("submit", (e) => {
    let hasError = false;

    checks.forEach(({ name, test, msg }) => {
      const field = form.querySelector(`[name="${name}"]`);
      const errorEl = form.querySelector(`[data-error-for="${name}"]`);
      if (!test(field.value)) {
        errorEl.textContent = msg;
        hasError = true;
      } else {
        errorEl.textContent = "";
      }
    });

    if (hasError) {
      e.preventDefault();
    }
  });
})();
