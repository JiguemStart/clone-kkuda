import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const Goods = ({popularList, img}) => {

  const test = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  useEffect(() => {
    console.log(img)
  },[])
  return (
    <Container>
 <Link to={`${String(typeof(popularList)) == "object" ? "/detail/" + popularList.id: ""}`} style={{ textDecoration: "none" }}>
      <Image img={img}/>
      </Link>
      <GoodsName>

{String(typeof(popularList)) == "object" ? popularList.name: "안댐"}
      </GoodsName>
      <Brand>{String(typeof(popularList)) == "object" ? popularList.brand: "안댐"}</Brand>
      <Price>{String(typeof(popularList)) == "object" ? test(popularList.price/12): "안댐"} / 월</Price>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 40px;
  width: 21.72vw;
  max-width: 278px;
`;
const Image = styled.div`
  width: 21.72vw;
  max-width: 278px;
  height: 21.72vw;
  max-height: 278px;
  border: 0.5px solid #e6e6e6;
  border-radius: 10px;
  box-sizing: border-box;
  background-image: url(${props => {
    return props.img
  }});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const GoodsName = styled.div`
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

export default Goods;
