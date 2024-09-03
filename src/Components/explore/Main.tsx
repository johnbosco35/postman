import React, { useState } from "react";
import styled from "styled-components";
import mg from "../Assets/microsoftgraph.png";
import box from "../Assets/box.png";
import openai from "../Assets/openai.png";
import youtube from "../Assets/youtube.png";
import shopify from "../Assets/shopify.png";
import cisco from "../Assets/cisco.png";
import heroku from "../Assets/heroku.png";
import linkedin from "../Assets/linkedin.png";
import notion from "../Assets/notion.png";
import postman from "../Assets/pm-logo-1.svg";
import beginners from "../Assets/illustration-APIs-beginners.svg";
import worthy from "../Assets/illustration-new-noteworthy.svg";
import fin from "../Assets/category_icon_vector_financial-services.svg";

const Main = () => {
  const [show, setShow] = useState<boolean>(false);

  const popUp = () => {
    setShow(!show);
  };
  const closePopUp = () => {
    setShow(false);
  };

  return (
    <div>
      <Container>
        <Menu>
          <button onClick={popUp}>Menu</button>
        </Menu>
        {show ? <Butn onClick={closePopUp}>close</Butn> : null}
        {show ? (
          <Background>
            <StickMobile>
              <First>
                <Second>
                  <Icon></Icon>
                  <Text></Text>
                </Second>
                <Second>
                  <Icon></Icon>
                  <Text></Text>
                </Second>

                <Third>
                  <Icon></Icon>
                  <Text></Text>
                </Third>
              </First>

              <First>
                <Second>
                  <Icon></Icon>
                  <Text></Text>
                </Second>
                <Second>
                  <Icon></Icon>
                  <Text></Text>
                </Second>
                <Second>
                  <Icon></Icon>
                  <Text></Text>
                </Second>
                <Third>
                  <Icon></Icon>
                  <Text></Text>
                </Third>
              </First>
              <First>
                <Second>
                  <Icon></Icon>
                  <Text></Text>
                </Second>
                {/* <Second></Second> */}
                <Third>
                  <Icon></Icon>
                  <Text></Text>
                </Third>
              </First>
            </StickMobile>
          </Background>
        ) : null}
        <Stick>
          <First>
            <Second>
              <Icon></Icon>
              <Text>Explore</Text>
            </Second>
            <Second>
              <Icon></Icon>
              <Text>Categories</Text>
            </Second>

            <Third>
              <Icon></Icon>
              <Text>In the spotlight</Text>
            </Third>
          </First>

          <First>
            <p>Browse</p>
            <Second>
              <Icon></Icon>
              <Text>
                <p>Teams</p> <h6>2.0M</h6>
              </Text>
            </Second>
            <Second>
              <Icon></Icon>
              <Text>
                <p>Workspaces</p> <h6>107.5k</h6>
              </Text>
            </Second>
            <Second>
              <Icon></Icon>
              <Text>
                <p>APIs</p> <h6>15.1k</h6>
              </Text>
            </Second>
            <Third>
              <Icon></Icon>
              <Text>
                <p>Collections</p> <h6>225.2k</h6>
              </Text>
            </Third>
          </First>
          <First>
            <Second2>
              <Text2>
                <h3>⭐️ Publish your work on Explore</h3>
                <p>
                  Share and showcase your work for millions to find, collaborate
                  or use for their projects.
                </p>
                <button>Create Public Workspace</button>
              </Text2>
            </Second2>

            <Third>
              {/* <Icon></Icon> */}
              <Text>© 2022 Postman, Inc. Privacy Policy Terms</Text>
            </Third>
          </First>
        </Stick>
        <Content>
          <Title>
            <h1>Popular on Postman</h1>
          </Title>
          <Desc>
            <h3>Discover what's new and popular on the Postman API Network!</h3>
            <h2>View all</h2>
          </Desc>
          <Box>
            <Card>
              <Image>
                <img src={mg} alt="" />
              </Image>
              <Message>
                <h2>Microsoft Graph</h2>
                <h5>
                  <p>Microsoft Graph</p>
                  <p>#Developer Productivity</p>
                </h5>
                <Last>
                  <h3>Fork</h3>
                  <h4>20k+</h4>
                  <h4>Watch</h4>
                  <h4>17.8k</h4>
                </Last>
              </Message>
            </Card>
            <Card>
              {" "}
              <Image>
                <img src={box} alt="" />
              </Image>
              <Message>
                <h2>Box Platform API</h2>
                <h5>
                  <p>Box</p>
                </h5>
                <Last>
                  <h3>Fork</h3>
                  <h4>20k+</h4>
                  <h4>Watch</h4>
                  <h4>17.8k</h4>
                </Last>
              </Message>
            </Card>
            <Card>
              {" "}
              <Image>
                <img src={openai} alt="" />
              </Image>
              <Message>
                <h2>OpenAI</h2>
                <h5>
                  <p>Postman DevRel</p>
                  <p>#Developer Productivity</p>
                </h5>
                <Last>
                  <h3>Fork</h3>
                  <h4>200+</h4>
                  <h4>Watch</h4>
                  <h4>327</h4>
                </Last>
              </Message>
            </Card>
            <Card>
              <Image>
                <img src={postman} alt="" />
              </Image>
              <Message>
                <h2>The Good Documentation Checklist</h2>
                <h4>
                  <p>Postman</p>
                  <p>
                    9 documentation tips, comprised of examples from publishers
                    who document their APIs in Postman.
                  </p>
                </h4>

                <Last>
                  <h3>Fork</h3>
                  <h4>20k+</h4>
                  <h4>Watch</h4>
                  <h4>17.8k</h4>
                </Last>
              </Message>
            </Card>
          </Box>

          <Title3>
            <h1>Trending APIs, collections and workspaces</h1>
          </Title3>
          <Desc>
            <h3>
              There’s an API for that: discover the APIs, workspaces, and
              collections the Postman community is creating, viewing, and
              forking.
            </h3>
            <h2>View all</h2>
          </Desc>

          <Box>
            <Card>
              <Image>
                <img src={youtube} alt="" />
              </Image>
              <Message>
                <h2>Youtube: default</h2>
                <h5>
                  <p>API Evangelist</p>
                </h5>
                <Last>
                  <h4>Watch</h4>
                  <h4>327</h4>
                </Last>
              </Message>
            </Card>
            <Card>
              <Image>
                <img src={shopify} alt="" />
              </Image>
              <Message>
                <h2>Shopify</h2>
                <h5>
                  <p>Anh Nguyen Trung</p>
                  Published Postman Templates WORKSPACE
                </h5>
                <Last>
                  <h4>Watch</h4>
                  <h4>327</h4>
                </Last>
              </Message>
            </Card>
            <Card>
              <Image>
                <img src={postman} alt="" />
              </Image>
              <Message>
                <h2>Published Postman Templates </h2>
                <h4>
                  <p>Postman</p>
                  <p>Templates published by the Postman team</p>
                </h4>

                <Last>
                  <h4>Watch</h4>
                  <h4>17.8k</h4>
                </Last>
              </Message>
            </Card>
            <Card>
              <Image>
                <img src={openai} alt="" />
              </Image>
              <Message>
                <h2>DevRel Re-public</h2>
                <h4>
                  <p>Postman DevRel</p>
                  <p>
                    An interim public workspace for workshops, streams, and
                    other events.
                  </p>
                </h4>

                <Last>
                  <h4>Watch</h4>
                  <h4>6</h4>
                </Last>
              </Message>
            </Card>
          </Box>

          <Title4>
            <h1>Curated lists by the Postman team</h1>
          </Title4>
          <Desc>
            <h3>
              The best of APIs, collections, and workspaces handpicked by
              Postman.
            </h3>
            <h2>View all</h2>
          </Desc>
          <Box1>
            <Card1>
              <Message>
                <h2>APIs for Beginners</h2>
                <h3>
                  APIs recommended by Postman that help you get started and
                  learn how to use them in the real world.
                </h3>
              </Message>
              <Image1>
                <img src={beginners} alt="" />
              </Image1>
            </Card1>
            <Card1>
              <Message>
                <h2>APIs for Beginners New and Noteworthy</h2>
                <h3>
                  Discover newly added public workspaces with public APIs from a
                  multitude of industries.
                </h3>
              </Message>
              <Image1>
                <img src={worthy} alt="" />
              </Image1>
            </Card1>
          </Box1>

          <Title>
            <h1>Discover high quality APIs in your domain of interest</h1>
          </Title>
          <Desc>
            <h3>Categorised content to help you reach exactly what you need</h3>
            <h2>View all</h2>
          </Desc>

          <Box2>
            <Card3>
              <Image>
                <img src={fin} alt="" />
              </Image>
              <Message>
                <h1>Financial Services</h1>
              </Message>
            </Card3>

            <Card3>
              <Image>
                <img src={fin} alt="" />
              </Image>
              <Message>
                <h1>Financial Services</h1>
              </Message>
            </Card3>

            <Card3>
              <Image>
                <img src={fin} alt="" />
              </Image>
              <Message>
                <h1>Financial Services</h1>
              </Message>
            </Card3>

            <Card3>
              <Image>
                <img src={fin} alt="" />
              </Image>
              <Message>
                <h1>Financial Services</h1>
              </Message>
            </Card3>

            <Card3>
              <Image>
                <img src={fin} alt="" />
              </Image>
              <Message>
                <h1>Financial Services</h1>
              </Message>
            </Card3>

            <Card3>
              <Image>
                <img src={fin} alt="" />
              </Image>
              <Message>
                <h1>Financial Services</h1>
              </Message>
            </Card3>
          </Box2>
          <Title>
            <h1>Featured teams on the network</h1>
            <h2>View all</h2>
          </Title>
          <Desc></Desc>

          <Box2>
            <Card4>
              <One>
                <img src={postman} alt="" />
              </One>
              <Two>
                <p>Postman</p>
              </Two>
              <Three>
                <p>
                  Postman is a collaboration platform for API development used
                  by 17M+ developers worldwide, across 500K+ organizations, to
                </p>
              </Three>
              <Four>
                <span>
                  <p>300k</p> <p>100+</p> <p>1k+</p> <p>50+</p>
                </span>
              </Four>
            </Card4>
            <Card4>
              <One>
                <img src={postman} alt="" />
              </One>
              <Two>
                <p>Postman</p>
              </Two>
              <Three>
                <p>
                  Postman is a collaboration platform for API development used
                  by 17M+ developers worldwide, across 500K+ organizations, to
                </p>
              </Three>
              <Four>
                <span>
                  <p>300k</p> <p>100+</p> <p>1k+</p> <p>50+</p>
                </span>
              </Four>
            </Card4>
            <Card4>
              <One>
                <img src={cisco} alt="" />
              </One>
              <Two>
                <p>Cisco DevNet</p>
              </Two>
              <Three>
                <p>
                  Cisco's developer program - developer.cisco.com - helps
                  developers and IT professionals write applications and develop
                  integrations.
                </p>
              </Three>
              <Four>
                <span>
                  <p>300k</p> <p>100+</p> <p>1k+</p> <p>50+</p>
                </span>
              </Four>
            </Card4>
            <Card4>
              <One>
                <img src={heroku} alt="" />
              </One>
              <Two>
                <p>Salesforce Developers</p>
              </Two>
              <Three>
                <p>
                  Postman is a collaboration platform for API development used
                  by 17M+ developers worldwide, across 500K+ organizations, to
                </p>
              </Three>
              <Four>
                <span>
                  <p>300k</p> <p>100+</p> <p>1k+</p> <p>50+</p>
                </span>
              </Four>
            </Card4>
            <Card4>
              <One>
                <img src={linkedin} alt="" />
              </One>
              <Two>
                <p>Linkedin</p>
              </Two>
              <Three>
                <p>
                  Postman is a collaboration platform for API development used
                  by 17M+ developers worldwide, across 500K+ organizations, to
                </p>
              </Three>
              <Four>
                <span>
                  <p>300k</p> <p>100+</p> <p>1k+</p> <p>50+</p>
                </span>
              </Four>
            </Card4>
            <Card4>
              <One>
                <img src={notion} alt="" />
              </One>
              <Two>
                <p>Notion</p>
              </Two>
              <Three>
                <p></p>
              </Three>
              <Four>
                <span>
                  <p>300k</p> <p>100+</p> <p>1k+</p> <p>50+</p>
                </span>
              </Four>
            </Card4>
          </Box2>
        </Content>
      </Container>
    </div>
  );
};

