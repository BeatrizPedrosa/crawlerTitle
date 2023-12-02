const puppeteer = require('puppeteer');

async function crawlerTitle(site) {
  const browser = await puppeteer.launch({ headless: 'new' }); 
  const page = await browser.newPage();
  await page.goto(site);
  const tituloDaPagina = await page.title();
  await browser.close();

  return tituloDaPagina;
}

module.exports = { crawlerTitle };