import React from 'react'
import styled from 'styled-components'

const NavCircle = (props) => {
  return (
    <Container>
      <Circle img={props.img}/>
      <CircleName>{props.text}</CircleName>
    </Container>
  )
}

const Container = styled.div`
  padding-left: 5px;
  padding-right: 5px;
`
const Circle = styled.div`
width: 14.55vw;
max-width: 186.33px;
height: 14.55vw;
max-height: 186.33px;
border-radius: 100%;
background-image: url(${props => {
  return props.img
}});
background-repeat: no-repeat;
background-position: center;
background-size: cover;
`
const CircleName = styled.div`
  width: 14.4vw;
  max-width: 186.33px;
  height: 2.5vw;
  max-height: 32px;
  font-size: 16px;
  text-align: center;
  line-height: 32px;
`

export default NavCircle