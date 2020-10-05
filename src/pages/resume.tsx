import React from "react"
import Layout from "../components/layout"

import styled from "styled-components"

const PdfFrame = styled.iframe`
  width: 100vh;
  height: 90vh;
`

const Resume: React.FC = () => {
  return (
    <Layout>
      <PdfFrame src="https://drive.google.com/file/d/1N5NAYh3aPssIx_jIQS7ZojGSXI_mxoI1/preview" />
    </Layout>
  )
}

export default Resume
