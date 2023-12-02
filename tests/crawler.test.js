const state = require('../bots/state.js');
const crawler = require('../bots/crawler');

test('Deve extrair o título da página corretamente', async () => {
  // Carrega o conteúdo usando state.load()
  const content = state.load();

  // Chama a função do crawler passando o conteúdo
  const resultado = await crawler.crawlerTitle(content.site);

  // Adiciona asserções conforme necessário
  expect(resultado).toBe('Google');
}, 10000);