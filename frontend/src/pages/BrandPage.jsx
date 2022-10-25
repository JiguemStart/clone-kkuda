import React, { useState } from 'react'
import styled from 'styled-components'
import { CardContainer, GoodsContainer } from '../components'

const BrandPage = () => {
  const [select,  setSelect] = useState("")
  return (
    <Container>
      <CardContainer />
      <MenuGoodsContainer>
        <MenuBar>
          <MenuButton select={select} onClick={() => setSelect("애플")}>애플</MenuButton>
          <MenuButton select={select} onClick={() => setSelect("삼성")}>삼성</MenuButton>
          <MenuButton select={select} onClick={() => setSelect("LG")}>LG</MenuButton>
          <MenuButton select={select} onClick={() => setSelect("벤큐")}>벤큐</MenuButton>
        </MenuBar>
        <GoodsContainer />
      </MenuGoodsContainer>
    </Container>
  )
}

const Container = styled.div`
  padding-top: 70px;
`
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

export default BrandPage