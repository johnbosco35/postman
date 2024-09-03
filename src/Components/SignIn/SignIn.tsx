import React from "react";
import styled from "styled-components";
import logo from "../Assets/pm-logo-1.svg";
import { FcGoogle } from "react-icons/fc";
import { NavLink } from "react-router-dom";
const SignIn = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <img src={logo} alt="" />
          <FormData>
            <SignCreate>
              <p>Sign In</p>
              <Span to="/signup">
                Create Account <h6>instead?</h6>
              </Span>
            </SignCreate>
            <Data>
              <p>Email or Username</p>
              <input type="text" />
            </Data>
            <Data>
              <p>Password</p>
              <input type="password" />
            </Data>
            <Data1>
              <Check>
                <input type="checkbox" name="" id="" />
                <p>Stay signed in for 30 days</p>
              </Check>
              <h6>Forgot Password?</h6>
            </Data1>
            <Button bg="#f26b3a" col="#fff">
              Sign in
            </Button>
            <OR>
              <Dash></Dash>
              <p>or</p>
              <Dash></Dash>
            </OR>

            <Button2>
              <p>
                <FcGoogle />
              </p>
              <h2>Sign in with Google</h2>
            </Button2>
            <Button bg="#dddddd" col="#535252">
              Sign in with SSO
            </Button>
          </FormData>
        </Wrapper>
      </Container>
    </div>
  );
};

export default SignIn;

const Button2 = styled.button`
  width: 100%;
  height: 40px;
  background-color: #3a74f2;
  color: #fff;
  outline: none;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;

  h2 {
    font-weight: 100;
    font-size: 12px;
  }
  p {
    width: 40px;
    height: 37px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    font-size: 20px;
    position: absolute;
    left: 3px;
  }
`;

const Dash = styled.div`
  width: 8vw;
  height: 0.7px;
  background-color: #e2e2e2;
`;

const OR = styled.div`
  width: 100%;
  height: 30px;
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  p {
    color: #7a7878;
  }
`;

const Button = styled.button<{ bg: string; col: string }>`
  width: 100%;
  height: 40px;
  background-color: ${({ bg }) => bg};
  color: ${({ col }) => col};
  font-size: 15px;
  font-weight: 500px;
  outline: none;
  margin-top: 10px;
  border: none;
  border-radius: 2px;
`;

const Check = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    margin: 0;
    color: #000;
    font-size: 13px;
    margin-left: 5px;
  }

  input {
    height: 20px;
    width: 20px;
    color: orangered;
  }
`;
const Data1 = styled.div`
  width: 100%;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h6 {
    color: #008cff;
    font-size: 13px;
    font-weight: 500;
    margin: 0;
  }
`;
const Data = styled.div`
  height: 90px;
  display: flex;
  flex-direction: column;

  p {
    /* margin: 0; */
    margin-bottom: 20px;
    margin-top: 10px;
    font-size: 13px;
    font-weight: 500;
  }

  input {
    /* height: 10px; */
    flex: 1;
    background-color: #f2f2f2;
    border-radius: 3px;
    border: 1px solid #cacaca;
    outline: none;
    padding: 10px;
  }
`;

const SignCreate = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #008cff;
    font-size: 13px;
    font-weight: 500;
  }
  p {
    font-weight: 500;
    font-size: 1.2rem;
    color: #000000dd;
  }
`;
const FormData = styled.div`
  width: 80%;
`;

const Wrapper = styled.div`
  width: 410px;
  height: 85vh;
  margin: 53px;
  background-color: #fff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  img {
    position: absolute;
    height: 100px;
    top: -50px;
  }
`;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
`;

const Span = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #008cff;
  font-size: 13px;
  font-weight: 500;
  text-decoration: none;
  h6 {
    margin-left: 5px;
    color: #000000c8;
    font-size: 13px;
    font-weight: 100;
  }
`;
