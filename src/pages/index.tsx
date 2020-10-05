import React from "react"
import Layout from "../components/layout"

import styled from "styled-components"
import { graphql, Link, useStaticQuery } from "gatsby"
import Contact from "../components/contact"
import { desktopOnly, mobileOnly } from "../../utils/breakpoints"
import Img, { FixedObject } from "gatsby-image"
import Experience, { ExperienceQuery } from "../components/experience"

const IntroContainer = styled.div`
  ${desktopOnly`
    display: flex;
    margin: 0 -1em;
  `}

  margin-bottom: 2em;
`
const IntroCol = styled.div`
  flex: 50%;

  ${desktopOnly`
    padding: 0 1em;
  `}

  &.hide-mobile {
    ${mobileOnly`
      display: none;
    `}
  }
`

const IntroHello = styled.p`
  font-size: 56px;
`

const BodyContainer = styled.div`
  ${desktopOnly`
    max-width: 800px;
  `}
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2em;
`

interface MainPageQuery {
  introImage: {
    childImageSharp: {
      fixed: FixedObject
    }
  }
  setterExperience: {
    childMarkdownRemark: ExperienceQuery
  }
  secretMissionExperience: {
    childMarkdownRemark: ExperienceQuery
  }
}

const Main: React.FC = () => {
  const data = useStaticQuery<MainPageQuery>(graphql`
    query {
      introImage: file(relativePath: { eq: "intro.jpg" }) {
        childImageSharp {
          fixed(width: 500, height: 500, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      setterExperience: file(relativePath: { eq: "setter.md" }) {
        childMarkdownRemark {
          ...Experience
        }
      }
      secretMissionExperience: file(relativePath: { eq: "secret-mission.md" }) {
        childMarkdownRemark {
          ...Experience
        }
      }
    }
  `)

  return (
    <Layout>
      <IntroContainer>
        <IntroCol>
          <IntroHello>Hi, I'm Kevin.</IntroHello>
          <p>
            I'm a software developer with web development experience in React,
            Django, and Node.js, and I go to the University of Waterloo for
            Computer Science.
          </p>
          <p>
            Outside the web, I'm also interested in computer graphics and data
            visualization.
          </p>
          <p>
            If you want to know what I've been up to, my resume is{" "}
            <Link to="/resume">here</Link>, and there's some more info down
            below.
          </p>
        </IntroCol>
        <IntroCol className="hide-mobile">
          <Img fixed={data.introImage.childImageSharp.fixed} />
        </IntroCol>
      </IntroContainer>
      <BodyContainer>
        <h1>Experience</h1>
        <Experience experience={data.setterExperience.childMarkdownRemark} />
        <hr />
        <Experience
          experience={data.secretMissionExperience.childMarkdownRemark}
        />
      </BodyContainer>
    </Layout>
  )
}

export default Main
