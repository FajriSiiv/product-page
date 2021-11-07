import React, { useState } from "react";
import styled from "styled-components";
import { FiPlus, FiMinus, FiShoppingCart } from "react-icons/fi";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 70px;
  @media screen and (max-width: 500px) {
    width: 100%;
    padding: 0 20px;
    padding-bottom: 40px;
    margin-top: 20px;
  }
`;

const CompanyName = styled.h5`
  font-size: 20px;
  color: #ffb703;
  letter-spacing: 2px;
  text-transform: uppercase;
  @media screen and (max-width: 500px) {
    font-size: 13px;
  }
`;

const NameProduct = styled.h2`
  font-size: 35px;
  line-height: 50px;
  margin-top: 15px;
  @media screen and (max-width: 500px) {
    font-size: 23px;
    line-height: initial;
    margin-top: 8px;
  }
`;

const Description = styled.p`
  font-size: 14px;
  color: #6c757d;
  margin-top: 20px;
  @media screen and (max-width: 500px) {
    font-size: 10px;
    margin-top: 10px;
  }
`;

const PriceTag = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  margin-top: 15px;
  align-items: center;
`;

const Price = styled.span`
  font-size: 20px;
  font-weight: bold;
  margin-right: 10px;
  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
`;

const Discount = styled.span`
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: bold;
  letter-spacing: 0.5px;
  background: #ffd67057;
  color: #ff9770;
  @media screen and (max-width: 500px) {
    padding: 3px 8px;
    font-size: 12px;
  }
`;

const PriceAfter = styled.span`
  position: absolute;
  left: 0;
  top: 30px;
  text-decoration: line-through;
  color: #6c757d;
  font-size: 17px;
  @media screen and (max-width: 500px) {
    font-size: 13px;
  }
`;

const ButtonGroup = styled.div`
  margin-top: 20px;
  display: flex;
  @media screen and (max-width: 500px) {
    flex-direction: column;
    height: 120px;
    justify-content: space-evenly;
  }
`;
const Counting = styled.div`
  display: flex;
  align-items: center;
  background: #edf2fb;
  border-radius: 5px;
  @media screen and (max-width: 500px) {
    margin-bottom: 5px;
    justify-content: space-between;
  }
`;
const Button = styled.button`
  margin-left: 20px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  color: white;
  background: #ff6d00;
  border-radius: 5px;
  font-size: 14px;
  &:hover,
  &:active {
    background: #0077b6;
  }
  & svg {
    margin-right: 10px;
    font-size: 18px;
    transition: 0s all;
  }
  @media screen and (max-width: 500px) {
    padding: 7px 20px;
    margin-top: 5px;
    margin-left: 0px;
    justify-content: center;
  }
`;

const More = styled.button`
  padding: 12px 20px;
  border-radius: 5px;
  background: transparent;
  display: flex;
  justify-content: center;
  &:hover,
  &:active {
    background: #fff1ce;
  }
  & svg {
    font-size: 20px;
    color: #ff9770;
  }
  @media screen and (max-width: 500px) {
    padding: 7px 20px;
  }
`;
const Result = styled.div`
  width: 100px;
  text-align: center;
  background: transparent;
  @media screen and (max-width: 500px) {
    width: 35px;
  }
`;

const ColorList = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
`;

const SelectColor = styled.span`
  font-size: 16px;
  @media screen and (max-width: 500px) {
    font-size: 13px;
  }
`;

const LayerColor = styled.div`
  margin-left: 20px;
  display: flex;
`;

const ColorP = styled.div`
  height: 10px;
  width: 10px;
  padding: 10px;
  border-radius: 50%;
  background: black;
  margin: 0 7px;
  background: ${props => props.colorlist};
  border: 3px solid transparent;
  &:focus-within {
    border: 3px solid blueviolet;
  }
  @media screen and (max-width: 500px) {
    height: 5px;
    width: 5px;
    padding: 7px;
  }
`;

export default function Details() {
  const [result, setResult] = useState(0);

  function handlePlus() {
    let hasil = result;
    hasil = result + 1;

    setResult(hasil);
  }

  const handleMinus = () => {
    if (result < 1) {
      setResult(0);
    } else {
      let hasil = result;
      hasil = result - 1;

      setResult(hasil);
    }
  };

  const handleResult = () => {
    if (result <= 0) {
      alert("Anda belum memesan");
    } else {
      alert(`Terimakasih sudah memsan ${result} buah barang`);
    }
  };

  return (
    <Container>
      <CompanyName>Product Company | Nike</CompanyName>
      <NameProduct>Nike Air Jordan | Limited Edition</NameProduct>
      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, similique maiores
        molestias mollitia obcaecati eum iusto. Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. At, delectus.
      </Description>
      <PriceTag>
        <Price>Rp550.000,00</Price>
        <Discount>50%</Discount>
        <PriceAfter>Rp1.100.00,00</PriceAfter>
      </PriceTag>
      <ColorList>
        <SelectColor>Select Color :</SelectColor>
        <LayerColor>
          <ColorP tabIndex="1" colorlist="#008CFF"></ColorP>
          <ColorP tabIndex="1" colorlist="#303231"></ColorP>
          <ColorP tabIndex="1" colorlist="#BD011A"></ColorP>
          <ColorP tabIndex="1" colorlist="#4A512F"></ColorP>
        </LayerColor>
      </ColorList>
      <ButtonGroup>
        <Counting>
          <More onClick={handleMinus}>
            <FiMinus />
          </More>
          <Result>{result}</Result>
          <More onClick={handlePlus}>
            <FiPlus />
          </More>
        </Counting>
        <Button onClick={handleResult}>
          <FiShoppingCart /> Add to Cart
        </Button>
      </ButtonGroup>
    </Container>
  );
}
