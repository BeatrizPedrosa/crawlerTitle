const puppeteer = require('puppeteer');

async function loginToSite(site, username, password) {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto(site, { waitUntil: 'networkidle0' });

  await page.type('input[data-cy="formField__login"]', username, { delay: 100 });
  await page.type('input[data-cy="formField__password"]', password, { delay: 100 });

  const continuarButton = await page.$('button[data-cy="sign-submit"]');
  await continuarButton.click();

  await page.waitForNavigation();

  await page.screenshot({ path: 'login_result.png' });

  await browser.close();
}

module.exports = { loginToSite };