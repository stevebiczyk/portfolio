import React from "react";
import styled from "styled-components";

const Hero = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HeroBg></HeroBg>
        <HeroKInnerContainer>
          <HeroLeftContainer>
            <HeroContent>
              <HeroH1>Hi, I'm</HeroH1>
              <HeroName>Istvan</HeroName>
              <HeroP>
                I'm a Full Stack Developer. I love to build and design web
                applications.
              </HeroP>
            </HeroContent>
          </HeroLeftContainer>
          <HeroRightContainer></HeroRightContainer>
        </HeroKInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default Hero;
