Feature: Criar contato no Prophet

  Scenario Outline: Criar contato com sucesso
    Given Faco o login na ferramenta Prophet
    And Eu acesso o menu "Contatos"
    And Eu clico no botão "Adicionar Contato"
    And O formulário de criação de contato é exibido
    And Eu preencho o formulário com "<email>", "<nome>", "<sobrenome>", "<empresa>", "<telefone>", "<cargo>", "<cidade>", "<estado>" e "<pais>"
    And Eu confirmo a criação do contato
    Then Eu vejo o "<nome>" "<sobrenome>" na tela de detalhes do contato

    Examples:
    | email            | nome   | sobrenome | empresa   | telefone    | cargo             | cidade   | estado    | pais   |
    | j_ram@email.com  | Jair   | Ramos     | Empresa 1 | 11 9999-999 | Gerente de Vendas | Campinas | Sao Paulo | Brasil | 
    | jr_s@email.com   | Junior | Lopes     | Empresa 2 | 21 8888-888 | Analista de Dados | Sorocaba | Sao Paulo | Brasil |
    | l_s@email.com    | Lilia  | Souza     | Empresa 3 | 31 7777-777 | Coordenadora      | Goiania  | Goias     | Brasil |

  