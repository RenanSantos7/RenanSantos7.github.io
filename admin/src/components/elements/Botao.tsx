import React from 'react'
import { ReactNode } from 'react'
import styled from 'styled-components'

interface BotaoProps {
    children: ReactNode,
    type: 'button' | 'submit'
}

const StyledButton = styled.button`

`

export default function Botao({children, type = 'button'}: BotaoProps) {
    return (
        <StyledButton
            type={type}
        >
            children
        </StyledButton>
    )
}