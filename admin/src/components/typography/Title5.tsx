import React, { ReactNode } from "react";
import styled from "styled-components";
import { TitleProps } from "./types";

const StyleTitle = styled.h5`
    font-size: 1.8;
    font-weight: 600;
    margin-bottom: .5em;
`

export default function Title5({ children, style }: TitleProps) {
    return (
        <StyleTitle style={style}>
            {children}
        </StyleTitle>
    )
};
