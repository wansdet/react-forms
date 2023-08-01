import React, { ReactNode } from 'react'
import Box from '@mui/material/Box'

interface AppContainerProps {
    children: ReactNode
}

const AppContainer: React.FC<AppContainerProps> = ({ children }) => {
    return (
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                bgcolor: 'background.default',
                p: 0,
                ml: 44,
                mr: 0,
                mt: 0,
            }}
        >
            {children}
        </Box>
    )
}

export default AppContainer
