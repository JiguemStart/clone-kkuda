import React from 'react'
import styled from 'styled-components'
import { electronics_page_ad, electronics_page_description,event_page_request,event_page_link,event_page_calculation,event_page_partners,event_page_payment } from '../assets'
import { BigCard } from '../elements'
import { Link } from 'react-router-dom'

const Electronics = () => {
  return (
    <Container>
      <CardContainer>
        <BigCard img={electronics_page_ad}/>
        <TextContainer>
          <BigText>
            대여견적의 불편함을
            <br />
         해결해드립니다!
          </BigText>
          <SmallText>
            한번의 견적요청으로 전국 400개 이상의 대여 전문 업체 견적을!
          </SmallText>
        </TextContainer>
        <Link to="/electronics_apply" style={{ textDecoration: "none" }}>
        <RequestButton>견적 요청</RequestButton>
        </Link>
      </CardContainer>
      <DescriptionImage src={electronics_page_description}/>
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
  )
}

const Container = styled.div`
  padding-top: 70px;
`
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
const DescriptionImage = styled.img`
display: block;
margin: 0 auto;
width: 100%;
max-width: 1200px;
box-sizing: border-box;
`

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

export default Electronics