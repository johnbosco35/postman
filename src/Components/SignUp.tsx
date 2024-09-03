import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import pix from "./Assets/Bimg.svg";
const SignUp = () => {
  return (
    <Container>
      <Card>
        <Left></Left>
        <Right>
          <Wrapper>
            <Text>
              <h2>Create Postman Account</h2>
              <Span to="/signin">Sign In instead?</Span>
            </Text>
            <Hold>
              <p>Email</p>
              <Input />
            </Hold>
            <Hold2>
              <p>Username</p>
              <Input />
            </Hold2>
            <Hold2>
              <p>Password</p>
              <Input />
            </Hold2>
            <Man>
              <Check type="checkbox" />
              <Pro>
                Sign up to get product updates, news, and other marketing
                communications.
              </Pro>
            </Man>
            <Man>
              <Check type="checkbox" />
              <Pro>Stay signed for 30 days</Pro>
            </Man>
            <P>
              By creating an account, I agree to the <span>Terms</span> and
              <span> Privacy Policy.</span>
            </P>
            <Button bg="#ff6c37" bc="#F15A22" mt="">
              Create free account
            </Button>
            <Button bg="#3E92F2" bc="#2B77F3" mt="15px">
              Sign up with google
            </Button>
          </Wrapper>
        </Right>
      </Card>
    </Container>
  );
};

export default SignUp;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Card = styled.div`
  width: 63%;
  height: 600px;
  background-color: white;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(600px);

  @media screen and (max-width: 425px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    width: 90%;
  }

  @media screen and (min-width: 768px) and (max-width: 768px) {
    width: 60%;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
`;

const Left = styled.div`
  background-image: url(${pix});
  background-size: contain;
  background-repeat: no-repeat;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Right = styled.div`
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 375px) {
    display: block;
  }
  @media screen and (min-width: 475px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  h2 {
    font-size: 18px;
    margin: 0;

    @media screen and (min-width: 425px) {
      font-size: 14px;
    }
    /* @media screen and (max-width: 425px) {
      margin-top: 30px;
    } */
  }
  span {
    font-size: 16px;
    @media screen and (max-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
    @media screen and (min-width: 475px) and(max-width:728px) {
      font-size: 9px;
    }
  }
`;

const Wrapper = styled.div`
  width: 80%;
  height: 90%;

  /* background-color: red; */
  @media screen and (max-width: 768px) {
    height: 100%;
    /* background-color: red; */
  }
`;

const Input = styled.input`
  width: 100%;
  height: 37px;
  /* border: 0; */
  border: 1px solid silver;
  outline: #ff6c37;
  background-color: #f2f2f2;
  border-radius: 5px;
`;
const Hold = styled.div`
  margin-top: 30px;
  p {
    margin: 0;
    font-size: 13px;
    font-weight: bold;
    margin-bottom: 10px;
  }
`;

const Hold2 = styled.div`
  margin-top: 20px;
  p {
    margin: 0;
    font-size: 13px;
    font-weight: bold;
    margin-bottom: 10px;
  }
`;

const Check = styled.input``;
const Pro = styled.span`
  font-size: 13px;
`;

const Man = styled.div`
  margin-top: 15px;
`;

const P = styled.p`
  width: 100%;
  font-size: 14px;

  span {
    color: blue;
  }
`;

const Button = styled.button<{ bg: string; bc: string; mt: string }>`
  width: 100%;
  height: 40px;
  background-color: ${({ bg }) => bg};
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  margin-top: ${({ mt }) => mt};
  :hover {
    background-color: ${({ bc }) => bc};
    cursor: pointer;
  }
`;

const Span = styled(NavLink)`
  font-size: 16px;
  text-decoration: none;
  color: black;
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  @media screen and (min-width: 475px) and(max-width:728px) {
    font-size: 9px;
  }
`;
