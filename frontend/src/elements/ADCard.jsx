import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";

import { ad_free_rental, ad_kkuda_app, ad_kkuda, ad_rental } from "../assets";

const ADCard = () => {
  const [select, setSelect] = useState(1);

  useEffect(() => {
    if (select == 5) {
      setSelect(1);
    }
    const timer = setInterval(() => {
      setSelect((prev) => prev + 1);
    }, 3500);

    return () => clearInterval(timer);
  }, [select]);

  return (
    <Container>
      <Card1 state={select} onClick={() => console.log("1")}/>
      <Card2 state={select} onClick={() => console.log("2")}/>
      <Card3 state={select} onClick={() => console.log("3")}/>
      <Card4 state={select} onClick={() => console.log("4")}/>
      <Circle1 state={select} onClick={() => setSelect(1)}/>
      <Circle2 state={select} onClick={() => setSelect(2)}/>
      <Circle3 state={select} onClick={() => setSelect(3)}/>
      <Circle4 state={select} onClick={() => setSelect(4)}/>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  padding-top: 70px;
  width: 100vw;
  height: 25vw;
`;
const Card1 = styled.div`
z-index: ${(props) => {
  return props.state == 1 ? "1" : "0";
}};
  position: absolute;
  width: 100%;
  height: 25vw;
  transition: 0.7s ease;
  opacity: ${(props) => {
    return props.state == 1 ? "1" : "0";
  }};
  background-image: url(${ad_rental});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
const Card2 = styled.div`
z-index: ${(props) => {
  return props.state == 2 ? "1" : "0";
}};
  position: absolute;
  width: 100%;
  height: 25vw;
  transition: 0.7s ease;
  opacity: ${(props) => {
    return props.state == 2 ? "1" : "0";
  }};
  background-image: url(${ad_free_rental});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
const Card3 = styled.div`
z-index: ${(props) => {
  return props.state == 3 ? "1" : "0";
}};
  position: absolute;
  width: 100%;
  height: 25vw;
  transition: 0.7s ease;
  opacity: ${(props) => {
    return props.state == 3 ? "1" : "0";
  }};
  background-image: url(${ad_kkuda_app});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
const Card4 = styled.div`
z-index: ${(props) => {
  return props.state == 4 ? "1" : "0";
}};
  position: absolute;
  width: 100%;
  height: 25vw;
  transition: 0.7s ease;
  opacity: ${(props) => {
    return props.state == 4 ? "1" : "0";
  }};
  background-image: url(${ad_kkuda});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const Circle1 = styled.div`
  z-index: 2;
  position: absolute;
  bottom: 20px;
  left: 47%;
  width: 8px;
  height: 8px;
  border: 2px solid white;
  border-radius: 100%;
  background-color: ${(props) => {
    return props.state == 1 ? "white" : "";
  }};
`;
const Circle2 = styled.div`
z-index: 2;
  position: absolute;
  bottom: 20px;
  left: 49%;
  width: 8px;
  height: 8px;
  border: 2px solid white;
  border-radius: 100%;
  background-color: ${(props) => {
    return props.state == 2 ? "white" : "";
  }};
`;
const Circle3 = styled.div`
z-index: 2;
  position: absolute;
  bottom: 20px;
  left: 51%;
  width: 8px;
  height: 8px;
  border: 2px solid white;
  border-radius: 100%;
  background-color: ${(props) => {
    return props.state == 3 ? "white" : "";
  }};
`;
const Circle4 = styled.div`
z-index: 2;
  position: absolute;
  bottom: 20px;
  left: 53%;
  width: 8px;
  height: 8px;
  border: 2px solid white;
  border-radius: 100%;
  background-color: ${(props) => {
    return props.state == 4 ? "white" : "";
  }};
`;

export default ADCard;
