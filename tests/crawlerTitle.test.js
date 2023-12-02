const state = require('../bots/state.js');
const crawler = require('../bots/crawlerTitle.js');

test('Deve extrair o título da página corretamente', async () => {
  const resultado = await crawler.getWebsiteTitle("https://automaaocombatista.herokuapp.com/");
  expect(resultado).toBe('Heroku | Application Error');
}, 10000);