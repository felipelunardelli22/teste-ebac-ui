/// <reference types="cypress"/> 
const perfil = require('../fixtures/perfil.json')

context ('Funcionalidade Login',() =>{
    beforeEach(() => {
        cy.visit('minha-conta/')
    });    
    
    it.only(' Deve fazer login com sucesso',() =>{
       
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain','Minha conta')
        cy.get('.woocommerce-MyAccount-content').should('contain','Olá')
    })

    it('Deve fazer login com sucesso - usando arquivo de dados',() =>{
        cy.get('#username').type(perfil.Usuario)
        cy.get('#password').type(perfil.Senha)
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain','Minha conta')
        cy.get('.woocommerce-MyAccount-content').should('contain','Olá')
    })
    it.only('Deve fazer login com sucesso - usando fixture',() =>{
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.Usuario)
            cy.get('#password').type(dados.Senha, {log: false})
            cy.get('.woocommerce-form > .button').click()
        }) 
    })   

    it('Deve exibir uma tratativa de erro em caso de preenchimento usuario invalidos', () =>{
       
        cy.get('#username').type('aluo_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain', 'e-mail desconhecido')

    })
    it('Deve exibir uma tratativa de erro em caso de preenchimento senha invalidos', () =>{
       
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain', 'A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')

    })
    
    
})