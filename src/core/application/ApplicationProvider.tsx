import React, { useState } from 'react'
import { CircularProgress } from '@mui/material'

import { ApplicationContext } from './ApplicationContext'

const ApplicationProvider = ({ children }: { children: React.ReactNode }) => {
    const [loading, setLoading] = useState(false)

    const showLoading = () => {
        setLoading(true)
    }

    const hideLoading = () => {
        setLoading(false)
    }

    return (
        <ApplicationContext.Provider
            value={{
                showLoading,
                hideLoading,
            }}
        >
            {children}
            {loading && (
                <div
                    style={{
                        position: 'fixed',
                        right: '20px',
                        bottom: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <CircularProgress color="primary" />
                </div>
            )}
        </ApplicationContext.Provider>
    )
}

export default ApplicationProvider
