import React from 'react'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { SmallCard } from '../elements';
import { card_ai_rental, card_moniter, card_free_rental } from '../assets';


const CardSwiper = () => {
  const [count, setCount] = useState(0);
  const [subCount, setSubCount] = useState(0);

  useEffect(() => {
    if (count == 3) {
      setCount(0)
    }
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 2000);

    return () => clearInterval(timer);
  }, [count]);

  useEffect(() => {
    if (subCount == 3) {
      setSubCount(0)
    }
    const reset = setInterval(() => {
      setSubCount((prev) => prev + 0.5);
    }, 1000);

    return () => clearInterval(reset);
  }, [subCount]);



  return (
    <Container>
      <Swap1 count={count} subCount={subCount}><SmallCard img={card_ai_rental}></SmallCard></Swap1>
      <Swap2 count={count} subCount={subCount}><SmallCard img={card_free_rental}></SmallCard></Swap2>
      <Swap3 count={count} subCount={subCount}><SmallCard img={card_moniter}></SmallCard></Swap3>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 94vw;
  height: 30vw;
  max-width: 1168px;
  overflow: hidden;
`
const Swap1 = styled.div`
position: absolute;
width: 45vw;
max-width: 278px;
transition: 1s;
left: ${props => {
  return props.count == 0 ? "0%" : ""
}};
left: ${props => {
  return props.count == 1 ? "-50%" : ""
}};
left: ${props => {
  return props.count == 2 ? "50%" : ""
}};
left: ${props => {
  return props.subCount == 1.5 ? "100%" : ""
}};
visibility: ${props => {
  return props.subCount >= 1 && props.subCount < 2  ? "hidden" : "visible"
}};


`
const Swap2 = styled.div`
position: absolute;
width: 45vw;
max-width: 278px;
transition: 1s;
left: ${props => {
  return props.count == 0 ? "50%" : ""
}};
left: ${props => {
  return props.count == 1 ? "0%" : ""
}};
left: ${props => {
  return props.count == 2 ? "-50%" : ""
}};
left: ${props => {
  return props.subCount == 2.5 ? "100%" : ""
}};
visibility: ${props => {
  return props.subCount >= 2 && props.subCount < 3  ? "hidden" : "visible"
}};
`
const Swap3 = styled.div`
position: absolute;
width: 21.72vw;
max-width: 278px;
transition: 1s;
left: ${props => {
  return props.count == 0 ? "-50%" : ""
}};
left: ${props => {
  return props.count == 1 ? "50%" : ""
}};
left: ${props => {
  return props.count == 2 ? "0%" : ""
}};
left: ${props => {
  return props.subCount == 0.5 ? "100%" : ""
}};
visibility: ${props => {
  return props.subCount >= 0 && props.subCount < 1  ? "hidden" : "visible"
}};

`

export default CardSwiper