import React from "react"
import styled from "styled-components"
import { Button } from "./Button"
const Hero = () => {
  return (
    <Container>
      <ContainerBg>
        <VideoBg src="" type="video/mp4" />
      </ContainerBg>
      <HeroContent>
        <HeroItems>
          <HeroH1>Unreal Destination</HeroH1>
          <HeroP>Out of This World</HeroP>
          <Button>Travel Now</Button>
        </HeroItems>
      </HeroContent>
    </Container>
  )
}

export default Hero

const Container = styled.div`
  height: 100vh;
  display: flex;
  background: #0c0c0c;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  position: relative;
  margin-top: -80;
`

const ContainerBg = styled.div``

const VideoBg = styled.video``

const HeroContent = styled.div``
const HeroItems = styled.div``

const HeroH1 = styled.h1``
const HeroP = styled.p``
