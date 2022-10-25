import React, { useEffect } from "react";
import styled from "styled-components";
import { GoodsMini } from "../elements";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { gram, i_pad, lenovo, macbook, samsung_galaxy } from "../assets";

const GoodsContainer = () => {
  const [product, setProduct] = useState()

   /**모든 상품 api요청 함수 */
   const productGetRequest = async () => {
    try {
      const res = await axios
        .get(`http://localhost:8080/page-product/brand-all`)
        .then((res) => {
          console.log(res)
          let array = res.data
          setProduct([...array])
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    productGetRequest()
  }, [])
  

  return (
    <Container>
    <Box>
  <Link to={`/purchase_detail/1}` } style={{ textDecoration: "none" }}>
      <Image src={macbook}/>
      <GoodsName>
       맥북 프로 2022 13 M2
      </GoodsName>
      </Link>
      <Brand>애플</Brand>
      <Price>2,400,000원</Price>
    </Box>

    <Box>
  <Link to={`/purchase_detail/2}` } style={{ textDecoration: "none" }}>
      <Image src={samsung_galaxy}/>
      <GoodsName>
      삼성전자 2021 갤럭시북 15.6
      </GoodsName>
      </Link>
      <Brand>삼성전자</Brand>
      <Price>1,800,000원</Price>
    </Box>

    <Box>
  <Link to={`/purchase_detail/3}` } style={{ textDecoration: "none" }}>
      <Image src={gram}/>
      <GoodsName>
       LG전자 2022 그램 스노우 화이트
      </GoodsName>
      </Link>
      <Brand>LG</Brand>
      <Price>2,400,000원</Price>
    </Box>

    <Box>
  <Link to={`/purchase_detail/5}` } style={{ textDecoration: "none" }}>
      <Image src={lenovo}/>
      <GoodsName>
        레노버 2022 아이디어패드 슬림 5 15ABA7
      </GoodsName>
      </Link>
      <Brand>레노버</Brand>
      <Price>600,000원</Price>
    </Box>

    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: ;
  width: 100%;
`;

const Box = styled.div`
  margin: 0 auto;
  margin-bottom: 40px;
  width: 17.52vw;
  max-width: 278px;
`;
const Image = styled.img`
  width: 17.52vw;
  max-width: 223px;
  height: 15.72vw;
  max-height: 223px;
  border: 0.5px solid #e6e6e6;
  border-radius: 10px;
  box-sizing: border-box;
`;
const GoodsName = styled.div`
color : black;
  margin-top: 19.2px;
  height: 48px;
  font-size: 16px;
`;
const Brand = styled.div`
  margin-top: 5.6px;
  font-size: 14px;
`;
const Price = styled.div`
  margin-top: 8px;
  font-size: 16px;
`;

export default GoodsContainer;