export default Main;

const Four = styled.div`
  span {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;

    p {
      font-size: 0.9rem;
      color: #0000008d;
    }
  }
`;
const Three = styled.div`
  p {
    margin: 0;
    margin-top: 10px;
    font-size: 0.9rem;
    color: #0000008d;
  }
`;
const Two = styled.div`
  p {
    color: #0000008d;
    margin: 0;
    margin-top: 10px;
    font-weight: 500;
  }
`;
const One = styled.div`
  img {
    height: 45px;
  }
`;

const Image1 = styled.div`
  img {
    height: 90%;
    /* width: 100%; */
    object-fit: contain;
  }
`;

const Last = styled.div`
  width: 100%;
  display: flex;

  h3 {
    font-size: 13px;
    font-weight: 400;
    margin: 0;
    padding: 5px;
    border-right: 1px solid lightgray;
    margin-right: 20px;
    transition: all 0.2s;

    :hover {
      cursor: pointer;
      background-color: #ebebeb;
    }
  }
  h4 {
    font-size: 13px;
    font-weight: 400;
    margin: 0;
    padding: 5px;
    margin-right: 10px;
    color: #a19f9f;
  }
`;

const Message = styled.div`
  /* background-color: green; */

  h1 {
    margin: 0;
    font-size: 0.9rem;
    margin-left: 10px;
    font-weight: 500;
    border-bottom: 1px solid #0000001f;
  }

  h2 {
    margin: 0;
    margin-bottom: 5px;
    font-size: 15px;
    color: #000000a7;
  }
  h5 {
    margin: 0;
    margin-bottom: 5px;
    display: flex;
    width: 80%;
    justify-content: space-between;
    font-weight: 400;
    color: #000000b9;
  }
  h4 {
    width: 80%;
    font-weight: 400;

    p {
      /* margin: 10px; */
      color: #000000b9;
    }
  }
  p {
    margin: 0;
    font-size: 12px;
  }
  h3 {
    font-size: 14px;
    font-weight: 400;
  }
`;
const Image = styled.div`
  /* background-color: blue; */
  display: flex;
  justify-content: center;

  img {
    margin: 0;
    height: 30px;
  }
`;

