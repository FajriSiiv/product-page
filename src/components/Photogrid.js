import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ShoesGreen from "../img/img1.jpg";
import ShoesBlue from "../img/img2.jpg";
import ShoesBlack from "../img/img3.jpg";
import ShoesRed from "../img/img4.jpg";

import styled from "styled-components";
import "../css/photogrid.css";

const Container = styled.div``;

const ImageCon = styled.div``;

export default function Photogrid() {
  return (
    <Container>
      <Carousel swipeable emulateTouch showStatus={false} showArrows={false}>
        <ImageCon>
          <img src={ShoesBlue} alt="s" />
        </ImageCon>
        <ImageCon>
          <img src={ShoesBlack} alt="s" />
        </ImageCon>
        <ImageCon>
          <img src={ShoesRed} alt="s" />
        </ImageCon>
        <ImageCon>
          <img src={ShoesGreen} alt="s" />
        </ImageCon>
      </Carousel>
    </Container>
  );
}
