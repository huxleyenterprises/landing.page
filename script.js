function addShowClass(selector, delay) {
  setTimeout(function () {
    document.querySelector(selector).classList.add('show');
  }, delay);
}

document.addEventListener('DOMContentLoaded', function () {
  addShowClass('h1.animated-element', 500);
  addShowClass('p.animated-element', 1000);
  addShowClass('.box:first-of-type', 1500);
  addShowClass('.box:nth-of-type(2)', 2000);
  addShowClass('.box:nth-of-type(3)', 2500);
});
