/* GTA UI Framework - small helpers */
(function () {
  'use strict';

  // Tabs
  document.addEventListener('click', function (e) {
    var tab = e.target.closest('[data-eu-tab]');
    if (!tab) return;
    var group = tab.getAttribute('data-eu-tab-group') || 'default';
    var target = tab.getAttribute('data-eu-tab');
    document.querySelectorAll('[data-eu-tab-group="' + group + '"]').forEach(function (t) {
      t.classList.toggle('active', t === tab);
    });
    document.querySelectorAll('[data-eu-panel-group="' + group + '"]').forEach(function (p) {
      p.classList.toggle('active', p.getAttribute('data-eu-panel') === target);
    });
  });

  // Card selection groups
  document.addEventListener('click', function (e) {
    var card = e.target.closest('[data-eu-card-group]');
    if (!card) return;
    var group = card.getAttribute('data-eu-card-group');
    document.querySelectorAll('[data-eu-card-group="' + group + '"]').forEach(function (c) {
      c.classList.remove('active');
    });
    card.classList.add('active');
  });

  // Toggle toast demo
  window.euToast = function (msg, type) {
    type = type || 'default';
    var t = document.createElement('div');
    t.className = 'eu-toast eu-toast--' + type;
    t.innerHTML = '<div class="eu-alert__title">' + msg + '</div>';
    document.body.appendChild(t);
    setTimeout(function () { t.remove(); }, 3000);
  };
})();
