import {Given, When, Then} from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import CampanhaPage from '../pages/CampanhaPage.js'
import LoginPage from '../pages/LoginPage.js'
import MenuLateral from '../pages/MenuLateral.js'


Given('Eu estou logado na ferramenta Prophet', async function () { 
    this.campanhaPage = new CampanhaPage(this.page)
    this.loginPage = new LoginPage(this.page)
    this.menuLateral = new MenuLateral(this.page)

    await this.loginPage.login()
    await this.loginPage.verificarTituloPaginaInicial()
    await this.loginPage.clicarPainelLink()
    await this.loginPage.verificarAreaTexto()

})

When('Eu acesso o menu "Campanhas"', async function () {
    await this.menuLateral.clicarBotaoOutreach()
    await this.menuLateral.clicarCampanhaLink()
    await this.campanhaPage.campanhaTituloVisivel()
    
})

When('Eu clico no botão "Criar Campanha"', async function () {
    await this.campanhaPage.clicarBotaoCampanha()

})

When('O formulário de criação de campanha é exibido', async function () {
    await this.campanhaPage.tituloCriarCampanhaVisivel()

})

When('Eu preencho o formulário com {string}, {string}, {string} e {string}', async function (nome_campanha, descricao_campanha, tipo_campanha, objetivo_campanha) {
    await this.campanhaPage.preencherFormularioCampanha(nome_campanha, descricao_campanha, tipo_campanha, objetivo_campanha)

})

When('Eu confirmo a criação da campanha', async function () {
    await this.campanhaPage.clicarBotaoCriarCampanha()

})

Then('Eu vejo o nome da campanha {string} na tela de detalhes da campanha', async function (nome_campanha) {
    await this.campanhaPage.checarNomeCampanhaVisivel(nome_campanha)

})  

