import React from 'react'
import { Grid, Link } from '@mui/material'

const SignUpHelper = () => {
    return (
        <Grid container justifyContent="flex-end">
            <Grid item>
                <Link href="#" variant="body2">
                    Already have an account? Sign in
                </Link>
            </Grid>
        </Grid>
    )
}

export default SignUpHelper
