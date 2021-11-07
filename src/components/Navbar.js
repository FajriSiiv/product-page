import React from "react";
import styled from "styled-components";
import { IoMdCart, IoIosMenu, IoIosCloseCircle } from "react-icons/io";
import "../css/cssacitve.css";

const Container = styled.div`
  padding: 10px 50px;
  background: white;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #e9ecef;
  @media screen and (max-width: 500px) {
    padding: 5px 10px;
    max-width: 100%;
    margin-bottom: 30px;
  }
`;

const Linked = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 500px) {
    flex-direction: row-reverse;
    justify-content: center;
  }
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
  @media screen and (max-width: 500px) {
    position: fixed;
    top: 0;
    left: 0;
    flex-direction: column;
    background: white;
    z-index: 9;
    width: 200px;
    margin-left: 0px;
    height: 100vh;
    justify-content: center;
    text-align: center;
    transform: translateX(-100%);
    & li {
      margin: 10px 0;
    }
  }
`;

const BurgerNav = styled.div`
  display: none;
  @media screen and (max-width: 500px) {
    display: block;
    height: fit-content;
    font-size: 30px;
    display: flex;
    margin-right: 10px;
  }
`;

const XClose = styled.div`
  display: none;
  @media screen and (max-width: 500px) {
    display: block;
    position: absolute;
    top: 20px;
    right: 20px;
    & svg {
      font-size: 30px;
      color: red;
    }
  }
`;

const Logo = styled.h1`
  font-size: 40px;
  font-family: "Prompt";
  @media screen and (max-width: 500px) {
    font-size: 20px;
  }
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
  const handleNav = () => {
    const SideNav = document.querySelector(".hoverNav");
    SideNav.classList.toggle("slideNav");
    console.log("nav");
  };
  return (
    <Container>
      <Linked>
        <Logo>canexs</Logo>
        <List className="hoverNav">
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
          <XClose onClick={handleNav}>
            <IoIosCloseCircle />
          </XClose>
        </List>
        <BurgerNav onClick={handleNav}>
          <IoIosMenu />
        </BurgerNav>
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
