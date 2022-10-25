import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Container>
      <TextBox>
        <div>상호: 셰어라운드 주식회사 | 대표: 이동규 | 개인정보관리책임자: 이동규 | 이메일: cs@shareround.co.kr </div>
        <div>
          주소: 04213 서울특별시 마포구 마포대로 122, 11층 셰어라운드(주) 꾸다 | 사업자등록번호: 479-81-01276 | 통신판매: 2019-서울중구-0436 | 호스팅제공자: (주) 식스샵 호스팅제공자: (주)식스샵
        </div>
        <div>
          안전구매(에스크로) 서비스 가맹점 이용약관 개인정보처리방침 사업자정보확인
        </div>
        <div>
          © 셰어라운드(주) All rights reserved
        </div>
      </TextBox>
      <IconBox></IconBox>
    </Container>
  )
}

const Container = styled.div`

  bottom: 0px;
  display: flex;
  padding-top: 20px;
  padding-left: 40px;
  width: 100%;
  height: 166px;
  box-sizing: border-box;
  opacity: 0.8px;
  background-color: #f6f6f6;
`
const TextBox = styled.div`
  width: 70%;
  box-sizing: border-box;
  color: #9f9f9f;
  line-height: 27px;
`
const IconBox = styled.div`
  width: 30%;
  box-sizing: border-box;
`

export default Footer