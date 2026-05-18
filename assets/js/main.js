(() => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('primary-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });

    nav.addEventListener('click', (e) => {
      if (e.target.matches('a')) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open menu');
      }
    });
  }

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const revealTargets = document.querySelectorAll(
    '.section-title, .about-card, .service-card, .course-card, .quote-card, .client-grid li, .hero-stats div, .topic-card, .topic-chips li, .testimonial-card, .feedback-quote, .app-tile'
  );
  revealTargets.forEach((el) => el.classList.add('reveal'));

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );
    revealTargets.forEach((el) => io.observe(el));
  } else {
    revealTargets.forEach((el) => el.classList.add('is-visible'));
  }

  // -------------------------------------------------------------------
  // Animation: staggered fade-up for course modules
  // -------------------------------------------------------------------
  const courseModules = document.querySelectorAll('.course-module');
  courseModules.forEach((el, i) => {
    el.style.setProperty('--reveal-delay', `${Math.min(i, 9) * 70}ms`);
  });
  if (courseModules.length && 'IntersectionObserver' in window) {
    const mObs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          mObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });
    courseModules.forEach((m) => mObs.observe(m));
  } else {
    courseModules.forEach((m) => m.classList.add('is-revealed'));
  }

  // -------------------------------------------------------------------
  // Animation: confetti burst when the Testimonials section appears
  // -------------------------------------------------------------------
  const testimonials = document.getElementById('testimonials');
  if (testimonials && 'IntersectionObserver' in window) {
    const fireConfetti = () => {
      if (typeof confetti !== 'function') return;
      const colors = ['#1FA94D', '#4FD376', '#0E2F1F', '#D4A24C', '#FFFFFF', '#E8579A'];
      const opts = { particleCount: 80, spread: 75, startVelocity: 45, ticks: 200, colors };
      confetti({ ...opts, origin: { x: 0.12, y: 0.42 }, angle: 60 });
      confetti({ ...opts, origin: { x: 0.88, y: 0.42 }, angle: 120 });
      setTimeout(() => {
        confetti({ ...opts, particleCount: 50, origin: { x: 0.5, y: 0.3 }, spread: 110, startVelocity: 35 });
      }, 220);
    };
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const tObs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.dataset.firedConfetti) {
          entry.target.dataset.firedConfetti = 'true';
          if (!reduced) setTimeout(fireConfetti, 180);
          tObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.22 });
    tObs.observe(testimonials);
  }

  // -------------------------------------------------------------------
  // Animation: count-up for methodology micro-stats (65 / 25 / 10)
  // -------------------------------------------------------------------
  const counters = document.querySelectorAll('.micro-stats strong');
  if (counters.length && 'IntersectionObserver' in window) {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const cObs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.dataset.counted) {
          entry.target.dataset.counted = 'true';
          const original = entry.target.textContent;
          const target = parseInt(original, 10) || 0;
          if (reduced || target === 0) { return; }
          const start = performance.now();
          const duration = 1200;
          const tick = (now) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            entry.target.textContent = Math.round(eased * target) + '%';
            if (t < 1) requestAnimationFrame(tick);
            else entry.target.textContent = target + '%';
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.6 });
    counters.forEach((c) => cObs.observe(c));
  }
})();
