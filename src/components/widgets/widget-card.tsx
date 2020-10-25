import React from "react"
import styled from "styled-components"

import { Link } from "gatsby"

const WidgetCardContainer = styled.div`
  margin: 1em 0;
  border-radius: 5px;
  border: 1px solid black;
  padding: 1em;
`

interface WidgetCardProps {
  name: string
  path: string
}

const WidgetCard: React.FC<WidgetCardProps> = props => {
  return (
    <WidgetCardContainer>
      <Link to={props.path}>
        <h3>{props.name}</h3>
      </Link>
      <hr />
      {props.children}
    </WidgetCardContainer>
  )
}

export default WidgetCard
