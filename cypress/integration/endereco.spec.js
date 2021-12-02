/// <reference types ="cypress"/>

describe('Funcionalidade endereços - faturamento e entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta/')
        cy.fixture('perfil').then(dados =>{
            cy.login(dados.Usuario, dados.Senha)
        })
        
    });
    it('Deve fazer cadastro de faturamento com sucesso', () => {
        
    });
});