const Butn = styled.button`
  background-color: transparent;
  border: none;
  color: #fff;
  position: absolute;
  height: 50px;
  z-index: 6;
  right: 0;
  top: -280px;
`;

const Background = styled.div`
  width: 100%;
  background-color: #0000006c;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: -300px;
  /* position: sticky; */
  z-index: 5;
  padding: 30px;
`;

const StickMobile = styled.div`
  background-color: #fff;
  width: 70%;
  padding: 15px;
  /* width: 100%; */
  /* z-index: 10; */
`;

const Menu = styled.div`
  button {
    width: 100%;
    height: 30px;
    position: absolute;
    z-index: 2;
    top: -50px;
    /* left: 500px; */
    display: none;
    background-color: transparent;
    border: 1px solid lightgray;
    color: #000000b5;

    @media screen and (max-width: 715px) {
      display: block;
    }
  }
`;

const Card = styled.div`
  /* background-color: lemonchiffon; */
  border-radius: 3px;
  padding: 20px;
  border: 0.7px solid lightgray;
  display: grid;
  grid-template-columns: 0.2fr 1fr;
`;

const Card4 = styled.div`
  /* height: 0vh; */
  /* background-color: lemonchiffon; */
  border-radius: 3px;
  padding: 20px;
  border: 0.7px solid lightgray;
  display: grid;
  grid-template-rows: 0.5fr 0.2fr 1fr 0.3fr;
`;
const Card3 = styled.div`
  /* background-color: lemonchiffon; */
  border-radius: 3px;
  padding: 10px;
  /* border: 0.7px solid lightgray; */
  display: grid;
  grid-template-columns: 0.2fr 1fr;
`;
const Card1 = styled.div`
  background-color: #f0f0f076;
  border-radius: 3px;
  padding: 20px;
  border: 0.7px solid lightgray;
  display: grid;
  grid-template-columns: 1fr 0.3fr;
`;

