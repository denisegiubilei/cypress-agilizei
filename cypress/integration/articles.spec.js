describe('Artigos', () => {

  it('Criar um novo artigo', () => {
    cy.login();

    cy.visit('/');

    cy.get('a[href$=editor').click();
    cy.get('input[placeholder="Article title"]').type('Brooklin 99');
    cy.get('input[placeholder="What is this article about?"]').type('Series');
    cy.get('form textarea').type('Brooklyn Nine-Nine é uma série de televisão de comédia policial americana');
    cy.get('input[placeholder="Enter tags"]').type('brooklin99');
    cy.get('button.btn-primary').contains('Publish article').click();

    cy.get('h1').should('contain.text', 'Brooklin 99');
  });

})
