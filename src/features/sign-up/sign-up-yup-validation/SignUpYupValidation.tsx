import React, { useState } from 'react'
import {
    Alert,
    Checkbox,
    FormControlLabel,
    Grid,
    MenuItem,
} from '@mui/material'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { genderOptions, userSignUpSchema } from '@/common/models/user'
import {
    ButtonReset,
    ButtonSubmit,
    FormInputText,
    FormSelect,
} from '@/components/inputs'
import { SignUpHelper, SignUpTemplate } from '@/features/sign-up'

const SignUpYupValidation = () => {
    const [submitted, setSubmitted] = useState(false)

    const formOptions = { resolver: yupResolver(userSignUpSchema) }
    const {
        register,
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
            <SignUpTemplate title="Sign up (yup validation)">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={2} sx={{ pt: 3 }}>
                        {submitted && (
                            <Grid item xs={12}>
                                <Alert
                                    data-testid="sign-up-success"
                                    severity="success"
                                    sx={{ mb: 2 }}
                                >
                                    Form submitted
                                </Alert>
                            </Grid>
                        )}
                        <Grid item xs={12} sm={6}>
                            <FormInputText
                                data-test="first-name-input"
                                name="firstName"
                                control={control}
                                label="First name"
                                type="text"
                                errors={errors}
                                sx={{ my: 0 }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormInputText
                                data-test="last-name-input"
                                name="lastName"
                                control={control}
                                label="Last name"
                                type="text"
                                errors={errors}
                                sx={{ my: 0 }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormInputText
                                data-test="email-input"
                                name="email"
                                control={control}
                                label="Email"
                                type="email"
                                errors={errors}
                                sx={{ my: 0 }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormInputText
                                data-test="password-input"
                                name="password"
                                control={control}
                                label="Password"
                                type="password"
                                errors={errors}
                                sx={{ my: 0 }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormInputText
                                data-test="confirm-password-input"
                                name="confirmPassword"
                                control={control}
                                label="Confirm Password"
                                type="password"
                                errors={errors}
                                sx={{ my: 0 }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormSelect
                                data-test="gender-select"
                                name="gender"
                                label="Gender"
                                control={control}
                                errors={errors}
                                sx={{ my: 0 }}
                            >
                                {genderOptions.map((genderOption, index) => (
                                    <MenuItem
                                        data-test={`gender-option`}
                                        key={index}
                                        value={genderOption.value}
                                    >
                                        {genderOption.label}
                                    </MenuItem>
                                ))}
                            </FormSelect>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        data-test="extra-emails-checkbox"
                                        value="allowExtraEmails"
                                        color="primary"
                                    />
                                }
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                        </Grid>
                    </Grid>
                    <ButtonSubmit
                        data-test="button-submit"
                        fullWidth
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign up
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
                    <SignUpHelper />
                </form>
            </SignUpTemplate>
        </React.Fragment>
    )
}

export default SignUpYupValidation
