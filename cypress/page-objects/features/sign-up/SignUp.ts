/**
 * cypress/page-objects/features/SignUp.ts
 * SignUp page object
 */
export class SignUp {
    visitYup() {
        cy.visit('/sign-up/sign-up-yup-validation')
    }

    getSignUpContent() {
        return cy.get('[data-testid="sign-up-content"]')
    }

    getSignUpTitle() {
        return cy.get('[data-testid="sign-up-title"]')
    }

    getSignUpSuccess() {
        return cy.get('[data-testid="sign-up-success"]')
    }

    getFirstNameInput() {
        return cy.get('[data-test="first-name-input"]')
    }

    getLastNameInput() {
        return cy.get('[data-test="last-name-input"]')
    }

    getEmailInput() {
        return cy.get('[data-test="email-input"]')
    }

    getPasswordInput() {
        return cy.get('[data-test="password-input"]')
    }

    getConfirmPasswordInput() {
        return cy.get('[data-test="confirm-password-input"]')
    }

    getGenderSelect() {
        return cy.get('[data-test="gender-select"]')
    }

    getGenderOption() {
        return cy.get('[data-test="gender-option"]')
    }

    getExtraEmailsCheckbox() {
        return cy.get('[data-test="extra-emails-checkbox"]')
    }

    getButtonSubmit() {
        return cy.get('[data-test="button-submit"]')
    }

    getButtonReset() {
        return cy.get('[data-test="button-reset"]')
    }
}
