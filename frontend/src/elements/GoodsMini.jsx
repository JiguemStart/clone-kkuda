import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const GoodsMini = (data, order) => {
  useEffect(()=> {
    // console.log(data.order)
    console.log(data.data[data.order])
  }, [])

  return (
    <Container>
  <Link to={`/purchase_detail/1}` } style={{ textDecoration: "none" }}>
      <Image />
      <GoodsName>
       
      </GoodsName>
      </Link>
      <Brand></Brand>
      <Price>원</Price>
    </Container>
  )
}

const Container = styled.div`
  margin: 0 auto;
  margin-bottom: 40px;
  width: 17.52vw;
  max-width: 278px;
`;
const Image = styled.div`
  width: 17.52vw;
  max-width: 223px;
  height: 15.72vw;
  max-height: 223px;
  border: 0.5px solid #e6e6e6;
  border-radius: 10px;
  box-sizing: border-box;
`;
const GoodsName = styled.div`
  margin-top: 19.2px;
  height: 48px;
  font-size: 16px;
`;
const Brand = styled.div`
  margin-top: 5.6px;
  font-size: 14px;
`;
const Price = styled.div`
  margin-top: 8px;
  font-size: 16px;
`;

export default GoodsMini