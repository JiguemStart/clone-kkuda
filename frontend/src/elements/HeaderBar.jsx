import React from "react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import {
  menu_icon,
  kkuda_logo,
  search_icon,
  person_icon,
  basket_icon,
} from "../assets";

const HeaderBar = ({sideBarActive, setSideBarActive}) => {
  const [active, setActive] = useState(false)
  const[path, setPath] = useState("/login");
  const checkIsLogin = () => {
    console.log("도ㅣ고잇냐")
    if(JSON.parse(sessionStorage.getItem('isLogin')) == "true"){
      setPath("/login")
    }
    else {
      setPath("/signUp")
    }
  }

  useEffect(() => {
    console.log(location.pathname.split("/")[1])
  }, [sideBarActive])
  return (
    <Container>
      <Content>
        <MenuButton src={menu_icon} onClick={() => setSideBarActive(!sideBarActive)}/>
        <Link to="/" style={{ textDecoration: "none" }}>
        <Logo src={kkuda_logo} />
        </Link>
        <SearchInput active={active}/>
        <SearchButton src={search_icon} onClick={() => setActive(true)} active={active}/>
        <Link to="/search" style={{ textDecoration: "none" }}>
        <SearchButton2 src={search_icon} onClick={() => setActive(false)} active={active}/>
        </Link>
        <Link to="/mypage" style={{ textDecoration: "none" }}>
        <ProfileButton src={person_icon} />
        </Link>
        <Link to="/basket" style={{ textDecoration: "none" }}>
        <BasketButton src={basket_icon} />
        <BasketCount></BasketCount>
        </Link>
      </Content>
    </Container>
  );
};

const SearchInput = styled.input`
  display: ${props => {
    return props.active ? "block" : "none"
  }};
  position: absolute;
  right: 130px;
  border : none;
  border-bottom: 1px solid black;
  &:focus {outline: none;}
`

const Container = styled.header`
  position: fixed;
  z-index: 3;
  display: flex;
  width: 100%;
  height: 70px;
  align-items: center;
  background-color: white;
`;
const Content = styled.div`
  display: flex;
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  height: 40px;
  align-items: center;
`;
const MenuButton = styled.img`
  position: absolute;
  left: 12px;
  width: 25px;
  height: 25px;
`;
const Logo = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 80px;
  height: 37.69px;
`;
const SearchButton = styled.img`
display: ${props => {
  return props.active ? "none" : "block"
}};
  position: absolute;
  right: 93px;
  width: 28px;
  height: 28px;
`;
const SearchButton2 = styled.img`
display: ${props => {
  return props.active ? "block" : "none"
}};
  position: absolute;
  right: 93px;
  width: 28px;
  height: 28px;
  top: 5px;
`;
const ProfileButton = styled.img`
  position: absolute;
  top: 2px;
  right: 60px;
  width: 33px;
  height: 33px;
`;
const BasketButton = styled.img`
  position: absolute;
  right: 30px;
  widht: 27px;
  height: 27px;
  top: 6px;
`;
const BasketCount = styled.div`
  position: absolute;
  right: -7px;
  width: 30px;
  height: 30px;
  line-height: 35px;
  font-size: 20px;
  top: 3px;
`;

export default HeaderBar;
