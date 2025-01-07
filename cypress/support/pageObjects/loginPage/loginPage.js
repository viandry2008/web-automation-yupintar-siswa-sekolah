class loginPage {

    inputEmail(email) {
        cy.wait(3000);
        cy.get('input[type="email"]').should('be.visible').type(email);
    }

    inputPassword(password) {
        cy.wait(3000);
        cy.get('input[type="password"]').should('be.visible').type(password);
    }

    clickLoginBtn() {
        cy.get('button').contains('LOGIN').click()
        cy.wait(3000);
    }

    clickLoginConfirmBtn() {
        cy.get('button').contains('Ya, data sudah benar').click()
    }
}

module.exports = new loginPage();