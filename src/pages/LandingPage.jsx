import React from 'react';
import styled from 'styled-components';

import shubhamImage from '../assets/shubham_image.png';
import arrowSvg from '../assets/svg/arrow.svg';
import sendSvg from '../assets/svg/send.svg';
import ThreeBG from '../components/ThreeBG';

const ImageContainer = styled.div`
    margin: 2rem 4rem 1rem 4rem;
`;

const PortfolioImage = styled.img`
  border-radius:50%;
  width: 353px;
  height: 365px
`;

const TitleContainer = styled.div`
  margin: 8rem 4rem 4rem 4rem;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: flex-start;
`;

const Title = styled.p`
  font-size: 40px;
  color: #3c3c3c;
  margin:0;
  & > span{
    font-weight: 700
  }
`;

const CTA = styled.button`
    background-color: #d6eca6;
    margin: 1rem 0;
    height: 60px;
    width: 20%;
    border: none;
    color: #000;
    font-size: 18px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;
    border-radius: 5px;
    box-shadow:4px 4px 8px #E9F2D3;

    &:hover{
      background-color: #c4e874;
    }
`;

const ArrowSVG = styled.img`
  position: absolute;
  bottom: 270px;
  left: 380px;
  height: 150px
`;



export default function LandingPage() {
  return (
    <div>
        <ThreeBG />
        <ArrowSVG src={arrowSvg} alt="arrow" />
        <ImageContainer>
            <PortfolioImage src={shubhamImage} alt="Shubham Image" />
        </ImageContainer>
        <TitleContainer>
            <Title>Hello, I'm <span>Shubham Aggarwal</span>.</Title>
            <Title>I'm a full-stack web developer.</Title>
            <CTA>
              <p>CONTACT ME</p>
              <img src={sendSvg} alt="send icon" />
            </CTA>
        </TitleContainer>
    </div>
  )
}
