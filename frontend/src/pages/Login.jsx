import React, { useState } from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { response } from 'msw'

const Login = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const loginRequest = async () => {
    try {
      const res = await axios
        .post(
          `http://localhost:8080/member/login?memberId=${id}&memberPw=${pw}`
        )
        .then((res) => {
          if(res.data.result == true) {
          document.cookie = `memberId=${id}`
          document.cookie = `id=${res.data.id}`
          }
          navigate("/main");
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <LoginText>로그인</LoginText>
      <Text>이메일</Text>
      <EmailInput onChange={(e) => setId(e.target.value)}/>
      <Text>비밀번호</Text>
      <PasswordInput type="password" onChange={(e) => setPw(e.target.value)}/>
      <ForgetPassWordText>비밀번호를 잊으셨나요?</ForgetPassWordText>
      <LoginButton onClick={() =>  loginRequest()}>로그인하기</LoginButton>
      <Link to="/signUp" style={{ textDecoration: "none" }}>
      <SignUpButton>회원가입</SignUpButton>
      </Link>
    </Container>
  )
}

const Container = styled.div`
  margin: 0 auto;
  padding-top: 130px;
  width: 400px;
`
const LoginText = styled.div`
  font-size: 20px;
`
const Text = styled.div`
  margin-top: 40px;
  font-size: 14px;
  color: #4f4f4f;
`
const EmailInput = styled.input`
  margin-top: 15px;
  padding: 10px;
  width: 400px;
  height: 45px;
  box-sizing: border-box;
  border: 1px solid #ececec;
`
const PasswordInput = styled.input`
  margin-top: 15px;
  padding: 10px;
  width: 400px;
  height: 45px;
  box-sizing: border-box;
  border: 1px solid #ececec;
`
const ForgetPassWordText = styled.div`
  margin: 0 auto;
  margin-top: 30px;
  width: 300px;
  text-align: center;

`
const LoginButton = styled.div`
  margin: 0 auto;
  margin-top: 30px;
  width: 240px;
  height: 54px;
  box-sizing: border-box;
  text-align: center;
  line-height: 54px;
  border-radius: 100px;
  background-color: #c7e8f2;
  cursor: pointer;
`
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
`


export default Login