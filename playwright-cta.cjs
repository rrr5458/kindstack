const { chromium } = require('playwright');
const path = require('path');

async function capture() {
  const browser = await chromium.launch();

  // Light mode
  const page = await browser.newPage();
  await page.goto('http://localhost:5173');

  // Scroll to CTA
  await page.evaluate(() => {
    const cta = document.querySelector('.cta-footer-section');
    if (cta) cta.scrollIntoView({ behavior: 'instant', block: 'center' });
  });

  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.join('/home/jules/verification', 'cta_after.png') });
  await page.close();

  // Dark mode
  const pageDark = await browser.newPage({ colorScheme: 'dark' });
  await pageDark.goto('http://localhost:5173');
  await pageDark.evaluate(() => {
    const cta = document.querySelector('.cta-footer-section');
    if (cta) cta.scrollIntoView({ behavior: 'instant', block: 'center' });
  });
  await pageDark.waitForTimeout(1000);
  await pageDark.screenshot({ path: path.join('/home/jules/verification', 'cta_dark_mode_after.png') });
  await pageDark.close();

  await browser.close();
  console.log('Screenshots captured');
}

capture().catch(console.error);
