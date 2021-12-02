/// <reference types="cypress"/> 
var faker = require('faker');

describe('Funcionalidade pré cadastro', () => {

    beforeEach(() => {
        cy.visit('minha-conta/')
    });
    
    it('Deve Completar o pré cadastro com sucesso  ', () => {
        let emailFaker = faker.internet.email()
        let nomefaker = faker.name.firstName()
        let sobrenomeFaker = faker.name.lastName()

        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type('!teste@teste$')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nomefaker)
        cy.get('#account_last_name').type(sobrenomeFaker)
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain','Detalhes da conta modificados com sucesso.')
    });
    it.only('Deve completar o pre cadastro com sucesso - usando comandos customizados', ()=>{
        let emailFaker2= faker.internet.email()
        cy.preCadastro(emailFaker2,'senha2121@3Forte','Felipe','Subi')

        cy.get('.woocommerce-message').should('contain','Detalhes da conta modificados com sucesso.')
    })
});