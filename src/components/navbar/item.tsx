import { Link } from "gatsby"
import React from "react"

import styled from "styled-components"

interface NavbarItemProps {
  to: string
  text: string
}

const ItemLink = styled(Link)`
  margin: 0 1em;
  text-decoration: none;
  color: inherit;

  &.link-active {
    text-decoration: underline;
  }

  h3 {
    margin-top: 0;
    margin-bottom: 0;
  }
`

const NavbarItem: React.FC<NavbarItemProps> = props => {
  return (
    <ItemLink to={props.to} activeClassName="link-active">
      <h3>{props.text}</h3>
    </ItemLink>
  )
}

export default NavbarItem
