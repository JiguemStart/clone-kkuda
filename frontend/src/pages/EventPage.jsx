import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { event_page_ad, event_page_calculation, event_page_link, event_page_partners, event_page_payment, event_page_request } from "../assets";
import { BigCard } from "../elements";
import { GoodsContainer } from "../components";
import { Link } from "react-router-dom";

const EventPage = () => {
  const [select, setSelect] = useState("");
  return (
    <Container>
      <CardContainer>
        <BigCard img={event_page_ad} />
        <TextContainer>
          <BigText>
            24시간 안에 견적받고
            <br />
            행사용품 쉽게 대여하세요!
          </BigText>
          <SmallText>
            한번의 견적 요청으로 행사에 필요한 모든 물품을 한번에!
          </SmallText>
        </TextContainer>
        <Link to="/event_apply" style={{ textDecoration: "none" }}>
        <RequestButton>견적 요청</RequestButton>
        </Link>
      </CardContainer>
      <MenuGoodsContainer>
        <MenuBar>
          <MenuButton select={select} onClick={() => setSelect("전체")}>
            전체
          </MenuButton>
          <MenuButton select={select} onClick={() => setSelect("인기상품")}>
            인기상품
          </MenuButton>
          <MenuButton select={select} onClick={() => setSelect("가구")}>
            가구
          </MenuButton>
          <MenuButton select={select} onClick={() => setSelect("소품")}>
            소품
          </MenuButton>
          <MenuButton select={select} onClick={() => setSelect("인형탈")}>
            인형탈
          </MenuButton>
          <MenuButton select={select} onClick={() => setSelect("워터슬라이드")}>
            워터슬라이드
          </MenuButton>
          <MenuButton select={select} onClick={() => setSelect("조명")}>
            조명
          </MenuButton>
          <MenuButton select={select} onClick={() => setSelect("음향")}>
            음향
          </MenuButton>
          <MenuButton select={select} onClick={() => setSelect("TV")}>
            TV
          </MenuButton>
          <MenuButton select={select} onClick={() => setSelect("기타")}>
            기타
          </MenuButton>
        </MenuBar>
        <GoodsContainer />
      </MenuGoodsContainer>
      <EstimateDescriptionContainer>
        <TextTitle>
          <Impact>24시간</Impact>이면 충분합니다!
        </TextTitle>
        <PictureContainer>
          <PictureRequest />
          <PictureCalculation />
          <PicturePayment />
          <PictureLink />
        </PictureContainer>
        <EstimateTextContainer>
          <TextDescription>1. 견적 요청</TextDescription>
          <TextDescription>2. 견적 산출</TextDescription>
          <TextDescription>3. 결제</TextDescription>
          <TextDescription>4. 파트너 연결</TextDescription>
        </EstimateTextContainer>
        <EstimateRequestButton>견적요청하기</EstimateRequestButton>
      </EstimateDescriptionContainer>
      <PartnersImage src={event_page_partners}/>
    </Container>

  );
};

const Container = styled.div`
  padding-top: 70px;
`;
const CardContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1240px;
  box-sizing: border-box;
  position: relative;
`;
const TextContainer = styled.div`
  position: absolute;
  top: 20%;
  left: 100px;
  color: white;
`;
const BigText = styled.div`
  font-size: 35px;
  font-weight: 700;
  line-height: 50px;
`;
const SmallText = styled.div`
  margin-top: 15px;
  font-size: 18px;
`;
const RequestButton = styled.div`
  position: absolute;
  top: 60%;
  left: 100px;
  width: 130px;
  height: 50px;
  text-align: center;
  line-height: 53px;
  border-radius: 100px;
  background-color: #c8e8f2;
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
`;
const MenuBar = styled.div`
  width: 145.2px;
