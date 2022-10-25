import React from 'react'

import styled from 'styled-components'

const SmallCard = (props) => {
  return (
    <Container img={props.img}></Container>
  )
}

const Container = styled.div`
  width: 45vw;
  max-width: 576px;
  height: 19.26vw;
  max-height: 246.8px;
  background-image: url(${props => {
    return props.img
  }});
  border-radius: 10px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

export default SmallCard