/* Cookie consent + GA4 + Microsoft Clarity loader.
   Requires <head> to define dataLayer + gtag('consent','default',{...denied}).
   Loaded as external module to keep CSP strict (no 'unsafe-inline'). */
(function () {
    var GA4_ID = '__GA4_PENDING__';
    var CLARITY_ID = 'wct2uh9bru';

    function loadAnalytics() {
        if (CLARITY_ID && CLARITY_ID !== '__CLARITY_PENDING__') {
            (function (c, l, a, r, i, t, y) {
                c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
                t = l.createElement(r); t.async = 1; t.src = 'https://www.clarity.ms/tag/' + i;
                y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
            })(window, document, 'clarity', 'script', CLARITY_ID);
        }
        if (GA4_ID && GA4_ID !== '__GA4_PENDING__') {
            var s = document.createElement('script');
            s.async = true;
            s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA4_ID;
            document.head.appendChild(s);
            window.dataLayer = window.dataLayer || [];
            window.gtag = window.gtag || function () { dataLayer.push(arguments); };
            gtag('js', new Date());
            gtag('config', GA4_ID, { anonymize_ip: true });
            gtag('consent', 'update', { 'analytics_storage': 'granted' });
        }
    }

    function injectBanner() {
        if (document.getElementById('ck-banner')) return;
        var d = document.createElement('div');
        d.id = 'ck-banner';
        d.className = 'ck-banner';
        d.setAttribute('role', 'region');
        d.setAttribute('aria-label', 'Consentimiento de cookies');
        d.innerHTML =
            '<div class="ck-banner-inner">' +
                '<p class="ck-banner-text">Usamos cookies propias y de terceros (analítica anónima) para mejorar tu experiencia. Lee m&aacute;s en <a href="/cookies.html">pol&iacute;tica de cookies</a>.</p>' +
                '<div class="ck-banner-actions">' +
                    '<button type="button" class="ck-btn ck-btn-reject" id="ck-reject">Rechazar</button>' +
                    '<button type="button" class="ck-btn ck-btn-accept" id="ck-accept">Aceptar</button>' +
                '</div>' +
            '</div>';
        document.body.appendChild(d);
        document.getElementById('ck-accept').addEventListener('click', accept);
        document.getElementById('ck-reject').addEventListener('click', reject);
        d.style.display = 'block';
    }

    function accept() {
        try { localStorage.setItem('ck_consent', 'accept'); } catch (e) {}
        var b = document.getElementById('ck-banner'); if (b) b.style.display = 'none';
        loadAnalytics();
    }
    function reject() {
        try { localStorage.setItem('ck_consent', 'reject'); } catch (e) {}
        var b = document.getElementById('ck-banner'); if (b) b.style.display = 'none';
    }

    var c = null;
    try { c = localStorage.getItem('ck_consent'); } catch (e) {}
    if (c === 'accept') {
        loadAnalytics();
    } else if (c !== 'reject') {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', injectBanner);
        } else {
            injectBanner();
        }
    }
})();