`;
const MenuButton = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  width: 28.8px;
  height: 25px;
  font-size: 16px;
  box-sizing: border-box;
  &:nth-of-type(1) {
    color: ${(props) => {
      return props.select == "전체" ? "#2ecde7" : "";
    }};
    border-bottom: ${(props) => {
      return props.select == "전체" ? "2px solid #2ecde7" : "";
    }};
  }
  &:nth-of-type(2) {
    width: 58px;
    color: ${(props) => {
      return props.select == "인기상품" ? "#2ecde7" : "";
    }};
    border-bottom: ${(props) => {
      return props.select == "인기상품" ? "2px solid #2ecde7" : "";
    }};
  }
  &:nth-of-type(3) {
    color: ${(props) => {
      return props.select == "가구" ? "#2ecde7" : "";
    }};
    border-bottom: ${(props) => {
      return props.select == "가구" ? "2px solid #2ecde7" : "";
    }};
  }
  &:nth-of-type(4) {
    color: ${(props) => {
      return props.select == "소품" ? "#2ecde7" : "";
    }};
    border-bottom: ${(props) => {
      return props.select == "소품" ? "2px solid #2ecde7" : "";
    }};
  }
  &:nth-of-type(5) {
    width: 43px;
    color: ${(props) => {
      return props.select == "인형탈" ? "#2ecde7" : "";
    }};
    border-bottom: ${(props) => {
      return props.select == "인형탈" ? "2px solid #2ecde7" : "";
    }};
  }
  &:nth-of-type(6) {
    width: 85px;
    color: ${(props) => {
      return props.select == "워터슬라이드" ? "#2ecde7" : "";
    }};
    border-bottom: ${(props) => {
      return props.select == "워터슬라이드" ? "2px solid #2ecde7" : "";
    }};
  }
  &:nth-of-type(7) {
    color: ${(props) => {
      return props.select == "조명" ? "#2ecde7" : "";
    }};
    border-bottom: ${(props) => {
      return props.select == "조명" ? "2px solid #2ecde7" : "";
    }};
  }
  &:nth-of-type(8) {
    color: ${(props) => {
      return props.select == "음향" ? "#2ecde7" : "";
    }};
    border-bottom: ${(props) => {
      return props.select == "음향" ? "2px solid #2ecde7" : "";
    }};
  }
  &:nth-of-type(9) {
    width: 19px;
    color: ${(props) => {
      return props.select == "TV" ? "#2ecde7" : "";
    }};
    border-bottom: ${(props) => {
      return props.select == "TV" ? "2px solid #2ecde7" : "";
    }};
  }
  &:nth-of-type(10) {
    color: ${(props) => {
      return props.select == "기타" ? "#2ecde7" : "";
    }};
    border-bottom: ${(props) => {
      return props.select == "기타" ? "2px solid #2ecde7" : "";
    }};
  }
`;

const EstimateDescriptionContainer = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  padding-top: 40px;
  padding-left: 80px;
  padding-right: 80px;
  width: 100%;
  max-width: 1200px;
  box-sizing: border-box;
  border-top: 1px solid black;
`;
const TextTitle = styled.div`
  text-align: center;
  font-size: 36px;
`;
const Impact = styled.span`
  font-weight: 700;
`;
const PictureContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
const PictureRequest = styled.div`
  width: 13vw;
  max-width: 144px;
  height: 13vw;
  max-height: 144px;
  background-image: url(${event_page_request});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const PictureCalculation = styled.div`
  width: 13vw;
  max-width: 144px;
  height: 13vw;
  max-height: 144px;
  background-image: url(${event_page_calculation});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const PicturePayment = styled.div`
  width: 13vw;
  max-width: 144px;
  height: 13vw;
  max-height: 144px;
  background-image: url(${event_page_payment});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const PictureLink = styled.div`
  width: 13vw;
  max-width: 144px;
  height: 13vw;
  max-height: 144px;
  background-image: url(${event_page_link});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const EstimateTextContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
const TextDescription = styled.div`
  width: 13vw;
  max-width: 144px;
  margin-top: 20px;
  font-size: 22px;
  font-weight: 600;
  text-align: center;
`;
const EstimateRequestButton = styled.div`
  margin: 100px auto;
  width: 236px;
  height: 53px;
  font-size: 20px;
  color: white;
  text-align: center;
  line-height: 53px;
  border-radius: 100px;
  background-color: #2ecde7;
`;
const PartnersImage = styled.img`
  display: block;
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  box-sizing: border-box;
`

export default EventPage;
