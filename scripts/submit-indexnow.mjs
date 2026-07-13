#!/usr/bin/env node
// submit-indexnow.mjs — notify IndexNow (Bing, Yandex, etc.) that URLs changed,
// for near-instant re-crawl/indexing. Run AFTER deploying, so the key file is live.
//
// Usage:
//   node scripts/submit-indexnow.mjs                 # submits the default URL list below
//   node scripts/submit-indexnow.mjs <url> [url...]  # submits specific URLs
//
// The key file must be reachable at https://isoxpert.com/<KEY>.txt (in public/).

const HOST = "isoxpert.com";
const KEY = "eb7dbad0c97e7b93b3e33d5d30be877d";
const KEY_LOCATION = `https://isoxpert.com/${KEY}.txt`;

// Default: homepage + the per-standard certification landing pages.
const DEFAULT_URLS = [
  "https://isoxpert.com/",
  "https://isoxpert.com/iso-9001-certification.html",
  "https://isoxpert.com/iso-14001-certification.html",
  "https://isoxpert.com/iso-45001-certification.html",
  "https://isoxpert.com/iso-27001-certification.html",
  "https://isoxpert.com/iso-22000-certification.html",
  "https://isoxpert.com/iso-9001-certification-pakistan.html",
  "https://isoxpert.com/iso-14001-certification-pakistan.html",
  "https://isoxpert.com/iso-27001-certification-pakistan.html",
  "https://isoxpert.com/ce-marking-certification-pakistan.html",
  "https://isoxpert.com/iso-documentation.html",
  "https://isoxpert.com/quickbooks-iif-converter.html",
  "https://isoxpert.com/partners.html",
  "https://isoxpert.com/inspect360-hse-inspections.html",
];

const urlList = process.argv.slice(2).length ? process.argv.slice(2) : DEFAULT_URLS;

// 1) Sanity-check the key file is actually live (IndexNow requires this).
const keyRes = await fetch(KEY_LOCATION).catch(() => null);
if (!keyRes || !keyRes.ok) {
  console.error(`Key file not reachable at ${KEY_LOCATION} (status ${keyRes?.status ?? "no response"}).`);
  console.error("Deploy the site first so the key file is live, then re-run.");
  process.exit(1);
}
const keyText = (await keyRes.text()).trim();
if (keyText !== KEY) {
  console.error(`Key file content mismatch. Expected "${KEY}", got "${keyText}".`);
  process.exit(1);
}

// 2) Submit the batch.
const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
});

// IndexNow returns 200 (OK) or 202 (Accepted) on success.
console.log(`IndexNow response: ${res.status} ${res.statusText}`);
if (res.status === 200 || res.status === 202) {
  console.log(`Submitted ${urlList.length} URL(s):`);
  urlList.forEach((u) => console.log("  " + u));
} else {
  const body = await res.text().catch(() => "");
  console.error("Submission may have failed:", body.slice(0, 300));
  process.exit(1);
}
