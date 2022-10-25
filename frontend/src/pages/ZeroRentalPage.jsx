import React from "react";
import styled from "styled-components";
import { BigCard, Goods } from "../elements";
import { ad_free_rental, picture_card_explanation, picture_card_hana, picture_card_lotte, picture_card_woori } from "../assets";

const ZeroRentalPage = () => {
  const result = [1, 2, 3, 4, 5];
  return (
    <Container>
      <BigCard img={ad_free_rental} color={"#7355e6"} />
      <Text>제휴카드 가입하고, 0원 렌탈!</Text>
      <ZeroRentalGoodsContainer>
        {result.map((i) => {
          return <Goods />;
        })}
      </ZeroRentalGoodsContainer>
      <Space />
      <CardContainer>
      <CardExplanation src={picture_card_explanation}/>
      </CardContainer>
      <CardContainer>
      <CardExplanation src={picture_card_woori}/>
      <CardWooriLink href="https://m.wooricard.com/dcmw/yh1/crd/crd01/M1CRD201S00.do" target={"_blank"}/>
      </CardContainer>
      <CardContainer>
      <CardExplanation src={picture_card_hana}/>
      <CardLink />
      </CardContainer>
      <CardContainer>
      <CardExplanation src={picture_card_lotte}/>
      <CardLink />
      </CardContainer>
    </Container>
  );
};
const Container = styled.div`
  padding-top: 70px;
`
const Text = styled.div`
  margin: 0 auto;
  margin-top: 16px;
  width: 94vw;
  max-width: 1168px;
  font-size: 22px;
  font-weight: 700;
`;
const ZeroRentalGoodsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
  max-width: 1240px;
  box-sizing: border-box;
`;
const Space = styled.div`
  height: 30px;
`
const CardContainer = styled.div`
  margin: 0 auto;
  position: relative;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
  max-width: 1240px;
  box-sizing: border-box;
`
const CardExplanation = styled.img`
  display: block;
  margin: 0 auto;
  width: 100%;
  max-width: 1240px;
  box-sizing: border-box;
`
const CardWooriLink = styled.a`
  position: absolute;
  width: 25vw;
  max-width: 320px;
  height: 6.7vw;
  max-height: 85.758px;
  right: 14%;
  bottom: 20.3%;
  border: 1px solid black;
  border-radius: 100px;
  @media screen and (min-width: 1262px) {
    right: 173px;
    bottom: 90px;
  }

`
const CardLink = styled.a`
position: absolute;
width: 25vw;
max-width: 320px;
height: 6.7vw;
max-height: 85.758px;
right: 14%;
bottom: 36.3%;
border: 1px solid black;
border-radius: 100px;
@media screen and (min-width: 1262px) {
  right: 173px;
  bottom: 95px;
}
`

export default ZeroRentalPage;
