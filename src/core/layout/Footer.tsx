import * as React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

interface IFooterProps {
    description?: string
    title?: string
}

const Copyright = () => {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}

const Footer = (props: IFooterProps) => {
    const { description, title } = props

    return (
        <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
            <Container maxWidth="lg">
                {title && (
                    <Typography variant="h6" align="center" gutterBottom>
                        {title}
                    </Typography>
                )}
                {description && (
                    <Typography
                        variant="subtitle1"
                        align="center"
                        color="text.secondary"
                        component="p"
                    >
                        {description}
                    </Typography>
                )}
                <Copyright />
            </Container>
        </Box>
    )
}

export default Footer
