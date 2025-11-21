const puppeteer = require('puppeteer');
(async () => {
  try {
    const browser = await puppeteer.launch({ args: ['--no-sandbox','--disable-setuid-sandbox'] });
    const page = await browser.newPage();
    await page.goto('http://localhost:3005/', { waitUntil: 'networkidle2', timeout: 15000 });
    // Wait for hero section to appear
    await page.waitForSelector('section.hero', { timeout: 5000 }).catch(() => {});
    const heroHtml = await page.$eval('section.hero', el => el.outerHTML).catch(() => null);
    if (!heroHtml) {
      console.log('Hero section not found in the hydrated DOM.');
    } else {
      console.log(heroHtml);
    }
    await browser.close();
  } catch (err) {
    console.error('Error capturing hero:', err && err.message ? err.message : err);
    process.exit(2);
  }
})();
