import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Project, { ProjectQuery } from "../components/project"

interface ProjectsQuery {
  slugline: {
    childMarkdownRemark: ProjectQuery
  }
  electoralCodex: {
    childMarkdownRemark: ProjectQuery
  }
}

const Projects = () => {
  const data = useStaticQuery<ProjectsQuery>(graphql`
    query {
      slugline: file(relativePath: { eq: "slugline.md" }) {
        childMarkdownRemark {
          ...Project
        }
      }
      electoralCodex: file(relativePath: { eq: "electoral-codex.md" }) {
        childMarkdownRemark {
          ...Project
        }
      }
    }
  `)

  return (
    <Layout>
      <Project project={data.slugline.childMarkdownRemark} />
      <hr />
      <Project project={data.electoralCodex.childMarkdownRemark} />
    </Layout>
  )
}

export default Projects
