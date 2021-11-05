import React from "react";
import styled from "styled-components";
import { IoMdCart } from "react-icons/io";

const Container = styled.div`
  padding: 10px 50px;
  background: white;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #e9ecef;
`;

const Linked = styled.div`
  display: flex;
  align-items: center;
`;

const List = styled.div`
  margin-left: 50px;
  display: flex;
  justify-content: end;
  & a {
    margin: 0 10px;
    font-size: 16px;
    color: #7d8597;
    &:hover {
      color: #ff7d1b;
    }
  }
`;

const Logo = styled.h1`
  font-size: 40px;
  font-family: "Prompt";
`;

const Bunder = styled.div`
  padding: 25px;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.warna};
  margin: 0 7px;
  cursor: pointer;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  & svg {
    font-size: 30px;
    margin-right: 15px;
    cursor: pointer;
  }
`;

export default function Navbar() {
  return (
    <Container>
      <Linked>
        <Logo>canexs</Logo>
        <List>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#coll">Collections</a>
          </li>
          <li>
            <a href="#men">Men</a>
          </li>
          <li>
            <a href="#women">Women</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </List>
      </Linked>
      <User>
        <IoMdCart />
        {/* <Bunder warna="salmon">
        </Bunder> */}
        <Bunder warna="salmon">U</Bunder>
      </User>
    </Container>
  );
}
