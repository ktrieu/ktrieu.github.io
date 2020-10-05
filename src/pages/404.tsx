import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"

const NotFound: React.FC = () => {
  return (
    <Layout>
      <h1>404.</h1>
      <p>
        The page you were looking for could not be found.{" "}
        <Link to="/">Try again?</Link>
      </p>
    </Layout>
  )
}

export default NotFound
