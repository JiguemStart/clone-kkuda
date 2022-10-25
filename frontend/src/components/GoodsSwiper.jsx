import React from 'react'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { gram, i_pad, LG_sinebim, macbook, samsung_galaxy } from '../assets'

import { Goods } from '../elements'

const GoodsSwiper = ({popularList}) => {
  const [count, setCount] = useState(0);
  const [subCount, setSubCount] = useState(0);

  useEffect(() => {
    if (count == 5) {
      setCount(0)
    }
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 2000);

    return () => clearInterval(timer);
  }, [count]);

  useEffect(() => {
    if (subCount == 5) {
      setSubCount(0)
    }
    const reset = setInterval(() => {
      setSubCount((prev) => prev + 0.5);
    }, 1000);

    return () => clearInterval(reset);
  }, [subCount]);

  useEffect(() => {
    // console.log("되냐")
    console.log(String(typeof(popularList)))
  }, [popularList])


  return (
    <Container>
      <Swap1 count={count} subCount={subCount}> {String(typeof(popularList)) == "object" ? <Goods popularList={popularList[0]} img={macbook}/> : "" }</Swap1>
      <Swap2 count={count} subCount={subCount}>{String(typeof(popularList)) == "object" ? <Goods popularList={popularList[1]} img={samsung_galaxy}/> : ""}</Swap2>
      <Swap3 count={count} subCount={subCount}>{String(typeof(popularList)) == "object" ? <Goods popularList={popularList[2]} img={gram}/> : ""}</Swap3>
      <Swap4 count={count} subCount={subCount}>{String(typeof(popularList)) == "object" ? <Goods popularList={popularList[3]} img={LG_sinebim}/> : ""}</Swap4>
      <Swap5 count={count} subCount={subCount}>{String(typeof(popularList)) == "object" ? <Goods popularList={popularList[4]} img={i_pad}/> : ""}</Swap5>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 94vw;
  height: 40vw;
  max-width: 1168px;
  overflow: hidden;
`
const Swap1 = styled.div`
position: absolute;
width: 21.72vw;
max-width: 278px;
transition: 1s;
left: ${props => {
  return props.count == 0 ? "0%" : ""
}};
left: ${props => {
  return props.count == 1 ? "-25%" : ""
}};
left: ${props => {
  return props.count == 2 ? "75%" : ""
}};
left: ${props => {
  return props.count == 3 ? "50%" : ""
}};
left: ${props => {
  return props.count == 4 ? "25%" : ""
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
width: 21.72vw;
max-width: 278px;
transition: 1s;
left: ${props => {
  return props.count == 0 ? "25%" : ""
}};
left: ${props => {
  return props.count == 1 ? "0%" : ""
}};
left: ${props => {
  return props.count == 2 ? "-25%" : ""
}};
left: ${props => {
  return props.count == 3 ? "75%" : ""
}};
left: ${props => {
  return props.count == 4 ? "50%" : ""
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
  return props.count == 0 ? "50%" : ""
}};
left: ${props => {
  return props.count == 1 ? "25%" : ""
}};
left: ${props => {
  return props.count == 2 ? "0%" : ""
}};
left: ${props => {
  return props.count == 3 ? "-25%" : ""
}};
left: ${props => {
  return props.count == 4 ? "75%" : ""
}};
left: ${props => {
  return props.subCount == 3.5 ? "100%" : ""
}};
visibility: ${props => {
  return props.subCount >= 3 && props.subCount < 4  ? "hidden" : "visible"
}};

`
const Swap4 = styled.div`
  position: absolute;
  width: 21.72vw;
  max-width: 278px;
  transition: 1s;
  left: ${props => {
    return (3 - props.count) * 25 + "%" 
  }};
  left: ${props => {
    return props.subCount == 4.5 ? "100%" : ""
  }};
  visibility: ${props => {
    return props.subCount >= 4 ? "hidden" : "visible"
  }};
`
const Swap5 = styled.div`
position: absolute;
width: 21.72vw;
max-width: 278px;
transition: 1s;
left: ${props => {
  return props.count == 0 ? "-25%" : ""
}};
left: ${props => {
  return props.count == 1 ? "75%" : ""
}};
left: ${props => {
  return props.count == 2 ? "50%" : ""
}};
left: ${props => {
  return props.count == 3 ? "25%" : ""
}};
left: ${props => {
  return props.count == 4 ? "0%" : ""
}};
left: ${props => {
  return props.subCount == 0.5 ? "100%" : ""
}};
visibility: ${props => {
  return props.subCount >= 0 && props.subCount < 1  ? "hidden" : "visible"
}};

`





export default GoodsSwiper