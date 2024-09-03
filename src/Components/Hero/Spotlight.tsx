/** @format */

import React from "react";
import styled from "styled-components";
import pix from "../Assets/out.jpg";
import { AiOutlineEye } from "react-icons/ai";
import img from "../Assets/Hyper.jpg";
import img1 from "../Assets/Dfns API.png";
import img2 from "../Assets/Datafiniti API.png";
import img3 from "../Assets/MonsterAPI.png";
import img4 from "../Assets/Twitter Developer Labs.png";
import img5 from "../Assets/Amadeus for Developers's Public Workspace.png";
import img6 from "../Assets/Intercom APIs.png";
import img7 from "../Assets/Microsoft Graph.png";
const Spotlight = () => {
  return (
    <Container>
      <Wrapper>
        <h2>In the spotlight</h2>
        <p>
          In the spotlight The best APIs, collections, and workspaces handpicked
          by Postman. <span> See what more is in the spotlight →</span>
        </p>
        <Hold>
          <Left>
            <h3>Trending APIs, collections and workspaces</h3>
            <p>
              There’s an API for that: discover the APIs, workspaces, and
              collections the Postman community is creating, viewing, and
              forking. <span> View Complete List →</span>
            </p>
            <Large>
              <Boxer>
                <Box>
                  <img src={img} alt="" />
                </Box>
                <Chained>
                  <h3>Hyper News API</h3>
                  <p>
                    The Hyper News API provides access to the latest news
                    headlines and historical news data
                  </p>
                </Chained>
              </Boxer>
              <Main>
                <Div>
                  {" "}
                  <AiOutlineEye />
                </Div>
                <span>10k + watchers</span>
              </Main>
            </Large>
            <Snd>
              <Boxer>
                <Box>
                  <img src={pix} alt="" />
                </Box>
                <Chained>
                  <h3>Ayrshare Social Posting API</h3>
                  <p>
                    Post to social media via an API: Twitter, Instagram,
                    Facebook, LinkedIn, GMB, Telegram, Reddit, and YouTube.
                    https://docs.ayrshare.com
                  </p>
                </Chained>
              </Boxer>
              <Main>
                <Div>
                  {" "}
                  <AiOutlineEye />
                </Div>
                <span>10k + watchers</span>
              </Main>
            </Snd>
            <Snd>
              <Boxer>
                <Box>
                  <img src={img1} alt="" />
                </Box>
                <Chained>
                  <h3>Dfns API</h3>
                  <p>
                    The easiest way to start having a wallet infrastructure.
                  </p>
                </Chained>
              </Boxer>
              <Main>
                <Div>
                  {" "}
                  <AiOutlineEye />
                </Div>
                <span>10k + watchers</span>
              </Main>
            </Snd>
            <Snd>
              <Boxer>
                <Box>
                  <img src={img2} alt="" />
                </Box>
                <Chained>
                  <h3>Datafiniti API</h3>
                  <p>
                    This workspace contains resources that you can demo and
                    share with customers and partners.
                  </p>
                </Chained>
              </Boxer>
              <Main>
                <Div>
                  {" "}
                  <AiOutlineEye />
                </Div>
                <span>10k + watchers</span>
              </Main>
            </Snd>
            <Snd>
              <Boxer>
                <Box>
                  <img src={img7} alt="" />
                </Box>
                <Chained>
                  <h3>Microsoft Graph</h3>
                  <p>Microsoft Graph postman collections workspace.</p>
                </Chained>
              </Boxer>
              <Main>
                <Div>
                  {" "}
                  <AiOutlineEye />
                </Div>
                <span>10k + watchers</span>
              </Main>
            </Snd>
          </Left>
          <Right>
            <h3>New and Noteworthy</h3>
            <p>
              Discover newly added public workspaces with public APIs from a
              multitude of industries. <span> View Complete List →</span>
            </p>
            <Large>
              <Boxer>
                <Box>
                  <img src={img3} alt="" />
                </Box>
                <Chained>
                  <h3>MonsterAPI</h3>
                  <p>
                    Access AI models at scale using Monster API for use cases
                    like: Text to image, Image to image, Pix2Pix and Whisper API
                    for speech to text
                  </p>
                </Chained>
              </Boxer>
              <Main>
                <Div>
                  {" "}
                  <AiOutlineEye />
                </Div>
                <span>10k + watchers</span>
              </Main>
            </Large>
            <Snd>
              <Boxer>
                <Box>
                  <img src={pix} alt="" />
                </Box>
                <Chained>
                  <h3>ChatBot.com</h3>
                  <p>
                    ChatBot is a natural language understanding framework that
                    allows you to create intelligent chatbots for any service.
                  </p>
                </Chained>
              </Boxer>
              <Main>
                <Div>
                  {" "}
                  <AiOutlineEye />
                </Div>
                <span>10k + watchers</span>
              </Main>
            </Snd>
            <Snd>
              <Boxer>
                <Box>
                  <img src={img5} alt="" />
                </Box>
                <Chained>
                  <h3>Amadeus for Developers's Public Workspace</h3>
                  <p>
                    Fork the Amadeus for Developers collection, add your API key
                    & secret and you are ready to use it.
                  </p>
                </Chained>
              </Boxer>
              <Main>
                <Div>
                  {" "}
                  <AiOutlineEye />
                </Div>
                <span>10k + watchers</span>
              </Main>
            </Snd>
            <Snd>
              <Boxer>
                <Box>
                  <img src={img6} alt="" />
                </Box>
                <Chained>
                  <h3>Intercom APIs</h3>
                  <p>Sample collections, APIs and environments</p>
                </Chained>
              </Boxer>{" "}
              <Main>
                <Div>
                  {" "}
                  <AiOutlineEye />
                </Div>
                <span>10k + watchers</span>
              </Main>
            </Snd>
            <Snd>
              <Boxer>
                <Box>
                  <img src={img4} alt="" />
                </Box>
                <Chained>
                  <h3>Twitter Developer Labs</h3>
                  <p>Twitter Developer Labs</p>
                </Chained>
              </Boxer>
              <Main>
                <Div>
                  {" "}
                  <AiOutlineEye />
                </Div>
                <span>10k + watchers</span>
              </Main>
            </Snd>
          </Right>
        </Hold>
      </Wrapper>
    </Container>
  );
};

