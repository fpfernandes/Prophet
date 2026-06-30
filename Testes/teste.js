const { chromium } = require('playwright');

(async () => {

    const browser = await chromium.connectOverCDP(
        'http://localhost:9222'
    )

    const context = browser.contexts()[0]

    const page = await context.newPage()

    await page.goto('https://www.prophet.build/')

    const tituloPaginaInicial = page.locator(
        'h1:has-text("Seu agente de IA,")'
    )

    await tituloPaginaInicial.waitFor()

    const painelLink = page.getByRole('link', { name: 'Painel' })
    await painelLink.click();

    const areaTexto = page.getByRole('textbox')

    await areaTexto.fill(
        'Encontre 5 Gerentes de Vendas de empresas brasileiras de turismo. Para cada um desses 5 leads, enriquece com e-mail verificado, telefone direto e tamanho do time de vendas.'
    )

    const botaoEnviar = page.locator('button[type="submit"]')
    await botaoEnviar.click()

    // ✅ SOLUÇÃO 1: espera estabilização do texto (substitui waitForTimeout)

    async function waitForStableText(page, selector, timeout = 120000, stableTime = 2000) {
        let lastText = '';
        let stableCounter = 0;

        const start = Date.now();

        while (Date.now() - start < timeout) {
            const currentText = await page.locator(selector).innerText().catch(() => '')

            if (currentText === lastText && currentText.length > 0) {
                stableCounter += 200;
            } else {
                stableCounter = 0;
                lastText = currentText;
            }

            if (stableCounter >= stableTime) {
                return currentText;
            }

            await page.waitForTimeout(200)
        }

        throw new Error('Timeout esperando resposta estabilizar')
    }

    // substitui completamente o waitForTimeout
    await waitForStableText(page, 'body')

    const palavras = [
        "Resumo da Prospecção",
        "Métricas"
    ]

    const texto = await page.textContent('body');

    const encontradas = palavras.filter(p =>
        texto.toLowerCase().includes(p.toLowerCase())
    )

    console.log(encontradas)

    await browser.close()

    // await tituloPaginaInicial.waitFor()

    // const painelLink = page.getByRole('link', { name: 'Painel' })
    // await painelLink.click()

    // const areaTexto = page.getByRole('textbox')

    // await areaTexto.fill(
    //     'Encontre 5 Gerentes de Vendas de empresas brasileiras de turismo. Para cada um desses 5 leads, enriquece com e-mail verificado, telefone direto e tamanho do time de vendas. Quando terminar o prompt, retorne a frase Resumo da Prospecção'
    // )

    // const botaoEnviar = page.locator('button[type="submit"]')

    // await botaoEnviar.click()

    // //await page.waitForTimeout(20000)

    // const palavras = [
    //     "Resumo da Prospecção",
    //     "Métricas"
    // ]

    // const texto = await page.textContent('body')

    // const encontradas = palavras.filter(p =>
    //     texto.toLowerCase().includes(p.toLowerCase())
    // )

    // console.log(encontradas)

    // await browser.close()


})()