const Box2 = styled.div`
  width: 100%;
  height: 13vh;
  /* background-color: indigo; */
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin-bottom: 75px;

  @media screen and (max-width: 1096px) {
    grid-template-columns: 1fr;
    margin-bottom: 350px;
  }
`;
const Box1 = styled.div`
  width: 100%;
  height: 20vh;
  /* background-color: indigo; */
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  margin-bottom: 40px;

  @media screen and (max-width: 1096px) {
    grid-template-columns: 1fr;
    margin-bottom: 190px;
  }
`;
const Box = styled.div`
  width: 100%;
  height: 40vh;
  /* background-color: indigo; */
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  margin-bottom: 40px;

  @media screen and (max-width: 1096px) {
    grid-template-columns: 1fr;
  }
`;

const Desc = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  font-size: 1rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  h3 {
    width: 90%;
    margin: 0;
    font-weight: 400;
    font-size: 0.99rem;

    @media screen and (max-width: 1096px) {
      width: 85%;
      font-size: 0.85rem;
    }
  }
  h2 {
    margin: 0;
    font-weight: 400;
    font-size: 1rem;
    color: #00a2ff;

    @media screen and (max-width: 1096px) {
      font-size: 0.8rem;
    }
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    margin: 0;
    font-weight: 500;
    font-size: 1.4rem;
  }
  h2 {
    margin: 0;
    font-weight: 400;
    font-size: 1rem;
    color: #00a2ff;
  }
