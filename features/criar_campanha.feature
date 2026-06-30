Feature: Criar campanha no Prophet

  Scenario Outline: Criar campanha com sucesso
    Given Eu estou logado na ferramenta Prophet
    And Eu acesso o menu "Campanhas"
    And Eu clico no botão "Criar Campanha"
    And O formulário de criação de campanha é exibido
    And Eu preencho o formulário com "<nome_campanha>", "<descricao_campanha>", "<tipo_campanha>" e "<objetivo_campanha>"
    And Eu confirmo a criação da campanha
    Then Eu vejo o nome da campanha "<nome_campanha>" na tela de detalhes da campanha

    Examples:
    | nome_campanha | descricao_campanha | tipo_campanha | objetivo_campanha |
    | Campanha 1    | Descrição 1        | Sequência     | Obter Respostas   |
    | Campanha 2    | Descrição 2        | Envio único   | Agendar Reuniões  |
    | Campanha 3    | Descrição 3        | Sequência     | Agendar Reuniões  |