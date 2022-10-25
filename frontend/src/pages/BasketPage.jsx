import React from "react";
import styled from "styled-components";
import { i_pad, macbook } from "../assets";
import { Link } from "react-router-dom";

const BasketPage = () => {
  return (
    <Container>
      <BasketTest>2</BasketTest>{" "}
      <Title>장바구니 (2)</Title>
      <ListTitle>
        <ProductInfo>상품 정보</ProductInfo>
        <ProductCount>수량</ProductCount>
        <ProductPrice>가격</ProductPrice>
        <ProductShipping>배송비</ProductShipping>
      </ListTitle>
      <Line></Line>
      <ListTitle>
        <Img src={macbook}/>
        <Name ><br />맥북 프로 2022 13 M2<br/><br /> <Button>삭제하기</Button></Name>
        <Count>
        <CountContainer>
          <Minus >-</Minus>
          <CountNum>2</CountNum>
          <Plus >+</Plus>
          </CountContainer>
        </Count>
        <Price>4,800,000 원</Price>
        <Shipping>무료</Shipping>
      </ListTitle>
      <Line />
      <Box>
        <Sum>상품 합계</Sum>
        <SumPrice>4,800,000원</SumPrice>
      </Box>
      <Box>
        <Sum>배송비</Sum>
        <SumPrice>0원</SumPrice>
      </Box>
      <Line2 />
      <br />
      <Box>
        <LastSum>합계</LastSum>
        <LastSumPrice>4,800,000원</LastSumPrice>
      </Box>
      <Link to="/purchase/5" style={{ textDecoration: "none" }}>
      <PurchaseButton>주문하기</PurchaseButton>
      </Link>
    </Container>
  );
};
const Container = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 960px;
  padding-top: 120px;
  padding-bottom: 150px;
  height: 800px;
`;
const BasketTest = styled.div`
  z-index: 99;
  position: absolute;
  top: 25px;
  right: -105px;
  font-size: 20px;
`;
const Title = styled.div`
  font-size: 40px;
  margin-bottom: 60px;
`
const ListTitle =styled.div`
  display: flex;
  color: #4f4f4f;
`
const ProductInfo = styled.div`
  width: 600px;
`
const ProductCount = styled.div`
width: 200px;
text-align: center;
`
const ProductPrice = styled.div`
width: 300px;
text-align: center;
`
const ProductShipping = styled.div`
width: 200px;
text-align: center;
`
const Line = styled.div`
  margin-top: 15px;
  border: 0.5px solid #4f4f4f;
  opacity: 0.2;
  margin-bottom: 15px;
`
const Img = styled.img`
  width: 80px;
  height: 80px;


  background-repeat: no-rpeat;
  background-position: center;
  background-size: cover;

`
const Name = styled.div`
width: 385px;
height: 80px;
box-sizing: border-box;
padding-left: 10px;
`
const Count = styled.div`
width: 200px;
height: 80px;
`
const Price = styled.div`
width: 205px;
height: 80px;
line-height: 80px;
`
const Shipping = styled.div`
height: 80px;
line-height: 80px;
`

const CountContainer = styled.div`
  display: flex;
  padding-top: 20px;
`

const CountNum = styled.div`
  text-align: center;
  line-height: 35px;
  width: 35px;
  height: 35px;
  box-sizing: border-box;
  border: 0.5px solid gray;
`
const Minus = styled.button`
width: 35px;
height: 35px;
box-sizing: border-box;
border: 0.5px solid gray;
background-color: white;
color: gray;
`
const Plus = styled.button`
width: 35px;
height: 35px;
  box-sizing: border-box;
  border: 0.5px solid gray;
  background-color: white;
color: gray;
`
const Button = styled.div`
  opacity: 0.8;
`

const Box = styled.div`
  display: flex;
  color: #4f4f4f;
  opacity: 0.8;
`
const Sum = styled.div`
  width: 800px;
  text-align: right;
  margin-bottom: 20px;
`
const SumPrice = styled.div`
width: 200px;
text-align: right;
`
const Line2 = styled.div`
  width: 500px;
  border: 0.5px solid #4f4f4f;
  opacity: 0.2;
  position: absolute;
  right: 0;
`
const LastSum = styled.div`
  width: 800px;
  text-align: right;
  margin-bottom: 20px;
  font-weight: 700;
  color: black;
  opacity: 1;
`
const LastSumPrice = styled.div`
width: 200px;
text-align: right;
font-weight: 700;
color: black;
opacity: 1;
`

const PurchaseButton = styled.div`
  position: absolute;
  right: 0;
  width: 160px;
  height: 54px;
  text-align: center;
  line-height: 54px;
background-color: #C7E8F2;
  border-radius: 100px;
  cursor: pointer;
  color: black;
`


export default BasketPage;
