const puppeteer = require('puppeteer');

// IIFE - Inmediately Invoked Function Expression
(async function () {
  const browser = await puppeteer.launch({
    headless: false,
    // slowMo: true,
  });

  const page = await browser.newPage();

  await page.goto('https://google.com');

  await page.waitForSelector('input.gLFyf.gsfi');

  // const element = await page.$('input.gLFyf.gsfi');
  // const element = await page.$eval('input.gLFyf.gsfi', (el) => el.outerHTML);
  // console.log(element)
  await page.type('input.gLFyf.gsfi', 'hola mundo', { delay: 100 });
  await page.click('input.gNO89b');

  await page.waitForSelector('#result-stats')
  await page.screenshot({
    path: './screenshot.png',
    type: 'png',
    fullPage: true,
  })

  await browser.close();
})()
