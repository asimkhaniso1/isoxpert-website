// ISOXPERT partner referral links.
// A partner shares any isoxpert.com page with ?ref=<code>. The code is kept
// first-touch for 90 days and appended to every link into the ISOXPERT apps,
// which hold it until checkout; the partner hub validates it server-side.
(function () {
  var KEY = 'isx_partner_ref';
  var TTL_MS = 90 * 86400000;
  var APP_HOSTS = [
    'compliance360.isoxpert.com',
    'inspect360suite.com',
    'app.inspect360suite.com',
    'audit360.isoxpert.com',
    'qc360.isoxpert.com'
  ];

  function clean(code) {
    code = (code || '').trim();
    return /^[A-Za-z0-9_-]{2,64}$/.test(code) ? code : null;
  }

  function held() {
    try {
      var stored = JSON.parse(localStorage.getItem(KEY) || 'null');
      if (!stored) return null;
      if (Date.now() - stored.at > TTL_MS) { localStorage.removeItem(KEY); return null; }
      return clean(stored.code);
    } catch (e) { return null; }
  }

  var code = held();
  var fresh = clean(new URLSearchParams(location.search).get('ref'));
  if (!code && fresh) {
    code = fresh;
    try { localStorage.setItem(KEY, JSON.stringify({ code: fresh, at: Date.now() })); } catch (e) { /* storage blocked */ }
  }
  if (!code) return;

  function tag(a) {
    try {
      var url = new URL(a.href);
      if (APP_HOSTS.indexOf(url.hostname) < 0 || url.searchParams.has('ref')) return;
      url.searchParams.set('ref', code);
      a.href = url.toString();
    } catch (e) { /* not a URL */ }
  }

  document.querySelectorAll('a[href]').forEach(tag);
  // Links added after load (menus, maps) are tagged as they are clicked.
  document.addEventListener('click', function (e) {
    var a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
    if (a) tag(a);
  }, true);
})();
