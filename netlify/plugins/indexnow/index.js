const fs = require("fs");
const path = require("path");

const HOST = "imaginelandworks.com";
const INDEXNOW_KEY = "597167109f126ecfc1db2a105c5d9d5c";
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;

function extractLocs(xml) {
  const matches = xml.match(/<loc>(.*?)<\/loc>/g) || [];
  return matches.map((tag) => tag.replace(/<\/?loc>/g, "").trim());
}

function collectSitemapUrls(publishDir) {
  const indexXml = fs.readFileSync(path.join(publishDir, "sitemap-index.xml"), "utf-8");
  const urls = [];

  for (const sitemapUrl of extractLocs(indexXml)) {
    const childPath = path.join(publishDir, sitemapUrl.replace(`https://${HOST}`, ""));
    if (fs.existsSync(childPath)) {
      urls.push(...extractLocs(fs.readFileSync(childPath, "utf-8")));
    }
  }

  return urls;
}

module.exports = {
  async onSuccess({ constants }) {
    const context = process.env.CONTEXT || "unknown";

    let urls;
    try {
      urls = collectSitemapUrls(constants.PUBLISH_DIR);
    } catch (err) {
      console.log(`[indexnow] Could not read sitemap, skipping ping: ${err.message}`);
      return;
    }

    if (urls.length === 0) {
      console.log("[indexnow] No URLs found in sitemap, skipping ping.");
      return;
    }

    if (context !== "production") {
      console.log(
        `[indexnow] "${context}" deploy — dry run, would submit ${urls.length} URL(s) to IndexNow. Skipping real ping.`
      );
      return;
    }

    const payload = {
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: KEY_LOCATION,
      urlList: urls,
    };

    try {
      const res = await fetch("https://api.indexnow.org/indexnow", {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(payload),
      });
      console.log(`[indexnow] Submitted ${urls.length} URL(s) for production deploy — status ${res.status}`);
    } catch (err) {
      // Non-fatal: the deploy has already succeeded, don't fail the build over this.
      console.log(`[indexnow] Ping failed: ${err.message}`);
    }
  },
};
