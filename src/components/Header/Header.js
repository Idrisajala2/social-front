import styled from "styled-components";
import React from "react";
import {
  AiOutlineSearch,
  AiFillHome,
  AiOutlineHeart,
  AiOutlineSend,
} from "react-icons/ai";
import { MdOutlineLibraryAdd } from "react-icons/md";
// import { AiOutlineSend } from "react-icons/fi";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <SearchIconHolder>
          <Logo>Social Build</Logo>
          <SearchHolder>
            <Icon />
            <Input placeholder="Search" />
          </SearchHolder>
        </SearchIconHolder>
        <ProfleIconsHolders>
          <Icon3 />
          <Icons />
          <Icon1 />
          <Icon2 />

          <Img />
        </ProfleIconsHolders>
      </Wrapper>
    </Container>
  );
};
export default Header;

// const Container = styled.div```
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
const Img = styled.div`
  height: 35px;
  width: 35px;
  border-radius: 50%;
  background-color: gray;
`;
const Icon3 = styled(AiFillHome)`
  height: 30px;
  width: 30px;
`;
const Icon2 = styled(AiOutlineHeart)`
  height: 25px;
  width: 25px;
`;
const Icon1 = styled(AiOutlineSend)`
  height: 25px;
  width: 25px;
`;
const Icons = styled(MdOutlineLibraryAdd)`
  height: 25px;
  width: 25px;
`;

const ProfleIconsHolders = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 250px;
`;
const Input = styled.input`
  font-size: 16px;
  background-color: transparent;
  color: black;
  border: none;
  outline: none;
  font-weight: bold;
`;
const Icon = styled(AiOutlineSearch)`
  height: 15px;
  margin-left: 15px;
  width: 15px;
`;
const SearchHolder = styled.div`
  height: 35px;
  width: 270px;
  background-color: lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
`;
const Logo = styled.div`
  font-size: 25px;
  font-weight: 600;
  font-style: italic;
`;
const SearchIconHolder = styled.div`
  display: flex;
  width: 500px;
  align-items: center;
  justify-content: space-between;
`;
const Wrapper = styled.div`
  width: 85%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid gray;
  /* position: fixed; */
`;
