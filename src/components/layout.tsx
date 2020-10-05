import React from "react"
import { Helmet } from "react-helmet"

import styled, { createGlobalStyle } from "styled-components"
import { desktopOnly, mobileOnly } from "../../utils/breakpoints"
import Footer from "./footer"

import Navbar from "./navbar"

const GlobalStyle = createGlobalStyle`
	@import url("https://fonts.googleapis.com/css2?family=Aleo:ital@0;1&family=Bebas+Neue&display=swap");

	body {
		font-family: "Aleo";
	}

	body {
		margin: 0;

		line-height: 1.5em;
		
		${desktopOnly`
			font-size: 22px;
		`}
	}
`

const App = styled.div`
  display: flex;
  flex-direction: column;
`

const Container = styled.div`
  flex: 1;

  padding: 15px;
  margin-left: auto;
  margin-right: auto;

  ${mobileOnly`
		max-width: 750px;
	`};

  ${desktopOnly`
		max-width: 1110px;
	`};
`

const Layout: React.FC = props => {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Aleo:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      <App>
        <Navbar />
        <Container>{props.children}</Container>
        <Footer />
      </App>
    </>
  )
}

export default Layout
