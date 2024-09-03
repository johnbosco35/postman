/** @format */

import React from "react";
import styled from "styled-components";
import pix from "../Assets/bags.svg";
const Teams = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <h3>Get started with Postman</h3>
          <Hold>
            <input type="text" placeholder="Okonkwovincent63@example.com" />
            <button>Sign up for free</button>
          </Hold>
        </Left>
        <Right>
          <img src={pix} alt="" />
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Teams;

const Container = styled.div`
  width: 100%;
  height: 250px;
  background-color: #f9f9f9;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 425px) {
    margin-top: 1100px;
  }
`;
const Wrapper = styled.div`
  width: 90%;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 425px) {
    display: block;
  }
`;

const Left = styled.div``;
const Right = styled.div`
  img {
    height: 150px;

    @media screen and (max-width: 425px) {
      height: 80px;
      margin-top: 35px;
    }
  }
`;
const Hold = styled.div`
  width: 500px;
  height: 40px;
  display: flex;
  background-color: red;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 15px;

  @media screen and (max-width: 425px) {
    width: 270px;
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

    @media screen and (max-width: 425px) {
      width: 45%;
    }
  }
`;
