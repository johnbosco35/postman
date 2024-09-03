/** @format */

import React from "react";
import styled from "styled-components";
import img from "../Assets/MasterCard-removebg-preview.png";
import img1 from "../Assets/meta-remove.png";
import img2 from "../Assets/MergePublic-removebg-preview.png";
import img3 from "../Assets/Intel_Secl-removebg-preview.png";
import img4 from "../Assets/Wowza-removebg-preview.png";
import img5 from "../Assets/Withings-removebg-preview.png";
import img6 from "../Assets/Adyen-removebg-preview.png";
import img8 from "../Assets/youtube.png";
import { AiOutlineEye } from "react-icons/ai";
const Happening = () => {
  return (
    <Container>
      <Wrapper>
        <h2>What's happening on Postman</h2>
        <p>
          Browse the largest network of APIs and share what you build with
          developers across the planet.{" "}
          <span>Explore the Public API Network →</span>
        </p>
        <Main>
          <Card>
            <Holder>
              <Pint>
                <Div>
                  <img src={img1} alt="" />
                  <span>Instagram</span>
                </Div>
                <button>Workspace</button>
              </Pint>
              <h4>Official Instagram API workspace</h4>
              <span>4 Collections ·4 APIs</span>
              <p>Official Instagram API workspace.</p>
              <p>
                <Ic>
                  <AiOutlineEye />
                </Ic>
                500+
              </p>
            </Holder>
          </Card>
          <Card>
            <Holder>
              <Pint>
                <Div>
                  <img src={img} alt="" />
                  <span>Mastercard Developers</span>
                </Div>
                <button>Workspace</button>
              </Pint>
              <h4>Mastercard Collections</h4>
              <span>4 Collections ·4 APIs</span>
              <p>
                A workspace for exploring the Mastercard APIs published on the
                Mastercard Developers platform.
              </p>
              <p>
                <Ic>
                  <AiOutlineEye />
                </Ic>
                500+
              </p>
            </Holder>
          </Card>
          <Card>
            <Holder>
              <Pint>
                <Div>
                  <img src={img} alt="" />
                  <span>Tomorrow.io API</span>
                </Div>
                <button>Workspace</button>
              </Pint>
              <h4>Tomorrow.io Collections</h4>
              <span>4 Collections ·4 APIs</span>
              <p>
                Tomorrow.io API provides hyperlocal weather data, including
                historical, real-time and forecast...
              </p>
              <p>
                <Ic>
                  <AiOutlineEye />
                </Ic>
                500+
              </p>
            </Holder>
          </Card>
          <Card>
            <Holder>
              <Pint>
                <Div>
                  <img src={img2} alt="" />
                  <span>Merge Public</span>
                </Div>
                <button>Workspace</button>
              </Pint>
              <h4>Merge Public Collections</h4>
              <span>4 Collections ·4 APIs</span>
              <p>Welcome to Merge's Public Postman collections!</p>
              <p>
                <Ic>
                  <AiOutlineEye />
                </Ic>
                500+
              </p>
            </Holder>
          </Card>
          <Card>
            <Holder>
              <Pint>
                <Div>
                  <img src={img3} alt="" />
                  <span>Intel® SecL-DC - Foundational Security</span>
                </Div>
                <button>Workspace</button>
              </Pint>
              <h4>Intel® SecL-DC - Foundational Security Collections</h4>
              <span>4 Collections ·4 APIs</span>
              <p>
                Quick start API Collections for Foundational Security use cases
                of Intel® SecL-DC
              </p>
              <p>
                <Ic>
                  <AiOutlineEye />
                </Ic>
                500+
              </p>
            </Holder>
          </Card>
          <Card>
            <Holder>
              <Pint>
                <Div>
                  <img src={img4} alt="" />
                  <span>Wowza Video REST API</span>
                </Div>
                <button>Workspace</button>
              </Pint>
              <h4>Wowza Video REST Collections</h4>
              <span>4 Collections ·4 APIs</span>
              <p>
                The Wowza Video API adds live streaming and playback
                functionality to your applications.
              </p>
              <p>
                <Ic>
                  <AiOutlineEye />
                </Ic>
                500+
              </p>
            </Holder>
          </Card>
          <Card>
            <Holder>
              <Pint>
                <Div>
                  <img src={img8} alt="" />
                  <span>Space</span>
                </Div>
                <button>Workspace</button>
              </Pint>
              <h4>Space Collections</h4>
              <span>4 Collections ·4 APIs</span>
              <p>
                This is a workspace for building and integrating with space
                related APIs.
              </p>
              <p>
                <Ic>
                  <AiOutlineEye />
                </Ic>
                500+
              </p>
            </Holder>
          </Card>
          <Card>
            <Holder>
              <Pint>
                <Div>
                  <img src={img6} alt="" />
                  <span>Adyen APIs</span>
                </Div>
                <button>Workspace</button>
              </Pint>
              <h4>Adyen APIs Collections</h4>
              <span>4 Collections ·4 APIs</span>
              <p>All Adyen APIs with documentation, variables and examples</p>
              <p>
                <Ic>
                  <AiOutlineEye />
                </Ic>
                500+
              </p>
            </Holder>
          </Card>
          <Card>
            <Holder>
              <Pint>
                <Div>
                  <img src={img5} alt="" />
                  <span>Withings Health Solutions</span>
                </Div>
                <button>Workspace</button>
              </Pint>
              <h4>Withings Health Collections</h4>
              <span>4 Collections ·4 APIs</span>
              <p>
                This workspace will help you integrate Withings APIs, which
                includes logistics services as well as...
              </p>
              <p>
                <Ic>
                  <AiOutlineEye />
                </Ic>
                500+
              </p>
            </Holder>
          </Card>
        </Main>
      </Wrapper>
    </Container>
  );
};

export default Happening;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 90%;

  h2 {
    margin: 0;
    margin-top: 85px;
  }
  p {
    font-size: 15px;
  }
  span {
    color: blue;
  }
`;

const Main = styled.div`
  width: 100%;
  height: 834px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(10, 250px);
  gap: 30px;
  margin-top: 60px;

  @media screen and (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  /* background-color: red; */
  /* border: 1px solid black; */
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
    transition: all 350ms;
  }
`;

const Holder = styled.div`
  width: 90%;
  height: 90%;
  /* background-color: gold; */

  h4 {
    margin: 0;
    margin-top: 15px;
    margin-bottom: 6px;
  }
  span {
    color: black;
    font-size: 13px;
  }
  p {
    font-size: 13px;
    display: flex;
  }
`;

const Pint = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
  img {
    height: 50px;
  }

  button {
    border: 1px solid green;
    background-color: white;
    color: green;
    text-transform: uppercase;
    height: 17px;
    font-size: 9px;
  }
`;

const Div = styled.div`
  display: flex;
  align-items: center;

  span {
    color: black;
    margin-left: 12px;
    font-size: 16px;
  }
`;

const Ic = styled.div`
  margin-top: 3px;
  margin-right: 6px;
`;
