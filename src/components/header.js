import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { menuData } from "./data/menuData"

import styled from "styled-components"
import { FaBars } from "react-icons/fa"
import { Button } from "./Button"

const Header = () => {
  return (
    <Nav>
      <NavLink to={`/`}>Home</NavLink>
      <Bars />
      <NavMenu>
        {menuData.map(item => (
          <NavLink to={`/${item.link}`} key={item.link}>
            {item.title}
          </NavLink>
        ))}
      </NavMenu>
      <NavBtn>
        <Button primary="true" round="true" to={`/`}>
          Book a Flight
        </Button>
      </NavBtn>
    </Nav>
  )
}

const Nav = styled.nav`
  background: transparent;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc(100vw-1300px / 2);
  position: relative;
  z-index: 100;
`

const NavLink = styled(Link)`
  display: flex;
  height: 100%;
  color: #fff;
  text-decoration: none;
  padding: 0 1rem;
  align-items: center;
  cursor: pointer;
`

const Bars = styled(FaBars)`
  display: none;
  color: #ffffff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.6rem;
    cursor: pointer;
  }
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 3rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1.5rem;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export default Header
