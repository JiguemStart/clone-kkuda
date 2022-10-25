import React, { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { kkuda_logo, search_icon, arrow_down, arrow_up } from "../assets";

const SideBar = ({ sideBarActive, setSideBarActive, isLogin, setIsLogin }) => {
  const [select, setSelect] = useState(true);
  const [select2, setSelect2] = useState(true)
  const [grade, setGrade] = useState(0);
  const id = document.cookie.split("id=")[1];

  const test = () => {
    const res = axios
      .get("http://localhost:8080//page-product/brand-all")
      .then((res) => {
        // console.log("통신성공");
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const gradeCheck = async () => {
    try {
      const res = await axios
        .get(`http://localhost:8080/member/view-info?id=${id}`)
        .then((res) => {
          setGrade(res.data.parterAutho);
          // console.log("등급체크");
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    gradeCheck();
  }, [isLogin]);

  // const postTest = async () => {
  //   try {
  //     const res = await axios
  //     .post("http://localhost:8080/register/product", {
  //         "brand": "hello",
  //         "name": "helloaa",
  //         "price": 0,
  //         "sales": 0,
  //         "salesType": 0,
  //         "stock": 0

  //     })
  //     .then(res => {
  //       console.log(res)
  //     });

  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // useEffect(() => {
  //   console.log("select" + select)
  // }, [select])

  useEffect(() => {
    // postTest()
    // test();
  }, []);
  return (
    <Container active={sideBarActive}>
      <SideBarContainer active={sideBarActive}>
        <LogoContainer>
          <Logo></Logo>
        </LogoContainer>
        <SearchContainer>
          <SearchIcon />
          <TextInputBox />
        </SearchContainer>
        <Link to="/zerorental" style={{ textDecoration: "none" }}>
          <MenuContainer onClick={() => setSideBarActive(!sideBarActive)}>
            0원 렌탈
          </MenuContainer>
        </Link>
        <Link to="/brand" style={{ textDecoration: "none" }}>
          <MenuContainer onClick={() => setSideBarActive(!sideBarActive)}>
            브랜드
          </MenuContainer>
        </Link>
        <DropDownMenuContainer select={select} onClick={() => setSelect(!select)}>
          <MenuContainer>
            간편 대여 견적
            <Arrow
              select={select}
              arrowDown={arrow_down}
              arrowUp={arrow_up}
              onClick={() => setSelect(!select)}
            />
          </MenuContainer>
          <Link to="/event" style={{ textDecoration: "none" }}>
            <MenuContainer onClick={() => setSideBarActive(!sideBarActive)}>
              &nbsp;&nbsp;&nbsp;&nbsp;행사용품
            </MenuContainer>
          </Link>
          <Link to="/electronics" style={{ textDecoration: "none" }}>
            <MenuContainer onClick={() => setSideBarActive(!sideBarActive)}>
              &nbsp;&nbsp;&nbsp;&nbsp;전자기기
            </MenuContainer>
          </Link>
        </DropDownMenuContainer>
        <Link to="/partners" style={{ textDecoration: "none" }}>
          <MenuContainer onClick={() => setSideBarActive(!sideBarActive)}>
            꾸다파트너스
          </MenuContainer>
        </Link>
        <Link to="/review" style={{ textDecoration: "none" }}>
        <MenuContainer onClick={() => setSideBarActive(!sideBarActive)}>
          후기
        </MenuContainer>
        </Link>
        <Link to="/welfare" style={{ textDecoration: "none" }}>
        <MenuContainer onClick={() => setSideBarActive(!sideBarActive)}>
          복지몰
        </MenuContainer>
        </Link>
        {grade == 2 ? (
  <DropDownMenuContainer2 select={select2} onClick={() => setSelect2(!select2)}>
  <MenuContainer>
    관리자 페이지
    <Arrow
      select={select2}
      arrowDown={arrow_down}
      arrowUp={arrow_up}
      onClick={() => setSelect2(!select2)}
    />
  </MenuContainer>
  <Link to="/product_view" style={{ textDecoration: "none" }}>
    <MenuContainer onClick={() => setSideBarActive(!sideBarActive)}>
      &nbsp;&nbsp;&nbsp;&nbsp;물품조회
    </MenuContainer>
  </Link>
  <Link to="/product_register" style={{ textDecoration: "none" }}>
    <MenuContainer onClick={() => setSideBarActive(!sideBarActive)}>
      &nbsp;&nbsp;&nbsp;&nbsp;물품등록
    </MenuContainer>
  </Link>
  <Link to="/partners_management" style={{ textDecoration: "none" }}>
    <MenuContainer onClick={() => setSideBarActive(!sideBarActive)}>
      &nbsp;&nbsp;&nbsp;&nbsp;파트너스관리
    </MenuContainer>
  </Link>
  <Link to="/review_management" style={{ textDecoration: "none" }}>
    <MenuContainer onClick={() => setSideBarActive(!sideBarActive)}>
      &nbsp;&nbsp;&nbsp;&nbsp;리뷰관리
    </MenuContainer>
  </Link>
  <Link to="/question_management" style={{ textDecoration: "none" }}>
    <MenuContainer onClick={() => setSideBarActive(!sideBarActive)}>
      &nbsp;&nbsp;&nbsp;&nbsp;질문관리
    </MenuContainer>
  </Link>
  <Link to="/estimate_management" style={{ textDecoration: "none" }}>
    <MenuContainer onClick={() => setSideBarActive(!sideBarActive)}>
      &nbsp;&nbsp;&nbsp;&nbsp;전자기기 견적신청관리
    </MenuContainer>
  </Link>
  <Link to="/tv_management" style={{ textDecoration: "none" }}>
    <MenuContainer onClick={() => setSideBarActive(!sideBarActive)}>
      &nbsp;&nbsp;&nbsp;&nbsp;TV 견적신청관리
    </MenuContainer>
  </Link>
  <Link to="/event_apply_management" style={{ textDecoration: "none" }}>
    <MenuContainer onClick={() => setSideBarActive(!sideBarActive)}>
      &nbsp;&nbsp;&nbsp;&nbsp;행사용품 견적신청관리
    </MenuContainer>
  </Link>
  <Link to="/tv_management" style={{ textDecoration: "none" }}>
    <MenuContainer onClick={() => setSideBarActive(!sideBarActive)}>
      &nbsp;&nbsp;&nbsp;&nbsp;후기 답변관리
    </MenuContainer>
  </Link>
  <Link to="/answer" style={{ textDecoration: "none" }}>
    <MenuContainer onClick={() => setSideBarActive(!sideBarActive)}>
      &nbsp;&nbsp;&nbsp;&nbsp;질문 답변관리
    </MenuContainer>
  </Link>
  <Link to="/tv_management" style={{ textDecoration: "none" }}>
    <MenuContainer onClick={() => setSideBarActive(!sideBarActive)}>
      &nbsp;&nbsp;&nbsp;&nbsp;회원 조회
    </MenuContainer>
  </Link>
</DropDownMenuContainer2>
        ) : (
          ""
        )}
      </SideBarContainer>
      <Background
        active={sideBarActive}
        onClick={() => setSideBarActive(!sideBarActive)}
      />
    </Container>
  );
};

const Container = styled.div`
  z-index: 3;
  position: fixed;
  display: flex;
  width: ${(props) => {
    return props.active == true ? "100vw" : "400px";
  }};
  height: 100vh;
  left: ${(props) => {
    return props.active == true ? "0px" : "-400px";
  }};
  transition: 0.5s;
`;
const SideBarContainer = styled.div`
  z-index: 3;
  position: absolute;
  padding-right: 20px;
  padding-left: 22px;
  width: 400px;
  height: 100vh;
  box-sizing: border-box;
  background-color: white;
`;
const LogoContainer = styled.div`
  padding-top: 30px;
  width: 100%;
  height: 30px;
`;
const Logo = styled.div`
  width: 48px;
  height: 22.61px;
  background-image: url(${kkuda_logo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
const SearchContainer = styled.div`
  margin-top: 5px;
  margin-bottom: 20px;
  display: flex;
  height: 38px;
  border: 1px solid black;
`;
const SearchIcon = styled.div`
  width: 38px;
  height: 38px;
  background-image: url(${search_icon});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 25px 25px;
`;
const TextInputBox = styled.input`
  border: none;
  font-size: 16px;
  &:focus {
    outline: none;
  }
`;
const MenuContainer = styled.div`
  position: relative;
  display: flex;
  height: 52px;
  align-items: center;
  font-size: 16px;
  color: #2f2f2f;
  cursor: pointer;
  &:hover {
    color: #2ecde7;
  }
`;
const Arrow = styled.div`
  position: absolute;
  right: 3px;
  width: 24px;
  height: 24px;
  background-image: url(${(props) => {
    return props.select == true ? props.arrowUp : props.arrowDown;
  }});
  background-repeat: no-rpeat;
  background-position: center;
  background-size: cover;
`;
const DropDownMenuContainer = styled.div`
  height: ${(props) => {
    return props.select == true ? "156px" : "52px";
  }};
  overflow: hidden;
`;
const DropDownMenuContainer2 = styled.div`
  height: ${(props) => {
    return props.select == true ? "708px" : "52px";
  }};
  overflow: hidden;
`;
const Background = styled.div`
  visibility: ${(props) => {
    return props.active == true ? "visible" : "hidden";
  }};
  position: fixed;
  width: 200vw;
  height: 100vh;
  opacity: 0.25;
  background-color: black;
`;

export default SideBar;
