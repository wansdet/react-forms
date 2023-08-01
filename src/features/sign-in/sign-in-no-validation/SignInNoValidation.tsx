import React, { useState } from 'react'
import {
    Alert,
    Button,
    Checkbox,
    FormControlLabel,
    TextField,
} from '@mui/material'

import { SignInHelper, SignInTemplate } from '@/features/sign-in'

const SignInNoValidation = () => {
    const [submitted, setSubmitted] = useState(false)
    const title: string = 'Sign in (no validation)'

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        setSubmitted(true)
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
                        margin="normal"
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
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

export default SignInNoValidation
