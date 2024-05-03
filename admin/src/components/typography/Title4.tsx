import React, { ReactNode } from "react";
import styled from "styled-components";
import { TitleProps } from "./types";

const StyleTitle = styled.h4`
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: .5em;
`

export default function Title4({ children, style }: TitleProps) {
    return (
        <StyleTitle style={style}>
            {children}
        </StyleTitle>
    )
};
