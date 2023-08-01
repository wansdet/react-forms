import React, { useState } from 'react'
import {
    Alert,
    Container,
    FormControl,
    FormControlLabel,
    Grid,
    MenuItem,
    Stack,
} from '@mui/material'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { userUKAddressSchema } from '@/common/models/user/user.schema'
import { ukCounties } from '@/common/models/address'
import H1 from '@/components/data-display/H1'
import {
    ButtonReset,
    ButtonSubmit,
    FormInputText,
    FormCheckbox,
    FormSelect,
} from '@/components/inputs'

const AddressYupValidation = () => {
    const [submitted, setSubmitted] = useState(false)

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
        setSubmitted(true)
    }

    return (
        <Container maxWidth="md" component="main" sx={{ pt: 8, pb: 8 }}>
            <H1 variant="h4">Address Form (yup validation)</H1>
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
                        <FormSelect
                            name="state"
                            control={control}
                            label="County"
                            defaultValue=""
                            errors={errors}
                        >
                            {ukCounties.map((state, index) => (
                                <MenuItem key={index} value={state.countyCode}>
                                    {state.countyName}
                                </MenuItem>
                            ))}
                        </FormSelect>
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
        </Container>
    )
}

export default AddressYupValidation
