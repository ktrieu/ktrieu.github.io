import React from "react"
import Layout from "../components/layout"

import styled from "styled-components"
import { Link } from "gatsby"

const IntroDropCap = styled.span`
  font-size: 56px;
`

const Main: React.FC = () => {
  return (
    <Layout>
      <IntroDropCap>Hi.</IntroDropCap>
      <p>
        I'm a software developer with web development experience in React,
        Django, and Node.js.
      </p>
      <p>
        Outside the web, I'm also interested in computer graphics and data
        visualization.
      </p>
      <p>
        If you want to know what I've been up to, my resume is{" "}
        <Link to="/resume">here</Link>, and there's some more info down below.
      </p>
    </Layout>
  )
}

export default Main
