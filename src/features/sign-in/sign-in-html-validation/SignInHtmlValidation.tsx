import React, { useState } from 'react'
import {
    Alert,
    Button,
    Checkbox,
    FormControlLabel,
    TextField,
} from '@mui/material'

import { SignInHelper, SignInTemplate } from '@/features/sign-in'

const SignInHtmlValidation = () => {
    const [submitted, setSubmitted] = useState(false)
    const title: string = 'Sign in (HTML validation)'

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        setSubmitted(true)
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)

        setSubmitted(false)
    }

    return (
        <React.Fragment>
            <SignInTemplate title={title}>
                <form autoComplete="off" onSubmit={handleSubmit}>
                    {submitted && (
                        <Alert severity="success" sx={{ mt: 3, mb: 3 }}>
                            Form submitted
                        </Alert>
                    )}
                    <TextField
                        label="Email Address"
                        id="email"
                        name="email"
                        type="text"
                        margin="normal"
                        color="secondary"
                        required
                        fullWidth
                        onChange={handleChange}
                    />
                    <TextField
                        label="Password"
                        id="password"
                        name="password"
                        type="password"
                        margin="normal"
                        color="secondary"
                        required
                        fullWidth
                        onChange={handleChange}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                    <SignInHelper />
                </form>
            </SignInTemplate>
        </React.Fragment>
    )
}

export default SignInHtmlValidation
