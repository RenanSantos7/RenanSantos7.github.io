import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface StyledFlexProps {
    alignItems?: 'center' | 'flex-start' | 'baseline' | 'flex-end'
    justifyContent?: 'center' | 'start' | 'end' | 'space-between' | 'space-around'
}

const StyledFlex = styled.div<StyledFlexProps>`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: ${props => props.alignItems || 'start'};
    justify-content: ${props => props.justifyContent || 'center'}
`

interface FlexStackProps extends StyledFlexProps {
    children: ReactNode
}

export default function FlexStack({children, alignItems, justifyContent}: FlexStackProps) {
    return (
        <StyledFlex
            alignItems={alignItems}
            justifyContent={justifyContent}
        >
            {children}
        </StyledFlex>
    )
}