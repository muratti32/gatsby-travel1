import React from "react"
import styled from "styled-components"
import { Button } from "./Button"
import EmailBg from "../images/emailBg.jpg"

const Email = () => {
  return (
    <EmailContainer>
      <EmailContent>
        <h1>Get Access to Exclusive Offers</h1>
        <p>Signup for your newlines below to get $100 off your first trip</p>
        <form action="#">
          <FormWrap>
            <label htmlFor="email">
              <input type="email" placeholder="Enter your email" id="email" />
              <Button
                as="button"
                type="submit"
                primary="true"
                round="true"
                css={`
                  color: #fff;
                  height: 48px;
                  @media screen and (max-width: 400px) {
                  }
                  @media screen and (max-width: 768px) {
                    width: 350px;
                  }
                `}
              >
                Sign Up
              </Button>
            </label>
          </FormWrap>
        </form>
      </EmailContent>
    </EmailContainer>
  )
}

export default Email

const EmailContainer = styled.div`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 35%,
      rgba(0, 0, 0, 0.1) 100%
    ),
    url(${EmailBg}) no-repeat center;
  width: 100%;
  height: 450px;
  background-size: cover;
  padding: 5rem calc((100vw - 1300px) / 2);
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  color: #fff;
`
const EmailContent = styled.div`
  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 3vw, 2.5rem);
  }

  p {
    margin-bottom: 1rem;
    font-size: clamp(0.8rem, 1.5vw, 1.5rem);
  }
  label {
  }
`
const FormWrap = styled.div`
  input {
    padding: 1rem 1.5rem;
    outline: none;
    border-radius: 50px;
    width: 350px;
    height: 48px;
    border: none;
    margin-right: 1rem;

    @media screen and (max-width: 768px) {
      padding: 0rem 1rem;
      margin-bottom: 1rem;
      margin-right: 0rem;
    }
  }
`
