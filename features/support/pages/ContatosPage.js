import { expect } from '@playwright/test'

export default class ContatosPage {
    constructor (page) {
        this.page = page
        this.contatosTitulo = page.getByRole('heading', { name: 'Contatos' })
        this.botaoContatos = page.getByRole('button', { name: 'Adicionar Contato' })
        this.tituloCriarContato = page.locator('h2:has-text("Adicionar Contato")')
        this.email = page.getByPlaceholder('email@example.com')
        this.nome = page.locator('input[name="first_name"]')
        this.sobrenome = page.locator('input[name="last_name"]')
        this.empresa = page.locator('input[name="company"]')
        this.cargo = page.locator('input[name="job_title"]')
        this.telefone = page.locator('input[name="phone"]')
        this.cidade = page.locator('input[name="city"]')
        this.estado = page.locator('input[name="state"]')
        this.pais = page.locator('input[name="country"]')
        this.botaoSalvarContato = page.getByRole('button', { name: 'Salvar Contato' })

    }

    async contatosTituloVisivel() {
        await this.contatosTitulo.waitFor({ state: 'visible' })

    }

    async clicarBotaoContatos() {
        await this.botaoContatos.click()

    }

    async tituloCriarContatoVisivel() {
        await this.tituloCriarContato.waitFor({ state: 'visible' })

    }

    async preencherFormularioContato(email, nome, sobrenome, empresa, cargo, telefone, cidade, estado, pais) {
        await this.page.waitForTimeout(1000)
        await this.email.fill(email)
        await this.nome.fill(nome)
        await this.sobrenome.fill(sobrenome)
        await this.empresa.fill(empresa)
        await this.cargo.fill(cargo)
        await this.telefone.fill(telefone)
        await this.cidade.fill(cidade)
        await this.estado.fill(estado)
        await this.pais.fill(pais)
        await this.page.waitForTimeout(1000)

    }

    async clicarBotaoSalvarContato() {
        await this.page.waitForTimeout(1000)
        await expect(this.botaoSalvarContato).toBeEnabled()
        await this.botaoSalvarContato.click({ delay: 100 })
        await this.page.waitForTimeout(1000)

    }

    async checarContatoVisivel(nomeCompleto) {
        await this.page.waitForTimeout(1000)
        const checarContato = this.page.locator(`span:has-text("${nomeCompleto}")`)
        await expect(checarContato).toBeVisible({ timeout: 15000 })
        await this.page.waitForTimeout(1000)

    }

    

}


    