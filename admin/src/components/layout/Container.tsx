import React from "react"
import { ReactNode } from "react"
import styled from "styled-components"

const StyledContainer = styled.div`
    width: min(90vw, 1200px);
    margin-inline: auto;
`

interface ContainerProps {
    children: ReactNode
}

export default function Container({children}:ContainerProps) {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    )
}