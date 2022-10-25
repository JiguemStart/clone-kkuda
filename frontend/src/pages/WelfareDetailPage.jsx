import React, { useState } from "react";

import styled from "styled-components";
import { useEffect } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { detailpicutre, i_pad, i_pad_detail, i_pad_reveiw, lenovo, macbook, star } from "../assets";
import { set } from "lodash";

const WelfareDetailPage = () => {
  const location = useLocation()
  const [id, setId] = useState(document.cookie.split("; ")[1].substring(3))
  const [product, setProduct] = useState(); // 상품
  const [answer, setAnswer] = useState(); // 질문에 대한 답변
  const [question, setQuestion] = useState(); // 질문
  const [review, setReview] = useState(); // 후기
  const [questionActive, setQuestionActive] = useState(false) // 질문쓰기 상태 관리
  const [questionContent, setQuestionContent] = useState("")  // 질문내용 
  const [count, setCount] = useState(1)
  const [testValue, SetTestValue] = useState(0)
  const [active, setActive] = useState(false)

  useEffect(() => {
    console.log(location)
  }, [])

  /**상품 자세한 정보 가져오는 함수 */
  const detailProductRequest = async () => {
    try {
      const res = await axios
        .get(
          `http://localhost:8080/page-product/detail-page?id=${location.pathname.split("/")[2]}`
        )
        .then((res) => {
          setProduct(res.data.product);
          setAnswer(res.data.questionAnswerList);
          setQuestion(res.data.questionList);
          setReview(res.data.reviewList);
          console.log(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  /**질문작성 요청 api */
  const questionRequest = async () => {
    try {
      const res = await axios
        .post("http://localhost:8080/question/register", {
          content: questionContent,
          memberId: id,
          privateWhether: 0,
          productId: product.id,
          title: "string"
        })
        .then((res) => {
          console.log(res);

        });
    } catch (error) {
      console.log(error);
    }
  };

  /**질문내용이 있을경우 질문 작성 api호춣 */
  const questionCheck = () => {
    if(questionContent.length > 0) {
      questionRequest()
    }
    else {
      alert("질문내용을 작성해주세요.")
    }
  }

  const test = () => {
    alert("장바구니에 물건이 담겼습니다.")
    SetTestValue(2)
  }

  const test2 = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
  const test3 = () => {
    setActive(true)
    setQuestionActive(false)
  }

  useEffect(() => {
    detailProductRequest();
  }, []);
  return (
    <Container>
      <BasketTest>{testValue == 2 ? "2" : ""}</BasketTest>
      <TopContainer>
        <ImgBox src={macbook}/>
        <ReantalContainer>
          <Title>맥북 프로 2022 13 M2</Title>
          <RentalText>
            {"2,400,000"}원  <br />
          
          </RentalText>
          <br /><br/>
          <CountContainer>
          <Minus onClick={() => count > 1 ? setCount(count-1) : ""}>-</Minus>
          <Count>{count}</Count>
          <Plus onClick={() => setCount(count+1)}>+</Plus>
          <Price>{test2(count*2400000)} 원</Price>
          </CountContainer>
            <ButtonContainer>
          <Link to={`/purchase/${product ? product.id : ""}`} style={{ textDecoration: "none" }}>
          <RentalButton>구매하기</RentalButton>
          </Link>
          <RentalButton onClick={() => test()}>장바구니 담기</RentalButton>
          </ButtonContainer>
        </ReantalContainer>
      </TopContainer>
      <MenuContaier>
        <ProductInfoMenu>상품설명</ProductInfoMenu>
        <ReviewMenu>후기 ( 1 )</ReviewMenu>
        <QuestionMenu>질문 ({question ? question.length : ""})</QuestionMenu>
      </MenuContaier>
      
      <br />
      <br />
      <br />
      <ImgDetail src={detailpicutre}/>
      <ReviewTitle>후기</ReviewTitle>
      <Line />
      <ReviewContainer>
        이**  &nbsp;&nbsp;&nbsp;<Star src={star}/><Star src={star}/><Star src={star}/><Star src={star}/><Star src={star}/><br /><br />
        <Img src={i_pad_reveiw}/><br /><br />
       
        처음 구매했는데 좋네요<br />

        {/* {review ? review.length > 0
          ? review.map((i) => {
              return (
                <>
                여기되는거여?
                  <Id>{review.memberId}</Id>
                  <ReviewImg src={review.imageFiles[0].filepath} />
                  <Text>{review.content}</Text>
                  <Line />
                </>
              );
            })
          : (
            <>
            <NoData>
            작성된 후기가 없습니다.
            </NoData>
            <Line />
            </>
          ) : ""} */}
      </ReviewContainer>
      <br />
      <Line />
      <QuestionTitle>질문</QuestionTitle>
      <Line />
      <QuestionContainer>
        <Test active={active}>
        <br /> <br />
      김** <br /><br />
<br />
       
        제목 : test<br /><br/>
        test<br /><br/>
        </Test>
        {/* {question ? question.length > 0
          ? question.map((i) => {
              return (
                <>
                  {question.privateWhether == 1 ? (
                    "비밀 질문입니다."
                  ) : (
                    <>
                      <Id>{question.memberId}</Id>
                      <Text>{question.content}</Text>
                      <Line />
                    </>
                  )}
                </>
              );
            })
          : ( */}

            <NoData active={active}>
            작성된 질문이 없습니다.
            </NoData>
            <Line />

      </QuestionContainer>
      <QuestionButtonContainer>
      <QuestionButton active={questionActive} onClick={()=> setQuestionActive(true)}>질문 쓰기</QuestionButton>
      </QuestionButtonContainer>
      <TitleInput placeholder="제목"active={questionActive}/>
      <br />
      <QuestionInput placeholder="내용"active={questionActive} onChange={(e) =>setQuestionContent(e.target.value)}/>
      <QuestionButtonContainer >

     <Input active={questionActive} type="checkbox" />&nbsp;&nbsp;<Te active={questionActive}>비밀글로 지정하기</Te> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

      <QuestionRequestButton questionActive={questionActive} onClick={() => test3()}>질문 저장</QuestionRequestButton>
      </QuestionButtonContainer>
    </Container>
  );
}

const TitleInput = styled.input`
display: ${props => {
  return props.active ? "block" : "none"
}};
margin: 0 auto;
padding-left: 20px;
width: 730px;
height: 40px;
`

const Te = styled.span`
display: ${props => {
  return props.active ? "inline-block" : "none"
}};

`

const Input = styled.input`
display: ${props => {
  return props.active ? "block" : "none"
}};
`

const Test = styled.div`

  display: ${props => {
    return props.active ? "block" : "none"
  }}
`
const Star = styled.img`
  width: 15px;
  height: 15px;
`


const Img = styled.img`
  width: 100px;
  height: 100px;
`

const BasketTest = styled.div`
  z-index: 99;
  position: absolute;
  top: 25px;
  right: -105px;
  font-size: 20px;
`

const Price = styled.div`
  width: 200px;
  text-align: right;
  line-height: 40px;
`
const CountContainer = styled.div`
  display: flex;
`

const Count = styled.div`
  text-align: center;
  line-height: 35px;
  width: 35px;
  height: 35px;
  box-sizing: border-box;
  border: 0.5px solid gray;
`
const Minus = styled.button`
width: 35px;
height: 35px;
box-sizing: border-box;
border: 0.5px solid gray;
background-color: white;
color: gray;
`
const Plus = styled.button`
width: 35px;
height: 35px;
  box-sizing: border-box;
  border: 0.5px solid gray;
  background-color: white;
color: gray;
`

const ImgDetail = styled.img`
  display: block;
  margin: 0 auto;
`

const Container = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 960px;
  padding-top: 120px;
  padding-bottom: 150px;
`;
const TopContainer = styled.div`
display: flex;
  width: 100%
`;
const ImgBox = styled.img`
  width: 100%;
  max-width: 556px;
  height: 500px;

  background-image: url(${props => {
    return props.img
  }}});
background-repeat: no-repeat;
background-position: center;
background-size: cover;
`;
const ReantalContainer = styled.div`
  margin-left: 50px;
  width: 324px;

`;
const Title = styled.div`
  margin-bottom: 60px;
  font-size: 20px;
  color: #222222;
`;
const RentalText = styled.div`
  font-size: 15px;
  color: #4f4f4f;
  line-height: 25px;
`;
const ButtonContainer = styled.div`
  display: flex;
`

const RentalButton = styled.div`
  width: 150px;
  height: 54px;
  margin-top: 20px;
  margin-right: 20px;
  font-size: 19px;
  font-weight: 600;
  line-height: 54px;
  text-align: center;
  background-color: #30CEE6;
  border-radius: 100px;
  color: black;
  cursor: pointer;
`;
const MenuContaier = styled.div`
  margin: 0 auto;
  border-bottom: 1px solid gray;
  width: 800px;
  margin-top: 100px;
  display: flex;
  justify-content: center;
  color: #777777;
  padding-bottom: 15px;
`;
const ProductInfoMenu = styled.div`
  width: 120px;
`;
const ReviewMenu = styled.div`
  width: 120px;
`;
const QuestionMenu = styled.div`
  width: 120px;
`;
const ReviewTitle = styled.div`
  margin: 0 auto;
  margin-bottom: 20px;
  width: 800px;
  margin-top: 70px;
  font-weight: 600;
  font-size: 18px;
`;
const Line = styled.div`
  margin: 0 auto;
  width: 800px;
  border:0.5px solid gray;
`;
const ReviewContainer = styled.div`
margin: 0 auto;
  width: 800px;
  padding-top: 20px;
`;
const Id = styled.div`

`;
const ReviewImg = styled.div`

`;
const Text = styled.div`

`;
const QuestionTitle = styled.div`
  margin: 0 auto;
  margin-bottom: 20px;
  width: 800px;
  margin-top: 70px;
  font-weight: 600;
  font-size: 18px;
`;
const QuestionContainer = styled.div`
  width: 800px;
  margin: 0 auto;
`;
const NoData = styled.div`
display: ${props => {
  return props.active ? "none" : "block"
}};
  height: 150px;
  text-align: center;
  line-height: 150px;
  color: gray;
`
const QuestionButton = styled.div`
display: ${props => {
  return props.active ? "none" : "block"
}};
  width: 100px;
  height: 45px;
  background-color: #C7E8F2;
  line-height: 45px;
  text-align: center;
  border-radius: 100px;
  cursor: pointer;
`
const QuestionButtonContainer = styled.div`
  line-height: 50px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 30px;
  max-width: 800px;
  display: flex;
  justify-content: right;
`
const QuestionInput = styled.textarea`
  display: ${props => {
    return props.active ? "block" : "none"
  }};
  margin: 0 auto;
  padding-top: 10px;
  padding-left: 20px;
  width: 730px;
  height: 250px;
`
const QuestionRequestButton = styled.div`
display: ${props => {
  return props.questionActive ? "block" : "none"
}};
  width: 100px;
  height: 45px;
  background-color: #C7E8F2;
  line-height: 45px;
  text-align: center;
  border-radius: 100px;
  cursor: pointer;
`


export default WelfareDetailPage