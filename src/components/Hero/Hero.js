import React from "react";
import styled from "styled-components/macro";

import { ImgSource } from "../ImgSource";

const Hero = () => {
  return (
    <Wrapper>
      <picture>
        <ImgSource type="avif" src="/images/hero-img.jpg" />
        <ImgSource type="jpeg" extension="jpg" src="/images/hero-img.jpg" />
        <HeroImage
          src="/images/hero-img.jpg"
          alt="example picture: cute cat staring at the viewer"
        />
      </picture>
      <Swoop src="/swoop.svg" alt="" />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  height: 60vh;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: hsl(0deg 0% 1%);
`;

const HeroImage = styled.img`
  display: block;
  width: 500px;
  height: 500px;
  max-height: 100%;
  object-fit: cover;
`;

const Swoop = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  /*
    Overhang by a couple px to prevent any pixel-rounding
    display issues
  */
  min-height: 50px;
  object-fit: cover;
  object-position: 0 0;
  bottom: -2px;
  width: 100%;
`;

export default Hero;
