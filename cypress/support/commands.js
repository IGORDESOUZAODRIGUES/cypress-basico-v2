Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Igor')
    cy.get('#lastName').type('Souza')
    cy.get('#email').type('igor@exemplo.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button','Enviar').click()
})