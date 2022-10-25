import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { ADCard, BigCard, Line } from "../elements";
import {
  NavCircleContainer,
  CardContainer,
  SideBar,
  GoodsSwiperContainer,
} from "../components";
import {
  card_apple_barnd,
  card_benQ,
  card_life,
  card_samsung,
} from "../assets";
import axios from "axios";

const MainPage = () => {
  const [popularList, setPopularList] = useState();
  const [ipad, setIpad] = useState();
  const [macbook, setMacbook] = useState();
  const [samsungNotebook, setSamsungNotebook] = useState();
  const [samsungpc, setSamsungpc] = useState();
  const [benQ, setBenQ] = useState();
  /**메인페이지 상품 api요청 함수 */
  const productListRequest = async () => {
    try {
      const res = await axios
        .get(`http://localhost:8080/page-product/main-page`)
        .then((res) => {
          console.log(res.data);
          let array1 = res.data.popular;
          setPopularList([...array1]);
          let array2 = res.data.ipad;
          setIpad([...array2]);
          let array3 = res.data.macbook;
          setMacbook([...array3]);
          let array4 = res.data.samsung_pc;
          setSamsungpc([...array4]);
          let array5 = res.data.benQ;
          setBenQ([...array5]);
          let array6 = res.data.samsung_notebook;
          setSamsungNotebook([...array6]);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    productListRequest();
    window.scrollTo(0, 0);
  }, []);



  return (
    <>
      <ADCard />
      <NavCircleContainer />
      <Line />
      <GoodsSwiperContainer text={"인기가 많아요"} popularList={popularList} />
      <BigCard img={card_apple_barnd} color={"#eae8fa"} />
      <GoodsSwiperContainer text={"에어부터 프로까지"} popularList={ipad} />
      <GoodsSwiperContainer text={"NEW 맥북"} popularList={macbook} />
      <CardContainer />
      <BigCard img={card_samsung} color={"#e8f1f9"} />
      <GoodsSwiperContainer
        text={"갤럭시북으로 가벼움을"}
        popularList={samsungNotebook}
      />
      <GoodsSwiperContainer text={"삼성 가성비 PC"} popularList={samsungpc} />
      <BigCard img={card_life} color={"#e2edea"} />
      <GoodsSwiperContainer
        text={"프리미엄 생활가전"}
        popularList={popularList}
      />
      <BigCard img={card_benQ} color={"#faf5e9"} />
      <GoodsSwiperContainer
        text={"게임도 업무도 고해상도 모니터"}
        popularList={benQ}
      />
    </>
  );
};

export default MainPage;
