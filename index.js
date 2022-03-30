const puppeteer = require('puppeteer');
require('dotenv').config();

(async () => {
    const browser = await puppeteer.launch({headless: false});
    console.log('chromium iniciado');

    const page = await browser.newPage();
    console.log('Nova guia aberta');

    await page.goto('https://www.olx.com.br/');
    console.log('Pagina Carregada');

    await page.click('button[type="submit"]');
    console.log('Aceitando os biscoitos');

    await page.click('.sc-bwzfXH.sc-htpNat.fmXLKt.sc-ifAKCX.ldsBZf.sc-hSdWYo.YRlCL');
    console.log('Clicando no botao de entrar');

    await page.waitForSelector('input[type="email"]');
    await page.type('input[type="email"]', process.env.EMAIL);
    console.log('Email Digitado');

    await page.waitForSelector('input[type="password"]');
    await page.type('input[type="password"]', process.env.SENHA);
    console.log('senha digitada');

    await page.click('.sc-kGXeez.kgGtxX');
    console.log('Logado com sucesso em OLX');

    await browser.close();

})();