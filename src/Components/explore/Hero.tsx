import React from "react";
import styled from "styled-components";
import exploreImg from "../Assets/explore1.svg";

const Hero = () => {
  return (
    <div>
      <Container>
        <HeroPic>
          <Right>
            <h1>Explore the World of APIs</h1>
            <h3>
              Browse the largest network of APIs, workspaces, and collections by
              developers across the planet
            </h3>
          </Right>
          <Left>
            <img src={exploreImg} alt="" />
          </Left>
        </HeroPic>
      </Container>
    </div>
  );
};

export default Hero;

const Container = styled.div`
  width: 100%;
`;
const HeroPic = styled.div`
  width: 80%;
  height: 45vh;
  margin: auto;
  display: flex;

  @media screen and (max-width: 1024px) {
    width: 90%;
  }
`;

const Right = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 10px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  h1 {
    margin: 0;
    font-size: 2.3rem;
    line-height: 1.2;
    color: rgb(33, 33, 33);
    letter-spacing: -0.72px;
    font-weight: 500;

    @media screen and (max-width: 1024px) {
      font-size: 2rem;
    }
    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
    }
    @media screen and (min-width: 425px) {
      font-size: 2.3rem;
      width: 80%;
      font-weight: 500;
    }
  }

  h3 {
    color: rgb(107, 107, 107);
    max-width: 80ch;
    font-weight: 400;

    @media screen and (max-width: 1024px) {
      font-size: 16px;
    }
    @media screen and (max-width: 425px) {
      font-size: 20px;
    }
  }

  @media screen and (max-width: 1024px) {
    width: 40%;
  }
  @media screen and (max-width: 702px) {
    width: 100%;
    font-size: 2rem;
  }
`;

const Left = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1024px) {
    width: 50%;
  }
  @media screen and (max-width: 719px) {
    display: none;
  }
`;
