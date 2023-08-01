import React from 'react'
import { Link, Typography } from '@mui/material'
import { SxProps } from '@mui/system'
import { merge } from 'lodash'

type IProps = {
    sx?: SxProps
}

const Copyright = (props: IProps) => {
    const { sx } = props

    const mergedSx = merge(
        {
            mt: 5,
        },
        sx
    )

    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            sx={mergedSx}
        >
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}
export default Copyright
