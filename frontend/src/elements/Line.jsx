import React from 'react'

import styled from 'styled-components'

const Line = () => {
  return (
    <Container>
      <LineBox />
    </Container>
  )
}

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1240px;
  height: 33px;
`
const LineBox = styled.div`
  margin: 0 auto;
  width: 94vw;
  max-width: 1168px;
  border: 0.5px solid #e6e6e6;
`

export default Line