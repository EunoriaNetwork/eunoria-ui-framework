/* GTA UI Framework - small helpers */
(function () {
  'use strict';

  // Tabs
  document.addEventListener('click', function (e) {
    var tab = e.target.closest('[data-gta-tab]');
    if (!tab) return;
    var group = tab.getAttribute('data-gta-tab-group') || 'default';
    var target = tab.getAttribute('data-gta-tab');
    document.querySelectorAll('[data-gta-tab-group="' + group + '"]').forEach(function (t) {
      t.classList.toggle('active', t === tab);
    });
    document.querySelectorAll('[data-gta-panel-group="' + group + '"]').forEach(function (p) {
      p.classList.toggle('active', p.getAttribute('data-gta-panel') === target);
    });
  });

  // Card selection groups
  document.addEventListener('click', function (e) {
    var card = e.target.closest('[data-gta-card-group]');
    if (!card) return;
    var group = card.getAttribute('data-gta-card-group');
    document.querySelectorAll('[data-gta-card-group="' + group + '"]').forEach(function (c) {
      c.classList.remove('active');
    });
    card.classList.add('active');
  });

  // Toggle toast demo
  window.gtaToast = function (msg, type) {
    type = type || 'default';
    var t = document.createElement('div');
    t.className = 'gta-toast gta-toast--' + type;
    t.innerHTML = '<div class="gta-alert__title">' + msg + '</div>';
    document.body.appendChild(t);
    setTimeout(function () { t.remove(); }, 3000);
  };
})();
