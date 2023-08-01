import React, { useState } from 'react'
import {
    Alert,
    Container,
    FormControl,
    FormControlLabel,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    Stack,
} from '@mui/material'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { JSON_SERVER_BASE_URL } from '@/core/application'
import { useApiPost } from '@/core/api'
import useNotification from '@/common/hooks/feedback/useNotification'
import { IUserAddress, userUKAddressSchema } from '@/common/models/user'
import { ukCounties } from '@/common/models/address'
import H1 from '@/components/data-display/H1'
import {
    ButtonReset,
    ButtonSubmit,
    FormInputText,
    FormCheckbox,
} from '@/components/inputs'

const AddressYupJsValidation = () => {
    const [submitted, setSubmitted] = useState(false)
    const { showNotification, NotificationComponent } = useNotification()

    const {
        postData: address,
        loading: addressLoading,
        error: addressError,
    } = useApiPost<IUserAddress>(`${JSON_SERVER_BASE_URL}/addresses`)

    const formOptions = { resolver: yupResolver(userUKAddressSchema) }
    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm(formOptions)

    const onSubmit = (data: any) => {
        console.log(data)
        address(data)
            .then(() => {
                showNotification('Created address successfully', 'success')
                setSubmitted(true)
            })
            .catch((error) => {
                console.error(
                    'Error occurred while creating user address',
                    error
                )
            })
    }

    return (
        <Container maxWidth="lg" component="main" sx={{ pt: 8, pb: 8 }}>
            <H1 variant="h4">Address Form (yup + JSON Server)</H1>
            {submitted && (
                <Alert severity="success" sx={{ mt: 3, mb: 3 }}>
                    Form submitted
                </Alert>
            )}
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={0}>
                    <Grid item sm={12} md={9}>
                        <FormInputText
                            name="name"
                            control={control}
                            label="Name"
                            type="text"
                            errors={errors}
                        />
                    </Grid>
                    <Grid item sm={12} md={9}>
                        <FormInputText
                            name="phoneNumber"
                            control={control}
                            label="Phone number"
                            type="text"
                            errors={errors}
                        />
                    </Grid>
                    <Grid item sm={12} md={9}>
                        <FormInputText
                            name="organisation"
                            control={control}
                            label="Organisation"
                            type="text"
                            errors={errors}
                        />
                    </Grid>
                    <Grid item sm={12} md={9}>
                        <FormInputText
                            name="propertyNumber"
                            control={control}
                            label="Property number/name"
                            type="text"
                            errors={errors}
                        />
                    </Grid>
                    <Grid item sm={12} md={9}>
                        <FormInputText
                            name="street"
                            control={control}
                            label="Street"
                            type="text"
                            errors={errors}
                        />
                    </Grid>
                    <Grid item sm={12} md={9}>
                        <FormInputText
                            name="locality"
                            control={control}
                            label="Street Line 2 or Locality"
                            type="text"
                            errors={errors}
                        />
                    </Grid>
                    <Grid item sm={12} md={9}>
                        <FormInputText
                            name="city"
                            control={control}
                            label="Town/City"
                            type="text"
                            errors={errors}
                        />
                    </Grid>
                    <Grid item sm={12} md={9}>
                        <FormControl fullWidth sx={{ mt: 2, mb: 1 }}>
                            <InputLabel id="state">County</InputLabel>
                            <Select
                                defaultValue=""
                                {...register('state')}
                                sx={{ mb: 0 }}
                            >
                                {ukCounties.map((state, index) => (
                                    <MenuItem
                                        key={index}
                                        value={state.countyCode}
                                    >
                                        {state.countyName}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item sm={12} md={9}>
                        <FormInputText
                            name="postalCode"
                            control={control}
                            label="Postal code"
                            type="text"
                            errors={errors}
                        />
                    </Grid>
                    <FormControl sx={{ mb: 3 }} fullWidth>
                        <FormControlLabel
                            control={
                                <FormCheckbox
                                    name="primaryAddress"
                                    control={control}
                                    errors={errors}
                                />
                            }
                            label="Primary address"
                        />
                    </FormControl>
                    <Stack direction="row" spacing={0} flexWrap="wrap">
                        <ButtonSubmit sx={{ mb: 3, mr: 2 }}>
                            Submit
                        </ButtonSubmit>
                        <ButtonReset
                            sx={{ mb: 3 }}
                            onClick={() => {
                                reset()
                                setSubmitted(false)
                            }}
                        >
                            Reset
                        </ButtonReset>
                    </Stack>
                </Grid>
            </form>
            <NotificationComponent />
        </Container>
    )
}

export default AddressYupJsValidation
