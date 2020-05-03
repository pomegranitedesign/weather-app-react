import React from 'react'
import styled from 'styled-components'

import Container from './Container'

const Error = ({ text }) => {
	return (
		<Container>
			<Wrapper>
				<Text>{text}</Text>
			</Wrapper>
		</Container>
	)
}

const Wrapper = styled.div`
	background-color: #eb4d4b;
	padding: 20px;
	border-radius: 3px;
	color: #ffffff;
`

const Text = styled.p`
	font-size: 20px;
	font-weight: 900;
`

export default Error
