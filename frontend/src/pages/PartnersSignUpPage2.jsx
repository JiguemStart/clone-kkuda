import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const PartnersSignUpPage2 = () => {
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
    <SemiTitleText>서비스 이용료 정책</SemiTitleText>
    <Text>꾸다는 원할한 서비스 운영을 위해 고객의 총 결제 금액에 대해 서비스 이용료가 부과됩니다. (부가세 별도)
<br />
- 서비스 이용료 : 15%(결제 금액 중 배송비 제외한 금액)
<br />
- 결제 수수료(PG) : 3%</Text><br /><br />
    <SemiTitleText>운영 및 배송 정책</SemiTitleText>
    <Text>꾸다는 고객에게 최고 수준의 대여 경험을 제공하기 위해 다음과 같은 정책을 준수할 것을 권장합니다.
    <br />
- 기본 대여료 단위 : 1박(대여료 1박 단위로 설정)
<br />
- 빠르고 친절한 고객 채팅 문의 응대
<br />
- 보증금 제도 운영하지 않음(꾸다는 현대해상과 대여 전용 보상 보험을 운영 중입니다)
<br />
- 택배 배송시 : 대여 시작일 2일전 발송/대여 종료일 반납 수거(영업일 기준)
<br />
- 취소/환불 : 대여 시작일 전 및 발송 전 100% 취소/환불</Text><br /><br />
<SemiTitleText>마지막 단계 전 준비 사항</SemiTitleText>
    <Text>- 꾸다 앱 가입
    <br />
- 사업자등록증 사본
<br />
- 통장 사본</Text>
    <Line />
    <Link to="/partners_signup3" style={{ textDecoration: "none" }}>
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
  &:nth-of-type(4) {
    color: #2ecde7;
  };
`
const ListText = styled.div`
color: #cccccc;
&:nth-of-type(5) {
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

export default PartnersSignUpPage2