import React from 'react'
import styled from 'styled-components'

import CardSwiper from './CardSwiper'

const CardContainer = () => {
  return (
    <Container>
    <CardSwiper />
  </Container>
  )
}

const Container = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  width: 100%;
  max-width: 1240px;
  height: 21vw;
  max-height: 489px;
  max-width: 1240px;
  overflow: hidden;
`;



export default CardContainer