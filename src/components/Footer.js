import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinksWrapper>
        <FooterDesc>
          <h1>Explore</h1>
          <p>We strive to create the best experience for our customer</p>
        </FooterDesc>
        <FooterLinkItems>
          <FooterLinkTitle>Contact Us</FooterLinkTitle>
          <FooterLink to="/about">About</FooterLink>
          <FooterLink to="/">Contact </FooterLink>
          <FooterLink to="/">Support</FooterLink>
          <FooterLink to="/">Destinations</FooterLink>
          <FooterLink to="/">Sponsorships</FooterLink>
        </FooterLinkItems>
      </FooterLinksWrapper>
      <FooterLinksWrapper>
        <FooterLinkItems>
          <FooterLinkTitle>Videos</FooterLinkTitle>
          <FooterLink to="/">Submit Video </FooterLink>
          <FooterLink to="/">Ambassodors</FooterLink>
          <FooterLink to="/">Agency</FooterLink>
          <FooterLink to="/">Influencers</FooterLink>
        </FooterLinkItems>
        <FooterLinkItems>
          <FooterLinkTitle>Social Media</FooterLinkTitle>
          <FooterLink to="/">Instagram </FooterLink>
          <FooterLink to="/">Facebook</FooterLink>
          <FooterLink to="/">Twitter</FooterLink>
          <FooterLink to="/">Youtube</FooterLink>
        </FooterLinkItems>
      </FooterLinksWrapper>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #000;
  background-color: #fafafa;
`
const FooterLinksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const FooterDesc = styled.div`
  padding: 0rem 2rem;

  h1 {
    margin-bottom: 3rem;
    color: #f26a2e;
  }

  @media screen and (max-width: 768px) {
    padding: 2rem;
  }
`
const FooterLinkTitle = styled.h2`
  font-size: clamp(1rem, 0.8rem, 1.2rem);
  margin-bottom: 1rem;
`
const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 2rem;
`
const FooterLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: clamp(0.8rem, 1rem, 1rem);
  color: #3d3d4e;

  &:hover {
    color: #f26a2e;
    transition: 0.2s ease-out;
  }
`
