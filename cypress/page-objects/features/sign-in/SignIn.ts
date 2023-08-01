/**
 * cypress/page-objects/features/sign-in/SignIn.ts
 * SignIn page object
 */
export class SignIn {
    visitYup() {
        cy.visit('/sign-in/sign-in-yup-validation')
    }

    getSignInContent() {
        return cy.get('[data-testid="sign-in-content"]')
    }

    getSignInTitle() {
        return cy.get('[data-testid="sign-in-title"]')
    }

    getSignInSuccess() {
        return cy.get('[data-testid="sign-in-success"]')
    }

    getEmailInput() {
        return cy.get('[data-test="email-input"]')
    }

    getPasswordInput() {
        return cy.get('[data-test="password-input"]')
    }

    getRememberMeCheckbox() {
        return cy.get('[data-testid="remember-me-checkbox"]')
    }

    getButtonSubmit() {
        return cy.get('[data-test="button-submit"]')
    }

    getButtonReset() {
        return cy.get('[data-test="button-reset"]')
    }
}
