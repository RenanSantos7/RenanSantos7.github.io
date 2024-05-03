import React from "react";
import { Box, FlexLine } from "../components/layout";
import { Title3 } from "../components/typography";
import Botao from "../components/elements/Botao";

interface NovoProjetoProps {
    
}

export default function NovoProjeto({}: NovoProjetoProps) {
    return (
        <Box>
            <Title3>Novo Projeto</Title3>

            <FlexLine>
                <Botao>Salvar</Botao>
                <Botao variant="outlined">Outro botao</Botao>
            </FlexLine>
        </Box>
    )
}