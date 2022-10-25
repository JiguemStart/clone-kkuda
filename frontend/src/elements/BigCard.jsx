import React from 'react'
import styled from 'styled-components'


const BigCard = (props) => {
  return (
    <Container color={props.color}>
      <CardImage img={props.img}/>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 400px;
  opacity: 0.8px;
  background-color: ${props => {
    return props.color
  }};
`
const CardImage = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  height: 400px;
  background-image: url(${props => {
    return props.img
  }});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

export default BigCard