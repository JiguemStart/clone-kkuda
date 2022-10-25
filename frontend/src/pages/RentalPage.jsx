import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import { macbook } from '../assets'

const RentalPage = () => {
  const loaction = useLocation()
  const [cardNum, setCardNum] = useState()
  const [birth, setBirth] = useState()
  const [exPeriod, setExPeriod] = useState()
  const [name, setName] = useState()
  const [payDate, setPayDate] = useState(1)
  const [rentalMonth, setRentalMonth] = useState(12)
  const [address, setAddress] = useState()
  const [memberId, setMemberId] = useState(document.cookie.split("; ")[1].substring(3))
  const [price, setPrice] = useState()


  /**렌탈 결제 요청 api */
  const rentalRequest = async () => {
    try {
      const res = await axios
        .post("http://localhost:8080/rental/rental-pay", {
          cardNum: cardNum,
          dateOfBirth: birth,
          exPeriod: exPeriod,
          memberId: Number(memberId),
          monthPrice: Number(price) / Number(rentalMonth),
          name: name,
          payDate: Number(payDate),
          productId: Number(location.pathname.split("/")[2]),
          rentalMonth: Number(rentalMonth),
          shippingAddress: address,
          thisDatePayedState: "asdf"
        })
        .then((res) => {
          console.log(res);
          alert("렌탈 결제가 완료되었습니다!")
          location.href="/main"
        });
    } catch (error) {
      console.log(error);
    }
  };

    /**상품 가격가져오는 api */
    const productPriceRequset = async () => {
      try {
        const res = await axios
          .get(
            `http://localhost:8080/page-product/detail-page?id=${location.pathname.split("/")[2]}`
          )
          .then((res) => {
            setPrice(res.data.product.price);
          });
      } catch (error) {
        console.log(error);
      }
    };

    useEffect(() => {
      productPriceRequset()
    }, [])
    useEffect(() => {
      console.log(payDate)
    }, [payDate])

  return (
    <Container>
      <Title>렌탈 결제</Title>
      <InfoTitle>주문 상품</InfoTitle>
      <ProductContainer>
      <Img />
      <Texttest>
맥북 프로 2022 13 M2 </Texttest>
      </ProductContainer>

      <InfoTitle>구매자 정보 입력</InfoTitle>
      <Text>카드번호</Text>
      <Input onChange={(e) => setCardNum(e.target.value)}/>
      <Text>생년월일</Text>
      <Input onChange={(e) => setBirth(e.target.value)}/>
      <Text>유효기간</Text>
      <Input onChange={(e) => setExPeriod(e.target.value)}/>
      <Text>이름</Text>
      <Input onChange={(e) => setName(e.target.value)}/>
      <Text>결제 날짜</Text>
      <Select onChange={(e) => setPayDate(e.target.value)}>
      <option value="1">매달 1일</option>
      <option value="15">매달 15일</option>
      <option value="30">매달 30일</option>
        </Select>
      <Text>렌탈 개월</Text>
      <Select onChange={(e) => setRentalMonth(e.target.value)}>
      <option value="12">12개월 / </option>
      <option value="24">24개월 /</option>
        </Select>
      <Text>배송지</Text>
      <Input onChange={(e) => setAddress(e.target.value)}/>
      <RentalButton onClick={() => rentalRequest()}>랜탈 신청하기</RentalButton>
    </Container>
  )
}

const Texttest = styled.div`
  height: 100px;
  line-height: 100px;
`

const ProductContainer = styled.div`
  padding-left: 15px;
  display: flex;
`

const Img = styled.div`
width: 100px;
height: 100px;
background-image: url(${macbook});
background-repeat: no-repeat;
background-position: center;
background-size: cover;
`

const Container = styled.div`
  margin: 0 auto;
  padding-top: 100px;
  padding-bottom: 50px;
  width: 500px;
`
const Title = styled.div`
  margin: 0 auto;
  width: 75px;
  font-size: 20px;
  margin-bottom: 25px;
`
const InfoTitle = styled.div`
  width: 400px;
  margin: 0 auto;
  font-size: 18px;
  margin-bottom: 10px;

`
const Text = styled.div`
  width: 400px;
  margin: 0 auto;
  margin-left: 30px;
  margin-bottom: 10px;
  color: #707070;
  font-size: 14px;
  
`
const Input = styled.input`

  margin-left: 30px;
  margin-bottom: 10px;
`
const Select = styled.select`
margin-left: 30px;
margin-bottom: 10px;
`
const RentalButton = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  width: 400px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  background-color :#225982;
  color: white;
  cursor: pointer;
`

export default RentalPage