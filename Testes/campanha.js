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
    await areaTexto.waitFor({ state: 'visible' })

    //await page.getByRole('textbox').waitFor({ state: 'visible' })

    const botaoOutreach = page.getByRole('button', { name: 'Outreach' })
    await botaoOutreach.click()

    const campanhaLink = page.getByRole('link', { name: 'Campanhas' })
    await campanhaLink.click()

    // const tituloOutreach = page.locator('div:has-text("Campanhas")')
    // await tituloOutreach.waitFor({ state: 'visible' })
    // await page.locator('div:has-text("Campanhas")').waitFor({ state: 'visible' })

    ///////////////////////////////
    await page.getByRole('heading', { name: 'Campanhas' }).waitFor({ state: 'visible' })

    const botaoCampanha = page.getByRole('button', { name: 'Criar Campanha' })
    await botaoCampanha.click()

    const tituloCriarCampanha = page.locator('h2:has-text("Criar Campanha")')
    await tituloCriarCampanha.waitFor({ state: 'visible' })

    const nomeCampanha = page.getByPlaceholder('ex. Campanha de Prospecção Q1')
    await nomeCampanha.fill('Campanha Turismo')

    const descricaoCampanha = page.getByPlaceholder('Descreva os objetivos da sua campanha...')
    await descricaoCampanha.fill('Campanha de marketing para promoção de pacotes de turismo')

    const selecionarTipo = page.locator('[data-slot="select-trigger"]').filter({ hasText: 'Sequência' })
    await selecionarTipo.waitFor({ state: 'visible' })
    await selecionarTipo.click({force: true})   

    const selecionarObjetivoCampanha = page.locator('[data-slot="select-trigger"]').filter({ hasText: 'Obter Respostas' })
    await selecionarObjetivoCampanha.waitFor({ state: 'visible' })
    await selecionarObjetivoCampanha.click({force: true})

    const botaoCriarCampanha = page.getByRole('button', { name: 'Criar Campanha' })
    await botaoCriarCampanha.click()

    const checarNomeCampanha = page.locator('h1:has-text("Campanha Turismo")')
    await checarNomeCampanha.waitFor({ state: 'visible' })


})()
