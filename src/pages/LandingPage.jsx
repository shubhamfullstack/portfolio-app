import React, { useState } from "react";
import styled from "styled-components";

import shubhamImage from "../assets/shubham_image.png";
import arrowSvg from "../assets/svg/arrow.svg";
import scrollSvg from "../assets/svg/scroll.svg";
import backgroundSvg from "../assets/svg/background.svg";
import instagramSvg from "../assets/svg/instagram.svg";
import linkedinSvg from "../assets/svg/linkedin.svg";
import gmailSvg from "../assets/svg/gmail.svg";
import githubSvg from "../assets/svg/github.svg";
import ThreeBG from "../components/ThreeBG";

const Container = styled.div`
  display: flex;
  flex-flow: row;
`;

const LeftSection = styled.div`
  width: 50vw;
`;

const RightSection = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100vh;
  width: 50%;
`;

const ImageContainer = styled.div`
  margin: 2rem 4rem 1rem 4rem;
`;

const PortfolioImage = styled.img`
  border-radius: 50%;
  width: 353px;
  height: 365px;
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
  color: #f5f5f5;
  margin: 0;
  & > span {
    font-weight: 700;
  }
`;

const CTA = styled.button`
  background-color: #d6eca6;
  margin: 1rem 0;
  height: 60px;
  width: 150px;
  border: none;
  color: #000;
  font-size: 16px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  border-radius: 5px;
  /* box-shadow: 4px 4px 8px #e9f2d3; */

  &:hover {
    background-color: #c4e874;
  }
`;

const ArrowSVG = styled.img`
  position: absolute;
  bottom: 270px;
  left: 380px;
  height: 150px;
`;

const SocialContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    align-items: center;
    width: 90%;
    margin-top: 2rem;

    & > img {
      margin: 0 0.5rem;
      cursor: pointer;
    }
  `;

  const IllustrationContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 28%;
    width: 90%;
    background-color: aliceblue;
    border-radius: 20px;
    margin-top: 4rem;
    box-shadow: 2px 2px 16px #676767;
  `;

  const TextContainer = styled.div`
    width: 100%;
    & > blockquote {
      font-size: 18px;
      color: #3c3c3c;
      line-height: 30px;
      letter-spacing: 1px;
    }
  `

  const CTAContainer = styled.div`
    display: flex;
    flex-flow: row;
    align-items: center;
    & > img {
      margin-left: 1rem;
    }
  `;


export default function LandingPage() {
  let state = {
    parameters:{
        x:20,
        y:0
    }
  }
  let skills = ["Serverless Architecture Design.",
  "Front End Development.",
  "UI/UX Design.",
  "Microservices Architecture Design.",
  "Microfrontend Design.",
  "CI/CD and Devops Setup.",
  "Backend Development.",
  "Serverless Function Development.",
  "BPM using Camunda.",
  "Implementing Security in Web Applications."
]
  const [data, setData] = useState(state);

  const handleUpdate = newData => {
      setData({
        parameters: { ...data.parameters, ...newData }
      });
  }
  const handleMouseMove = (event) => {
    event.preventDefault();
    let x = (event.clientX / window.innerWidth - 0.5) + 20
    let y = event.clientY / window.innerHeight - 0.5 
    handleUpdate({x,y})
  }


  return (
    <Container onMouseMove={(ev) => handleMouseMove(ev)}>
      <ThreeBG data={data}/>
      <LeftSection>
        <ArrowSVG src={arrowSvg} alt="arrow" />
        <ImageContainer>
          <PortfolioImage src={shubhamImage} alt="Shubham Image" />
        </ImageContainer>
        <TitleContainer>
          <Title>
            Hello, I'm <span>Shubham Aggarwal</span>.
          </Title>
          <Title>I'm a full-stack web developer.</Title>
          <CTAContainer>
            <CTA>
              <p>LEARN MORE</p>
            </CTA>
            <img src={scrollSvg} alt="" />
          </CTAContainer>
        </TitleContainer>
      </LeftSection>
      <RightSection>
        <SocialContainer>
          <img src={instagramSvg} alt="" />
          <img src={linkedinSvg} alt="" />
          <img src={githubSvg} alt="" />
          <img src={gmailSvg} alt="" />
        </SocialContainer>
        <IllustrationContainer>
          <TextContainer>
            <blockquote>I have serious passion for <b>UI/UX</b> designs, animations and creating intuitive, dynamic user experiences. I have a background in <b>architecture and system</b> design, and experience working on complex design systems for a wide range of experiences as well as the tooling needed to help developers achieve that goal.</blockquote>
          </TextContainer>
        </IllustrationContainer>
      </RightSection>
    </Container>
  );
}
