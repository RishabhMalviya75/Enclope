/* =========================================================
   CAMO CREW — shared behaviour for every page
========================================================= */
(function () {
  "use strict";

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Loading screen ---------- */
  var loader = document.getElementById("loading-screen");
  if (loader) {
    var hideLoader = function () {
      loader.classList.add("fade-out");
      window.setTimeout(function () { loader.style.display = "none"; }, 800);
    };
    if (document.readyState === "complete") {
      window.setTimeout(hideLoader, 250);
    } else {
      window.addEventListener("load", function () { window.setTimeout(hideLoader, 250); });
    }
    /* never trap the user behind the loader */
    window.setTimeout(hideLoader, 4000);
  }

  /* ---------- Paint blobs ---------- */
  if (!reduced) {
    var blobs = document.createElement("div");
    blobs.className = "paint-blobs";
    blobs.setAttribute("aria-hidden", "true");
    blobs.innerHTML = "<span></span><span></span><span></span>";
    document.body.appendChild(blobs);
  }

  /* ---------- Sidebar ---------- */
  var sidebar = document.getElementById("sidebar");
  var overlay = document.getElementById("sidebarOverlay");
  var menuBtn = document.getElementById("menuToggle");
  var closeBtn = document.getElementById("sidebarClose");

  function setSidebar(open) {
    if (!sidebar) return;
    sidebar.classList.toggle("open", open);
    if (overlay) overlay.classList.toggle("open", open);
    document.body.style.overflow = open ? "hidden" : "";
    if (menuBtn) menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
  }
  function toggleSidebar() { setSidebar(!sidebar.classList.contains("open")); }

  if (menuBtn) {
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.setAttribute("aria-label", "Open menu");
    menuBtn.addEventListener("click", toggleSidebar);
  }
  if (closeBtn) closeBtn.addEventListener("click", function () { setSidebar(false); });
  if (overlay) overlay.addEventListener("click", function () { setSidebar(false); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setSidebar(false);
  });

  /* ---------- Nav shrink on scroll + back to top ---------- */
  var nav = document.querySelector("nav");
  var toTop = document.createElement("button");
  toTop.className = "to-top";
  toTop.type = "button";
  toTop.setAttribute("aria-label", "Back to top");
  toTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
  toTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  });
  document.body.appendChild(toTop);

  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      var y = window.scrollY || window.pageYOffset;
      if (nav) nav.classList.toggle("scrolled", y > 40);
      toTop.classList.toggle("show", y > 500);
      ticking = false;
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Scroll reveal ---------- */
  var revealables = document.querySelectorAll("[data-reveal]");
  if (revealables.length) {
    if (reduced || !("IntersectionObserver" in window)) {
      revealables.forEach(function (el) { el.classList.add("is-visible"); });
    } else {
      /* stagger within each parent group */
      var groups = new Map();
      revealables.forEach(function (el) {
        var p = el.parentElement;
        var n = groups.get(p) || 0;
        el.style.setProperty("--i", String(n));
        groups.set(p, n + 1);
      });

      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
          if (entry.target.hasAttribute("data-count")) runCounter(entry.target);
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

      revealables.forEach(function (el) { io.observe(el); });

      /* failsafe: never leave content invisible if the observer never fires */
      window.setTimeout(function () {
        revealables.forEach(function (el) {
          if (!el.classList.contains("is-visible")) {
            el.classList.add("is-visible");
            io.unobserve(el);
          }
        });
      }, 2500);
    }
  }

  /* ---------- Animated counters ---------- */
  function runCounter(card) {
    var el = card.querySelector("[data-count]") || (card.hasAttribute("data-count") ? card : null);
    if (!el) return;
    var target = parseFloat(el.getAttribute("data-count"));
    if (isNaN(target)) return;
    var prefix = el.getAttribute("data-prefix") || "";
    var suffix = el.getAttribute("data-suffix") || "";
    if (reduced) { el.textContent = prefix + target + suffix; return; }

    var start = performance.now();
    var dur = 1400;
    (function step(now) {
      var t = Math.min((now - start) / dur, 1);
      var eased = 1 - Math.pow(1 - t, 3);
      el.textContent = prefix + Math.round(target * eased) + suffix;
      if (t < 1) requestAnimationFrame(step);
    })(start);
  }
  /* counters that are their own reveal target */
  document.querySelectorAll("[data-count]").forEach(function (el) {
    if (!el.closest("[data-reveal]")) runCounter(el);
  });

  /* ---------- Gallery filter ---------- */
  var filterBtns = document.querySelectorAll(".filter-btn");
  var galleryItems = document.querySelectorAll(".gallery-item");
  if (filterBtns.length && galleryItems.length) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        filterBtns.forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
        var cat = (btn.getAttribute("data-filter") || "all").toLowerCase();

        galleryItems.forEach(function (item) {
          var itemCat = (item.getAttribute("data-cat") || "").toLowerCase();
          var show = cat === "all" || itemCat.split(/\s+/).indexOf(cat) !== -1;
          item.classList.add("is-filtering");
          window.setTimeout(function () {
            item.classList.toggle("is-hidden", !show);
            requestAnimationFrame(function () { item.classList.remove("is-filtering"); });
          }, reduced ? 0 : 180);
        });
      });
    });
  }

  /* ---------- FAQ accordion ---------- */
  var faqQuestions = document.querySelectorAll(".faq-question");
  faqQuestions.forEach(function (q) {
    var item = q.closest(".faq-item");
    q.setAttribute("aria-expanded", item && item.classList.contains("active") ? "true" : "false");
    q.addEventListener("click", function () {
      if (!item) return;
      var isOpen = item.classList.contains("active");
      document.querySelectorAll(".faq-item.active").forEach(function (open) {
        open.classList.remove("active");
        var ob = open.querySelector(".faq-question");
        if (ob) ob.setAttribute("aria-expanded", "false");
      });
      if (!isOpen) {
        item.classList.add("active");
        q.setAttribute("aria-expanded", "true");
      }
    });
  });

  /* ---------- Smooth in-page scroll ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      var id = a.getAttribute("href");
      if (!id || id === "#") return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
      setSidebar(false);
    });
  });

  /* ---------- Forms (bug report / contact) ---------- */
  document.querySelectorAll("form[data-local-form]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var alertBox = document.querySelector(".success-alert");
      if (alertBox) {
        alertBox.style.display = "block";
        alertBox.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "center" });
      }
      form.reset();
    });
  });
})();
