import React from "react";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

const EventApplyPage = () => {


    const [select, setSelect] = useState("pc");
    const [pc, setPc] = useState([
      {
        addProgram: "0",
        address: "",
        collectDate: "",
        cpu: "",
        elevatorYn: "",
        eventContent: "",
        installDate: "",
        installYn: "",
        internetSystem: "0",
        isConfirmed: "0",
        link: "00",
        managerContact: "",
        managerEmail: "",
        managerName: "",
        memberId: document.cookie.split("; ")[1].substring(3),
        monitorSize: "",
        os: "",
        others: "0",
        purpose: "",
        ram: "",
        ssd: "",
        taxEmail: "",
        volumn: "",
      },
    ]);
    const [tv, setTv] = useState([
      {
        address: "",
        collectDate: "",
        connectSort: "",
        createdAt: "2022-10-23T00:59:58.029Z",
        elevatorYn: "0",
        eventContent: "",
        installDate: "",
        installType: "",
        installYn: "0",
        isConfirmed: "0",
        link: "",
        managerContact: "",
        managerEmail: "",
        managerName: "",
        memberId: document.cookie.split("; ")[1].substring(3),
        purpose: "",
        taxEmail: "",
        tvSize: "",
        updatedAt: "2022-10-23T00:59:58.029Z",
        volumn: ""
      }
    ])
  
    /**렌탈 결제 요청 api */
    const pcRequest = async () => {
      try {
        const res = await axios
          .post("http://localhost:8080/estimate/apply/elec", {
            addProgram: pc[0].addProgram,
            address: pc[0].address,
            collectDate: pc[0].collectDate,
            cpu: pc[0].cpu,
            elevatorYn: Number(pc[0].elevatorYn),
            eventContent: pc[0].eventContent,
            installDate: pc[0].installDate,
            installYn: Number(pc[0].internetSystem),
            internetSystem: pc[0].internetSystem,
            isConfirmed: 0,
            link: pc[0].link,
            managerContact: pc[0].managerContact,
            managerEmail: pc[0].managerEmail,
            managerName: pc[0].managerName,
            memberId: Number(pc[0].memberId),
            monitorSize: pc[0].monitorSize,
            os: pc[0].os,
            others: pc[0].others,
            purpose: pc[0].purpose,
            ram: pc[0].ram,
            ssd: pc[0].ssd,
            taxEmail: pc[0].taxEmail,
            volumn: Number(pc[0].volumn),
          })
          .then((res) => {
            console.log(res);
            alert("전자기기 신청이 완료되었습니다!");
            location.href = "/main";
          });
      } catch (error) {
        console.log(error);
      }
    };
  
    /** 인풋값 비어있는지 검사후 api호출하는 함수 */
    const pcRequestCheck = () => {
      let full = true;
      console.log("pc되는거?");
      for (let name of Object.keys(pc[0])) {
        if (pc[0][name].length == 0) {
          full = false;
        }
      }
  
      if (full == true) {
        pcRequest();
      } else {
        console.log(pc[0]);
        alert("빈칸을 채워주세요");
      }
    };
  
    /**체크 값 전달하는 함수 */
    const pcApplyHandler = (e) => {
      let array = pc;
      switch (e.target.name) {
        case "count":
          array[0].volumn = e.target.value;
          break;
        case "moniter":
          array[0].monitorSize = e.target.id;
          break;
        case "CPU":
          array[0].cpu = e.target.id;
          break;
        case "RAM":
          array[0].ram = e.target.id;
          break;
        case "SSD":
          array[0].ssd = e.target.id;
          break;
        case "OS":
          array[0].os = e.target.value;
          break;
        case "event":
          array[0].purpose = e.target.value;
          break;
        case "description":
          array[0].eventContent = e.target.value;
          break;
        case "installDate":
          array[0].installDate = e.target.value;
          break;
        case "colletDate":
          array[0].collectDate = e.target.value;
          break;
        case "address":
          array[0].address = e.target.value;
          break;
        case "installCheck":
          array[0].installYn = e.target.id.split("-")[1];
          break;
        case "elevator":
          array[0].elevatorYn = e.target.id.split("-")[1];
          break;
        case "name":
          array[0].managerName = e.target.value;
          break;
        case "phone":
          array[0].managerContact = e.target.value;
          break;
        case "email":
          array[0].managerEmail = e.target.value;
          break;
        case "tax":
          array[0].taxEmail = e.target.value;
          break;
  
        default:
          break;
      }
      setPc([...array]);
    };
  
    /*------------------------------------------------------------------- */
  
     /**렌탈 결제 요청 api */
     const tvRequest = async () => {
      console.log(tv[0])
      try {
        const res = await axios
          .post("http://localhost:8080/estimate/apply/tv",     {
            address: tv[0].address,
            collectDate: tv[0].collectDate,
            connectSort: tv[0].connectSort,
            createdAt: tv[0].createdAt,
            elevatorYn: Number(tv[0].elevatorYn),
            eventContent: tv[0].eventContent,
            installDate: tv[0].installDate,
            installType: tv[0].installType,
            installYn: Number(tv[0].installYn),
            isConfirmed: Number(tv[0].isConfirmed),
            link: tv[0].link,
            managerContact: tv[0].managerContact,
            managerEmail: tv[0].managerEmail,
            managerName: tv[0].managerName,
            memberId: Number(document.cookie.split("; ")[1].substring(3)),
            purpose: tv[0].purpose,
            taxEmail: tv[0].taxEmail,
            tvSize: tv[0].tvSize,
            updatedAt: tv[0].updatedAt,
            volumn: Number(tv[0].volumn)
          })
          .then((res) => {
            console.log(res);
            alert("전자기기 신청이 완료되었습니다!");
            location.href = "/main";
          });
      } catch (error) {
        console.log(error);
      }
    };
  
    /** 인풋값 비어있는지 검사후 api호출하는 함수 */
    const tvRequestCheck = () => {
      let full = true;
      console.log("되는거여?");
      for (let name of Object.keys(tv[0])) {
        if (tv[0][name].length == 0) {
          full = false;
        }
      }
  
      if (full == true) {
        tvRequest();
      } else {
        console.log(tv[0]);
        alert("빈칸을 채워주세요");
      }
    };
  
    /**체크 값 전달하는 함수 */
    const tvApplyHandler = (e) => {
      let array = tv;
      switch (e.target.name) {
        case "count":
          array[0].volumn = e.target.value;
          break;
        case "inch":
          array[0].tvSize = e.target.id;
          break;
        case "install":
          array[0].installType = e.target.id;
          break;
        case "use":
          array[0].connectSort = e.target.id;
          break;
        case "link":
          array[0].link = e.target.value;
          break;
        case "event":
          array[0].purpose = e.target.value;
          break;
        case "description":
          array[0].eventContent = e.target.value;
          break;
        case "installDate":
          array[0].installDate = e.target.value;
          break;
        case "colletDate":
          array[0].collectDate = e.target.value;
          break;
        case "address":
          array[0].address = e.target.value;
          break;
        case "installCheck":
          array[0].installYn = e.target.id.split("-")[1];
          break;
        case "elevator":
          array[0].elevatorYn = e.target.id.split("-")[1];
          break;
        case "name":
          array[0].managerName = e.target.value;
          break;
        case "phone":
          array[0].managerContact = e.target.value;
          break;
        case "email":
          array[0].managerEmail = e.target.value;
          break;
        case "tax":
          array[0].taxEmail = e.target.value;
          break;
  
        default:
          break;
      }
      setTv([...array]);
    };
  
    const test = () => {
      alert("견적신청이 완료되었습니다.")
      location.href = "/main";
    };
  
    return (
      <Container>

        <Title>행사용품 견적 신청</Title>

        <PCContainer select={select}>
          <Question>장바구니에 담은 목록과 개수가 맞는지 확인해주세요.  *</Question>
          <ItemList>[PMC음향]음향장비 유선마이크 x 3</ItemList><br /><br/>
          <ItemList>[한빛네트웍스] 무전기 MDR-G1 x 5</ItemList><br /><br />
          <ItemList>[탑렌탈주] 듀라테이블 1800 x 2</ItemList><br /><br />
          <Question>보신 물품이 있다면 링크를 첨부해 주세요.  </Question>
          <TextArea />
          <Question>무슨 행사인가요?  *</Question>
          <Input />
          <Question>사용 용도는 무엇인가요?  *</Question>
          <Input />
          <Question>배송 날짜와 시간은 언제인가요?  *</Question>
          <Input />
          <Question>회수 날짜와 시간은 언제인가요? *</Question>
          <Input />
          <Question>배송 받을 주소는 어디인가요? 실제 설치 장소를 입력해주세요. *</Question>
          <TextArea />
          <Question>설치가 필요한가요? *</Question>
          <RadioInput
            type="radio"
            id="13인치"
            name="moniter"
            onChange={(e) => pcApplyHandler(e)}
          />{" "}
          <label htmlFor="13인치">네</label>
          <br />
          <RadioInput
            type="radio"
            id="14인치"
            name="moniter"
            onChange={(e) => pcApplyHandler(e)}
          />{" "}
          <label htmlFor="14인치">아니오</label>
          <br />
         
          <Question>엘리베이터를 사용할 수 있나요? *</Question>
          <RadioInput
            type="radio"
            id="16-1"
            name="elevator"
            onChange={(e) => pcApplyHandler(e)}
          />{" "}
          <label htmlFor="16-1">네</label>
          <br />
          <RadioInput
            type="radio"
            id="17-0"
            name="elevator"
            onChange={(e) => pcApplyHandler(e)}
          />{" "}
          <label htmlFor="17-0">아니오</label>
          <br />
          <Question>담당자 성함 *</Question>
          <Input name="name" onChange={(e) => pcApplyHandler(e)} />
          <Question>담당자 연락처 *</Question>
          <Input name="phone" onChange={(e) => pcApplyHandler(e)} />
          <Question>담당자 이메일 계정</Question>
          <Input name="email" onChange={(e) => pcApplyHandler(e)} />
          <Question>세금계산서 발행 이메일 계정</Question>
          <Input name="tax" onChange={(e) => pcApplyHandler(e)} />
          <Question>기타 요구사항이 있으시면 작성해주세요.  </Question>
          <TextArea />
          <Text>
            작성해 주셔서 감사합니다.
            <br />
            <br />
            기다려 주시면 확인 후 이메일로 견적서를 발행해 드리겠습니다.
            <br />
            <br />
            * 해당 날짜에 재고가 없는 경우 비슷한 용품으로 견적서를 발행할 수 있습니다.
            <br />
            <br />
            * 특정한 용품이 없으신 경우 용도에 맞는 물품으로 추천하여 발행해 드리겠습니다.
            <br />
            <br />
          </Text>
          <ApplyButton onClick={() => test()}>
            견적 신청 완료하기
          </ApplyButton>
        </PCContainer>
        {/**-------------------이 밑은 tv관련---------------------- */}
        <TVContainer select={select}>
          <Question>수량 *</Question>
          <Input type="number" name="count" onChange={(e) => tvApplyHandler(e)}/>
          <Question>화면 크기 *</Question>
          <RadioInput type="radio" id="30인치 이상" name="inch" onChange={(e) => tvApplyHandler(e)}/>{" "}
          <label htmlFor="30인치 이상" >30인치 이상</label>
          <br />
          <RadioInput type="radio" id="40인치 이상" name="inch" onChange={(e) => tvApplyHandler(e)}/>{" "}
          <label htmlFor="40인치 이상">40인치 이상</label>
          <br />
          <RadioInput type="radio" id="50인치 이상" name="inch" onChange={(e) => tvApplyHandler(e)}/>{" "}
          <label htmlFor="50인치 이상" >50인치 이상</label>
          <br />
          <RadioInput type="radio" id="60인치 이상" name="inch" onChange={(e) => tvApplyHandler(e)}/>{" "}
          <label htmlFor="60인치 이상" >60인치 이상</label>
          <br />
          <RadioInput type="radio" id="70인치 이상" name="inch" onChange={(e) => tvApplyHandler(e)}/>{" "}
          <label htmlFor="70인치 이상" >70인치 이상</label>
          <br />
          <RadioInput type="radio" id="80인치 이상" name="inch" onChange={(e) => tvApplyHandler(e)}/>{" "}
          <label htmlFor="80인치 이상" >80인치 이상</label>
          <br />
          <RadioInput type="radio" id="90인치 이상" name="inch" onChange={(e) => tvApplyHandler(e)}/>{" "}
          <label htmlFor="90인치 이상" >90인치 이상</label>
          <br />
          <Question>설치 방식 *</Question>
          <RadioInput type="radio" id="기본" name="install" onChange={(e) => tvApplyHandler(e)}/>{" "}
          <label htmlFor="기본" >기본 - 탁자 위 거치</label>
          <br />
          <RadioInput type="radio" id="이동형" name="install" onChange={(e) => tvApplyHandler(e)}/>{" "}
          <label htmlFor="이동형" >스탠드형 거치대 필요(이동형)</label>
          <br />
          <RadioInput type="radio" id="벽걸이" name="install" onChange={(e) => tvApplyHandler(e)}/>{" "}
          <label htmlFor="벽걸이" >벽걸이 설치</label>
          <br />
          <Question>어떻게 사용하시나요? *</Question>
          <RadioInput type="radio" id="USB" name="use" onChange={(e) => tvApplyHandler(e)}/>{" "}
          <label htmlFor="USB" >USB 연결</label>
          <br />
          <RadioInput type="radio" id="HDMI" name="use" onChange={(e) => tvApplyHandler(e)}/>{" "}
          <label htmlFor="HDMI" >HDMI 연결</label>
          <br />
          <Question>보신 제품이 있다면 링크를 첨부해 주세요.</Question>
          <TextArea name="link" onChange={(e) => tvApplyHandler(e)}/>
          <br />
          <Question>어떤 행사인가요? *</Question>
          <Input name="event" onChange={(e) => tvApplyHandler(e)}/>
          <Question>
            용도를 자세히 알려주시면 견적서 발행에 도움이 됩니다 :)
          </Question>
          <TextArea name="description" onChange={(e) => tvApplyHandler(e)}/>
          <Question>설치 날짜와 시간은 언제인가요? *</Question>
          <Input name="installDate" onChange={(e) => tvApplyHandler(e)}/>
          <Question>회수 날짜와 시간은 언제인가요? *</Question>
          <Input name="colletDate" onChange={(e) => tvApplyHandler(e)}/>
          <Question>
            배송 받을 주소는 어디인가요? 실제 설치 장소를 입력해주세요.
          </Question>
          <TextArea name="address" onChange={(e) => tvApplyHandler(e)}/>
          <Question>설치가 필요한가요? *</Question>
          <RadioInput type="radio" id="014-1" name="installCheck" />{" "}
          <label htmlFor="014-2" onChange={(e) => tvApplyHandler(e)}>네</label>
          <br />
          <RadioInput type="radio" id="015-0" name="installCheck" />{" "}
          <label htmlFor="015-0" onChange={(e) => tvApplyHandler(e)}>아니오</label>
          <br />
          <Question>엘리베이터를 사용할 수 있나요? *</Question>
          <RadioInput type="radio" id="016-1" name="elevator" />{" "}
          <label htmlFor="016-1" onChange={(e) => tvApplyHandler(e)}>네</label>
          <br />
          <RadioInput type="radio" id="017-0" name="elevator" />{" "}
          <label htmlFor="017-0" onChange={(e) => tvApplyHandler(e)}>아니오</label>
          <br />
          <Question>담당자 성함 *</Question>
          <Input name="name"  onChange={(e) => tvApplyHandler(e)}/>
          <Question>담당자 연락처 *</Question>
          <Input name="phone" onChange={(e) => tvApplyHandler(e)}/>
          <Question>담당자 이메일 계정</Question>
          <Input name="email" onChange={(e) => tvApplyHandler(e)}/>
          <Question>세금계산서 발행 이메일 계정</Question>
          <Input name="tax" onChange={(e) => tvApplyHandler(e)}/>
          <Text>
            작성해 주셔서 감사합니다.
            <br />
            <br />
            기다려 주시면 확인 후 이메일로 견적서를 발행해 드리겠습니다.
            <br />
            <br />
            * 비슷한 사양으로 견적서가 발행될 수 있습니다.
            <br />
            <br />
            * 특정한 사양이 없으신 경우 용도를 상세히 알려주시면 추천하여 발행해
            드리겠습니다.
            <br />
            <br />
          </Text>
          <ApplyButton onClick={()=> tvRequestCheck()}>견적 신청 완료하기</ApplyButton>
        </TVContainer>
      </Container>
    );
  };

  const ItemList = styled.div`
  display: inline-block;
  padding-right: 8px;
  padding-left: 8px;
  line-height: 30px;
  border-radius: 10px;
  height: 30px;
  background-color : #2ecde7;
  color: white;
  font-size: 14px;
  `
  
  const Container = styled.div`
    margin: 0 auto;
    padding-top: 130px;
    padding-bottom: 130px;
    width: 100%;
    max-width: 700px;
  `;
  
  const Title = styled.div`
    margin-bottom: 60px;
    font-size: 40px;
    font-weight: 700;
  `;
  
  const Question = styled.div`
    margin-top: 30px;
    margin-bottom: 15px;
    font-size: 20px;
    font-weight: 600;
  `;
  const RadioInput = styled.input`
    margin-bottom: 15px;
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
  
  const PCContainer = styled.form`
    display: ${(props) => {
      return props.select == "pc" ? "block" : "none";
    }};
  `;
  const TVContainer = styled.div`
    display: ${(props) => {
      return props.select == "tv" ? "block" : "none";
    }};
  `;
  const TextArea = styled.textarea`
    margin-top: 5px;
    padding-left: 10px;
    padding-right: 10px;
    width: 620px;
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
  const Text = styled.div`
    margin-top: 40px;
    font-size: 18px;
  `;
  
  const ApplyButton = styled.div`
    margin-top: 30px;
    width: 153px;
    height: 30px;
    color: white;
    background-color: black;
    border-radius: 5px;
    text-align: center;
    line-height: 30px;\
    cursor: pointer;
  `;



export default EventApplyPage