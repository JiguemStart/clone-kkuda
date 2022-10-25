import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ProductRegisterPage = () => {
  const [productInfo, setProductInfo] = useState([
    {
      brand: "",
      name: "",
      price: 0,
      salesType: 0,
      stock: 0,
    },
  ]);
  const [file, setFile] = useState();


  /**상품등록 요청하는 함수 */
  const productRegisterRequest = async () => {
    const formData = new FormData()
    formData.append('file', file)
    console.log("아래폼데이터")
    for (let key of formData.keys()) {
    console.log(formData.get(key))
    }
    try {
      const res = await axios
        .post(`http://localhost:8080/product/register?brand=${productInfo[0].brand}&name=${productInfo[0].name}&price=${productInfo[0].price}&sales=0&salesType=${productInfo[0].salesType}&stock=${productInfo[0].stock}`, formData,
        {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }

        )
        .then((res) => {
          let array = productInfo
          console.log(res);
          for (let name of Object.keys(array[0])) {
            array[0][name] = ""
          }
          setProductInfo([...array])
          alert("물품 등록이 완료되었습니다.");
          location.reload()
        });
    } catch (error) {
      console.log(error);
    }
  };

  /**상품을 상태값에 저장하는 함수 */
  const productInfoHandler = (e) => {
    let array = productInfo;
    switch (e.target.name) {
      case "brand":
        array[0].brand = e.target.value;
        break;
      case "name":
        array[0].name = e.target.value;
        break;
      case "price":
        array[0].price = Number(e.target.value);
        break;
      case "stock":
        array[0].stock = Number(e.target.value);
        break;
        case "salesType":
          array[0].salesType = Number(e.target.id);
          break;
          case "image":
            setFile(e.target.files[0])
            break;
      default:
        break;
    }
    setProductInfo([...array]);
  };
  /**입력값 비어있는지 검사 후 api호출하는 함수 */
  const inputCheck = () => {
    let full = true;
    for (let name of Object.keys(productInfo[0])) {
      console.log(name + productInfo[0][name]);
      if (productInfo[0][name].length == 0 || productInfo[0][name] == 0) {
        full = false;
      }
    }

    if (full == true) {
      productRegisterRequest();
    } else {
      alert("빈칸을 채워주세요");
    }
    console.log(productInfo[0]);
  };

  const test = () => {
    location.reload()
  };

  useEffect(() => {
    console.log(file)
  }, 
  
  [file]);

  return (
    <Container>
      <Title>물품등록</Title>
      <ListTitle>브랜드 이름</ListTitle>
      <Input
        name="brand"
        onChange={(e) => productInfoHandler(e)}
      />
      <ListTitle>상품명</ListTitle>
      <Input
        name="name"
        onChange={(e) => productInfoHandler(e)}
      />
      <ListTitle>이미지</ListTitle>
      <Input
      type="file"
        name="image"
        onChange={(e) => productInfoHandler(e)}
      />
      <ListTitle>가격</ListTitle>
      <Input
        type="number"
        name="price"
        onChange={(e) => productInfoHandler(e)}
      />
      <ListTitle>판매 진행</ListTitle>
      <RadioInput

        id="1"
        type="radio"
        name="salesType"
        onChange={(e) => productInfoHandler(e)}
      />
      <label htmlFor="1">판매 시작</label>
      <RadioInput

        id="2"
        type="radio"
        name="salesType"
        onChange={(e) => productInfoHandler(e)}
      />
      <label htmlFor="2">판매 보류</label>
      <ListTitle>재고량</ListTitle>
      <Input
        type="number"
        name="stock"
        onChange={(e) => productInfoHandler(e)}
      />
      <ApplyButton onClick={() => inputCheck()}>물품 등록</ApplyButton>
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto;
  padding-top: 100px;
  width: 840px;
`;
const Title = styled.div`
  margin-bottom: 50px;
  font-size: 32px;
  font-weight: 600;
`;
const ListTitle = styled.div`
  margin-left: 20px;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 600;
`;
const Input = styled.input`
  margin-bottom: 15px;
  margin-left: 10px;
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
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
const RadioInput = styled.input`
  margin-right: 10px;
  margin-left: 60px;
  margin-bottom: 15px;
`;
const ApplyButton = styled.div`
  margin: 0 auto;
  margin-top: 70px;
  margin-bottom: 80px;
  width: 100px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  border-radius: 100px;
  background-color: #2ecde7;
  color: white;
  cursor: pointer;
`;

export default ProductRegisterPage;
