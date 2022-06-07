import React from "react";
import styled from "styled-components";
import pix from "../img/tree.jpg";

const DisplayCard = ({ setDisplay }) => {
  return (
    <Contaner>
      onMouseEnter=
      {() => {
        setDisplay(true);
      }}
      onMouseLeave=
      {() => {
        setDisplay(false);
      }}
      <Wrapper>
        <Top>
          <Img src={pix} />
          <Holder>
            <Name>Name</Name>
            <DisplayName>Real Name</DisplayName>
            <Follow>
              Followed by <span>another name</span>
            </Follow>
          </Holder>
        </Top>
        <Middile>
          <CountHolder>
            <HolderCont>
              <Count>{0}</Count>
              <Tittle>post</Tittle>
            </HolderCont>

            <HolderCont>
              <Count>{0}</Count>
              <Tittle>post</Tittle>
            </HolderCont>

            <HolderCont>
              <Count>{0}</Count>
              <Tittle>post</Tittle>
            </HolderCont>
          </CountHolder>
        </Middile>
        <Bottom>
          <Images src={pix} />
          <Images src={pix} />
          <Images src={pix} />
        </Bottom>

        <Botton>Follow</Botton>
      </Wrapper>
    </Contaner>
  );
};
export default DisplayCard;

// const Contaner = styled.div``
// const Contaner = styled.div``
const HolderCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Botton = styled.div`
  margin: 10px;
  background-color: #69bff8;
  height: 40px;
  display: flex;
  font-size: 15px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

const Images = styled.img`
  height: 116px;
  width: 116px;
  object-fit: cover;
  :hover {
    opacity: 0.5;
  }
`;
const Bottom = styled.div``;
const Tittle = styled.div`
  font-size: 15px;
`;
const Count = styled.div`
  font-weight: 700;
  font-size: 15px;
`;
const CountHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 300px;
`;
const Middile = styled.div`
  height: 50px;
  border-top: 1px solid silver;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Follow = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: gray;
`;
const DisplayName = styled.div`
  font-size: 15px;
`;
const Name = styled.div`
  font-size: 15px;
  color: skyblue;
`;
const Holder = styled.div``;
const Img = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 15px;
`;
const Top = styled.div`
  display: flex;
  padding: 10px 0;
`;
const Wrapper = styled.div`
  padding-bottom: 20px;
`;
const Contaner = styled.div`
  z-index: -1;
  width: 350px;
  background-color: white;
  border-radius: 4px;
  font-size: 4px;
  /* height: 200px; */
`;
