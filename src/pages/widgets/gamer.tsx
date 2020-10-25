import React, { useState } from "react"
import styled from "styled-components"
import Layout from "../../components/layout"
import {
  NotableFigure,
  searchFigures,
} from "../../components/widgets/gamer/api"
import Autosuggest, {
  InputProps,
  RenderInputComponent,
  RenderSuggestion,
  RenderSuggestionsContainer,
  SuggestionsFetchRequestedParams,
} from "react-autosuggest"

const SuggestionContainer = styled.div`
  width: 100%;
  ul {
    margin-top: 0;
    list-style-type: none;
    padding-left: 0;
  }
`

const renderSuggestionContainer: RenderSuggestionsContainer = params => {
  return (
    <SuggestionContainer {...params.containerProps}>
      {params.children}
    </SuggestionContainer>
  )
}

const SuggestionDiv = styled.div`
  font-size: 16px;
  line-height: 1;
  border: 1px solid black;
  padding: 5px 10px;

  p {
    min-width: 100%;
    width: min-content;
  }

  p small {
    font-size: 12px;
  }
`

const renderSuggestion: RenderSuggestion<NotableFigure> = (suggestion, _) => {
  return (
    <SuggestionDiv>
      <p>{suggestion.name}</p>
      <p>
        <small>{suggestion.description}</small>
      </p>
    </SuggestionDiv>
  )
}

// The inputProps override the styled components one, so we have to be a little clever
const StyledInput = styled.input`
  width: 100%;
  margin-bottom: 0;
  box-sizing: border-box;
`

const renderInput: RenderInputComponent<NotableFigure> = inputProps => {
  // types don't quite match here but whatever
  return <StyledInput {...(inputProps as any)} />
}

const GamerHeader = styled.h1`
  font-size: 38px;
  text-align: center;
`

const GamerWidget = () => {
  const [suggestValue, setSuggestValue] = useState<string>("")
  const [suggestions, setSuggestions] = useState<NotableFigure[]>([])

  const fetchSuggestions = (params: SuggestionsFetchRequestedParams) => {
    searchFigures(params.value).then(figures => {
      setSuggestions(figures)
    })
  }

  const suggestProps: InputProps<NotableFigure> = {
    placeholder: "Enter a name...",
    value: suggestValue,
    onChange: (_, params) => {
      setSuggestValue(params.newValue)
    },
  }

  return (
    <Layout>
      <GamerHeader>Were They A Gamer?</GamerHeader>
      <Autosuggest
        suggestions={suggestions}
        getSuggestionValue={(suggestion: NotableFigure) => suggestion.name}
        onSuggestionsFetchRequested={fetchSuggestions}
        onSuggestionsClearRequested={() => setSuggestions([])}
        renderSuggestionsContainer={renderSuggestionContainer}
        renderSuggestion={renderSuggestion}
        renderInputComponent={renderInput}
        inputProps={suggestProps}
      />
    </Layout>
  )
}

export default GamerWidget
