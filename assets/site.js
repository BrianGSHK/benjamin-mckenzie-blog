// Shared navigation behaviour for every public page.
(function () {
  var toggles = document.querySelectorAll('[data-site-nav-toggle], #navToggle, .nav-hamburger');
  toggles.forEach(function (toggle) {
    toggle.addEventListener('click', function () {
      var nav = document.querySelector('[data-site-nav], #navLinks, .nav-links');
      if (!nav) return;
      var open = nav.classList.toggle('is-open');
      nav.classList.toggle('open', open);
      toggle.classList.toggle('active', open);
      toggle.setAttribute('aria-expanded', String(open));
    });
  });
})();