export default Spotlight;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
`;
const Wrapper = styled.div`
  width: 90%;
  margin-bottom: 40px;

  p {
    font-size: 16px;

    span {
      color: blue;
    }
  }
`;

const Hold = styled.div`
  display: grid;
  height: 905px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 905px);
  /* background-color: gold; */
  width: 100%;
  gap: 25px;
  margin-top: 50px;

  @media screen and (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`;
const Left = styled.div`
  /* background-color: red; */

  h3 {
    margin: 0;
  }
  p {
    margin: 0;
    font-size: 14px;
    margin-top: 7px;
  }

  span {
    color: blue;
  }
`;
const Right = styled.div`
  /* background-color: green; */

  h3 {
    margin: 0;
  }
  p {
    margin: 0;
    font-size: 14px;
    margin-top: 7px;

    span {
      color: blue;
    }
  }
  @media screen and (max-width: 425px) {
    margin-top: 98px;
  }
`;

const Large = styled.div`
  width: 100%;
  height: 160px;
  border-top: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  :hover {
    cursor: pointer;
    background-color: #f5f5f5;
    transition: all 350ms;
  }
`;

const Snd = styled.div`
  width: 100%;
  height: 160px;
  /* border-top: 1px solid #e6e6e6; */
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  :hover {
    cursor: pointer;
    background-color: #f5f5f5;
    transition: all 350ms;
  }
`;

const Box = styled.div`
  width: 36px;
  height: 30px;
  /* border: 4px solid gray; */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  border-radius: 5px;
  img {
    height: 30px;
  }
`;

const Boxer = styled.div`
  display: flex;
`;

const Chained = styled.div`
  margin-top: 9px;
  margin-left: 10px;
  h3 {
    margin: 0;
  }
  p {
    margin: 0;
    margin-top: 10px;
  }
`;

const Main = styled.div`
  display: flex;
  margin-bottom: 15px;
`;
const Div = styled.div`
  margin-top: 3px;
`;
