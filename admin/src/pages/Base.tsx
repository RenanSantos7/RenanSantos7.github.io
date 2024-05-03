import React from 'react'
import { Outlet } from 'react-router-dom'
import { Title2 } from '../components/typography'
import { Container } from '../components/layout'

export default function Base() {
    return (
        <Container>
            <Title2>Painel Administrativo</Title2>
            <Outlet />
        </Container>
    )
}