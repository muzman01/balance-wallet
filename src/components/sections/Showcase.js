import React, { useRef } from 'react'
import styled, { keyframes } from 'styled-components'

import img1 from '../../assets/partners/okx.png';
import img2 from '../../assets/partners/okx.png';
import img3 from '../../assets/partners/okx.png';
import img4 from '../../assets/partners/okx.png';
import img5 from '../../assets/partners/okx.png';
import img6 from '../../assets/partners/okx.png';
import img7 from '../../assets/partners/okx.png';
import img8 from '../../assets/partners/okx.png';
import img9 from '../../assets/partners/okx.png';
import img10 from '../../assets/partners/okx.png';
import ETH from '../../assets/icons8-ethereum-48.png'

const Section = styled.section`
min-height: 40vh;
width: 100vw;
background-color: ${props => props.theme.text};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
overflow: hidden;

&>*:first-child{
  animation-duration: 20s;

  @media (max-width: 30em){
    animation-duration: 15s;

  }
}
&>*:last-child{
  animation-duration: 15s;
  @media (max-width: 30em){
    animation-duration: 10s;

  }
}
`
const move = keyframes`
0%{ transform: translateX(100%)   };
100%{ transform: translateX(-100%)   }

`

const Row = styled.div`
/* background-color: lightblue; */
white-space: nowrap;
box-sizing:content-box;
margin: 2rem 0;
display: flex;

animation: ${move}  linear infinite ${props => props.direction};


`
const ImgContainer = styled.div`
width: 15rem;
margin: 0 1rem;
background-color:${props => props.theme.body};

border-radius: 20px;
cursor: pointer;

@media (max-width: 48em){
  width: 12rem;
  }
  @media (max-width: 30em){
  width: 10rem;
  }

img{
  width: 100%;
  height: auto;
}
`

const Details = styled.div`
display: flex;
justify-content: space-between;
padding: 0.8rem 1rem;
background-color: ${props => props.theme.text};
border: 2px solid ${props => `rgba(${props.theme.bodyRgba},0.5)`};

border-bottom-left-radius: 20px;
border-bottom-right-radius: 20px;

span{
  font-size: ${props => props.theme.fontsm};
  color:#7127D9;
  font-weight:600;
  line-height: 1.5rem;
}

h1{
  font-size: ${props => props.theme.fontmd};
  color: ${props => props.theme.body};
  font-weight:600;

  @media (max-width: 30em){
    font-size: ${props => props.theme.fontsm};

  }

}

`
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid black;
  width: fit-content;

  @media (max-width: 40em){
    font-size: ${(props) => props.theme.fontxl};

}
`;

const Price = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;

img{
  width: 1rem;
  height: auto;

}
`

const NftItem = ({img, number=0, price=0, passRef}) => {

let play = (e) => {
  passRef.current.style.animationPlayState = 'running';
}
let pause = (e) => {
  passRef.current.style.animationPlayState = 'paused';
}


  return(
    <ImgContainer   onMouseOver={e => pause(e) }  onMouseOut={e => play(e) }  >
      <img width={500} height={400}  src={img} alt="The Weirdos" />

    </ImgContainer>
  )
} 


const Showcase = () => {

  const Row1Ref = useRef(null);
  const Row2Ref = useRef(null);

  return(
<>
<Title>PARTNERS</Title>
<Section id="showcase">
  
   
    </Section>
</>
  )
}

export default Showcase