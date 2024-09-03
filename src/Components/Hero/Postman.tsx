import React from "react";
import styled from "styled-components";
import tools from "../Assets/Tools.svg";
import pix from "../Assets/small.svg";
const Postman = () => {
  return (
    <Container>
      <Wrapper>
        <Held>
          <img src={pix} alt="" />
        </Held>
        <h2>What is Postman?</h2>
        <p>
          Postman is an API platform for building and using APIs. Postman
          simplifies each step of <br /> the API lifecycle and streamlines
          collaboration so you can create better APIs—faster.
        </p>

        <Hold>
          <Card>
            <img src={tools} alt="" />
            <h4>API Tools</h4>
            <span>
              A comprehensive set of tools that help accelerate the API
              Lifecycle - from design, testing, documentation, and mocking to
              discovery.
            </span>
          </Card>
          <Card>
            <img src={tools} alt="" />
            <h4>API Tools</h4>
            <span>
              A comprehensive set of tools that help accelerate the API
              Lifecycle - from design, testing, documentation, and mocking to
              discovery.
            </span>
          </Card>
          <Card>
            <img src={tools} alt="" />
            <h4>API Tools</h4>
            <span>
              A comprehensive set of tools that help accelerate the API
              Lifecycle - from design, testing, documentation, and mocking to
              discovery.
            </span>
          </Card>
          <Card>
            <img src={tools} alt="" />
            <h4>API Tools</h4>
            <span>
              A comprehensive set of tools that help accelerate the API
              Lifecycle - from design, testing, documentation, and mocking to
              discovery.
            </span>
          </Card>
        </Hold>
      </Wrapper>
      <button>Learn More</button>
    </Container>
  );
};

export default Postman;

const Container = styled.div`
  width: 100%;
  height: 550px;
  background-color: #f9f9f9;
  margin-top: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 425px) {
    height: 950px;
    display: flex;
    align-items: center;
    flex-direction: column;
    /* justify-content: center; */
  }

  button {
    width: 100px;
    height: 30px;
    background-color: transparent;
    border-radius: 5px;
    border: 1px solid #c2baba;
    margin-top: 40px;
    @media screen and (max-width: 425px) {
      margin-top: 480px;
    }
  }
`;
const Wrapper = styled.div`
  width: 90%;

  /* height: 400px; */

  p {
    font-size: 16px;
    color: #bbb8b5;
  }

  h2 {
    /* margin-top: 70px; */
  }
`;

const Hold = styled.div`
  width: 100%;
  height: 190px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 190px);
  /* background-color: gold; */
  /* display: flex; */
  /* align-items: center; */
  /* flex-direction: column; */
  /* justify-content: center; */

  margin-top: 29px;
  gap: 25px;

  @media screen and (max-width: 425px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 290px);
  }
`;

const Card = styled.div`
  background-color: white;
  padding-left: 15px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  border-radius: 3px;

  h4 {
    margin: 0;
    margin-top: 12px;
    margin-bottom: 8px;
  }
  img {
    margin-top: 15px;
  }
  span {
    font-size: 14px;
  }
`;

const Held = styled.div`
  position: absolute;
  width: 300px;
  height: 200px;
  right: 1px;
  top: 510px;

  @media screen and (max-width: 425px) {
    display: none;
  }
`;
