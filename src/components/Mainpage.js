import React from "react";
import styled from "styled-components";
import Photogrid from "./Photogrid";
import Details from "./Details";

const Container = styled.div`
  max-width: 100vw;
  max-height: 100vh;
  height: 85vh;
  padding: 0 50px;
  display: flex;
  justify-content: center;
  position: relative;
  overflow-x: hidden;
  @media screen and (max-width: 500px) {
    flex-direction: column;
    height: fit-content;
    padding: 0;
    position: relative;
    max-height: none;
  }
`;
const Layer = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  @media screen and (max-width: 500px) {
    height: fit-content;
    padding: 0;
  }
`;
export default function Mainpage() {
  return (
    <Container>
      <Layer>
        <Photogrid />
      </Layer>
      <Layer>
        <Details />
      </Layer>
    </Container>
  );
}
