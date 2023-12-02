const puppeteer = require('puppeteer');
const { loginToSite } = require('../bots/crawlerAuth'); // Substitua pelo caminho correto do seu arquivo

// Mock do puppeteer para evitar a abertura real do navegador
jest.mock('puppeteer');

describe('Crawler de Login', () => {
  it('deve fazer login corretamente', async () => {
    // Configuração do mock do puppeteer
    const mockPage = {
      goto: jest.fn().mockResolvedValue(true),
      type: jest.fn().mockResolvedValue(true),
      click: jest.fn().mockResolvedValue(true),
      waitForNavigation: jest.fn().mockResolvedValue(true),
      screenshot: jest.fn().mockResolvedValue(true),
    };

    const mockBrowser = {
      newPage: jest.fn().mockResolvedValue(mockPage),
      close: jest.fn().mockResolvedValue(true),
    };

    puppeteer.launch.mockResolvedValue(mockBrowser);

    // Executa o teste
    await loginToSite('https://cliente.americanas.com.br/minha-conta/entrar?next=https://www.americanas.com.br/?l=168','bcpr@ymail.com', 'Bheka-08');

    // Verifica se as funções do mock foram chamadas corretamente
    expect(puppeteer.launch).toHaveBeenCalledWith({ headless: false });
    expect(mockPage.goto).toHaveBeenCalledWith('https://cliente.americanas.com.br/minha-conta/entrar?next=https://www.americanas.com.br/?l=168');
    expect(mockPage.type).toHaveBeenCalledWith('#login', 'bcpr@ymail.com');
    expect(mockPage.type).toHaveBeenCalledWith('#password', 'Bheka-08');
    expect(mockPage.click).toHaveBeenCalledWith('#sc-kByoHO gCVryt');
    expect(mockPage.waitForNavigation).toHaveBeenCalled();
    expect(mockPage.screenshot).toHaveBeenCalledWith({ path: 'login_result.png' });
    expect(mockBrowser.close).toHaveBeenCalled();
  });
});
