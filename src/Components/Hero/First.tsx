import React from "react";
import styled from "styled-components";
import pix from "../Assets/ApiFirst.png";
const First = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <h2>The future is API-first</h2>
          <p>
            At Postman, we believe the future will be built with APIs. The
            API-first World graphic novel <br /> tells the story of how and why
            the API-first world is coming to be.
          </p>
          <button>Read the graphic Novel</button>
        </Left>
        <Right>
          <img src={pix} alt="" />
        </Right>
      </Wrapper>
    </Container>
  );
};

export default First;

const Container = styled.div`
  width: 100%;
  height: 300px;
  background-color: #f9f9f9;
  margin-top: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  @media screen and (max-width: 425px) {
    margin-top: 1750px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  width: 90%;
  height: 300px;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  p {
    font-size: 15px;
  }
  button {
    width: 160px;
    height: 35px;
    border: none;
    background-color: transparent;
    border: 1px solid silver;
    border-radius: 5px;
  }
  h2 {
    font-weight: 600;
  }
`;
const Right = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  /* margin-left: 80px; */
  img {
    margin-top: 80px;
  }

  @media screen and (max-width: 425px) {
    display: none;
  }
`;
