import React from "react"
import Layout from "../components/layout"

import styled from "styled-components"

const PdfFrame = styled.iframe`
  margin: -15px calc(50% - 50vw);
  width: 100vw;
  height: calc(100% + 30px);
`

const Resume: React.FC = () => {
  return (
    <Layout>
      <PdfFrame src="https://drive.google.com/file/d/1N5NAYh3aPssIx_jIQS7ZojGSXI_mxoI1/preview" />
    </Layout>
  )
}

export default Resume
