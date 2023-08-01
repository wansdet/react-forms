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

import { MOCK_SERVICE_WORKER_BASE_URL } from '@/core/application'
import { useApiPost } from '@/core/api'
import useNotification from '@/common/hooks/feedback/useNotification'
import { genderOptions, IUser, userSignUpSchema } from '@/common/models/user'
import {
    ButtonReset,
    ButtonSubmit,
    FormInputText,
    FormSelect,
} from '@/components/inputs'
import { SignUpHelper, SignUpTemplate } from '@/features/sign-up'

const SignUpYupMswValidation = () => {
    const [submitted, setSubmitted] = useState(false)
    const { showNotification, NotificationComponent } = useNotification()

    const {
        postData: user,
        loading: userLoading,
        error: userError,
    } = useApiPost<IUser>(`${MOCK_SERVICE_WORKER_BASE_URL}/api/users`)

    const formOptions = { resolver: yupResolver(userSignUpSchema) }
    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm(formOptions)

    const onSubmit = (data: IUser) => {
        console.log(data)
        user(data)
            .then(() => {
                showNotification('Signed up successfully', 'success')
                setSubmitted(true)
            })
            .catch((error) => {
                console.error('Error occurred while creating user', error)
            })
    }

    return (
        <React.Fragment>
            <SignUpTemplate title="Sign up (yup + MSW Server)">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={2} sx={{ pt: 3 }}>
                        {submitted && (
                            <Grid item xs={12}>
                                <Alert severity="success" sx={{ mb: 2 }}>
                                    Form submitted
                                </Alert>
                            </Grid>
                        )}
                        <Grid item xs={12} sm={6}>
                            <FormInputText
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
                                name="gender"
                                label="Gender"
                                control={control}
                                errors={errors}
                                sx={{ my: 0 }}
                            >
                                {genderOptions.map((genderOption, index) => (
                                    <MenuItem
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
                                        value="allowExtraEmails"
                                        color="primary"
                                    />
                                }
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                        </Grid>
                    </Grid>
                    <ButtonSubmit fullWidth sx={{ mt: 3, mb: 2 }}>
                        Sign up
                    </ButtonSubmit>
                    {submitted && (
                        <ButtonReset
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
            <NotificationComponent />
        </React.Fragment>
    )
}

export default SignUpYupMswValidation
