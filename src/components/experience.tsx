import React from "react"
import { graphql } from "gatsby"

import styled from "styled-components"

export const query = graphql`
  fragment Experience on MarkdownRemark {
    frontmatter {
      employer
      dates
    }
    html
  }
`

export interface ExperienceQuery {
  frontmatter: {
    employer: string
    dates: string
  }
  html: string
}

const ExperienceEmployer = styled.h3`
  margin-bottom: 0.5em;
`

const ExperienceDate = styled.p`
  margin-top: 0;
`

export interface ExperienceProps {
  experience: ExperienceQuery
}

const Experience: React.FC<ExperienceProps> = props => {
  return (
    <div>
      <ExperienceEmployer>
        {props.experience.frontmatter.employer}
      </ExperienceEmployer>
      <ExperienceDate>{props.experience.frontmatter.dates}</ExperienceDate>
      <div dangerouslySetInnerHTML={{ __html: props.experience.html }}></div>
    </div>
  )
}

export default Experience
