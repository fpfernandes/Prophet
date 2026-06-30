import {Given, When, Then} from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import ContatosPage from '../pages/ContatosPage.js'
import LoginPage from '../pages/LoginPage.js'
import MenuLateral from '../pages/MenuLateral.js'

Given('Faco o login na ferramenta Prophet', async function () {
    this.contatosPage = new ContatosPage(this.page)
    this.loginPage = new LoginPage(this.page)
    this.menuLateral = new MenuLateral(this.page)
    
    await this.loginPage.login()
    await this.loginPage.verificarTituloPaginaInicial()
    await this.loginPage.clicarPainelLink()
    await this.loginPage.verificarAreaTexto()

})

When('Eu acesso o menu "Contatos"', async function () {
    await this.menuLateral.clicarBotaoOutreach()
    await this.menuLateral.clicarContatosLink()
    await this.contatosPage.contatosTituloVisivel()

})

When ('Eu clico no botão "Adicionar Contato"', async function () {
    await this.contatosPage.clicarBotaoContatos()

})

When('O formulário de criação de contato é exibido', async function () {
    await this.contatosPage.tituloCriarContatoVisivel()

})

When('Eu preencho o formulário com {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string} e {string}', async function (email, nome, sobrenome, empresa, cargo, telefone, cidade, estado, pais) {
    await this.contatosPage.preencherFormularioContato(email, nome, sobrenome, empresa, cargo, telefone, cidade, estado, pais)

})

When('Eu confirmo a criação do contato', async function () {
    await this.contatosPage.clicarBotaoSalvarContato()

})


Then('Eu vejo o {string} {string} na tela de detalhes do contato', async function (nome, sobrenome) {
    const contatoNomeCompleto = `${nome} ${sobrenome}`
    await this.contatosPage.checarContatoVisivel(contatoNomeCompleto)

})