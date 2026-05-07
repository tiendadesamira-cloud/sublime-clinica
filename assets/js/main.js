/* Mobile menu toggle + fade-in on scroll + async CSS swap.
   CSP-safe: no inline event handlers. */
(function () {
    function activateAsyncCss() {
        document.querySelectorAll('link[rel="stylesheet"][media="print"]').forEach(function (l) {
            l.media = 'all';
        });
    }
    activateAsyncCss();

    function toggleMobile() {
        var b = document.querySelector('.topnav-burger');
        var m = document.getElementById('mobile-menu');
        if (!b || !m) return;
        var open = m.classList.toggle('is-open');
        b.setAttribute('aria-expanded', open);
    }
    function bindBurger() {
        var btn = document.querySelector('.topnav-burger');
        if (btn) btn.addEventListener('click', toggleMobile);
    }

    function setupFadeIn() {
        var els = document.querySelectorAll('.fade-in');
        if (!('IntersectionObserver' in window)) {
            els.forEach(function (e) { e.classList.add('is-visible'); });
            return;
        }
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (e) {
                if (e.isIntersecting) {
                    e.target.classList.add('is-visible');
                    io.unobserve(e.target);
                }
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
        els.forEach(function (e) { io.observe(e); });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            bindBurger();
            setupFadeIn();
        });
    } else {
        bindBurger();
        setupFadeIn();
    }
})();