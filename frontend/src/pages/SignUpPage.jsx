import React, { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [userInfo, setUserInfo] = useState([
    {
      address: "", //주소
      SocialNumberFront: "",
      SocialNumberBack: "",
      email: "",
      gender: "",
      marketingConsent: "",
      memberId: "",
      memberPw: "",
      name: "",
      // parterAutho: "",
      phoneNum: "",
      // reserves: "",
    },
  ]);
  const [passwordCheckValue, setPasswordCheckValue] = useState(0);
  const navigate = useNavigate();
  const [idCheckValue, setIdCheckValue] = useState(0);

  const setSignUpInfo = (e) => {
    let array = userInfo;
    switch (e.target.name) {
      case "id":
        array[0].memberId = e.target.value;
        setIdCheckValue(0);
        setUserInfo([...array]);
        break;
      case "password":
        array[0].memberPw = e.target.value;
        setUserInfo([...array]);
        break;
      case "passwordCheck":
        if (userInfo[0].memberPw == e.target.value) {
          setPasswordCheckValue(1);
        } else if (e.target.value.length == 0) {
          setPasswordCheckValue(0);
        } else {
          setPasswordCheckValue(2);
        }
        break;
      case "email":
        array[0].email = e.target.value;
        setUserInfo([...array]);
        break;
      case "phoneNumber":
        array[0].phoneNum = e.target.value;
        setUserInfo([...array]);
        break;
      case "name":
        array[0].name = e.target.value;
        setUserInfo([...array]);
        break;
      // case "zipCode":
      //   array[0].email = e.target.value;
      //   setUserInfo([...array]);
      //   break;
      case "address":
        array[0].address = e.target.value;
        setUserInfo([...array]);
        break;
      case "socialNumberFront":
        array[0].SocialNumberFront = e.target.value;
        setUserInfo([...array]);
        break;
      case "socialNumberBack":
        array[0].SocialNumberBack = e.target.value;
        setUserInfo([...array]);
        break;
      case "gender":
        array[0].gender = e.target.id;
        setUserInfo([...array]);
        break;
      case "marketing":
        array[0].marketingConsent = e.target.id;
        setUserInfo([...array]);
        break;
      default:
        break;
    }
  };

  const signUpRequest = async () => {
    try {
      const res = await axios
        .post("http://localhost:8080/member/register", {
          address: userInfo[0].address,
          dateOfBirth:
            userInfo[0].SocialNumberFront + userInfo[0].SocialNumberBack,
          email: userInfo[0].email,
          gender: userInfo[0].gender,
          marketingConsent: 0,
          memberId: userInfo[0].memberId,
          memberPw: userInfo[0].memberPw,
          name: userInfo[0].name,
          parterAutho: 0,
          phoneNum: userInfo[0].phoneNum,
          reserves: 0,
        })
        .then((res) => {
          console.log(res);
          loginRequest();
        });
    } catch (error) {
      console.log(error);
    }
  };

  const loginRequest = async () => {
    try {
      const res = await axios
        .post(
          `http://localhost:8080/member/login?memberId=${userInfo[0].memberId}&memberPw=${userInfo[0].memberPw}`
        )
        .then((res) => {
          console.log(res);
          document.cookie = `memberId=${userInfo[0].memberId}`;
          document.cookie = `id=${res.data.id}`
          console.log("되냐");
          navigate("/main");
        });
    } catch (error) {
      console.log(error);
    }
  };

  const signUpRequestCheck = () => {
    let full = true;
    console.log("되는거여?");
    for (let name of Object.keys(userInfo[0])) {
      console.log(name + userInfo[0][name]);
      if (userInfo[0][name].length == 0) {
        full = false;
      }
    }

    if (full == true) {
      if (idCheckValue == 1) {
        signUpRequest();
      }
      else {
        alert("아이디 중복확인을 해주세요")
      }
    } else {
      alert("빈칸을 채워주세요")
    }
  };

  const idCheck = async () => {
    try {
      const res = await axios
        .post(
          `http://localhost:8080/member/double-check?memberId=${userInfo[0].memberId}`
        )
        .then((res) => {
          if (res.data == true) {
            setIdCheckValue(1);
          } else {
            setIdCheckValue(2);
          }
        });
    } catch (error) {
      console.log("실패");
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);
  return (
    <Container>
      <LoginText>회원 가입</LoginText>
      <Text>아이디</Text>
      {idCheckValue == 0 ? "" : ""}
      {idCheckValue == 1 ? (
        <MessagePassword check={idCheckValue}>
          사용가능한 아이디입니다.
        </MessagePassword>
      ) : (
        ""
      )}
      {idCheckValue == 2 ? (
        <MessagePassword check={idCheckValue}>
          사용불가한 아이디입니다.
        </MessagePassword>
      ) : (
        " "
      )}
      <IdBox>
        <IdInput name="id" onChange={(e) => setSignUpInfo(e)} />
        <IdCheckButton onClick={() => idCheck()}>중복 확인</IdCheckButton>
      </IdBox>
      <Text>비밀번호</Text>
      <PasswordInput
        type="password"
        name="password"
        onChange={(e) => setSignUpInfo(e)}
      />
      <Text>비밀번호 확인</Text>
      {passwordCheckValue == 0 ? "" : ""}
      {passwordCheckValue == 1 ? (
        <MessagePassword check={passwordCheckValue}>
          비밀번호가 서로 같습니다
        </MessagePassword>
      ) : (
        ""
      )}
      {passwordCheckValue == 2 ? (
        <MessagePassword check={passwordCheckValue}>
          비밀번호가 서로 다릅니다
        </MessagePassword>
      ) : (
        " "
      )}
      <PasswordInput
        type="password"
        name="passwordCheck"
        onChange={(e) => setSignUpInfo(e)}
      />
      <Text>이름</Text>
      <Input name="name" onChange={(e) => setSignUpInfo(e)} />
      <Text>휴대폰 번호</Text>
      <Input
        type="number"
        name="phoneNumber"
        onChange={(e) => setSignUpInfo(e)}
      />
      <Text>우편번호</Text>
      <Input name="zipCode" onChange={(e) => setSignUpInfo(e)} />
      <Text>주소</Text>
      <Input name="address" onChange={(e) => setSignUpInfo(e)} />
      <Text>이메일</Text>
      <Input name="email" onChange={(e) => setSignUpInfo(e)} />
      <Text>주민번호</Text>
      <SocialNumberFrontInput
        name="socialNumberFront"
        onChange={(e) => setSignUpInfo(e)}
      />
      &nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;
      <SocialNumberBackInput
        type="password"
        name="socialNumberBack"
        onChange={(e) => setSignUpInfo(e)}
      />
      <Text>성별</Text>
      <MaleRadio
        type="radio"
        id="0"
        name="gender"
        onChange={(e) => setSignUpInfo(e)}
      />
      <label for="0">남성</label>
      <FeMaleRadio
        type="radio"
        id="1"
        name="gender"
        onChange={(e) => setSignUpInfo(e)}
      />
      <label for="1">여성</label>
      <Text>마케팅 정보 수신 동의</Text>
      <MaleRadio
        type="radio"
        id="1"
        name="marketing"
        onChange={(e) => setSignUpInfo(e)}
      />
      <label for="1">동의</label>
      <FeMaleRadio
        type="radio"
        id="0"
        name="marketing"
        onChange={(e) => setSignUpInfo(e)}
      />
      <label for="0">동의하지않음</label>
      <SignUpButton onClick={() => signUpRequestCheck()}>
        회원가입완료
      </SignUpButton>
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto;
  padding-top: 130px;
  width: 400px;
`;
const LoginText = styled.div`
  font-size: 20px;
`;
const Text = styled.span`
  display: inline-block;
  &:nth-of-type(9) {
    display: block;
  }
  &:nth-of-type(10) {
    display: block;
  }
  &:nth-of-type(11) {
    display: block;
  }
  margin-top: 40px;
  font-size: 14px;
  color: #4f4f4f;
`;
const IdBox = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const IdInput = styled.input`
  margin-top: 15px;
  padding: 10px;
  width: 280px;
  height: 45px;
  box-sizing: border-box;
  border: 1px solid #ececec;
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
const IdCheckButton = styled.div`
  margin-top: 15px;
  width: 100px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  border-radius: 100px;
  background-color: #c7e8f2;
  cursor: pointer;
`;
const Input = styled.input`
  margin-top: 15px;
  padding: 10px;
  width: 400px;
  height: 45px;
  box-sizing: border-box;
  border: 1px solid #ececec;
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
const PasswordInput = styled.input`
  margin-top: 15px;
  padding: 10px;
  width: 400px;
  height: 45px;
  box-sizing: border-box;
  border: 1px solid #ececec;
`;
const MessagePassword = styled.span`
  display: inline-block;
  margin-top: 40px;
  margin-left: 30px;
  font-size: 14px;
  color: ${(props) => {
    return props.check == 1 ? "blue" : "red";
  }};
  &:nth-of-type(2) {
    color: ${(props) => {
      return props.check == 1 ? "blue" : ""
    }}
  };
  &:nth-of-type(3) {
    color: ${(props) => {
      return props.check == 2 ? "blue" : ""
    }}
  };
`;
const SocialNumberFrontInput = styled.input`
  margin-top: 15px;
  padding: 10px;
  width: 180px;
  height: 45px;
  box-sizing: border-box;
  border: 1px solid #ececec;
`;
const SocialNumberBackInput = styled.input`
  margin-top: 15px;
  padding: 10px;
  width: 180px;
  height: 45px;
  box-sizing: border-box;
  border: 1px solid #ececec;
`;

const MaleRadio = styled.input`
  margin-top: 15px;
  margin-right: 10px;
`;
const FeMaleRadio = styled.input`
  margin-right: 10px;
  margin-left: 20px;
`;
const SignUpButton = styled.div`
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 70px;
  width: 240px;
  height: 54px;
  box-sizing: border-box;
  text-align: center;
  line-height: 54px;
  border-radius: 100px;
  background-color: #c7e8f2;
`;
export default SignUpPage;
