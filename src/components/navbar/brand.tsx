import { Link } from "gatsby"
import React, { useEffect, useState } from "react"

import styled from "styled-components"

const BrandContainer = styled.div`
  display: flex;
  align-items: baseline;
  margin-right: auto;
`

const Brand = styled(Link)`
  margin-right: 1ch;
  text-decoration: none;
  color: inherit;
`

const TAGLINES = ["dot com", "made this"]

const NavbarBrand = () => {
  const [tagline, setTagline] = useState<string | null>("")

  useEffect(() => {
    setTagline(TAGLINES[Math.floor(Math.random() * TAGLINES.length)])
  }, [])

  return (
    <BrandContainer>
      <Brand to="/">
        <h1>Kevin Trieu</h1>
      </Brand>
      {tagline && <p>{tagline}</p>}
    </BrandContainer>
  )
}

export default NavbarBrand
