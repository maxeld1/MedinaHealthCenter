/* =========================================================
   Medina Health Center — Interactions
   ========================================================= */

(function () {
  "use strict";

  /* ---------- Mobile menu toggle ---------- */
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
      const isOpen = navLinks.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close menu when an anchor is clicked on mobile
    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        if (window.matchMedia("(max-width: 820px)").matches) {
          navLinks.classList.remove("open");
          menuToggle.setAttribute("aria-expanded", "false");
        }
      });
    });
  }

  /* ---------- Header blend / shrink on scroll ---------- */
  const siteHeader = document.querySelector(".site-header");

  if (siteHeader) {
    function syncHeaderState() {
      if (window.scrollY > 36) {
        siteHeader.classList.add("is-scrolled");
      } else {
        siteHeader.classList.remove("is-scrolled");
      }
    }

    syncHeaderState();
    window.addEventListener("scroll", syncHeaderState, { passive: true });
  }

  /* ---------- Grant carousel ---------- */
  const grantStageImage = document.getElementById("grant-stage-image");

  if (grantStageImage) {
    const grantSlides = [
      {
        src: "assets/grant-oceanfirst.avif",
        alt: "OceanFirst Bank Foundation grant awarded card",
        amount: "$15,000 GRANT AWARDED",
        org: "OceanFirst Bank Foundation",
        name: "General Operations Support",
        year: "2025",
      },
      {
        src: "assets/grant_mercer.avif",
        alt: "Mercer County grant awarded card",
        amount: "$90,000 GRANT AWARDED",
        org: "Mercer County",
        name: "Capital Improvement Grant",
        year: "2025",
      },
      {
        src: "assets/grant-wawafoundation.avif",
        alt: "Wawa Foundation grant awarded card",
        amount: "$1,000 GRANT AWARDED",
        org: "Wawa Foundation",
        name: "Community Support Grant",
        year: "2025",
      },
      {
        src: "assets/grant_horizon.avif",
        alt: "Horizon Blue Cross Blue Shield grant awarded card",
        amount: "$25,000 GRANT AWARDED",
        org: "Horizon Foundation for New Jersey",
        name: "Diabetes Awareness & Treatment",
        year: "2025",
      },
      {
        src: "assets/grant-connie.avif",
        alt: "Grant awarded card",
        amount: "$10,000 GRANT AWARDED",
        org: "Connie Dwyer Breast Cancer Foundation",
        name: "Women's Health Programs",
        year: "2025",
      },
    ];

    const grantPrev = document.querySelector('[data-grant-nav="prev"]');
    const grantNext = document.querySelector('[data-grant-nav="next"]');
    const grantDots = Array.from(document.querySelectorAll("[data-grant-dot]"));
    const grantAmount = document.getElementById("grant-amount");
    const grantOrg = document.getElementById("grant-org");
    const grantName = document.getElementById("grant-name");
    const grantYear = document.getElementById("grant-year");
    let grantIndex = 0;
    let grantTimer = null;

    function renderGrantSlide(index) {
      grantIndex = (index + grantSlides.length) % grantSlides.length;
      const slide = grantSlides[grantIndex];
      grantStageImage.src = slide.src;
      grantStageImage.alt = slide.alt;
      grantStageImage.dataset.index = String(grantIndex);
      if (grantAmount) grantAmount.textContent = slide.amount;
      if (grantOrg) grantOrg.textContent = slide.org;
      if (grantName) grantName.textContent = slide.name;
      if (grantYear) grantYear.textContent = slide.year;

      grantDots.forEach(function (dot, dotIndex) {
        dot.classList.toggle("is-active", dotIndex === grantIndex);
      });
    }

    function startGrantTimer() {
      window.clearInterval(grantTimer);
      grantTimer = window.setInterval(function () {
        renderGrantSlide(grantIndex + 1);
      }, 4200);
    }

    if (grantPrev) {
      grantPrev.addEventListener("click", function () {
        renderGrantSlide(grantIndex - 1);
        startGrantTimer();
      });
    }

    if (grantNext) {
      grantNext.addEventListener("click", function () {
        renderGrantSlide(grantIndex + 1);
        startGrantTimer();
      });
    }

    grantDots.forEach(function (dot) {
      dot.addEventListener("click", function () {
        renderGrantSlide(Number(dot.dataset.grantDot));
        startGrantTimer();
      });
    });

    renderGrantSlide(0);
    startGrantTimer();
  }

  /* ---------- First-visit donation modal ---------- */
  const donationModal = document.getElementById("donation-modal");

  if (donationModal) {
    const storageKey = "medinaDonationModalSeen";
    const closeButtons = donationModal.querySelectorAll('[data-modal-close="true"]');

    function closeDonationModal() {
      donationModal.classList.remove("is-open");
      donationModal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      sessionStorage.setItem(storageKey, "true");
    }

    function openDonationModal() {
      donationModal.classList.add("is-open");
      donationModal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }

    if (!sessionStorage.getItem(storageKey)) {
      window.setTimeout(openDonationModal, 350);
    }

    closeButtons.forEach(function (button) {
      button.addEventListener("click", closeDonationModal);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && donationModal.classList.contains("is-open")) {
        closeDonationModal();
      }
    });
  }

  /* ---------- Animated counters ---------- */
  const counters = document.querySelectorAll("[data-counter]");

  if ("IntersectionObserver" in window && counters.length) {
    const counterObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const target = Number(el.dataset.counter);
          const suffix = el.dataset.suffix || "";
          const decimals = target % 1 !== 0 ? 1 : 0;
          const duration = 1400;
          const start = performance.now();

          function tick(time) {
            const progress = Math.min((time - start) / duration, 1);
            const value = target * (1 - Math.pow(1 - progress, 3));
            el.textContent =
              value.toLocaleString(undefined, {
                minimumFractionDigits: decimals,
                maximumFractionDigits: decimals,
              }) + suffix;
            if (progress < 1) {
              requestAnimationFrame(tick);
            }
          }

          requestAnimationFrame(tick);
          observer.unobserve(el);
        });
      },
      { threshold: 0.4 }
    );

    counters.forEach(function (counter) {
      counterObserver.observe(counter);
    });
  }

  /* ---------- Newsletter form ---------- */
  const newsletterForm = document.getElementById("newsletter-form");
  const newsletterNote = document.getElementById("form-note");

  if (newsletterForm && newsletterNote) {
    newsletterForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const email = document.getElementById("email");
      if (!email.checkValidity()) {
        email.reportValidity();
        return;
      }

      newsletterNote.textContent = "Thanks for submitting!";
      newsletterNote.style.color = "#ffffff";
      newsletterForm.reset();
    });
  }

  /* ---------- Active nav highlighting on scroll ---------- */
  const navAnchors = document.querySelectorAll(
    '.nav-links a[href^="#"]'
  );
  const sectionIds = Array.from(navAnchors)
    .map(function (a) {
      return a.getAttribute("href");
    })
    .filter(function (href) {
      return href && href.length > 1;
    });

  const sections = sectionIds
    .map(function (id) {
      return document.querySelector(id);
    })
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length) {
    const navObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            const id = "#" + entry.target.id;
            navAnchors.forEach(function (a) {
              if (a.getAttribute("href") === id) {
                a.classList.add("is-active");
              } else {
                a.classList.remove("is-active");
              }
            });
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach(function (s) {
      navObserver.observe(s);
    });
  }

  /* ---------- Current year in footer ---------- */
  const yearEl = document.getElementById("current-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ---------- Scroll reveal (subtle fade-up on enter) ---------- */
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!reduceMotion) {
    const revealSelectors = [
      ".section-head",
      ".stats-grid",
      ".services-grid > *",
      ".about-grid > *",
      ".story-wrap > *",
      ".grant-showcase",
      ".involved-layout > *",
      ".feature-article > *",
      ".news-grid > *",
      ".contact-grid > *",
      ".newsletter > *",
    ];
    const revealEls = document.querySelectorAll(revealSelectors.join(","));
    revealEls.forEach(function (el, i) {
      el.classList.add("reveal");
      el.style.transitionDelay = Math.min(i % 4, 3) * 80 + "ms";
    });

    if ("IntersectionObserver" in window) {
      const revealObserver = new IntersectionObserver(
        function (entries, observer) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );
      revealEls.forEach(function (el) {
        revealObserver.observe(el);
      });
    } else {
      revealEls.forEach(function (el) {
        el.classList.add("is-visible");
      });
    }
  }
})();
