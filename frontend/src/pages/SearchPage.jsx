import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { i_pad, macbook, search_icon } from '../assets'
import { CardContainer, GoodsContainer } from '../components'
import { Goods } from '../elements'
import axios from 'axios'

const SearchPage = () => {
  const [select,  setSelect] = useState("")
  const [popularList, setPopularList] = useState();

   /**메인페이지 상품 api요청 함수 */
   const productListRequest = async () => {
    try {
      const res = await axios
        .get(`http://localhost:8080/page-product/main-page`)
        .then((res) => {
          console.log(res.data);
          let array1 = res.data.popular;
          setPopularList([...array1]);

        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    productListRequest();

  }, []);
  return (
    <Container>
      <SearchContainer>
      <SearchIcon src={search_icon}/><SearchInput defaultValue={"애플"}/>
      </SearchContainer>
      <MenuGoodsContainer>

      {String(typeof(popularList)) == "object" ? <Goods popularList={popularList[0]} img={macbook}/> : "" }
      {String(typeof(popularList)) == "object" ? <Goods popularList={popularList[4]} img={i_pad}/> : "" }
      </MenuGoodsContainer>
    </Container>
  )
}
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding-left: 15px;
  width: 1020px;
  border: 1px solid gray;
  line-height: 80px;
`
const SearchIcon = styled.img`
  margin-right: 15px;
`
const SearchInput = styled.input`
  width: 800px;
  border:none;
  height: 50px;
  font-size: 16px;
  color : gray;
  &:focus {outline: none;}
`


const Container = styled.div`
  padding-top: 130px;
  height: 950px;
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

export default SearchPage