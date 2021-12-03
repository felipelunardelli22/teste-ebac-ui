/// <reference types ="cypress"/>
import EnderecoPage from '../support/page-objects/endereco.page'
describe('Funcionalidade endereços - faturamento e entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta/')
        cy.fixture('perfil').then(dados =>{
            cy.login(dados.Usuario, dados.Senha)
        })
        
    });
    it.only('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('Joao','jacinto','youtube','Av santos dummond','25552','Santos','Sao Paulo','01452111','11777774444','joaojacinto@dominio.com')
        cy.get('.woocommerce-message').should('contain','Endereço alterado com sucesso.')
    });
});