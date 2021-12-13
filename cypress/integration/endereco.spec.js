/// <reference types ="cypress"/>
import EnderecoPage from '../support/page-objects/endereco.page'
const dadosEndereco = require('../fixtures/endereco.json')

describe('Funcionalidade endereços - faturamento e entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta/')
        cy.fixture('perfil').then(dados =>{
            cy.login(dados.Usuario, dados.Senha)
        })
        
    });
    it('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('Joao','jacinto','youtube','Av santos dummond','25552','Santos','Sao Paulo','01452111','11777774444','joaojacinto@dominio.com')
        cy.get('.woocommerce-message').should('contain','Endereço alterado com sucesso.')
    });

    
    it.only('Deve fazer cadastro de faturamento com sucesso - Usando arquivo de dados', () => {
        EnderecoPage.editarEnderecoFaturamento(
            dadosEndereco[0].nome,
            dadosEndereco[0].sobrenome,
            dadosEndereco[0].empresa,
            dadosEndereco[0].endereco,
            dadosEndereco[0].numero,
            dadosEndereco[0].cidade,
            dadosEndereco[0].estado,
            dadosEndereco[0].cep,
            dadosEndereco[0].telefone,
            dadosEndereco[0].email
            
            )
        cy.get('.woocommerce-message').should('contain','Endereço alterado com sucesso.')
    });
});