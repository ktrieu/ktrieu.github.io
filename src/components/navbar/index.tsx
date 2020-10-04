import React from "react"

import styled from "styled-components"
import NavbarBrand from "./brand"
import NavbarItem from "./item"

const NavbarNav = styled.nav`
  border-bottom: 1px solid black;
  padding-left: 15px;
  padding-right: 15px;

  display: flex;
  align-items: center;
`

const Navbar: React.FC = () => {
  return (
    <NavbarNav>
      <NavbarBrand />
      <NavbarItem to="/projects" text="Projects" />
      <NavbarItem to="/widgets" text="Widgets" />
    </NavbarNav>
  )
}

export default Navbar
