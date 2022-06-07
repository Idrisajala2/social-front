import React, { useState } from "react";
import styled from "styled-components";
import pix from "../img/tree.jpg";
import DisplayCard from "../HomeScreen/DisplayCard";
const BuildSide = () => {
  const [display, setDisplay] = useState();
  return (
    <Container>
      <Wrapper>
        <Holder>
          <Image src={pix} alt="" />
          <Hold>
            <Name>name</Name>
            <Profile>profile</Profile>
          </Hold>
        </Holder>

        <Text>
          <Suggest>Suggestions For You</Suggest>
          <Action>See All</Action>
        </Text>

        <Text>
          <Holder>
            <Image1 src={pix} alt="" />
            <Hold>
              <RealName
                onMouseEnter={() => {
                  setDisplay(true);
                }}
                onMouseLeave={() => {
                  setDisplay(false);
                }}
              >
                name
              </RealName>
              <Profile>profile</Profile>
              {display ? (
                <Div>
                  <DisplayCard setDisplay={setDisplay} />
                </Div>
              ) : null}
            </Hold>
          </Holder>

          <Content>Follow</Content>
        </Text>
        <Text1>
          <div>
            About . Help . Pres.Api. job . Privacy .Terms .Locations Language
          </div>

          <p>@ 2022 INSTAGRAM FROM META</p>
        </Text1>
      </Wrapper>
    </Container>
  );
};

export default BuildSide;
const Div = styled.div`
  position: absolute;
  top: 20px;
  z-index: 5;
`;

const RealName = styled.div`
  font-size: 15px;
  color: skyblue;
  font-weight: 700px;
  position: relative;
  cursor: pointer;
  :after {
    content: "";
    height: 2px;
    background-color: green;
    left: 0;
    bottom: 0;
    width: 100%;
    position: absolute;
    opacity: 0;
    transition: all 350ms;
  }
  :hover {
    :after {
      opacity: 1;
    }
  }
`;

const Image1 = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const Content = styled.div`
  cursor: pointer;
  color: #69bff8;
`;
const Text1 = styled.div`
  div {
    font-size: 15px;
    font-weight: 400px;
  }
`;

const Action = styled.div`
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 500;
`;

const Suggest = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: gray;
  cursor: pointer;
`;
const Text = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Profile = styled.div``;
const Name = styled.div`
  font-weight: 700;
  font-size: 15px;
`;
const Hold = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;
const Holder = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
`;

const Wrapper = styled.div`
  margin-left: 50px;
  width: 400px;
  padding-bottom: 20px;
`;
const Container = styled.div`
  width: 100%;
  position: fixed;
`;
