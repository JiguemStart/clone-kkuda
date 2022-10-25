import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useState } from 'react';
import axios from 'axios';

const QuestionManagementPage = () => {
  const [partnersList, setPartnersList] = useState([])
  const [seeDetailStatus, setSeeDetailstatus] = useState([])
  const [active, setActive] = useState(false)
  const [select, setSelect] = useState(false)
  const [complete, setComplete] = useState(false)
  /**파트너스 리스크 api호출 함수 */
  const partnersListRequest = async () => {
    try {
      const res = await axios
        .get(`http://localhost:8080/partners-apply/view-list`)
        .then((res) => {
          let array = partnersList
          let array2 = []
          array = res.data
          array.forEach((i) => {
            console.log("몇번되")
            array2.push(false)
          })
          setPartnersList([...array])
          setSeeDetailstatus([...array2])
          console.log(res.data)
        });
    } catch (error) {
      console.log(error);
    }
  };
  /**파트너스 신청 허가 요청 api함수 */
  const partnersPermissionRequest = async (e) => {
    try {
      const res = await axios
        .put(`http://localhost:8080/partners-apply/permission?id=${e.target.id}`)
        .then((res) => {
          console.log("허가 완료")
        });
    } catch (error) {
      console.log(error);
    }
  };

  /**자세히보기 상태값 변경시켜서 파트너스 자세히 보게하는 함수 */
  const seeDetail = (j) => {
    console.log("되는겨?")
    let array = seeDetailStatus
    array[j] = !array[j]
    setSeeDetailstatus([...array])
    console.log(j)
  }

  useEffect(() => {
    partnersListRequest()
  }, [])

  const test =() => {
    setSelect(false)
    setComplete(true)
  }

  return (
    <Container>
      <Title>질문 관리</Title>
      <PartnersList>
        <ListContainer>
          <Box>자세히 버튼</Box>
        <IdId>id</IdId>
        <Box>제품명</Box>
        <TitleText>제목</TitleText>
        <Box>날짜</Box>

        </ListContainer>

      <>
      <ListContainer>
      <DetailButton onClick={() => setActive(true)}>자세히</DetailButton>
      <IdId>1</IdId>
      <BusinessName>아이패드 프로 12.9 5세대 M1칩</BusinessName>
      <TitleText>test</TitleText>
      <Box>2022-10-25</Box>




      </ListContainer>
<Test active={active}>
        <br/>
        <DetailList><Li>id </Li> 1</DetailList> 
        <DetailList><Li>사업자명 </Li> 아이패드 프로 12.9 5세대 M1칩</DetailList> 
        <DetailList><Li>제목 </Li> test</DetailList> 
        <DetailList><Li><br/><br/><br/>내용 </Li> test<br/><br/><br/><br/></DetailList> 
        <Answer complete={complete}><Li><br/><br/><br />답변 </Li> test<br/><br/><br/><br/></Answer> 
        <DetailList><Li>날짜 </Li> 22-10-25</DetailList> 
        <DetailList><Li>사용자 아이디 </Li> 1</DetailList> 

        <br />
        <Feedback select={select} onClick={() => setSelect(true)}>답글 달기</Feedback>
        <Input select={select} />
        </Test>
        <Complete select={select} onClick={() => test()}>답변 저장</Complete>
</>

      </PartnersList>
    </Container>
  )
}
const Answer = styled.div`
display: ${props => {
  return props.complete ? "block" : "none"
}};
  width: 500px;
  margin-top: 5px;
  margin-bottom: 5px;
  padding-left: 20px;
  margin-left: 30px;
  border-bottom: 0.5px solid gray;
`

const Complete = styled.button`
  display: ${props => {
    return props.select ? "block" : "none"
  }};
  margin-left: 30px;
  margin-top: 30px;
`

const Input = styled.textarea`
display: ${props => {
  return props.select ? "block" : "none"
}};
margin-left: 30px;
padding-top: 10px;
padding-left: 20px;
width: 530px;
height: 200px;
`

const Feedback = styled.button`
  display: ${props => {
    return props.select ? "none" : "block"
  }};
  margin-left: 30px;
`

const IdId = styled.div`
border: 0.5px solid black;
width: 5%;
height: 30px;
text-align: center;
line-height: 30px;
`

const TitleText = styled.div`
border: 0.5px solid black;
width: 35%;
height: 30px;
text-align: center;
line-height: 30px;
`
const Test = styled.div`
display: ${(props) => {
  return props.active == true ? "block" : "none";
}};
`

const Li = styled.div`
  display: inline-block;
  width: 130px;
  margin-bottom: 5px;
`

const Container = styled.div`
  margin: 0 auto;
  margin-bottom: 50px;
  padding-top: 100px;
  max-width: 1200px;
`;
const Title = styled.div`
  margin-bottom: 50px;
  font-size: 32px;
  font-weight: 600;
`;
const PartnersList = styled.div`

`;
const ListContainer = styled.div`
  display: flex;
`;
const Box = styled.div`
border: 0.5px solid black;
  width: 20%;
  height: 30px;
  text-align: center;
  line-height: 30px;
`;
const DetailButton = styled.div`
border: 0.5px solid black;
  width: 20%;
  height: 30px;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
`;
const Id = styled.div`
border: 0.5px solid black;
  width: 20%;
  height: 30px;
  text-align: center;
  line-height: 30px;
`;
const BusinessName = styled.div`
border: 0.5px solid black;
  width: 20%;
  height: 30px;
  text-align: center;
  line-height: 30px;
`;
const ServiceName = styled.div`
border: 0.5px solid black;
  width: 20%;
  height: 30px;
  text-align: center;
  line-height: 30px;
`;
const Representative = styled.div`
border: 0.5px solid black;
  width: 20%;
  height: 30px;
  text-align: center;
  line-height: 30px;
`;
const Category = styled.div`
border: 0.5px solid black;
  width: 20%;
  height: 30px;
  text-align: center;
  line-height: 30px;
`;
const Name = styled.div`
border: 0.5px solid black;
  width: 20%;
  height: 30px;
  text-align: center;
  line-height: 30px;
`;
const Phone = styled.div`
border: 0.5px solid black;
  width: 20%;
  height: 30px;
  text-align: center;
  line-height: 30px;
`;
const Permission = styled.div`
border: 0.5px solid black;
  width: 20%;
  height: 30px;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
`;

const DetailList = styled.div`
  width: 500px;
  margin-top: 5px;
  margin-bottom: 5px;
  padding-left: 20px;
  margin-left: 30px;
  border-bottom: 0.5px solid gray;
`

export default QuestionManagementPage