`;
const Title3 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 114px;

  h1 {
    margin: 0;
    font-weight: 500;
    font-size: 1.4rem;
  }
  h2 {
    margin: 0;
    font-weight: 400;
    font-size: 1rem;
    color: #00a2ff;
  }
  @media screen and (max-width: 1096px) {
    margin-top: 330px;
  }
`;
const Title4 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 114px;

  h1 {
    margin: 0;
    font-weight: 500;
    font-size: 1.4rem;
  }
  h2 {
    margin: 0;
    font-weight: 400;
    font-size: 1rem;
    color: #00a2ff;
  }
  @media screen and (max-width: 1096px) {
    margin-top: 360px;
  }
`;

const Icon = styled.div`
  width: 70px;
  height: 100%;
  background-color: pink;
`;
const Text2 = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  button {
    padding: 10px 20px;
    border: none;
    outline: none;
    background-color: #e7e4e4a9;
  }

  h3 {
    font-size: 0.9rem;
    margin: 0;
    font-weight: 400;
  }

  p {
    font-size: 0.9rem;
  }
`;
const Text = styled.div`
  width: 250px;
  /* height: 100%; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
`;

const Fourth = styled.div``;
const Third = styled.div`
  width: 100%;
  height: 50px;
  margin-bottom: 50px;
  display: flex;
`;

const Second = styled.div`
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
  display: flex;
`;
const Second2 = styled.div`
  width: 100%;
  /* height: 50px; */
  margin-bottom: 10px;
  display: flex;
`;

const First = styled.div`
  width: 100%;
  margin-bottom: 25px;
  border-bottom: 1px solid lightgray;
  display: flex;
  flex-direction: column;
`;

const Stick = styled.div`
  width: 300px;
  height: 90vh;
  /* background-color: yellow; */
  position: sticky;
  top: 0;

  @media screen and (max-width: 715px) {
    display: none;
  }
`;
const Content = styled.div`
  width: 968px;
  /* height: 200vh; */
  /* background-color: pink; */
  margin-left: 40px;

  @media screen and (max-width: 715px) {
    margin-left: 5px;
  }
`;

const Container = styled.div`
  width: 80%;
  position: relative;
  margin: auto;
  /* background-color: purple; */
  display: flex;
  margin-top: 40px;
  @media screen and (max-width: 715px) {
    width: 95%;
  }
`;
