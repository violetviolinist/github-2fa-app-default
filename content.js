(() => {
  const APP_PATH = "/sessions/two-factor/app";
  const KEEP = ["/sessions/two-factor/app", "/sessions/two-factor/recovery", "/sessions/two-factor/sms"];

  const path = location.pathname.replace(/\/$/, "");
  if (KEEP.includes(path)) return;
  // Referrer from another 2FA page means the user picked this method on purpose.
  if (document.referrer.includes("/sessions/two-factor")) return;

  location.replace(APP_PATH + location.search);
})();
