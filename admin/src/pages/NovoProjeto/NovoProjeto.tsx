import React from 'react'
import { Box, FlexLine } from '../../components/layout'
import { Title3 } from '../../components/typography'
import { Botao } from '../../components/elements'

export default function NovoProjeto() {
	return (
		<Box>
			<Title3 style={{fontSize: '1.8rem'}}>Novo Projeto</Title3>

			<FlexLine>
				<Botao>Salvar</Botao>
				<Botao variant='outlined'>Outro botao</Botao>
			</FlexLine>
		</Box>
	)
}
