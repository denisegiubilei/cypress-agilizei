describe('Autenticação', () => {

  it('Efetuar login com usuário e senha válidos', { tags: 'critical' }, () => {
    const { email, password } = Cypress.env('user');

    cy.visit('/');

    // clicar no botao sign in
    cy.get('.nav-link')
      .contains('Sign in')
      .click();

    // informar usuario e senha
    cy.get('input[type=email]').type(email);
    cy.get('input[type=password]').type(password);

    // clicar no botão entrar
    cy.get('button.btn-primary').click();

    //verificar autenticacao
    cy.get('.nav-pills a.nav-link')
      .should('have.length', 2);

    cy.get('.nav-pills a.nav-link')
      .first()
      .should('contain.text', 'Your Feed');
  });

})
