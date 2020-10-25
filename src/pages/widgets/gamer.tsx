import React, { useState } from "react"
import styled from "styled-components"
import Layout from "../../components/layout"
import Autocomplete from "../../components/widgets/gamer/autocomplete"

const GamerHeader = styled.h1`
  font-size: 38px;
  text-align: center;
`

const GamerWidget = () => {
  return (
    <Layout>
      <GamerHeader>Were They A Gamer?</GamerHeader>
      <Autocomplete
        onSelectFigure={figure => {
          alert(figure.name)
        }}
      />
    </Layout>
  )
}

export default GamerWidget
