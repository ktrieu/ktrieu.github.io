import React from "react"
import styled from "styled-components"
import { NotableFigure } from "./api"
import { percentGamersInYear } from "./gamer"

interface FigureCardProps {
  figure: NotableFigure
}

const formatChance = (chance: number, year: number) => {
  const percent = chance * 100
  if (percent === 0) {
    return (
      <p>
        was definitely not a gamer. They died in {year}, while the first video
        game was released in 1972.
      </p>
    )
  } else if (percent < 20) {
    return (
      <p>
        was probably not a gamer. We estimate a {percent.toFixed(2)}% chance
        they were a gamer.
      </p>
    )
  } else {
    return (
      <p>
        might have been a gamer. We estimate a {percent.toFixed(2)}% chance they
        were a gamer.
      </p>
    )
  }
}

const FigureCardContainer = styled.div`
  text-align: center;

  h3 {
    margin-bottom: 0.1em;
  }
`

const FigureImage = styled.img`
  max-width: 80%;
  height: auto;
  max-height: 50vh;
  margin: auto;
`

const FigureCard: React.FC<FigureCardProps> = props => {
  const endYear = props.figure.death?.getFullYear() ?? new Date().getFullYear()
  const gamerChance = percentGamersInYear(endYear)

  return (
    <FigureCardContainer>
      <FigureImage src={props.figure.image} />
      <h3>{props.figure.name}</h3>
      <p>{props.figure.description}</p>
      {formatChance(gamerChance, endYear)}
    </FigureCardContainer>
  )
}

export default FigureCard
