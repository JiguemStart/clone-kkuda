import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const PartnersSignUpPage3 = () => {
  const navigate = useNavigate();
  const [sameAddressCheck, setSameAddressCheck] = useState(false);
  const [partnersInfo, setPartnersInfo] = useState([
    {
      adminId: "fasfsaafd", //관리용 아이디
      businessAddress: "string", //사업장주소
      businessName: "string", //사업자명
      businessNum: "string", //사업자등록번호
      category: [], //카테고리
      dealMethod: [], //거래방식
      etcContent: "string", // 기타
      ggudaId: "string", // 꾸다 앱 아이디
      memberId: 1, // 꾸다 아이디
      name: "string", //담당자 이름
      phoneNum: "string", // 담당자 연락처
      representative: "string", // 대표자
      serviceName: "string", // 서비스 명
      siteAddress: "string", // 웹사이트 주소
      storeLocation: "string", // 매장 위치
    },
  ]);

  /**객체로 input값 전달하는 함수 */
  const partnersInfoHandler = (e) => {
    let array = partnersInfo;
    switch (e.target.name) {
      case "adminId":
        array[0].adminId = e.target.value;
        break;
      case "businessAddress":
        array[0].businessAddress = e.target.value;

        break;
      case "businessName":
        array[0].businessName = e.target.value;

        break;
      case "businessNum":
        array[0].businessNum = e.target.value;

        break;
      case "dealMethod":
        array[0].dealMethod = e.target.value;

        break;
      case "etcContent":
        array[0].etcContent = e.target.value;

        break;
      case "ggudaId":
        array[0].ggudaId = e.target.value;
        break;
      case "name":
        array[0].name = e.target.value;

        break;
      case "phoneNum":
        array[0].phoneNum = e.target.value;

        break;
      case "representative":
        array[0].representative = e.target.value;

        break;
      case "serviceName":
        array[0].serviceName = e.target.value;

        break;
      case "siteAddress":
        array[0].siteAddress = e.target.value;
        break;
      case "storeLocation":
        array[0].storeLocation = e.target.value;
        break;
      default:
        break;
    }
    console.log(array[0].name)
    setPartnersInfo([...array]);
  };

  /**체크박스 값 전달하는 함수 */
  const partnersCheckBoxHandler = (e) => {
    let array = partnersInfo;
    switch (e.target.name) {
      case "child":
        array[0].category[e.target.id] = e.target.name;
        break;
      case "digital":
        array[0].category[e.target.id] = e.target.name;
        break;
      case "sport":
        array[0].category[e.target.id] = e.target.name;
        break;
      case "kitchen":
        array[0].category[e.target.id] = e.target.name;
        break;
      case "interior":
        array[0].category[e.target.id] = e.target.name;
        break;
      case "hobby":
        array[0].category[e.target.id] = e.target.name;
        break;
      case "dress":
        array[0].category[e.target.id] = e.target.name;
        break;
      case "book":
        array[0].category[e.target.id] = e.target.name;
        break;
      // 여기서부터는 거래방식
      case "visit":
        array[0].dealMethod[e.target.id] = e.target.name;
        break;
      case "parcel":
        array[0].dealMethod[e.target.id] = e.target.name;
        break;
      case "quick":
        array[0].dealMethod[e.target.id] = e.target.name;
        break;
      case "direct":
        array[0].dealMethod[e.target.id] = e.target.name;
        break;
      default:
        break;
    }
    setPartnersInfo([...array])
  };

  /** 인풋값 비어있는지 검사후 api호출하는 함수 */
  const partnersApplyRequestCheck = () => {
    let full = true;
    console.log("되는거여?");
    for (let name of Object.keys(partnersInfo[0])) {
      console.log(name + partnersInfo[0][name]);
      if (partnersInfo[0][name].length == 0) {
        full = false;
      }
    }

    if (full == true) {
      partnersApplyRequest();
    } else {
      alert("빈칸을 채워주세요");
    }
  };

  /** 입점신청 api호출 함수 */
  const partnersApplyRequest = async () => {
    try {
      const res = await axios
        .post("http://localhost:8080/partners-apply/apply", {
          adminId: partnersInfo[0].adminId,
          businessAddress: partnersInfo[0].businessAddress,
          businessName: partnersInfo[0].businessName,
          businessNum: partnersInfo[0].businessNum,
          category: partnersInfo[0].category.filter((i) => i.length>0).join(),
          dealMethod: partnersInfo[0].dealMethod.filter((i) => i.length>0).join(),
          etcContent: partnersInfo[0].etcContent,
          ggudaId: partnersInfo[0].ggudaId,
          memberId: document.cookie.split("id=")[1],
          name: partnersInfo[0].name,
          phoneNum: partnersInfo[0].phoneNum,
          representative: partnersInfo[0].representative,
          serviceName: partnersInfo[0].serviceName,
          siteAddress: partnersInfo[0].siteAddress,
          storeLocation: partnersInfo[0].storeLocation,
        })
        .then((res) => {
          console.log(res);
          navigate("/main");
          alert("입점 신청이 완료되었습니다.");
        });
    } catch (error) {
      console.log("통신 실패 ")
      console.log(error);
    }
  };

  /**주소값이 같다는 체크 하면 input 사용불가 처리하고 객체로 값 전달 */
  useEffect(() => {
    console.log(partnersInfo);
  }, [partnersInfo]);

  useEffect(() => {
    console.log(sameAddressCheck)
    let array = partnersInfo
    if (sameAddressCheck == true) {
    array[0].storeLocation = array[0].businessAddress
    
    }
    else {
      array[0].storeLocation = ""
    }
    setPartnersInfo([...array])
  }, [sameAddressCheck]);

  

  return (
    <Container>
      <Title>입점 신청</Title>
      <Text>
        원할한 입점신청을 위해 정확한 정보를 기입해주시기 바랍니다. 약 5분 정도
        소요됩니다(PC사용 권장)
      </Text>
      <SemiTitle>사업자 정보</SemiTitle>
      <ListTitle>사업자명 * </ListTitle>
      <Input
        placeholder="주식회사 꾸다파트너스"
        name="businessName"
        onChange={(e) => partnersInfoHandler(e)}
      />
      <ListTitle>사업자 등록번호 *</ListTitle>
      <Input
        placeholder="123-45-67890"
        name="businessNum"
        onChange={(e) => partnersInfoHandler(e)}
      />
      <ListTitle>대표자 *</ListTitle>
      <Input name="representative"
        onChange={(e) => partnersInfoHandler(e)}/>
      <ListTitle>사업장 주소 *</ListTitle>
      <Input
        placeholder="사업자등록증상 주소"
        name="businessAddress"
        onChange={(e) => partnersInfoHandler(e)}
      />
      <Line />
      <SemiTitle>운영 정보</SemiTitle>
      <ListTitle>서비스명</ListTitle>
      <Text>사업자명과 다른 경우 입력해주세요.</Text>
      <Input name="serviceName" onChange={(e) => partnersInfoHandler(e)} />
      <ListTitle>웹사이트 주소 *</ListTitle>
      <Text>홈페이지나 대여 상품을 확인할 수 있는 링크를 적어주세요.</Text>
      <Input
        placeholder="www.kkuda.kr"
        name="siteAddress"
        onChange={(e) => partnersInfoHandler(e)}
      />
      <ListTitle>실운영 매장 위치</ListTitle>
      {sameAddressCheck ? "" :
      <Input
        placeholder="고객에게 노출되는 주소입니다."
        id="adress"
        name="storeLocation"
        defaultValue={sameAddressCheck ? partnersInfo[0].businessAddress : ""}
        onChange={(e) => partnersInfoHandler(e)
        }
      />

}
      <br />
      <br />
      <Checkbox
        type="checkbox"
        id="adress"
        name="sameAdress"
        onChange={() => setSameAddressCheck(!sameAddressCheck)}
      />
      <label htmlFor="adress">사업자등록증상 주소와 동일</label>
      <ListTitle>대표 카테고리</ListTitle>
      <Text>중복 선택 가능 *</Text>
      <Checkbox type="checkbox" id="0" name="child" onChange={(e) => partnersCheckBoxHandler(e)}/>
      <label htmlFor="0">유아용/완구</label>
      <br />
      <Checkbox type="checkbox" id="1" name="digital" onChange={(e) => partnersCheckBoxHandler(e)}/>
      <label htmlFor="1">디지털/가전</label>
      <br />
      <Checkbox type="checkbox" id="2" name="sport" onChange={(e) => partnersCheckBoxHandler(e)}/>
      <label htmlFor="2">레저/스포츠</label>
      <br />
      <Checkbox type="checkbox" id="3" name="kitchen" onChange={(e) => partnersCheckBoxHandler(e)}/>
      <label htmlFor="3">주방/생활용품</label>
      <br />
      <Checkbox type="checkbox" id="4" name="interior" onChange={(e) => partnersCheckBoxHandler(e)}/>
      <label htmlFor="4">가구/인테리어</label>
      <br />
      <Checkbox type="checkbox" id="5" name="hobby" onChange={(e) => partnersCheckBoxHandler(e)}/>
      <label htmlFor="5">취미/악기/게임</label>
      <br />
      <Checkbox type="checkbox" id="6" name="dress" onChange={(e) => partnersCheckBoxHandler(e)}/>
      <label htmlFor="6">의류/잡화</label>
      <br />
      <Checkbox type="checkbox" id="7" name="book" onChange={(e) => partnersCheckBoxHandler(e)}/>
      <label htmlFor="7">책/음반/DVD</label>
      <br />
      <Checkbox type="checkbox" id="8" name="dog" onChange={(e) => partnersCheckBoxHandler(e)}/>
      <label htmlFor="8">반려동물용품</label>
      <br />
      <ListTitle>운영중인 거래 방식 *</ListTitle>
      <Checkbox type="checkbox" id="9" name="visit" onChange={(e) => partnersCheckBoxHandler(e)}/>
      <label htmlFor="9">방문</label>
      <br />
      <Checkbox type="checkbox" id="10" name="parcel" onChange={(e) => partnersCheckBoxHandler(e)}/>
      <label htmlFor="10">택배</label>
      <br />
      <Checkbox type="checkbox" id="11" name="quick" onChange={(e) => partnersCheckBoxHandler(e)}/>
      <label htmlFor="11">퀵</label>
      <br />
      <Checkbox type="checkbox" id="12" name="direct" onChange={(e) => partnersCheckBoxHandler(e)}/>
      <label htmlFor="12">직접 배송/설치</label>
      <br />
      <Line />
      <SemiTitle>담당자 정보</SemiTitle>
      <Text>원할한 소통을 위해 담당자 정보를 정확히 적어주세요.</Text>
      <ListTitle>성함 *</ListTitle>
      <Input name="name" onChange={(e) => partnersInfoHandler(e)} />
      <ListTitle>연락처 *</ListTitle>
      <Input
        placeholder="010-1234-5678"
        name="phoneNum"
        onChange={(e) => partnersInfoHandler(e)}
      />
      <ListTitle>이메일 *</ListTitle>
      <Input name="email" onChange={(e) => partnersInfoHandler(e)} />
      <ListTitle>꾸다앱 아이디</ListTitle>
      <Input
        placeholder="kkuda@shareround.co.kr"
        name="ggudaId"
        onChange={(e) => partnersInfoHandler(e)}
      />
      <AppMessage>
        꾸다앱에서 고객의 대여 문의를 받을 수 있습니다
        <br />
        -구글플레이
        <AppLink
          href="https://play.google.com/store/apps/details?id=kr.beamview&utm_source=hp&utm_medium=display&utm_campaign=icon"
          target="_blank"
          rel="noreferrer"
        >
          바로가기
        </AppLink>
        <br />
        -앱스토어(아이폰)
        <AppLink
          href="https://apps.apple.com/app/apple-store/id1528287130"
          target="_blank"
          rel="noreferrer"
        >
          바로가기
        </AppLink>
      </AppMessage>
      <ListTitle>희망하시는 관리자용 아이디를 적어주세요. *</ListTitle>
      <Input
        placeholder="주식회사"
        name="adminId"
        onChange={(e) => partnersInfoHandler(e)}
      />
      <EtcMessage>
        사장님, 궁금하신 내용이 있으시면 남겨주세요. 전담 매니저가
        답변드리겠습니다.
      </EtcMessage>
      <EtcInput name="etcContent" onChange={(e) => partnersInfoHandler(e)} />
      <ApplyButton onClick={() => partnersApplyRequestCheck()}>신청 완료</ApplyButton>
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto;
  padding-top: 130px;
  width: 100%;
  max-width: 700px;
`;
const Title = styled.div`
  margin-bottom: 60px;
  font-size: 40px;
  font-weight: 700;
`;
const Text = styled.div`
  margin-top: 30px;
  font-size: 14px;
`;
const SemiTitle = styled.div`
  margin-top: 35px;
  font-size: 30px;
  font-weight: 600;
`;
const ListTitle = styled.div`
  margin-top: 30px;
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: 600;
`;
const Input = styled.input`
  margin-top: 5px;
  padding-left: 10px;
  padding-right: 10px;
  width: 320px;
  height: 36px;
  box-sizing: border-box;
  box-shadow: rgb(0 0 0 / 12%) 0px 1px 1px 0px,
    rgb(61 59 53 / 16%) 0px 0px 0px 1px, rgb(61 59 53 / 8%) 0px 2px 5px 0px;
  border: 0px;
  border-radius: 5px;
  outline: none;
  background-color: rgb(255, 255, 255);
  color: rgb(55, 53, 47);
  caret-color: rgb(55, 53, 47);
  font-size: 16px;
  &:focus {
    box-shadow: rgb(58 152 255 / 36%) 0px 0px 0px 4px,
      rgb(61 59 53 / 16%) 0px 0px 0px 1px;
  }
  &::placeholder {
    opacity: 0.7;
    color: gray;
  }
`;
const Line = styled.div`
  margin-top: 30px;
  margin-bottom: 80px;
  opacity: 0.3;
  border: 0.5px solid gray;
`;
const Checkbox = styled.input`
  margin-top: 10px;
  margin-bottom: 15px;
`;
const AppMessage = styled.div`
  margin-top: 20px;
  line-height: 35px;
`;
const AppLink = styled.a`
  margin-left: 5px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  padding-bottom: 0.1rem;
  color: rgb(0, 122, 255);
  border-bottom: 2px solid rgb(0, 122, 255);
`;
const EtcMessage = styled.div`
  margin-top: 80px;
  font-size: 20px;
`;
const EtcInput = styled.textarea`
  margin-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  width: 100%;
  height: 96px;
  box-sizing: border-box;
  box-shadow: rgb(0 0 0 / 12%) 0px 1px 1px 0px,
    rgb(61 59 53 / 16%) 0px 0px 0px 1px, rgb(61 59 53 / 8%) 0px 2px 5px 0px;
  border: 0px;
  border-radius: 5px;
  outline: none;
  background-color: rgb(255, 255, 255);
  color: rgb(55, 53, 47);
  caret-color: rgb(55, 53, 47);
  &:focus {
    box-shadow: rgb(58 152 255 / 36%) 0px 0px 0px 4px,
      rgb(61 59 53 / 16%) 0px 0px 0px 1px;
  }
`;
const ApplyButton = styled.div`
  margin-top: 30px;
  margin-bottom: 70px;
  width: 100px;
  height: 32px;
  font-size: 14px;
  text-align: center;
  line-height: 32px;
  color: white;
  background-color: rgb(55, 53, 47);
  border-radius: 5px;
  cursor: pointer;
  background: rgb(0, 0, 0);
  &: hover {
    opacity: 0.7;
  } ;
`;

export default PartnersSignUpPage3;
