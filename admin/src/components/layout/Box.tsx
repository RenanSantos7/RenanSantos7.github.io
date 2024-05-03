import React, { ReactNode } from "react"
import styled from "styled-components"

interface BoxProps {
    children: ReactNode
}

const StyledBox = styled.div`
    background-color: var(--bg-card);
    box-shadow: 0 0 5px var(--shadow);
    border: 1px solid var(--borda);
    border-radius: 2rem;
    padding: 1.3em;
`

export default function Box({children}: BoxProps) {
    return (
        <StyledBox>
            {children}
        </StyledBox>
    )
}