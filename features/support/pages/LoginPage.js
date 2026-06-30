export default class LoginPage {
    constructor (page) {
        this.page = page
        this.tituloPaginaInicial = page.locator('h1:has-text("Seu agente de IA,")')
        this.painelLink = page.getByRole('link', { name: 'Painel' })
        this.areaTexto = page.getByRole('textbox')
        
    }

    async login() {
        await this.page.goto('https://www.prophet.build/')
    }
   
    async verificarTituloPaginaInicial() {
        await this.tituloPaginaInicial.waitFor({ state: 'visible' })

    }

    async clicarPainelLink() {
        await this.painelLink.click()
    
    }

    async verificarAreaTexto() {
        await this.areaTexto.waitFor({ state: 'visible' })

    }

}
