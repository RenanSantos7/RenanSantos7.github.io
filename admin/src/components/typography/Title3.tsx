import React, { ReactNode } from "react";
import styled from "styled-components";
import { TitleProps } from "./types";

const StyleTitle = styled.h3`
    font-size: 2.2rem;
    font-weight: 500;
    margin-bottom: .5em;
`

export default function Title3({ children, style }: TitleProps) {
    return (
        <StyleTitle style={style}>
            {children}
        </StyleTitle>
    )
};
