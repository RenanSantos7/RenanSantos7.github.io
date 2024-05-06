import React, { useEffect } from 'react'
import { ReactNode } from 'react'
import styled from 'styled-components'

interface BotaoProps {
	children: ReactNode
	type?: 'button' | 'submit'
	onClick?: () => void
	style?: React.CSSProperties
	variant?: 'solid' | 'outlined'
}

const ButtonSolid = styled.button`
	background-color: var(--cor1);
	color: var(--bg-geral);
	border-radius: 8rem;
	padding: 1rem;
	transition: 0.6s ease-in-out;

	&:hover {
		filter: brightness(0.8);
	}

	&:active {
		filter: brightness(0.65);
	}
`

const ButtonOutlined = styled.button`
	background-color: transparent;
	border: 1px solid var(--cor1);
	color: var(--cor1);
	border-radius: 8rem;
	padding: 1rem;
	transition: 0.6s ease-in-out;

	&:hover {
		background-color: var(--cor1trans);
	}

	&:active {
		filter: brightness(0.65);
	}
`

export default function Botao({
	children,
	type = 'button',
	onClick,
	style,
	variant = 'solid'
}: BotaoProps) {

	if (variant === 'solid') {
		return (
			<ButtonSolid type={type} onClick={onClick} style={style}>
				{children}
			</ButtonSolid>
		)
	}

	if (variant === 'outlined') {
		return (
			<ButtonOutlined type={type} onClick={onClick} style={style}>
				{children}
			</ButtonOutlined>
		)
	}
}
