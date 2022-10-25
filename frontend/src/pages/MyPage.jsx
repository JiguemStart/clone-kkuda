import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { macbook } from "../assets";

const Mypage = () => {
  const [userInfo, setUserInfo] = useState([]);
  const navigate = useNavigate();
  const [list, setList] = useState();
  const [brand, setBrand] = useState(0);
  const [productName, setProductName] = useState(0);
  const [active, setActive] = useState(false);

  const id = document.cookie.split(" ")[1].substring(3);
  /** 접속한 유저 정보를 불러와서 세팅하는 함수 */
  const userInfoRequest = async () => {
    try {
      const res = await axios
        .get(`http://localhost:8080/member/view-info?id=${id}`)
        .then((res) => {
          setUserInfo(res.data);
          console.log(userInfo.dateOfBirth);
          console.log(res.data.parterAutho == 0);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const logOut = () => {
    console.log("되는거여 ?");
    const cookies = document.cookie.split("; ");
    const expiration = "Sat, 01 Jan 1972 00:00:00 GMT";
    cookies.forEach((i) => {
      document.cookie = i.split("=")[0] + "=; expires=" + expiration;
    });
    navigate("/main");
  };

  /** 주문 목록 */
  const purchaseList = async () => {
    try {
      const res = await axios
        .get(`http://localhost:8080/rental/view-list?memberId=${id}`)
        .then((res) => {
          console.log(res.data);
          setList(res.data);
          res.data.forEach((i) => {
            productRequset(i.productId);
          });
        });
    } catch (error) {
      console.log(error);
    }
  };

  /**상품 이름 api */
  const productRequset = async (productId) => {
    try {
      const res = await axios
        .get(`http://localhost:8080/page-product/detail-page?id=${productId}`)
        .then((res) => {
          let brandArray = brand;
          let nameArray = productName;

          brand == 0
            ? (brandArray = [res.data.product.brand])
            : brandArray.push(res.data.product.brand);
          productName == 0
            ? (nameArray = [res.data.product.name])
            : nameArray.push(res.data.product.name);

          setBrand([...brandArray]);
          setProductName([...nameArray]);
          console.log(brandArray);
          console.log(res.data.product.name);
        });
    } catch (error) {
      console.log(error);
    }
  };

    /** 후기 작성 요청 */
    const reviewRequest = async () => {
      try {
        const res = await axios
          .get(`http://localhost:8080/review/register?content=asdf&memberId=1&productId=4&stars=5`)
          .then((res) => {

          });
      } catch (error) {
        console.log(error);
      }
    };

    useEffect(() => {
      userInfoRequest();
      purchaseList();
    }, []);

    useEffect(() => {
      console.log(active)
    }, [active]);

  return (
    <Container>
      <EtcListContainer>
        
        <TextTitle>주문 내역</TextTitle>
        <BoxContainer>
        <OrderContainer>
          <Img></Img>
        <Name>맥북 프로 2022 13 M2 x 2</Name>
        <OrderContainer>
        &nbsp;&nbsp;&nbsp;
        </OrderContainer>
        <Price>가격: 2,400,000원</Price>
        <Month>일시불</Month>
        <ExistMonth>결제 금액: 4,319,000원</ExistMonth>
        <ExistMonth>구매 완료</ExistMonth>
        <Detail ><button >후기 작성</button></Detail>


        </OrderContainer>
        <Day>22.10.25</Day>
        </BoxContainer>
        <br /><br />
        <BoxContainer>
        <OrderContainer>
          <Img></Img>
        <Name>맥북 프로 2022 13 M2</Name>
        <OrderContainer>
        &nbsp;&nbsp;&nbsp;
        </OrderContainer>
        <Price>가격: 100,000원/월</Price>
        <Month>렌탈 개월 : 24개월</Month>
        <ExistMonth>남은 렌탈 - 23개월</ExistMonth>
        <ExistMonth>렌탈 진행중</ExistMonth>
        <Detail ><button >후기 작성</button></Detail>
        <Detail ><button >렌탈 종료 요청</button></Detail>

        </OrderContainer>
        <Day>22.10.14</Day>
        </BoxContainer>
        <OrderList>
          {/* {list
            ? list.map((i, j) => {
                return (
                  <>
                    <List>
                      <div>{brand[j]}</div>&nbsp;&nbsp;
                      <div>{productName[j]}</div>&nbsp;&nbsp;&nbsp;&nbsp;
                      <div>
                        {i.rentalMonth == 1
                          ? "일시불"
                          : `${i.rentalMonth}개월 렌탈`}
                      </div>
                      &nbsp;&nbsp;
                      <Button onClick={(j) => setActive(j)}>후기 쓰기</Button>
                    </List>
                  </>
                );
              })
            : ""} */}
        </OrderList>
        <Review active={active}>
          <Input type="file" />
          <br />
          <TextArea /><br />
          <Button>후기 저장</Button>
        </Review>
        <TextTitle>내가 쓴 글</TextTitle>

        <WritingList></WritingList>
        <TextTitle>쿠폰 내역</TextTitle>
        <CouponList></CouponList>
        <TextTitle>적립금 내역</TextTitle>
        <ReservesList></ReservesList>
      </EtcListContainer>
      <UserInfoContainer>
        <TextTitle>회원 정보</TextTitle>
        <LogOutButton onClick={() => logOut()}>로그아웃</LogOutButton>
        <Text>이메일</Text>
        <EmailInput defaultValue={"starlightkor@gmail.com"} disabled />
        <Text>이름</Text>
        <NameInput defaultValue={"김철수"} disabled />
        <Text>등급</Text>
        {userInfo.parterAutho == 0 ? (
          <GradeInput defaultValue="일반" disabled />
        ) : (
          ""
        )}
        {userInfo.parterAutho == 1 ? (
          <GradeInput defaultValue="파트너스" disabled />
        ) : (
          ""
        )}
        {userInfo.parterAutho == 2 ? (
          <GradeInput defaultValue="관리자" disabled />
        ) : (
          ""
        )}
        <Text>휴대폰 번호</Text>
        <PhoneInputContainer>
          <PhoneInput defaultValue={"010"} disabled />
          -
          <PhoneInput defaultValue={"1234"} disabled />
          -
          <PhoneInput defaultValue={"5678"} disabled />
        </PhoneInputContainer>
        {/* <Text>우편 번호</Text>
        <ZipCodeInput defaultValue={userInfo.phoneNum} disabled /> */}
        <Text>주소</Text>
        <AddressInput1 defaultValue={"서울특별시 구로구"} disabled />
        <AddressInput2 defaultValue={"금빛 아파트 13동 1204호"} disabled />
        <Text>생년월일</Text>
        <BirthInput1
          defaultValue={"93.10.10"
          }
          disabled
        />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Text>성별</Text>
        <MaleRadio
          type="radio"
          id="0"
          name="sex"
          checked
        />
        <label htmlFor="0">남성</label>
        <FeMaleRadio
          type="radio"
          id="1"
          name="sex"
          checked={userInfo.gender == 1 ? "checked" : ""}
        />
        <label htmlFor="1">여성</label>
        <Text>마케팅 정보 수신 동의 유무</Text>
        <CheckBox
          type="radio"
          id="0"
          name="marketing"
          checked={userInfo.marketingConsent == 0 ? "checked" : ""}
        />
        <label htmlFor="0">동의</label>
        <CheckBox
          type="radio"
          id="1"
          name="marketing"
          checked={userInfo.gender == 1 ? "checked" : ""}
        />
        <label htmlFor="1">거절</label>
        <RemoveResister>탈퇴하기</RemoveResister>
      </UserInfoContainer>
    </Container>
  );
};

const DetailContainer = styled.div`
display: ${props => {
  return props.active ? "block" : "none"
}};

display: flex;
flex-wrap: wrap;
`

const Day = styled.div`
  position: absolute;
  bottom: 10;
  right: 20px;
  font-size: 14px;
  
`

const BoxContainer = styled.div`
  position: relative;
  width: 370px;
  border: 0.5px solid gray;
  border-radius: 10px;
  over-flow: hidden;
  padding-bottom: 20px;
`

const Img = styled.div`
margin-left: 10px;
width: 80px;
height: 80px;
background-image: url(${macbook});
background-repeat: no-repeat;
background-position: center;
background-size: cover;
over-flow: hidden;
`

const OrderContainer = styled.div`

  display: flex;
  flex-wrap: wrap;
`
const Name = styled.div`
  text-align: center;

  width: 200px;
  height: 80px;
  line-height: 80px;


`
const Price = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
height: 50px;
width: 180px;

`
const Month = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
height: 50px;
width: 180px;


`
const ExistMonth = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;

width: 180px;
height: 50px;

`
const Detail = styled.div`
display: ${props => {
  return props.active ? "none" : "block"
}};
display: flex;
justify-content: center;
align-items: center;
text-align: center;

width: 180px;
height: 50px;

`


const Container = styled.div`
  margin: 0 auto;
  padding-top: 130px;
  display: flex;
  max-width: 928px;
`;
const EtcListContainer = styled.div`
  width: 50%;
`;
const TextTitle = styled.div`
  margin-bottom: 10px;
  display: flex;
  height: 30px;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
`;
const OrderList = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  width: 100%;
  min-height: 244px;
`;
const List = styled.div`
  display: flex;
`;
const WritingList = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  width: 100%;
  min-height: 244px;
`;
const CouponList = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  width: 100%;
  min-height: 244px;
`;
const ReservesList = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  width: 100%;
  min-height: 244px;
`;
const ReWearingList = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  width: 100%;
  min-height: 244px;
`;
const UserInfoContainer = styled.div`
  position: relative;
  width: 50%;
  font-size: 14px;
  color: #666666;
`;
const LogOutButton = styled.div`
  margin-top: 50px;
  text-align: right;
`;
const Text = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
`;
const EmailInput = styled.input`
  padding-left: 15px;
  width: 100%;
  height: 40px;
  box-sizing: border-box;
`;
const NameInput = styled.input`
  padding-left: 15px;
  width: 100%;
  height: 40px;
  box-sizing: border-box;
`;
const GradeInput = styled.input`
  padding-left: 15px;
  width: 100%;
  height: 40px;
  box-sizing: border-box;
`;
const PhoneInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const PhoneInput = styled.input`
  display: block;
  padding-left: 15px;
  width: 30%;
  height: 40px;
  box-sizing: border-box;
`;
const ZipCodeInput = styled.input`
  padding-left: 15px;
  width: 100%;
  height: 40px;
  box-sizing: border-box;
`;
const AddressInput1 = styled.input`
  margin-bottom: 10px;
  padding-left: 15px;
  width: 100%;
  height: 40px;
  box-sizing: border-box;
`;
const AddressInput2 = styled.input`
  padding-left: 15px;
  width: 100%;
  height: 40px;
  box-sizing: border-box;
`;
const BirthInput1 = styled.input`
  padding-left: 15px;
  width: 25%;
  height: 40px;
  box-sizing: border-box;
`;
const BirthInput2 = styled.input`
  padding-left: 15px;
  width: 15%;
  height: 40px;
  box-sizing: border-box;
`;
const BirthInput3 = styled.input`
  padding-left: 15px;
  width: 15%;
  height: 40px;
  box-sizing: border-box;
`;
const MaleRadio = styled.input`
  margin-left: 20px;
  margin-right: 10px;
`;
const FeMaleRadio = styled.input`
  margin-right: 10px;
  margin-left: 20px;
  margin-bottom: 15px;
`;
const CheckBox = styled.input`
  margin-right: 10px;
  margin-left: 20px;
`;
const RemoveResister = styled.div`
  margin: 0 auto;
  margin-top: 40px;
  width: 100px;
`;
const Button = styled.button``;
const Review = styled.div`
  display: ${props => {
    return props.active ? "block" : "none"
  }};
`;
const Input = styled.input``;
const TextArea = styled.textarea`
  width: 300px;
  height: 150px;
`;

export default Mypage;
