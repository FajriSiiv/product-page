import React from "react";
import styled from "styled-components";
import { FiPlus, FiMinus, FiShoppingCart } from "react-icons/fi";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 70px;
`;

const CompanyName = styled.h5`
  font-size: 20px;
  color: #ffb703;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const NameProduct = styled.h2`
  font-size: 35px;
  line-height: 50px;
  margin-top: 15px;
`;

const Description = styled.p`
  font-size: 14px;
  color: #6c757d;
  margin-top: 20px;
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
`;

const Discount = styled.span`
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: bold;
  letter-spacing: 0.5px;
  background: #ffd67057;
  color: #ff9770;
`;

const PriceAfter = styled.span`
  position: absolute;
  left: 0;
  top: 30px;
  text-decoration: line-through;
  color: #6c757d;
  font-size: 17px;
`;

const ButtonGroup = styled.div`
  margin-top: 40px;
  display: flex;
`;
const Counting = styled.div`
  display: flex;
  align-items: center;
  background: #edf2fb;
  border-radius: 5px;
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
`;
const Result = styled.div`
  width: 100px;
  text-align: center;
  background: transparent;
`;

export default function Details() {
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
      <ButtonGroup>
        <Counting>
          <More>
            <FiMinus />
          </More>
          <Result>0</Result>
          <More>
            <FiPlus />
          </More>
        </Counting>
        <Button>
          <FiShoppingCart /> Add to Cart
        </Button>
      </ButtonGroup>
    </Container>
  );
}
