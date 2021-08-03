import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { IoMdCheckmarkCircleOutline } from "react-icons/io"
import { FaRegLightbulb } from "react-icons/fa"

const Testimonials = () => {
  const data = useStaticQuery(graphql`
    query TestimonialImageQuery {
      allFile(
        filter: {
          ext: { regex: "/(jpg)|(png)|(jpeg)/" }
          name: { in: ["testimonial-1", "testimonial-2"] }
        }
      ) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const TestimonialImages = () => {
    return data?.allFile.edges.map((item, index) => (
      <Images key={index} fluid={item.node.childImageSharp.fluid} />
    ))
  }

  return (
    <TestimonialsContainer>
      <Topline>Testimonials</Topline>
      <Description>What other people saying</Description>
      <ContentWrapper>
        <ColumnOne>
          <Testimonial>
            <IoMdCheckmarkCircleOutline
              css={`
                font-size: 2em;
                color: #3fffa8;
                margin-bottom: 1rem;
              `}
            />
            <h3>Johne Doe</h3>
            <p>
              Best vocation ever my life Nulla magna sunt sunt est non eu
              consequat ut aliquip laborum. Deserunt deserunt tempor qui minim.
              Veniam tempor labore tempor minim enim esse fugiat ullamco. Ipsum
              est esse voluptate fugiat sit aliqua irure tempor sit. Do
              exercitation culpa id ea reprehenderit.
            </p>
          </Testimonial>
          <Testimonial>
            <FaRegLightbulb
              css={`
                font-size: 2em;
                color: #f9b19b;
                margin-bottom: 1rem;
              `}
            />
            <h3>Sean Penn Doe</h3>
            <p>
              Best vocation ever my life Nulla magna sunt sunt est non eu
              consequat ut aliquip laborum. Deserunt deserunt tempor qui minim.
              Veniam tempor labore tempor minim enim esse fugiat ullamco. Ipsum
              est esse voluptate fugiat sit aliqua irure tempor sit. Do
              exercitation culpa id ea reprehenderit.
            </p>
          </Testimonial>
        </ColumnOne>
        <ColumnTwo>
          <TestimonialImages />
        </ColumnTwo>
      </ContentWrapper>
    </TestimonialsContainer>
  )
}

export default Testimonials

const TestimonialsContainer = styled.div`
  width: 100%;
  background: #fcfcfc;
  color: #000;
  padding: 5rem calc((100vw - 1300px) / 2);
  height: 100%;
`
const Topline = styled.p`
  color: #077bf1;
  font-size: 1rem;
  padding-left: 2rem;
  margin-bottom: 0.75rem;
`
const Description = styled.p`
  text-align: start;
  padding-left: 2rem;
  margin-bottom: 4rem;
  font-size: clamp(1.5rem, 5vw, 2rem);
  font-weight: bold;
`
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0rem 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
const ColumnOne = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`
const Testimonial = styled.div`
  padding-top: 1rem;
  padding-right: 2rem;

  h3 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 3vw, 1.75rem);
    font-style: italic;
  }

  p {
    color: #3b3b3b;
  }
`

const ColumnTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  margin-top: 2rem;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`

const Images = styled(Img)`
  height: 100%;
  border-radius: 10px;
`
