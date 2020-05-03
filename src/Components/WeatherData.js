import React from 'react'
import styled from 'styled-components'
import { FaTrashAlt } from 'react-icons/fa'

import Container from './Container'

const WeatherData = ({ data = [], removeCity = () => {} }) => {
	const sortedData = data.sort((a, b) => (a.name > b.name ? 1 : -1))

	console.log(navigator.permissions.query({ name: 'geolocation' }))

	return (
		<Container>
			<Wrapper>
				{sortedData.map((piece) => (
					<DataWrapper key={piece.id}>
						<Title>
							Weather info for <b>{piece.name}</b>{' '}
						</Title>
						<Title>
							Current weather:{' '}
							<b>
								{piece.weather[0].description[0]
									.toUpperCase()
									.concat(piece.weather[0].description.slice(1, piece.weather[0].description.length))}
							</b>
						</Title>
						<Title>
							Wind Speed: <b>{piece.wind.speed}</b>
						</Title>
						<Title>
							Wind Angle: <b>{piece.wind.deg}</b>
						</Title>
						<FaTrashAltStyled title="Delete" size={20} onClick={() => removeCity(piece.name)} />
						<hr style={{ marginTop: 20, marginBottom: 10 }} />
					</DataWrapper>
				))}
			</Wrapper>
		</Container>
	)
}

const FaTrashAltStyled = styled(FaTrashAlt)`
	margin-top: 10px;
	cursor: pointer;
`

const Wrapper = styled.div``

const DataWrapper = styled.div`margin-bottom: 20px;`

const Title = styled.h1`
	font-size: 16px;
	font-weight: 300;
`

export default WeatherData
