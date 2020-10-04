import React from "react"
import { Helmet } from "react-helmet"

import styled, { createGlobalStyle } from "styled-components"
import { desktopOnly, mobileOnly } from "../../utils/breakpoints"

import Navbar from "./navbar"

const GlobalStyle = createGlobalStyle`
	@import url("https://fonts.googleapis.com/css2?family=Aleo:ital@0;1&family=Bebas+Neue&display=swap");

	body {
		font-family: "Aleo";
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-family: "Bebas Neue";
	}

	body {
		margin: 0;

		${desktopOnly`
			font-size: 22px;
		`}
	}
`

const Container = styled.div`
  padding: 15px;
  margin-left: auto;
  margin-right: auto;

  ${mobileOnly`
		max-width: 750px;
	`};

  ${desktopOnly`
		max-width: 970px;
	`};
`

const Layout: React.FC = props => {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Aleo:ital@0;1&family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      <Navbar />
      <Container>{props.children}</Container>
    </>
  )
}

export default Layout
