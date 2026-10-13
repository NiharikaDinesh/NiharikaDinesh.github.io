// Highlight the nav link for the section in view.
(function () {
  var links = Array.prototype.slice.call(document.querySelectorAll('.topbar nav a'));
  var sections = links.map(function (a) { return document.querySelector(a.getAttribute('href')); });
  function onScroll() {
    var y = window.scrollY + 120;
    var active = 0;
    sections.forEach(function (s, i) { if (s && s.offsetTop <= y) active = i; });
    links.forEach(function (a, i) { a.classList.toggle('active', i === active); });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
