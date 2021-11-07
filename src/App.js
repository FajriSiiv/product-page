import styled from "styled-components";
import Navbar from "./components/Navbar";
import Mainpage from "./components/Mainpage";

const Container = styled.div`
  max-width: 1440px;
  margin: auto;
  * {
    transition: all 0.3s;
    box-sizing: border-box;
    button {
      outline: none;
      border: none;
      cursor: pointer;
    }
  }
  @media screen and (max-width: 500px) {
    max-width: 100vw;
    width: 100vw;
  }
`;

function App() {
  return (
    <Container>
      <Navbar />
      <Mainpage />
    </Container>
  );
}

export default App;
