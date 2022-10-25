import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const PartnersSignUpPage1 = () => {
  return (
    <Container>
      <TextBox>
        <TitleText>입점 신청</TitleText>
        <ListBox>
        <Number>01</Number>
          <ListText>약관 동의</ListText><Arrow>></Arrow>
          <Number>02</Number>
          <ListText>정책 동의</ListText><Arrow>></Arrow>
          <Number>03</Number>
          <ListText>정보 입력</ListText>
        </ListBox>
      </TextBox>
      <Line />
      <SemiTitleText>서비스 이용 약관</SemiTitleText>
      <Text>제 1 조(목적) 이 약관은 셰어라운드 주식회사가 운영하는 (이하 "당사" 라 합니다) 웹사이트(https://www.kkuda.kr/ 또는 http://www.shareround.co.kr/) (이하 "서비스"라 합니다)를 이용함에 있어 “당사”와 이용자의 권리 의무 및 책임사항을 규정함을 목적으로 합니다.</Text>
      <SeeMore>자세히 보기</SeeMore>
      <SemiTitleText>파트너 개인정보 수진 및 이용 동의</SemiTitleText>
      <Text>셰어라운드 주식회사(이하 “당사” 라 함)는 통신비밀보호법, 전기통신사업법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률 등 정보통신 서비스 제공자가 준수하여야 할 관련 법령상의 개인정보보호 규정을 준수하며, 관련 법령에 의거한 개인정보 취급방침을 정하여 이용자 권익 보호에 최선을 다하고 있습니다.</Text>
      <SeeMore>자세히 보기</SeeMore>
      <Line />
      <Link to="/partners_signup2" style={{ textDecoration: "none" }}>
      <ButtonAgree>모두 동의</ButtonAgree>
      </Link>
    </Container>
  )
}

const Container = styled.div`
  margin: 0 auto;
  padding-top: 130px;
  width: 100%;
  max-width: 1168px;
`
const TextBox = styled.div`
  margin-bottom: 50px;
  display: flex;
`
const TitleText = styled.div`
  width: 50%;
  font-size: 22px;
  font-weight: 700;
`
const ListBox = styled.div`
  margin-right: 20px;
  display: flex;
  justify-content: flex-end;
  width: 50%;
`
const Number = styled.div`
width: 25px;
  text-align: center;
  color: #cccccc;
  &:nth-of-type(1) {
    color: #2ecde7;
  };
`
const ListText = styled.div`
color: #cccccc;
&:nth-of-type(2) {
  color: black;
  
};
`
const Arrow = styled.div`
width: 20px;
text-align:center;
`
const Line = styled.div`
  margin: 0 auto;
  margin-bottom: 50px;
  width: 100%;
  border: 0.5px solid #cccccc;
`
const SemiTitleText = styled.div`
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: 600;
`
const Text = styled.div`
  margin-bottom: 5px;
  color: gray;
  line-height: 30px;
`
const SeeMore = styled.div`
  font-weight: 700;
  margin-bottom: 50px;
`
const ButtonAgree = styled.div`
  margin: 0 auto;
  margin-bottom: 50px;
  width: 110px;
  height: 48px;
  border-radius: 100px;
  background-color: #2ecde7;
  text-align: center;
  line-height: 48px;
  color: white;
`
export default PartnersSignUpPage1