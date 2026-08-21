(() => {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---------- Sticky header border on scroll ----------
  const header = document.getElementById('site-header');
  if (header) {
    const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // ---------- Mobile navigation ----------
  const toggle = document.getElementById('nav-toggle');
  const mobileNav = document.getElementById('mobile-nav');

  if (toggle && mobileNav) {
    const closeMenu = () => {
      toggle.setAttribute('aria-expanded', 'false');
      mobileNav.classList.remove('is-open');
      document.body.style.overflow = '';
    };
    const openMenu = () => {
      toggle.setAttribute('aria-expanded', 'true');
      mobileNav.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    };
    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      isOpen ? closeMenu() : openMenu();
    });
    mobileNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
    window.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });
  }

  // ---------- Active nav link on scroll ----------
  const navLinks = document.querySelectorAll('.primary-nav a');
  const sections = ['home', 'about', 'results', 'how-i-work', 'contact']
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  if (navLinks.length && sections.length && 'IntersectionObserver' in window) {
    const setActive = (id) => {
      navLinks.forEach((link) => {
        link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
      });
    };
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach((section) => navObserver.observe(section));
  }

  // ---------- Generic scroll reveal ----------
  const revealEls = document.querySelectorAll('.reveal');
  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  } else {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    revealEls.forEach((el) => revealObserver.observe(el));
  }

  // ---------- Staircase: sequential step reveal ----------
  const staircase = document.getElementById('staircase');
  if (staircase) {
    const steps = Array.from(staircase.querySelectorAll('.staircase__step'));
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      steps.forEach((step) => step.classList.add('is-visible'));
    } else {
      const staircaseObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            steps.forEach((step, i) => {
              setTimeout(() => step.classList.add('is-visible'), i * 260);
            });
            staircaseObserver.unobserve(entry.target);
          });
        },
        { threshold: 0.2 }
      );
      staircaseObserver.observe(staircase);
    }
  }

  // ---------- Growth line: sequential station reveal ----------
  const growthLine = document.getElementById('growth-line');
  if (growthLine) {
    const stops = Array.from(growthLine.querySelectorAll('[data-stop]'));
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      stops.forEach((stop) => stop.classList.add('is-visible'));
    } else {
      const growthObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const byIndex = {};
            stops.forEach((stop) => {
              const idx = stop.dataset.stop;
              (byIndex[idx] ||= []).push(stop);
            });
            Object.keys(byIndex).sort((a, b) => a - b).forEach((idx, i) => {
              setTimeout(() => byIndex[idx].forEach((el) => el.classList.add('is-visible')), i * 180);
            });
            growthObserver.unobserve(entry.target);
          });
        },
        { threshold: 0.3 }
      );
      growthObserver.observe(growthLine);
    }
  }
})();
