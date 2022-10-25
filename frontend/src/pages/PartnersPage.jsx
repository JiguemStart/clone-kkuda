import React from 'react'
import styled from 'styled-components'
import { partners_page_description, partners_page_fix_img, partners_page_picture } from '../assets'
import { Link } from 'react-router-dom'

const PartnersPage = () => {
  return (
    <Container>
        <CardContainer>
        <KkudaPartnersImg/>
        <TextContainer>
          <BigText>
            물건 빌리는 사람들이
            <br />
       모여있는, 꾸다
          </BigText>
          <SmallText>
            사장님, 물건 관리에만 신경쓰세요.<br/>
            대여 예약, 마케팅, 보험은 꾸다가 할게요.
          </SmallText>
        </TextContainer>
        <Link to="/partners_signup1" style={{ textDecoration: "none" }}>
        <RequestButton>입점 신청</RequestButton>
        </Link>
        </CardContainer>
        <FixImg />
        <ImgContainer>
        <PartnersDescriptionImg src={partners_page_description}/>
        </ImgContainer>
    </Container>
  )
}

const Container = styled.div`
`
const KkudaPartnersImg = styled.div`
  display: block;
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  max-width: 1200px;
  box-sizing: border-box;
  background-image: url(${partners_page_picture});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
const CardContainer = styled.div`
  z-index: 2;
  margin: 0 auto;
  width: 100%;
  max-width: 1240px;
  box-sizing: border-box;
  position: relative;
`;
const TextContainer = styled.div`
  position: absolute;
  top: 35%;
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
  line-height: 30px;
`;
const RequestButton = styled.div`
  position: absolute;
  top: 75%;
  left: 100px;
  width: 130px;
  height: 50px;
  text-align: center;
  line-height: 53px;
  color: white;
  border-radius: 100px;
  background-color: #2ecde7;
`;
const FixImg = styled.div`
  margin:0 auto;
  position: fixed;
  top: 0px;
  left: 50%;
  transform: translate(-50%, 0);
  width: 100%;
  max-width: 1200px;
  height: 100vh;
  background-image: url(${partners_page_fix_img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
const ImgContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  z-index: 2;
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  box-sizing: border-box;
  position: relative;
`
const PartnersDescriptionImg = styled.img`
z-index: 2;
  display: block;
  
  
`




export default PartnersPage