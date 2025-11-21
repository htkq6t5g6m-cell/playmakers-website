const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  try {
    const outDir = path.resolve(__dirname, '..', 'screenshots');
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
    const ts = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `hero-${ts}.png`;
    const outPath = path.join(outDir, filename);

    const browser = await puppeteer.launch({ args: ['--no-sandbox','--disable-setuid-sandbox'] });
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 900 });
    await page.goto('http://localhost:3005/', { waitUntil: 'networkidle2', timeout: 30000 });
    // allow React to hydrate
    await page.evaluate(() => new Promise(res => setTimeout(res, 1200)));
    // take full page screenshot
    await page.screenshot({ path: outPath, fullPage: false });
    await browser.close();
    console.log(outPath);
    process.exit(0);
  } catch (err) {
    console.error('screenshot error', err && err.message ? err.message : err);
    process.exit(2);
  }
})();
