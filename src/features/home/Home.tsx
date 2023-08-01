// src/features/home/Home.tsx
import React from 'react'

import { Heading, Section, Paragraph } from '@/components/data-display'
import { Container } from '@mui/material'

const technologies = [
    'React',
    'TypeScript',
    'Material UI',
    'Vite',
    'Vitest',
    'Cypress',
    'React Router',
    'React Hook Form/Yup',
    'axios',
    'Mock Service Worker',
    'Faker',
    'ESLint/Prettier/AirBNB',
]

const Home = () => {
    return (
        <Container maxWidth="md" component="main" sx={{ pt: 8, pb: 8 }}>
            <Section id="home">
                <Heading>React Forms</Heading>
                <Paragraph data-testid="home-text">
                    This application is built using the following technologies:
                </Paragraph>
                <ul data-testid="technologies-list">
                    {technologies.map((technology) => (
                        <li data-test="technologies-list-item" key={technology}>
                            {technology}
                        </li>
                    ))}
                </ul>
            </Section>
        </Container>
    )
}

export default Home
