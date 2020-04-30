import React from 'react'
import styled from 'styled-components'

import Container from './Container'

const WeatherData = ({ data = [] }) => {
  const sortedData = data.sort((a, b) => (a.name > b.name ? 1 : -1))
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
                  .concat(
                    piece.weather[0].description.slice(
                      1,
                      piece.weather[0].description.length
                    )
                  )}
              </b>
            </Title>
            <Title>
              Wind Speed: <b>{piece.wind.speed}</b>
            </Title>
            <Title>
              Wind Angle: <b>{piece.wind.deg}</b>
            </Title>
            <hr style={{ marginTop: 20, marginBottom: 10 }} />
          </DataWrapper>
        ))}
      </Wrapper>
    </Container>
  )
}

const Wrapper = styled.div``

const List = styled.ul``

const DataWrapper = styled.div`
  margin-bottom: 20px;
`

const Title = styled.h1`
  font-size: 16px;
  font-weight: 300;
`

export default WeatherData
