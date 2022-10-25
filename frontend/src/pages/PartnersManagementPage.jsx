import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useState } from 'react';
import axios from 'axios';

const PartnersManagementPage = () => {
  const [partnersList, setPartnersList] = useState([])
  const [seeDetailStatus, setSeeDetailstatus] = useState([])
  const [active, setActive] = useState(false)
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

  return (
    <Container>
      <Title>파트너스 관리</Title>
      <PartnersList>
        <ListContainer>
          <Box>자세히 버튼</Box>
        <Box>id</Box>
        <Box>사업자명</Box>
        <Box>서비스명</Box>
        <Box>대표자</Box>
        <Box>카테고리</Box>
        <Box>담당자</Box>
        <Box>연락처</Box>
        <Box>허가 버튼</Box>
        </ListContainer>

      <>
      <ListContainer>
      <DetailButton onClick={() => setActive(true)}>자세히</DetailButton>
      <Id>1</Id>
      <BusinessName>1234</BusinessName>
      <ServiceName>1234</ServiceName>
      <Representative>1234</Representative>
      <Category>1234</Category>
      <Name>1234</Name>
      <Phone>1234</Phone>
      <Permission  onClick={(e) => partnersPermissionRequest(e)}>허가</Permission>
      </ListContainer>
<Test active={active}>
        <br/>
        <DetailList><Li>id </Li> 1234</DetailList> 
        <DetailList><Li>사업자명 </Li> 1234</DetailList> 
        <DetailList><Li>사업자등록번호 </Li> 1234</DetailList> 
        <DetailList><Li>대표자 </Li> 1234</DetailList> 
        <DetailList><Li>사업장 주소 </Li> 1234</DetailList> 
        <DetailList><Li>서비스명 </Li> 1234</DetailList> 
        <DetailList><Li>웹사이트 주소 </Li> 1234</DetailList> 
        <DetailList><Li>실운영 매장 위치 </Li> 1234</DetailList> 
        <DetailList><Li>대표 카테고리 </Li> 1234</DetailList> 
        <DetailList><Li>운영중인 거래 방식 </Li> 1234</DetailList> 
        <DetailList><Li>담당자 성함 </Li> 1234</DetailList> 
        <DetailList><Li>담당자 연락처 </Li> 1234</DetailList> 
        <DetailList><Li>담당자 이메일 </Li> 1234</DetailList> 
        <DetailList><Li>꾸다앱 아이디 </Li> 1234</DetailList> 
        <DetailList><Li>관리자용 아이디 </Li> 1234</DetailList> 
        <DetailList><Li>문의 내용 </Li> 1234 </DetailList> 
        <br />
        </Test>
</>

      </PartnersList>
    </Container>
  )
}

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

export default PartnersManagementPage