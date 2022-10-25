import React, { useState } from 'react'
import styled from 'styled-components'
import { bannerasd } from '../assets'
import { CardContainer, GoodsContainer } from '../components'

const WelfarePage = () => {
  const [select,  setSelect] = useState("")
  return (
    <Container>
      <Img src={bannerasd}/>

      <Text>인기 상품 최대 할인</Text>
      <Line />
        {/* <MenuBar>
          <MenuButton select={select} onClick={() => setSelect("애플")}>애플</MenuButton>
          <MenuButton select={select} onClick={() => setSelect("삼성")}>삼성</MenuButton>
          <MenuButton select={select} onClick={() => setSelect("LG")}>LG</MenuButton>
          <MenuButton select={select} onClick={() => setSelect("벤큐")}>벤큐</MenuButton>
        </MenuBar> */}
        <GoodsContainer />

    </Container>
  )
}

const Line = styled.div`
  border:0.5px solid gray;
  opacity: 0.3;
  width: 1200px;
  margin: 0 auto;
  margin-bottom: 30px;
`

const Img = styled.img`
  display: block;
  margin: 0 auto;
  margin-bottom: 30px;
`
const Container = styled.div`
  padding-top: 70px;
  width: 1200px;
  margin: 0 auto;
`
const Text = styled.div`
  margin: 0 auto;
  margin-bottom: 16px;
  width: 94vw;
  max-width: 1168px;
  font-size: 22px;
  font-weight: 700;
`;
const MenuGoodsContainer = styled.div`
  margin: 0 auto;
  margin-top: 40px;
  display: flex;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
  max-width: 1200px;
  box-sizing: border-box;
`
const MenuBar = styled.div`
  width: 145.2px;
`
const MenuButton = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  width: 28.8px;
  height: 25px;
  font-size: 16px;
  box-sizing: border-box;
  &:nth-of-type(1) {
    color: ${props => {
      return props.select == "애플" ? "#2ecde7" : ""
    }};
    border-bottom: ${props => {
      return props.select == "애플" ? "2px solid #2ecde7" : ""
    }};
  };
  &:nth-of-type(2) {
    color: ${props => {
      return props.select == "삼성" ? "#2ecde7" : ""
    }};
    border-bottom: ${props => {
      return props.select == "삼성" ? "2px solid #2ecde7" : ""
    }};
  };
  &:nth-of-type(3) {
    width: 19px;
    color: ${props => {
      return props.select == "LG" ? "#2ecde7" : ""
    }};
    border-bottom: ${props => {
      return props.select == "LG" ? "2px solid #2ecde7" : ""
    }};
  };
  &:nth-of-type(4) {
    color: ${props => {
      return props.select == "벤큐" ? "#2ecde7" : ""
    }};
    border-bottom: ${props => {
      return props.select == "벤큐" ? "2px solid #2ecde7" : ""
    }};
  };
`


export default WelfarePage