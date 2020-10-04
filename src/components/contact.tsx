import React from "react"

import styled from "styled-components"

import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"

const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const ContactIcon = styled.a`
  margin-left: 0.5em;
  margin-right: 0.5em;

  color: inherit;
`

const Contact: React.FC = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Contact</h1>
      <ContactContainer>
        <ContactIcon href="mailto:kevin.trieu5813@gmail.com">
          <FaEnvelope size="3em" />
        </ContactIcon>
        <ContactIcon href="https://github.com/ktrieu">
          <FaGithub size="3em" />
        </ContactIcon>
        <ContactIcon href="https://www.linkedin.com/in/kevintrieu1/">
          <FaLinkedin size="3em" />
        </ContactIcon>
      </ContactContainer>
    </>
  )
}

export default Contact
