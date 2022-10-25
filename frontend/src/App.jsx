import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";

import {
  MainPage,
  ZeroRentalPage,
  GoodsDetailPage,
  EventPage,
  BrandPage,
  Electronics,
  Login,
  MyPage,
  SignUpPage,
  PartnersSignUpPage1,
  PartnersSignUpPage2,
  PartnersSignUpPage3,
  ProductViewPage,
  PartnersManagementPage,
  ReviewMangementPage,
  QuestionManagementPage,
  EstimateManagement,
  EventApplyPage,
  RentalPage,
  ElectronicsApplyPage,
  TVManagementPage,
  WelfarePage,
  PurcahsePage,
  WelfareDetailPage,
  BasketPage,
  EventApplyMangementPage,
  SearchPage,
  ReviewPage,
  AnswerPage,
} from "./pages";
import Footer from "./elements/Footer";
import { HeaderBar } from "./elements";
import { SideBar } from "./components";
import PartnersPage from "./pages/PartnersPage";
import { useLocation } from "react-router-dom";
import ProductRegisterPage from "./pages/ProductRegisterPage";


const GlobalStyle = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/ 
v2.0 | 20110126
License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
margin: 0;
padding: 0;
border: 0;
font-size: 100%;
font-family: Hiragino Sans;
font: inherit;
vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
display: block;
}
body {
line-height: 1;
}
ol, ul {
list-style: none;
}
blockquote, q {
quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
content: '';
content: none;
}
table {
border-collapse: collapse;
border-spacing: 0;
}
 
 
`;

function RouteComponent() {
  const locaition = useLocation();
  const [isLogin, setIsLogin] = useState();
  const [sideBarActive, setSideBarActive] = useState(false);
  useEffect(() => {
    setIsLogin(document.cookie);
  }, [locaition]);
  return (
    <>
          <HeaderBar
          sideBarActive={sideBarActive}
          setSideBarActive={setSideBarActive}
        />
        <SideBar
          sideBarActive={sideBarActive}
          setSideBarActive={setSideBarActive}
          setIsLogin={setIsLogin}
          isLogin={isLogin}
        />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/zerorental" element={<ZeroRentalPage />} />
        <Route path="/detail/*" element={<GoodsDetailPage />} />
        <Route path="/event" element={<EventPage />} />
        <Route path="/brand" element={<BrandPage />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route
          path="/mypage"
          element={isLogin ? <MyPage /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/partners_signup1" element={<PartnersSignUpPage1 />} />
        <Route path="/partners_signup2" element={<PartnersSignUpPage2 />} />
        <Route path="/partners_signup3" element={<PartnersSignUpPage3 />} />
        <Route path="/product_view" element={<ProductViewPage />} />
        <Route path="/product_register" element={<ProductRegisterPage />} />
        <Route path="/partners_management" element={<PartnersManagementPage />} />
        <Route path="/review_management" element={<ReviewMangementPage />} />
        <Route path="/question_management" element={<QuestionManagementPage />} />
        <Route path="/event_apply" element={<EventApplyPage />} />
        <Route path="/rental/*" element={<RentalPage />} />
        <Route path="/electronics_apply" element={<ElectronicsApplyPage />} />
        <Route path="/estimate_management" element={<EstimateManagement />} />
        <Route path="/tv_management" element={<TVManagementPage />} />
        <Route path="/welfare" element={<WelfarePage />} />
        <Route path="/purchase/*" element={<PurcahsePage />} />
        <Route path="/purchase_detail/*" element={<WelfareDetailPage />} />
        <Route path="/basket/*" element={<BasketPage />} />
        <Route path="/event_apply_management" element={<EventApplyMangementPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/answer" element={<AnswerPage />} />
        

        <Route path="*" element={<MainPage />} />
        
      </Routes>
    </>
  );
}

function App() {

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>

        <RouteComponent />

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
