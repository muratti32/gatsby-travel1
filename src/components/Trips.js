import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Button } from "./Button"
import { ImLocation } from "react-icons/im"

function Trips({ heading }) {
  const data = useStaticQuery(graphql`
    query ImageQuery {
      allTripsJson {
        edges {
          node {
            alt
            button
            name
            img {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  const [imageArray, setImageArray] = useState([])

  useEffect(() => {
    setImageArray([])
  }, [])

  useEffect(() => {
    if (data) {
      data.allTripsJson.edges.forEach((element, index) => {
        const newItem = (
          <ProductCard key={index}>
            <ProductInfo>
              <TextWrap>
                <ImLocation />
                {element.node.name}
              </TextWrap>
              <Button
                to={`/trips`}
                primary="true"
                round="true"
                css={`
                  font-size: 0.9rem;
                `}
              >
                {element.node.button}
              </Button>
            </ProductInfo>
            <ProductImg
              alt={element.node.alt}
              fluid={element.node.img.childImageSharp.fluid}
            />
          </ProductCard>
        )
        setImageArray(prev => [...prev, newItem])
      })
    }
  }, [data])

  return (
    <ProductContainer>
      <ProductHeader>{heading} </ProductHeader>
      <ProductWrapper>{imageArray} </ProductWrapper>
    </ProductContainer>
  )
}

export default Trips

const ProductContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #fff;
`

const ProductHeader = styled.div`
  font-size: clamp(1rem, 5vw, 3rem);
  text-align: center;
  color: #000;
  margin-bottom: 5rem;
`
const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0.75rem;
  justify-items: center;
  padding: 0 2rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
const ProductCard = styled.div`
  line-height: 2;
  width: 100%;
  height: 500px;
  border-radius: 10px;
  transition: 0.2s ease;
  position: relative;
`

const ProductImg = styled(Img)`
  height: 100%;
  max-height: 100%;
  position: relative;
  border-radius: 10px;
  filter: brightness(75%);
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    filter: brightness(100%);
  }
`
const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0rem 2rem;
  position: absolute;
  top: 375px;
  z-index: 2;
  @media screen and (max-width: 280px) {
    padding: 0 1rem;
  }
`
const TextWrap = styled.div`
  display: flex;
  align-items: center;
  z-index: 3;
`
