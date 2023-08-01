import React, { useState } from 'react'
import { Alert, Checkbox, FormControlLabel } from '@mui/material'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { userCredentialsSchema } from '@/common/models/user'
import { ButtonReset, ButtonSubmit, FormInputText } from '@/components/inputs'
import { SignInHelper, SignInTemplate } from '@/features/sign-in'

const SignInYupValidation = () => {
    const [submitted, setSubmitted] = useState(false)

    const title: string = 'Sign in (yup validation)'
    const formOptions = { resolver: yupResolver(userCredentialsSchema) }

    const {
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm(formOptions)

    const onSubmit = (data: any) => {
        console.log(data)
        setSubmitted(true)
    }

    return (
        <React.Fragment>
            <SignInTemplate title={title}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {submitted && (
                        <Alert
                            data-testid="sign-in-success"
                            severity="success"
                            sx={{ mt: 3, mb: 3 }}
                        >
                            Form submitted
                        </Alert>
                    )}
                    <FormInputText
                        data-test="email-input"
                        name="email"
                        control={control}
                        label="Email"
                        type="email"
                        errors={errors}
                    />
                    <FormInputText
                        data-test="password-input"
                        name="password"
                        control={control}
                        label="Password"
                        type="password"
                        errors={errors}
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                data-testid="remember-me-checkbox"
                                value="remember"
                                color="primary"
                            />
                        }
                        label="Remember me"
                    />
                    <ButtonSubmit
                        data-test="button-submit"
                        fullWidth
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </ButtonSubmit>
                    {submitted && (
                        <ButtonReset
                            data-test="button-reset"
                            fullWidth
                            sx={{ mb: 2 }}
                            onClick={() => {
                                reset()
                                setSubmitted(false)
                            }}
                        >
                            Reset
                        </ButtonReset>
                    )}
                    <SignInHelper />
                </form>
            </SignInTemplate>
        </React.Fragment>
    )
}

export default SignInYupValidation
