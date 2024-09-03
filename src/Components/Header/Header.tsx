/** @format */

import React, { useState } from "react";
import styled from "styled-components";
import pix from "../Assets/postman.png";
import { AiOutlineDown } from "react-icons/ai";
import { RiSearchLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

const Header: React.FC = () => {
  // const [show, setshow] = useState<boolean>(false);

  // const Change = () => {
  //   if (window.scrollY >= 70) {
  //     setshow(true);
  //   } else setshow(false);
  // };
  // window.addEventListener("scroll", Change);
  return (
    <>
        <Container >
          <Wrapper>
            <Left>
              <img src={pix} alt="" />
              <Hold ml="20px">
                <p>Product</p>
                <Icon>
                  <AiOutlineDown />
                </Icon>
              </Hold>
              <p>Pricing</p>
              <Hold ml="17px">
                <p>Enterprise</p>
                <Icon>
                  <AiOutlineDown />
                </Icon>
              </Hold>
              <Hold ml="17px">
                <p>Resources and support</p>
                <Icon>
                  <AiOutlineDown />
                </Icon>
              </Hold>

              <Ex to="explore">Explore</Ex>
            </Left>
            <Right>
              <Main>
                <RiSearchLine />
                <input type="text" placeholder="Search postman" />
              </Main>
              <ButtonHold>
                <Button
                  wd="60px"
                  bg="white"
                  br="1px solid black"
                  cl="black"
                  mr="10px"
                  to="/signin"
                >
                  Sign in
                </Button>
                <Button
                  wd="110px"
                  bg="#ff6c37"
                  br="none"
                  cl="white"
                  mr=""
                  to="/signup"
                >
                  Sign up for free
                </Button>
              </ButtonHold>
              <Ri>
                <RiSearchLine />
              </Ri>
              <Ai>
                <AiOutlineMenu />
              </Ai>
            </Right>
          </Wrapper>
        </Container>
    </>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 2;

  @media screen and (max-width: 960px) {
    /* background-color: gold; */
  }
`;
const Wrapper = styled.div`
  width: 95%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 36px;
  }
  p {
    margin: 0;
    font-size: 15px;
    font-weight: 700;
    color: #2f5253;
    margin-left: 26px;
    @media screen and (max-width: 960px) {
      display: none;
    }
  }
`;
const Right = styled.div`
  display: flex;
  align-items: center;
`;
const Hold = styled.div<{ ml: string }>`
  display: flex;
  margin-left: ${({ ml }) => ml};
  @media screen and (max-width: 960px) {
    display: none;
  }
  p {
    margin: 0;
    font-size: 15px;
    font-weight: 700;
    color: #2f5253;
  }
`;
const Icon = styled.div`
  font-weight: 700;
  color: #2f5253;
  margin-top: 4px;
  font-size: 12px;
  margin-left: 4px;
`;

const Main = styled.div`
  width: 150px;
  height: 40px;
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  padding-left: 10px;
  margin-right: 160px;
  @media screen and (max-width: 960px) {
    display: none;
  }
  input {
    width: 80%;
    height: 100%;
    border: none;
    background-color: transparent;
    outline: none;
    padding-left: 10px;
  }
`;

const ButtonHold = styled.div`
  display: flex;
`;
const Button = styled(NavLink)<{
  wd: string;
  bg: string;
  br: string;
  cl: string;
  mr: string;
}>`
  width: ${({ wd }) => wd};
  height: 35px;
  border-radius: 5px;
  border: ${({ br }) => br};
  font-size: 13px;
  background-color: ${({ bg }) => bg};
  cursor: pointer;
  color: ${({ cl }) => cl};
  margin-right: ${({ mr }) => mr};
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: 0.5s infinite;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

const Ex = styled(NavLink)`
  margin: 0;
  font-size: 15px;
  font-weight: 700;
  color: #2f5253;
  margin-left: 26px;
  text-decoration: none;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

const Ri = styled.div`
  font-size: 20px;
  display: none;
  margin-right: 25px;

  @media screen and (max-width: 960px) {
    display: block;
  }
`;
const Ai = styled.div`
  font-size: 20px;
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
  }
`;
