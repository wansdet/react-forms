import { SignIn } from '../page-objects/features'

describe('Sign In', () => {
    const signIn = new SignIn()

    beforeEach(() => {
        signIn.visitYup()
    })

    it('successfully loads and contains the expected elements', () => {
        signIn
            .getSignInContent()
            .should('be.visible')
            .within(() => {
                signIn.getSignInTitle().contains('Sign in (yup validation)')
                signIn.getEmailInput().should('be.visible')
                signIn.getPasswordInput().should('be.visible')
                signIn.getRememberMeCheckbox().should('be.visible')
                signIn.getButtonSubmit().should('be.visible')
                signIn.getButtonReset().should('not.exist')
                signIn.getSignInSuccess().should('not.exist')
            })
    })

    it('successfully submits the form', () => {
        signIn.getSignInContent().within(() => {
            signIn.getEmailInput().type('admin@example.com')
            signIn.getPasswordInput().type('admin')
            signIn.getRememberMeCheckbox().click()
            signIn.getButtonSubmit().click()

            signIn
                .getSignInSuccess()
                .should('be.visible')
                .contains('Form submitted')
        })
    })

    it('successfully resets the form', () => {
        signIn.getSignInContent().within(() => {
            signIn.getEmailInput().type('admin@example.com')
            signIn.getPasswordInput().type('admin')
            signIn.getRememberMeCheckbox().click()
            signIn.getButtonSubmit().click()

            signIn.getButtonReset().click()
            signIn.getSignInSuccess().should('not.exist')
            signIn.getEmailInput().should('have.value', '')
            signIn.getPasswordInput().should('have.value', '')
            signIn.getButtonReset().should('not.exist')
        })
    })

    it('successfully validates the form', () => {
        signIn.getSignInContent().within(() => {
            signIn.getButtonSubmit().click()

            signIn.getEmailInput().contains('Valid email is required')
            signIn.getPasswordInput().contains('Password is required')
        })
    })
})
