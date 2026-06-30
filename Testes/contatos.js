const { chromium, expect } = require('@playwright/test');

(async () => {

    const browser = await chromium.connectOverCDP(
        'http://localhost:9222'
    )

    const context = browser.contexts()[0]

    const page = await context.newPage()

    await page.goto('https://www.prophet.build/')

    // page.on('response', async (response) => {
    // if (response.url().includes('/contacts')) {
    //     const status = response.status();
    //     const text = await response.text().catch(() => '');

    //     console.log('📡 RESPONSE:', status);
    //     console.log('BODY:', text);
    // }
    // })

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

    const contatosLink = page.getByRole('link', { name: 'Contatos' })
    await contatosLink.click()

    ////////////////////////
    await page.getByRole('heading', { name: 'Contatos' }).waitFor({ state: 'visible' })

    const botaoContatos = page.getByRole('button', { name: 'Adicionar Contato' })
    await botaoContatos.click()

    const tituloCriarCampanha = page.locator('h2:has-text("Adicionar Contato")')
    await tituloCriarCampanha.waitFor({ state: 'visible' })

    const email = page.getByPlaceholder('email@example.com')
    await email.fill('mariana.silva@example.com')

    const nome = page.locator('input[name="first_name"]')
    await nome.fill('Mariana')

    const sobrenome = page.locator('input[name="last_name"]')
    await sobrenome.fill('Silva')

    const empresa = page.locator('input[name="company"]')
    await empresa.fill('Exemplo Ltda')

    const cargo = page.locator('input[name="job_title"]')
    await cargo.fill('Gerente de Vendas')

    const telefone = page.locator('input[name="phone"]')
    await telefone.fill('11 99999-9999')

    const cidade = page.locator('input[name="city"]')
    await cidade.fill('Sao Paulo')

    const estado = page.locator('input[name="state"]')
    await estado.fill('Sao Paulo')

    const pais = page.locator('input[name="country"]')
    await pais.fill('Brasil')

    const botaoSalvarContato = page.getByRole('button', { name: 'Salvar Contato' })
    await expect(botaoSalvarContato).toBeEnabled()
    await botaoSalvarContato.click({ delay: 100 })
    await page.waitForTimeout(1000)


    const checarContato = page.locator('span:has-text("Mariana Silva")')
    // await checarContato.waitFor({ state: 'visible' })
    await expect(checarContato).toBeVisible({ timeout: 15000 })

})()


