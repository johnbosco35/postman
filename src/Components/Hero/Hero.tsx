/** @format */

import React from "react";
import styled from "styled-components";
import pix from "../Assets/right.png";
import img from "../Assets/apple.svg";
import img1 from "../Assets/microsoft-logo.svg";
import img2 from "../Assets/linux-logo.svg";
const Hero = () => {
  return (
    <Container>
      <Left>
        <h2>
          Build <br /> APIs together
        </h2>
        <p>
          Over 20 million developers use Postman. Get <br /> started by signing
          up or downloading the desktop app.
        </p>
        <Hold>
          <input type="text" placeholder="Okonkwovincent63@example.com" />
          <button>Sign up for free</button>
        </Hold>
        <div>Download the desktop app</div>

        <Mama>
          <Box>
            <img src={img1} alt="Loading" />
          </Box>
          <Box>
            <img src={img} alt="Loading" />
          </Box>
          <Box>
            <img src={img2} alt="Loading" />
          </Box>
        </Mama>
      </Left>
      <Right>
        <img src={pix} alt="" />
      </Right>
    </Container>
  );
};

export default Hero;

const Container = styled.div`
  width: 100%;
  height: 500px;
  /* background-color: red; */
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: repeat(2, 500px);

  @media screen and (max-width: 425px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`;

const Left = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 80px;
  div {
    font-size: 13px;
    margin-top: 20px;
    color: #6b6b6b;
    font-weight: bold;
  }

  p {
    font-size: 17px;
    line-height: 1.7;

    @media screen and (max-width: 425px) {
      font-size: 16px;
      width: 210px;
    }
  }
  h2 {
    margin: 0;
    margin-top: 90px;

    @media screen and (max-width: 425px) {
      margin-left: 0;
      font-size: 33px;
      font-weight: 600;
    }
  }

  @media screen and (max-width: 425px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* width: 100%; */
    /* background-color: red; */
    margin-left: 0%;
  }
`;
const Right = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 425px) {
    display: none;
  }
`;

const Hold = styled.div`
  width: 370px;
  height: 40px;
  display: flex;
  background-color: red;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 15px;
  @media screen and (max-width: 425px) {
    display: none;
  }
  input {
    width: 65%;
    border: 1px solid #ff6c37;
    outline: none;
    padding-left: 10px;

    ::placeholder {
      font-weight: bold;
    }
  }
  button {
    width: 35%;
    background-color: #ff6c37;
    color: white;
    border: none;
    cursor: pointer;
  }
`;

const Mama = styled.span`
  display: flex;
  width: 150px;
  justify-content: center;
`;
const Box = styled.div`
  width: 35px;
  height: 35px;
  background-color: #f5f5f5;
  border-radius: 5px;
  margin-right: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
