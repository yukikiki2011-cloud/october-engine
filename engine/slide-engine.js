/* ============================================================
   OCTOBER ENGINE — Slide Navigation Core
   キーボード・クリック・タッチスワイプ対応
   ============================================================ */
(function () {
  'use strict';

  let current = 0;
  const deck = document.querySelector('.slide-deck');
  if (!deck) return;

  const slides = Array.from(deck.querySelectorAll(':scope > .slide'));
  const total = slides.length;
  if (!total) return;

  /* ---- UI Elements ---- */
  const progress = document.createElement('div');
  progress.className = 'slide-progress';
  document.body.appendChild(progress);

  const counter = document.createElement('div');
  counter.className = 'slide-counter';
  document.body.appendChild(counter);

  const nav = document.createElement('div');
  nav.className = 'slide-nav';
  nav.innerHTML =
    '<button id="btn-prev" aria-label="前のスライド">&#8592;</button>' +
    '<button id="btn-next" aria-label="次のスライド">&#8594;</button>';
  document.body.appendChild(nav);

  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');

  /* ---- Core: Go To Slide N ---- */
  function goTo(n) {
    slides[current].classList.remove('active');
    current = Math.max(0, Math.min(n, total - 1));
    slides[current].classList.add('active');
    slides[current].scrollTop = 0;

    progress.style.width = ((current + 1) / total * 100) + '%';
    counter.textContent = (current + 1) + ' / ' + total;
    btnPrev.disabled = current === 0;
    btnNext.disabled = current === total - 1;
  }

  /* ---- Click Navigation ---- */
  btnPrev.addEventListener('click', function () { goTo(current - 1); });
  btnNext.addEventListener('click', function () { goTo(current + 1); });

  /* ---- Keyboard Navigation ---- */
  document.addEventListener('keydown', function (e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
      e.preventDefault();
      goTo(current + 1);
    }
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      goTo(current - 1);
    }
  });

  /* ---- Touch / Swipe ---- */
  var touchStartX = 0;
  var touchStartY = 0;
  document.addEventListener('touchstart', function (e) {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  document.addEventListener('touchend', function (e) {
    var dx = e.changedTouches[0].clientX - touchStartX;
    var dy = e.changedTouches[0].clientY - touchStartY;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
      goTo(dx < 0 ? current + 1 : current - 1);
    }
  }, { passive: true });

  /* ---- Init ---- */
  goTo(0);
}());
