import React, { useEffect } from "react";
import styled from "styled-components";
import GoodsSwiper from "./GoodsSwiper";

const PopularContainer = ({text, popularList}) => {
  useEffect(() => {
    // console.log("되는거여 ?")
    // console.log(String(typeof(popularList)))
  }, [popularList])
  return (
    <Container>
      <Text>{text}</Text>
    {String(typeof(popularList)) == "object" ? <GoodsSwiper popularList={popularList}/> : ""}
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  width: 100%;
  max-width: 1240px;
  height: 38vw;
  max-height: 489px;
  max-width: 1240px;
  overflow: hidden;
`;
const Text = styled.div`
  margin: 0 auto;
  margin-bottom: 16px;
  width: 94vw;
  max-width: 1168px;
  font-size: 22px;
  font-weight: 700;
`;

export default PopularContainer;
