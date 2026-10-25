const { chromium } = require('playwright-core');
const path = require('path');
const fs = require('fs');

async function main() {
  const browser = await chromium.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    headless: true,
  });

  const outputDir = path.resolve(__dirname, 'capturas');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // 1. Desktop Normal View (1440x950)
  const context = await browser.newContext({
    viewport: { width: 1440, height: 950 },
    deviceScaleFactor: 2, // High-DPI crystal clear
  });

  const page = await context.newPage();
  console.log('Navigating to http://localhost:8100...');
  await page.goto('http://localhost:8100', { waitUntil: 'networkidle' });
  await page.waitForSelector('.telemetry-card__title--red-centered');
  await page.waitForTimeout(1000); // allow SVG and font rendering

  // First ensure inspector is toggled off for clean desktop view
  const inspectorBtn = await page.$('.control-pill');
  if (inspectorBtn) {
    // Check if active
    const isActive = await inspectorBtn.evaluate(el => el.classList.contains('control-pill--active'));
    if (isActive) {
      await inspectorBtn.click();
      await page.waitForTimeout(400);
    }
  }

  console.log('Capturing Desktop Normal...');
  await page.screenshot({
    path: path.join(outputDir, 'captura-desktop-normal.png'),
    fullPage: false,
  });

  // 2. Desktop Inspector View
  console.log('Activating Inspector Mode...');
  if (inspectorBtn) {
    await inspectorBtn.click();
    await page.waitForTimeout(400);
  }

  console.log('Capturing Desktop Inspector Mode...');
  await page.screenshot({
    path: path.join(outputDir, 'captura-inspector-rubrica.png'),
    fullPage: false,
  });

  // Also toggle pure colors for an extra evidence capture
  const colorToggleBtn = await page.$('.control-pill--alt');
  if (colorToggleBtn) {
    await colorToggleBtn.click();
    await page.waitForTimeout(400);
    console.log('Capturing Desktop Pure CSS Colors Mode...');
    await page.screenshot({
      path: path.join(outputDir, 'captura-colores-puros.png'),
      fullPage: false,
    });
    // Toggle back to semantic
    await colorToggleBtn.click();
    await page.waitForTimeout(400);
  }

  await context.close();

  // 3. Mobile View (iPhone 14 Pro: 393 x 852)
  console.log('Setting Mobile Viewport...');
  const mobileContext = await browser.newContext({
    viewport: { width: 393, height: 852 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
  });

  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto('http://localhost:8100', { waitUntil: 'networkidle' });
  await mobilePage.waitForSelector('.telemetry-card__title--red-centered');
  await mobilePage.waitForTimeout(1000);

  console.log('Capturing Mobile View...');
  await mobilePage.screenshot({
    path: path.join(outputDir, 'captura-mobile-responsive.png'),
    fullPage: false,
  });

  await mobileContext.close();
  await browser.close();
  console.log('All screenshots captured successfully in:', outputDir);
}

main().catch(err => {
  console.error('Error during screenshot capture:', err);
  process.exit(1);
});
