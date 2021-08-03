import React from "react"
import styled from "styled-components"
import { GiEarthAmerica } from "react-icons/gi"
import { MdAirplanemodeActive, MdTimer } from "react-icons/md"
import { FaMoneyCheck } from "react-icons/fa"

const DestinationIcon = () => {
  return (
    <GiEarthAmerica
      css={`
        color: #047bf1;
      `}
    />
  )
}

const LastYearIcon = () => {
  return (
    <MdAirplanemodeActive
      css={`
        color: #f3a82e;
      `}
    />
  )
}
const BestDeal = () => {
  return (
    <FaMoneyCheck
      css={`
        color: #f34f2e;
      `}
    />
  )
}
const FastestSupport = () => {
  return (
    <MdTimer
      css={`
        color: #3af576;
      `}
    />
  )
}

const statsData = [
  {
    icon: <DestinationIcon />,
    title: "Over 100 Destinations",
    desc: "Travel to 100 unique Destination",
  },
  {
    icon: <LastYearIcon />,
    title: "1 Million Trips Made",
    desc: "Over 1 Million Trips completed last year",
  },
  {
    icon: <BestDeal />,
    title: "Fastest Support",
    desc: "Access our support team 24/7",
  },
  {
    icon: <FastestSupport />,
    title: "Best Deals",
    desc: "We offer best prices",
  },
]
const Stats = () => {
  const StatBoxes = () => {
    return statsData.map((data, index) => (
      <StatBox>
        <Icon>{data.icon} </Icon>
        <Title>{data.title} </Title>
        <Desc>{data.desc} </Desc>
      </StatBox>
    ))
  }

  return (
    <StatsContainer>
      <Heading>Why Choose Us</Heading>
      <Wrapper>
        <StatBoxes />
      </Wrapper>
    </StatsContainer>
  )
}

export default Stats

const StatsContainer = styled.div`
  width: 100%;
  background: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem calc((100vw - 1300px) / 2);
`
const Heading = styled.h1`
  text-align: center;
  font-size: clamp(1.5rem, 5vw, 2rem);
  margin-bottom: 3rem;
  padding: 0rem 2rem;
`
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`
const StatBox = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem;
`

const Icon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`
const Title = styled.p`
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  margin-bottom: 0.5rem;
`
const Desc = styled.div``
