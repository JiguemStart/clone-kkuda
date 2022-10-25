import React from "react";
import styled from "styled-components";

import { NavCircle } from "../elements";
import { circle_ai, circle_biz, circle_brand, circle_estimate, circle_free_rental, circle_oneday } from "../assets";

const NavCircleContainer = () => {
  return <Container>
<NavCircle img={circle_free_rental} text={"0원 렌탈!"}/>
<NavCircle img={circle_brand} text={"브랜드"}/>
<NavCircle img={circle_ai} text={"렌탈AI"}/>
<NavCircle img={circle_estimate} text={"간편 대여 견적"}/>
<NavCircle img={circle_biz} text={"사업자 전용"}/>
<NavCircle img={circle_oneday} text={"1일 대여"}/>
    
  </Container>;
};

const Container = styled.div`
display: flex;
justify-content: center;
margin: 0 auto;
padding-top: 48px;
padding-bottom: 16px;
  width: 100%;
  height: 250px;
  max-width: 1240px;
`

export default NavCircleContainer;
