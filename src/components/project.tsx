import { graphql } from "gatsby"
import { FluidObject } from "gatsby-image"
import React from "react"
import Img from "gatsby-image"

import styled from "styled-components"

export const query = graphql`
  fragment Project on MarkdownRemark {
    frontmatter {
      name
      link
      projectImage {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    html
  }
`

export interface ProjectQuery {
  frontmatter: {
    name: string
    link: string
    projectImage: {
      childImageSharp: {
        fluid: FluidObject
      }
    }
  }
  html: string
}

const ProjectTitle = styled.h3`
  margin-bottom: 0.5em;
`

const ProjectLink = styled.a`
  margin-top: 0;
`

interface ProjectProps {
  project: ProjectQuery
}

const Project: React.FC<ProjectProps> = props => {
  return (
    <div>
      <ProjectTitle>{props.project.frontmatter.name}</ProjectTitle>
      <ProjectLink href={props.project.frontmatter.link}>
        {props.project.frontmatter.link}
      </ProjectLink>
      <div dangerouslySetInnerHTML={{ __html: props.project.html }} />
    </div>
  )
}

export default Project
