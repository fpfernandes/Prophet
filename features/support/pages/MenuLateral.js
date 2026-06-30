export default class MenuLateral {
    constructor (page) {
        this.page = page
        this.botaoOutreach = page.getByRole('button', { name: 'Outreach' })
        this.campanhaLink = page.getByRole('link', { name: 'Campanhas' })
        this.contatosLink = page.getByRole('link', { name: 'Contatos' })
    }


    async clicarBotaoOutreach() {
        await this.botaoOutreach.click()

    }

    async clicarCampanhaLink() {
        await this.campanhaLink.click()

    }

    async clicarContatosLink() {
        await this.contatosLink.click()
    
    }

}