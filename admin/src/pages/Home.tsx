import React from 'react'
import { Box, FlexLine } from '../components/layout'
import { Title2, Title3, Title4 } from '../components/typography'
import Botao from '../components/elements/Botao'
import { useNavigate } from 'react-router-dom'
import { FlexStack } from '../components/layout'
import styled from 'styled-components'

const List = styled.ul`
	list-style: none;

	li {
		margin-left: 0;
	}
`

export default function Home() {
	const navegarPara = useNavigate()
	const numprojetos = 50
	const numposts = 30

	return (
		<Box>
			<FlexLine>
				<Botao
					style={{ marginBottom: '2rem' }}
					onClick={() => navegarPara('/novo-post')}
				>
					Novo post no blog
				</Botao>

				<Botao
					style={{ marginBottom: '2rem' }}
					onClick={() => navegarPara('/novo-projeto')}
				>
					Novo projeto
				</Botao>
			</FlexLine>

			<Title4>Dashboard</Title4>

			<FlexStack>
				<List>
					<li>Número de projetos: {`${numprojetos}`}</li>
					<li>Número de posts: {`${numposts}`}</li>
				</List>
			</FlexStack>
		</Box>
	)
}
