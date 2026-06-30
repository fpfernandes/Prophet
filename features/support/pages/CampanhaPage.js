export default class CampanhaPage {
    constructor (page) {
        this.page = page
        this.campanhaTitulo = page.getByRole('heading', { name: 'Campanhas' })
        this.botaoCampanha = page.getByRole('button', { name: 'Criar Campanha' })
        this.tituloCriarCampanha = page.locator('h2:has-text("Criar Campanha")')
        this.nomeCampanha = page.getByPlaceholder('ex. Campanha de Prospecção Q1')
        this.descricaoCampanha = page.getByPlaceholder('Descreva os objetivos da sua campanha...')
        this.comboboxes = page.getByRole('combobox')
        this.botaoCriarCampanha = page.getByRole('button', { name: 'Criar Campanha' })

}

    async campanhaTituloVisivel() {
            await this.campanhaTitulo.waitFor({ state: 'visible' })

    }

    async clicarBotaoCampanha() {
            await this.botaoCampanha.click()

    }

    async tituloCriarCampanhaVisivel() {
            await this.tituloCriarCampanha.waitFor({ state: 'visible' })

    }

    async preencherFormularioCampanha(nome_campanha, descricao_campanha, tipo_campanha, objetivo_campanha) {
        await this.page.waitForTimeout(1000)
        await this.nomeCampanha.fill(nome_campanha)
        await this.descricaoCampanha.fill(descricao_campanha)
        await this.comboboxes.nth(0).click()
        await this.page.getByRole('option', { name: tipo_campanha }).click({force: true})
        await this.comboboxes.nth(1).click()
        await this.page.getByRole('option', { name: objetivo_campanha }).click({force: true})
        await this.page.waitForTimeout(1000)
    
    }

    async clicarBotaoCriarCampanha() {
        await this.botaoCriarCampanha.click()

    }

    async checarNomeCampanhaVisivel(nome_campanha) {
        await this.page.waitForTimeout(1000)
        const checarNomeCampanha = this.page.locator(`h1:has-text("${nome_campanha}")`)
        await checarNomeCampanha.waitFor({ state: 'visible' })
        await this.page.waitForTimeout(1000)
        
    }


}
