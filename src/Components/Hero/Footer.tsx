/** @format */

import React from "react";
import styled from "styled-components";
import pix from "../Assets/Rocket.svg";
const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <ImgHold>
          <img src={pix} alt="" />
          <p>© 2022 Postman, Inc.</p>
        </ImgHold>
        <Grid>
          <Content ml="0">
            <h3>Product</h3>
            <p>What is Postman?</p>
            <p>API Repository</p>
            <p>Tools</p>
            <p>Governance</p>
            <p>Workspace</p>
            <p>Integrations</p>
            <p>Enterprise</p>
            <p>Plans and pricing</p>
            <p>Download the app</p>
            <p> Support center</p>
          </Content>
          <Content ml="45px">
            <h3>Company</h3>
            <p>About</p>
            <p>Careers and Culture</p>
            <p>Press & Media</p>
            <p>Contact Us</p>
            <p>Partner program</p>

            <h3>Security and terms</h3>
            <p>Trust and Security</p>
            <p>Privacy policy</p>
            <p>Terms</p>
          </Content>
          <Content2>
            <h3>Social</h3>
            <p>Twitter</p>
            <p>LinkedIn</p>
            <p> Github</p>
            <p>YouTube</p>
            <p>Twitch</p>
          </Content2>
          <ImgHol>
            <img src={pix} alt="" />
            <p>© 2022 Postman, Inc.</p>
          </ImgHol>
        </Grid>
      </Wrapper>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 90%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 425px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

const Content = styled.div<{ ml: string }>`
  margin-left: 10px;

  @media screen and (max-width: 425px) {
    margin-left: ${({ ml }) => ml};
  }
`;

const ImgHold = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: 24px;
  @media screen and (max-width: 425px) {
    display: none;
  }
  img {
    height: 270px;
  }
  p {
    font-size: 13px;
  }
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 65%;
  height: 100%;

  @media screen and (max-width: 425px) {
    grid-template-columns: repeat(2, 1fr);
  }

  p {
    margin: 0;
    margin-bottom: 10px;
  }
`;

const Content2 = styled.div`
  margin-left: 65px;

  @media screen and (max-width: 425px) {
    margin-left: 0%;
  }
`;

const ImgHol = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: 24px;
  display: none;

  @media screen and (max-width: 425px) {
    display: block;
  }
  img {
    height: 200px;
  }
  p {
    font-size: 13px;
  }
`;
