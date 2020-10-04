import React from "react"
import Layout from "../components/layout"

import styled from "styled-components"
import { Link } from "gatsby"
import Contact from "../components/contact"

const IntroDropCap = styled.p`
  font-size: 56px;
`

const Main: React.FC = () => {
  return (
    <Layout>
      <IntroDropCap>Hi, I'm Kevin.</IntroDropCap>
      <p>
        I'm a software developer with web development experience in React,
        Django, and Node.js, and I go to the University of Waterloo for Computer
        Science. <br />
        Outside the web, I'm also interested in computer graphics and data
        visualization. <br />
        If you want to know what I've been up to, my resume is{" "}
        <Link to="/resume">here</Link>, and there's some more info down below.
      </p>
      <Contact />
    </Layout>
  )
}

export default Main
