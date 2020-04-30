import React from 'react'
import styled from 'styled-components'

import Container from './Container'

const Header = () => (
  <Container>
    <Wrapper>
      <Title>Weather App</Title>
    </Wrapper>
  </Container>
)

const Wrapper = styled.header``

const Title = styled.h1`
  font-size: 32px;
  font-weight: 900;
  color: #2f3542;
  text-align: center;
`

export default Header
