import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface StyledFlexProps {
    alignItems?: 'center' | 'flex-start' | 'baseline' | 'flex-end'
    justifyContent?: 'center' | 'start' | 'end' | 'space-between' | 'space-around'
}

const StyledFlex = styled.div<StyledFlexProps>`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    align-items: ${props => props.alignItems || 'center'};
    justify-content: ${props => props.justifyContent || 'start'}
`

interface FlexLineProps extends StyledFlexProps {
    children: ReactNode
}

export default function FlexLine({children, alignItems, justifyContent}: FlexLineProps) {
    return (
        <StyledFlex
            alignItems={alignItems}
            justifyContent={justifyContent}
        >
            {children}
        </StyledFlex>
    )
}