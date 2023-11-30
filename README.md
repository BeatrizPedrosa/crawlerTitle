# Crawler Title usando Node.js, Puppeteer e Jest
Este é um exemplo simples de um crawler desenvolvido em Node.js, que utiliza Puppeteer para automatizar interações com páginas web. Jest é utilizado para testes automatizados.

## Índice

- [Visão Geral](#visão-geral)
- [Requisitos](#requisitos)
- [Instalação](#instalação)
- [Uso Básico](#uso-básico)
- [Personalização](#personalização)
- [Testes](#testes)

## Visão Geral

Este crawler foi desenvolvido para extrair títulos de notícias de um site específico. Utiliza o Puppeteer para controlar um navegador sem cabeça e o Jest para testes.

## Requisitos

- Node.js instalado
- Puppeteer
- Jest

## Instalação

```bash
npm install puppeteer jest
```

## Uso Básico

```bash
// Importar o módulo do crawler
const crawler = require('./crawler');

// Executar o crawler
crawler.crawlerDeExemplo()
  .then(resultado => console.log(`Título da Página: ${resultado}`))
  .catch(erro => console.error(`Erro: ${erro}`));
```

## Personalização

A personalização do código está aguardando a aplicação inicial para ser desenvolvida e atualizada

## Testes

Os testes são escritos usando Jest. Execute os testes usando o seguinte comando:

```bash
npm test
```
### Testes Unitários
Foram escritos testes unitários para verificar a funcionalidade básica do crawler.
```bash
npm run test:unit
```
### Testes de Desempenho
Execute testes de desempenho usando a ferramenta como Apache JMeter para simular cargas de usuários em seu ambiente de desenvolvimento.
```bash
npm run test:performance
```
