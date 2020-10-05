import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"

import styled from "styled-components"

const FooterContainer = styled.footer`
  margin-top: auto;
  padding: 1.5em 2em;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: lightgrey;
`

const ContactIcon = styled.a`
  margin-left: 0.5em;
  margin-right: 0.5em;

  height: 2em;

  color: inherit;
`

const FooterText = styled.p`
  text-align: center;
  font-size: 0.75em;
  margin-bottom: 0;
`

interface FooterQuery {
  site: {
    buildYear: string
  }
}

const Footer: React.FC = () => {
  const data = useStaticQuery<FooterQuery>(graphql`
    query {
      site {
        buildYear: buildTime(formatString: "YYYY")
      }
    }
  `)

  return (
    <FooterContainer>
      <div>
        <ContactIcon href="mailto:kevin.trieu5813@gmail.com">
          <FaEnvelope size="2em" />
        </ContactIcon>
        <ContactIcon href="https://github.com/ktrieu">
          <FaGithub size="2em" />
        </ContactIcon>
        <ContactIcon href="https://www.linkedin.com/in/kevintrieu1/">
          <FaLinkedin size="2em" />
        </ContactIcon>
      </div>
      <FooterText>
        <a href="https://github.com/ktrieu/ktrieu.github.io">
          Written in Gatsby.js
        </a>{" "}
        | {data.site.buildYear}
      </FooterText>
    </FooterContainer>
  )
}

export default Footer
