import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useState } from 'react';
import axios from 'axios';

const TVManagementPage = () => {
  const [electList, setElectList] = useState([])
  const [seeDetailStatus, setSeeDetailstatus] = useState([])
  /**노트북 리스트 api호출 함수 */
  const partnersListRequest = async () => {
    try {
      const res = await axios
        .get(`http://localhost:8080/estimate/view-list/tv`)
        .then((res) => {
          let array = electList
          let array2 = []
          array = res.data
          array.forEach((i) => {
            console.log("몇번되")
            array2.push(false)
          })
          setElectList([...array])
          setSeeDetailstatus([...array2])
        });
    } catch (error) {
      console.log(error);
    }
  };
  /**노트북 확인 요청 api함수 */
  const partnersPermissionRequest = async (e) => {
    try {
      const res = await axios
        .put(`http://localhost:8080/estimate/approval/tv?id=${e.target.id}`)
        .then((res) => {
          console.log("확인 완료")
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

  return (
    <Container>
      <Title>TV 견적 신청서 관리</Title>
      <PartnersList>
        <ListContainer>
          <Box>자세히 버튼</Box>
        <Box>id</Box>
        <Box>목적</Box>
        <Box>설치날짜</Box>
        <Box>회수날짜</Box>
        <Box>개수</Box>
        <Box>담당자</Box>
        <Box>연락처</Box>
        <Box>허가 버튼</Box>
        </ListContainer>


      <>
      <ListContainer>
      <DetailButton id={i.id} onClick={() => seeDetail(j)}>자세히</DetailButton>
      <Id>1234</Id>
      <BusinessName>1234</BusinessName>
      <ServiceName>1234</ServiceName>
      <Representative>1234</Representative>
      <Category>1234</Category>
      <Name>1234</Name>
      <Phone>1234</Phone>
      <Permission id={i.id} onClick={(e) => partnersPermissionRequest(e)}>확인</Permission>
      </ListContainer>

        <Test>
        <DetailList><Li>id :</Li> 1234</DetailList> 
        <DetailList><Li>개수 :</Li> 1234</DetailList> 
        <DetailList><Li>화면사이즈 : </Li>50인치 이상</DetailList> 
        <DetailList><Li>주소 :</Li> 1234</DetailList> 
        <DetailList><Li>설치방식 : </Li>1234</DetailList> 
        <DetailList><Li>행사목적 :</Li> 1234</DetailList> 
        <DetailList><Li>행사내용 :</Li> 1234</DetailList> 
        <DetailList><Li>설치날짜 :</Li> 1234</DetailList> 
        <DetailList><Li>회수날짜 :</Li> 1234 </DetailList> 
        <DetailList><Li>담당자 이름 :</Li> 1234</DetailList> 
        <DetailList><Li>담당자 연락처 :</Li> 1234</DetailList> 
        <DetailList><Li>담당자 이메일 : </Li>1234</DetailList> 
        <DetailList><Li>세금 계산용 이메일 :</Li> 1234</DetailList> 
        <DetailList><Li>확인 유무 :</Li>1234 </DetailList> 
        <DetailList><Li>memberId :</Li> 1234</DetailList> 
        </Test>


      </>
    
  

      </PartnersList>
    </Container>
  )
}
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

export default TVManagementPage