import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CardContainer, GoodsContainer } from "../components";
import axios from "axios";

const ProdcutViewPage = () => {
  const [productList, setProductList] = useState([]);
  const [editStatus, setEditStatus] = useState([]);

  /**물품 조회 api요청 함수 */
  const productListRequest = async () => {
    try {
      const res = await axios
        .get(`http://localhost:8080/page-product/brand-all`)
        .then((res) => {
          let productArray = res.data;
          let editArray = [];

          setProductList([...productArray]);
          productArray.forEach((i) => {
            editArray.push(true);
          });
          setEditStatus([...editArray]);
        });
    } catch (error) {
      console.log(error);
    }
  };
  /**수정 버튼 관리하는 함수 */
  const editStatusHandler = (e, j) => {
    if(editStatus[j] == false) {
      editProductRequest(e, j)
    }
    let array = editStatus;
    array[j] = !array[j];
    setEditStatus([...array]);
  };
  /**input값 수정된거 감지해서 productList로 전달 */
  const editProductHandler = (e, j) => {
    let array = productList;
    switch (e.target.name) {
      case "name":
        array[j].name = e.target.value;
        break;
      case "price":
        array[j].price = e.target.value;
        break;
      case "salesType":
        array[j].salesType = e.target.value;
        break;
      case "stock":
        array[j].stock = e.target.value;
        break;
      case "brand":
        array[j].brand = e.target.value;
        break;
      default:
        break;
    }
    setProductList([...array])
  };
  /** 상품 수정된거 요청하는 api */
  const editProductRequest = async (e, j) => {
    try {
      const res = await axios
        .put(`http://localhost:8080/product/put?id=${e.target.id}`, {
          brand: productList[j].brand,
          name: productList[j].name,
          price: Number(productList[j].price),
          sales: 0,
          salesType: Number(productList[j].salesType),
          stock: Number(productList[j].stock)
        })
        .then((res) => {
          console.log("수정완료")
        });
    } catch (error) {
      console.log(error);
    }
  };

  /** 상품 삭제하는 함수 */
  const deleteProductHandler = async (e, j) => {
    try {
      const res = await axios
        .post(`http://localhost:8080/product/delete?id=${e.target.id}`)
        .then((res) => {
          location.reload();
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    productListRequest();
  }, []);

  return (
    <Container>
      <Title>물품 조회 및 수정</Title>
      <ListContainer>
        <ProductList>
          <DeleteTitleBox>삭제 버튼</DeleteTitleBox>
          <IdTitleBox>id</IdTitleBox>
          <NameTitleBox>상품명</NameTitleBox>
          <SalesTypeTitleBox>판매 종류</SalesTypeTitleBox>
          <PriceTitleBox>가격</PriceTitleBox>
          <StockTitleBox>재고량</StockTitleBox>
          <BrandTitleBox>브랜드명</BrandTitleBox>
          <EditTitleButton>수정 버튼</EditTitleButton>
        </ProductList>
        {productList.map((i, j) => {
          return (
            <ProductList>
              <DeleteBox id={i.id} onClick={(e) => deleteProductHandler(e, j)}>삭제</DeleteBox>
              <IdBox>{i.id}</IdBox>
              <NameBox
                id={i.id}
                name="name"
                defaultValue={i.name}
                disabled={editStatus[j]}
                onChange={(e) => editProductHandler(e,j)}
              />
              <SalesTypeBox
                name="salesType"
                defaultValue={i.salesType}
                disabled={editStatus[j]}
                onChange={(e) => editProductHandler(e,j)}
              />
              <PriceBox
                id={i.id}
                name="price"
                defaultValue={i.price}
                disabled={editStatus[j]}
                onChange={(e) => editProductHandler(e,j)}
              />
              <StockBox
                id={i.id}
                name="stock"
                defaultValue={i.stock}
                disabled={editStatus[j]}
                onChange={(e) => editProductHandler(e,j)}
              />
              <BrandBox
                id={i.id}
                name="brand"
                defaultValue={i.brand}
                disabled={editStatus[j]}
                onChange={(e) => editProductHandler(e,j)}
              />
              <EditButton id={i.id} onClick={(e) => editStatusHandler(e, j)}>
                <Button>
                {editStatus[j] == false ? "수정완료" : "수정하기"}
                </Button>
              </EditButton>
            </ProductList>
          );
        })}
      </ListContainer>
    </Container>
  );
};

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
const ListContainer = styled.div`
  width: 100%;
  border: 1px solid black;
`;
const ProductList = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
  border: 0.5px solid black;
`;
const DeleteTitleBox = styled.div`
  width: 7%;
  text-align: center;
  line-height: 30px;
  box-sizing: border-box;
  border-left: 0.5px solid gray;
  border-right: 0.5px solid gray;
`;
const IdTitleBox = styled.div`
  border: none;
  width: 15%;
  height: 30px;
  box-sizing: border-box;
  border-left: 0.5px solid gray;
  border-right: 0.5px solid gray;
  text-align: center;
  line-height: 30px;
`;
const NameTitleBox = styled.div`
  width: 15%;
  height: 30px;
  box-sizing: border-box;
  border-left: 0.5px solid gray;
  border-right: 0.5px solid gray;
  text-align: center;
  line-height: 30px;
`;
const SalesTypeTitleBox = styled.div`
  width: 15%;
  height: 30px;
  box-sizing: border-box;
  border-left: 0.5px solid gray;
  border-right: 0.5px solid gray;
  text-align: center;
  line-height: 30px;
`;
const PriceTitleBox = styled.div`
  width: 15%;
  height: 30px;
  box-sizing: border-box;
  border-left: 0.5px solid gray;
  border-right: 0.5px solid gray;
  text-align: center;
  line-height: 30px;
`;
const StockTitleBox = styled.div`
  width: 15%;
  height: 30px;
  box-sizing: border-box;
  border-left: 0.5px solid gray;
  border-right: 0.5px solid gray;
  text-align: center;
  line-height: 30px;
`;
const BrandTitleBox = styled.div`
  width: 15%;
  height: 30px;
  box-sizing: border-box;
  border-left: 0.5px solid gray;
  border-right: 0.5px solid gray;
  text-align: center;
  line-height: 30px;
`;
const EditTitleButton = styled.div`
  width: 15%;
  height: 30px;
  box-sizing: border-box;
  border-left: 0.5px solid gray;
  border-right: 0.5px solid gray;
  text-align: center;
  line-height: 30px;
`;
const DeleteBox = styled.div`
width: 7%;
text-align: center;
line-height: 30px;
  box-sizing: border-box;
  border-left: 0.5px solid gray;
  border-right: 0.5px solid gray;
`;
const IdBox = styled.div`
  border: none;
  width: 15%;
  height: 30px;
  box-sizing: border-box;
  border-left: 0.5px solid gray;
  border-right: 0.5px solid gray;
  text-align: center;
  line-height: 30px;
`;
const NameBox = styled.input`
  width: 15%;
  height: 30px;
  box-sizing: border-box;
  border-left: 0.5px solid gray;
  border-right: 0.5px solid gray;
  text-align: center;
  line-height: 30px;
`;
const SalesTypeBox = styled.input`
  width: 15%;
  height: 30px;
  box-sizing: border-box;
  border-left: 0.5px solid gray;
  border-right: 0.5px solid gray;
  text-align: center;
  line-height: 30px;
`;
const PriceBox = styled.input`
  width: 15%;
  height: 30px;
  box-sizing: border-box;
  border-left: 0.5px solid gray;
  border-right: 0.5px solid gray;
  text-align: center;
  line-height: 30px;
`;
const StockBox = styled.input`
  width: 15%;
  height: 30px;
  box-sizing: border-box;
  border-left: 0.5px solid gray;
  border-right: 0.5px solid gray;
  text-align: center;
  line-height: 30px;
`;
const BrandBox = styled.input`
  width: 15%;
  height: 30px;
  box-sizing: border-box;
  border-left: 0.5px solid gray;
  border-right: 0.5px solid gray;
  text-align: center;
  line-height: 30px;
`;
const EditButton = styled.div`
  width: 15%;
  height: 30px;
  box-sizing: border-box;
  border-left: 0.5px solid gray;
  border-right: 0.5px solid gray;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
`;

const Button =styled.button`

`
export default ProdcutViewPage;
