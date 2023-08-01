import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { CssBaseline } from '@mui/material'

import './App.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import { AppContainer, AppDrawer } from '@/core/layout'
import Home from '@/features/home/Home'
import {
    SignInHtmlValidation,
    SignInNoValidation,
    SignInYupValidation,
} from '@/features/sign-in'
import {
    SignUpYupValidation,
    SignUpYupJsValidation,
    SignUpYupMswValidation,
} from '@/features/sign-up'
import {
    AddressYupValidation,
    AddressYupJsValidation,
    AddressYupMswValidation,
} from '@/features/address'

function App() {
    return (
        <React.Fragment>
            <CssBaseline />
            <div className="App">
                <AppDrawer />
                <AppContainer>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/sign-in/sign-in-no-validation"
                            element={<SignInNoValidation />}
                        />
                        <Route
                            path="/sign-in/sign-in-html-validation"
                            element={<SignInHtmlValidation />}
                        />
                        <Route
                            path="/sign-in/sign-in-yup-validation"
                            element={<SignInYupValidation />}
                        />

                        <Route
                            path="/sign-up/sign-up-yup-validation"
                            element={<SignUpYupValidation />}
                        />
                        <Route
                            path="/sign-up/sign-up-yup-js-validation"
                            element={<SignUpYupJsValidation />}
                        />
                        <Route
                            path="/sign-up/sign-up-yup-msw-validation"
                            element={<SignUpYupMswValidation />}
                        />

                        <Route
                            path="/address/address-yup-validation"
                            element={<AddressYupValidation />}
                        />
                        <Route
                            path="/address/address-yup-js-validation"
                            element={<AddressYupJsValidation />}
                        />
                        <Route
                            path="/address/address-yup-msw-validation"
                            element={<AddressYupMswValidation />}
                        />
                    </Routes>
                </AppContainer>
            </div>
            )
        </React.Fragment>
    )
}

export default App
