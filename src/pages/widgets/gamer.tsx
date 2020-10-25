import React, { useState } from "react"
import styled from "styled-components"
import Layout from "../../components/layout"
import { NotableFigure } from "../../components/widgets/gamer/api"
import Autocomplete from "../../components/widgets/gamer/autocomplete"
import FigureCard from "../../components/widgets/gamer/figure-card"

const GamerHeader = styled.h1`
  font-size: 38px;
  text-align: center;
`

const GamerWidget = () => {
  const [selectedFigure, setSelectedFigure] = useState<NotableFigure | null>(
    null
  )

  return (
    <Layout>
      <GamerHeader>Were They A Gamer?</GamerHeader>
      <Autocomplete
        onSelectFigure={figure => {
          setSelectedFigure(figure)
        }}
      />
      {selectedFigure !== null && <FigureCard figure={selectedFigure} />}
    </Layout>
  )
}

export default GamerWidget
