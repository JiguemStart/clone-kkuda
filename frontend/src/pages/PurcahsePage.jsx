import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import { i_pad } from '../assets'

const PurcahsePage = () => {
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
  const [info, setInfo] = useState()
  const [value, setValue] = useState(false)


  /**렌탈 결제 요청 api */
  const rentalRequest = async () => {
    try {
      const res = await axios
        .post("http://localhost:8080/rental/rental-pay", {
          cardNum: cardNum,
          dateOfBirth: birth,
          exPeriod: exPeriod,
          memberId: Number(memberId),
          monthPrice: Number(price),
          name: name,
          payDate: 0,
          productId: Number(location.pathname.split("/")[2]),
          rentalMonth: 1,
          shippingAddress: address,
          thisDatePayedState: "구매완료"
        })
        .then((res) => {
          console.log(res);
          alert("결제가 완료되었습니다!")
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
            setInfo(res.data.product)
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

    const test = () => {
      if (value == 0) {
        return "4,800,000"
      }
      else if (value == 1) {
        return "4,320,000"
      }
      else {
        return "4,319,000"
      }
    }
  return (
    <Container>
      <Title>주문 상품</Title>
      <ListTitle>
        <Img src={i_pad}/>
        <Name ><br />Apple 아이패드 프로 12.9 5세대 M1칩<br/><br />
          2개 / 2,400,000원
        </Name>
      </ListTitle>
      <Line />
      <TextContainer>
        <Text>상품 합계</Text>
        <Sum>4,800,000원</Sum>
      </TextContainer>
      <Line />
      <InfoTitle>구매자 정보 입력</InfoTitle>
      <Text>카드번호</Text>
      <Input onChange={(e) => setCardNum(e.target.value)}/>
      <Text>생년월일</Text>
      <Input onChange={(e) => setBirth(e.target.value)}/>
      <Text>유효기간</Text>
      <Input onChange={(e) => setExPeriod(e.target.value)}/>
      <Text>이름</Text>
      <Input onChange={(e) => setName(e.target.value)}/>
      <Text>배송지</Text>
      <Input onChange={(e) => setAddress(e.target.value)}/>
      <Text>쿠폰 입력</Text>
      <Input onChange={(e) => setAddress(e.target.value)}/> <button onClick={() => setValue(1)}>적용하기</button>
      <Text>사용하실 적립금을 입력해주세요 </Text> 
      <Input onChange={(e) => setAddress(e.target.value)}/> <button onClick={() => setValue(2)}>적용하기</button>
      <br /><br />
    <Line />
      <TextContainer>
        <Text>최종 결제 금액</Text>
        <Sum>{test()}원</Sum>
      </TextContainer>
      <RentalButton onClick={() => rentalRequest()}>구매하기</RentalButton>
    </Container>
  )
}
const TextContainer =styled.div`
  display: flex;
  margin-bottom: 20px;
`
const Sum =styled.div`
  color: blue;
  font-size: 20px;
  font-weight: 700;

`



const Line = styled.div`
  width: 500px;
  border: 0.5px solid #4f4f4f;
  opacity: 0.2;
  margin-bottom: 20px;
`

const ListTitle =styled.div`
  display: flex;

`

const Img = styled.img`
  width: 80px;
  height: 80px;


  background-repeat: no-rpeat;
  background-position: center;
  background-size: cover;

`
const Name = styled.div`
width: 385px;
height: 80px;
box-sizing: border-box;
padding-left: 10px;
`


const Container = styled.div`
  margin: 0 auto;
  padding-top: 100px;
  padding-bottom: 50px;
  width: 500px;
  height:930px;
`
const Title = styled.div`
  margin: 0 auto;
  width: 75px;
  font-size: 20px;
  margin-bottom: 25px;
`
const InfoTitle = styled.div`
  text-align: center;
  width: 400px;
  margin: 0 auto;
  font-size: 18px;
  margin-top: 20px;
  margin-bottom: 20px;

`
const Text = styled.div`
  width: 200px;
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

export default PurcahsePage