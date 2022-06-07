import React from "react";
import styled from "styled-components";
import BuildMain from "./BuildMain";
import BuildSide from "./BuildSide";

const Home = () => {
  return (
    <Contaner>
      <Wrapper>
        <SideSreen>
          <BuildSide />
        </SideSreen>

        <MainScreen>
          <BuildMain />
        </MainScreen>
      </Wrapper>
    </Contaner>
  );
};
export default Home;

// const Contaner = styled.div``;
// const Contaner = styled.div``;
// const Contaner = styled.div``;
const MainScreen = styled.div`
  display: flex;
  width: 600px;
  justify-content: flex-start;
  @media (max-width: 1100px) {
    display: none;
  }
`;
const SideSreen = styled.div`
  display: flex;
  width: 500px;
  justify-content: flex-start;
  @media (max-width: 1100px) {
    display: none;
  }
`;
const Wrapper = styled.div`
  width: 1100px;
  display: flex;
  @media (max-width: 1100px) {
    display: flex;
    justify-content: center;
  }
`;

const Contaner = styled.div`
  width: 100%;
  min-height: calc(100vh - 80px);
  height: 100%;
  background-color: white;
  padding-top: 70px;
  display: flex;
  justify-content: center;
`;
