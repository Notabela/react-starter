import '@testing-library/cypress/add-commands';

describe('The Home Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    })

    it('toggles correctly', () => {
        cy.findByText(/This is React!/i, { timeout: 7000 }).should('exist')
        cy.wait(1000);
        cy.findByRole('button').click();
        cy.wait(1000);
        cy.findByText(/This is CSC 59939!/i, { timeout: 7000 }).should('exist')
    })
})