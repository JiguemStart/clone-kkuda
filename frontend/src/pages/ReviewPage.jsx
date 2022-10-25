import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { i_pad, i_pad_reveiw, macbook, review_picture, search_icon, star } from '../assets'
import { CardContainer, GoodsContainer } from '../components'
import { Goods } from '../elements'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ReviewPage = () => {
  const [select,  setSelect] = useState(false)
  const [popularList, setPopularList] = useState();

 const [active, setActive] = useState(false)
   /**메인페이지 상품 api요청 함수 */
   const productListRequest = async () => {
    try {
      const res = await axios
        .get(`http://localhost:8080/page-product/main-page`)
        .then((res) => {
          console.log(res.data);
          let array1 = res.data.popular;
          setPopularList([...array1]);

        });
    } catch (error) {
      console.log(error);
    }
  };

  const test = () => {
    setActive(false)
    setSelect(false)
  }

  useEffect(() => {
    productListRequest();

  }, []);
  return (
    <Container>
      <Title>후기</Title>
      <Box select={select}>
      <MenuGoodsContainer>
      <BoxContainer active={active}>
      <Link to={`${String(typeof(popularList)) == "object" ? "/detail/" + popularList.id: ""}`} style={{ textDecoration: "none" }}>
      <Image img={review_picture}/>
      </Link>
      <GoodsName>
      배송도 빠고 상담원 분들도...
<br /><br/>
<Star src={star}/><Star src={star}/><Star src={star}/><Star src={star}/><Star src={star}/>
      </GoodsName>
      <Brand>이**</Brand>
      <Price></Price>
      </BoxContainer>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <BoxContainer>

      <Image img={i_pad_reveiw} onClick={() => setSelect(true)}/>

      <GoodsName>
      처음 구매했는데 좋네요.
      <br /><br/>
<Star src={star}/><Star src={star}/><Star src={star}/><Star src={star}/><Star src={star}/>
      </GoodsName>
      <Brand>김**</Brand>
      <Price></Price>
      </BoxContainer>
      </MenuGoodsContainer>
      <br /><br /><br /><br /><br />
      <Input /> <SearchButton onClick={() => setActive(true)}>검색</SearchButton>
      </Box>
      <Detail select={select}>
      <SemiTitle>Apple 아이패드 프로 12.9 5세대 M1칩 후기</SemiTitle>
      <Star src={star}/><Star src={star}/><Star src={star}/><Star src={star}/><Star src={star}/><br /><br />
      김**
      <br /><br /><br /><br/><br/><br/>

      처음 구매했는데 좋네요.<br/><br/><br/><br/>
      <ImgSmall src={i_pad_reveiw}/><br/><br/><br/><br/>
      <Line></Line>
      <br/><br/><br/>
      <Tee onClick={() => test(false)}>
      {"<"} 목록으로 가기
      </Tee>
      </Detail>
    </Container>
  )
}

const ImgSmall= styled.img`
  width: 100px;
  height: 100px;
`

const Tee = styled.div`
  cursor: pointer;
`

const SemiTitle = styled.div`
  font-size: 26px;
  color: black;
`
const Line = styled.div`
  width: 700px;
  box-sizing: border-box;
  border: 0.5px solid gray;
  opacity: 0.4;
`

const Detail = styled.div`
color: gray;
display: ${props => {
  return props.select ? "block" : "none"
}};
width: 700px;
margin-top: 80px;
margin: 0 auto;
`

const Box = styled.div`
  display: ${props => {
    return props.select ? "none" : "block"
  }};
`

const Title = styled.div`
  margin-bottom: 50px;
  font-size: 32px;
  font-weight: 600;
`;

const Input = styled.input`
height: 40px;
font-size: 20px;
`
const SearchButton = styled.div`
cursor:  pointer;
display: inline-block;
width: 60px;
text-align: center;
padding-right: 8px;
padding-left: 8px;
line-height: 40px;
border-radius: 10px;
height: 40px;
background-color : #2ecde7;
color: white;
font-size: 14px;
  
`

const Star = styled.img`
  width: 15px;
  height: 15px;
`

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding-left: 15px;
  width: 1020px;
  border: 1px solid gray;
  line-height: 80px;
`
const SearchIcon = styled.img`
  margin-right: 15px;
`
const SearchInput = styled.input`
  width: 800px;
  border:none;
  height: 50px;
  font-size: 16px;
  color : gray;
  &:focus {outline: none;}
`


const Container = styled.div`
  padding-top: 130px;
  height: 950px;
  max-width: 1200px;
  margin: 0 auto;
`
const MenuGoodsContainer = styled.div`
  margin: 0 auto;
  margin-top: 40px;
  display: flex;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
  max-width: 1200px;
  box-sizing: border-box;
`
const MenuBar = styled.div`
  width: 145.2px;
`
const MenuButton = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  width: 28.8px;
  height: 25px;
  font-size: 16px;
  box-sizing: border-box;
  &:nth-of-type(1) {
    color: ${props => {
      return props.select == "애플" ? "#2ecde7" : ""
    }};
    border-bottom: ${props => {
      return props.select == "애플" ? "2px solid #2ecde7" : ""
    }};
  };
  &:nth-of-type(2) {
    color: ${props => {
      return props.select == "삼성" ? "#2ecde7" : ""
    }};
    border-bottom: ${props => {
      return props.select == "삼성" ? "2px solid #2ecde7" : ""
    }};
  };
  &:nth-of-type(3) {
    width: 19px;
    color: ${props => {
      return props.select == "LG" ? "#2ecde7" : ""
    }};
    border-bottom: ${props => {
      return props.select == "LG" ? "2px solid #2ecde7" : ""
    }};
  };
  &:nth-of-type(4) {
    color: ${props => {
      return props.select == "벤큐" ? "#2ecde7" : ""
    }};
    border-bottom: ${props => {
      return props.select == "벤큐" ? "2px solid #2ecde7" : ""
    }};
  };
`

const Image = styled.div`
cursor: pointer;
  width: 21.72vw;
  max-width: 278px;
  height: 21.72vw;
  max-height: 278px;
  border: 0.5px solid #e6e6e6;
  border-radius: 10px;
  box-sizing: border-box;
  background-image: url(${props => {
    return props.img
  }});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const GoodsName = styled.div`
  margin-top: 19.2px;
  height: 48px;
  font-size: 16px;
`;
const Brand = styled.div`
  margin-top: 5.6px;
  font-size: 14px;
`;
const Price = styled.div`
  margin-top: 8px;
  font-size: 16px;
`;

const BoxContainer = styled.div`
  display: ${props => {
    return props.active ? "none" : "block"
  }};
  width: 21.72vw;
  max-width: 278px;
`;

export default ReviewPage