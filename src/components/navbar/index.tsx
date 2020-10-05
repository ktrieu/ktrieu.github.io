import React from "react"

import styled from "styled-components"
import NavbarBrand from "./brand"
import NavbarItem from "./item"

const NavbarNav = styled.nav`
  border-bottom: 1px solid black;
  padding-left: 2em;
  padding-right: 2em;

  display: flex;
  align-items: center;
`

const Navbar: React.FC = () => {
  return (
    <NavbarNav>
      <NavbarBrand />
      <NavbarItem to="/resume" text="Resume" />
    </NavbarNav>
  )
}

export default Navbar
