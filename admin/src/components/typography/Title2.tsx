import React, { ReactNode } from "react";
import styled from "styled-components";
import { TitleProps } from "./types";

const StyleTitle = styled.h2`
    font-size: 2.5rem;
    font-weight: 500;
    margin-bottom: 1em;
`

export default function Title2({ children, style }: TitleProps) {
    return (
        <StyleTitle style={style}>
            {children}
        </StyleTitle>
    )
};
