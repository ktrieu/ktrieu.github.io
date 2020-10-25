import axios from "axios"

export interface AutocompleteResult {
  id: string
  title: string
  pageId: number
  repository: string
  url: string
  concepturi: string
  label: string
  description: string
  match: {
    type: string
    language: string
    text: string
  }
}

export interface AutocompleteResponse {
  searchInfo: {
    search: string
  }
  search: AutocompleteResult[]
  "search-continue": number
  success: number
}

const AUTOCOMPLETE_PARAMS = {
  action: "wbsearchentities",
  format: "json",
  language: "en",
  origin: "*",
  type: "item",
}

const AUTOCOMPLETE_URL = "https://www.wikidata.org/w/api.php"

export const autocompleteSearch = async (query: string) => {
  const params = { ...AUTOCOMPLETE_PARAMS, search: query }
  return axios.get<AutocompleteResponse>(AUTOCOMPLETE_URL, {
    params: params,
  })
}

export const buildSparqlQuery = (concepturi: string) => {
  return `
  SELECT ?birth ?image ?death WHERE {
    <${concepturi}> wdt:P31 wd:Q5;
      wdt:P18 ?image;
      wdt:P569 ?birth.
      OPTIONAL{<${concepturi}> wdt:P570 ?death}.
  }
  LIMIT 1`
}

export interface SparqlColumn {
  datatype: string
  type: string
  value: string
}

export interface SparqlBinding {
  birth: SparqlColumn
  image: SparqlColumn
  death?: SparqlColumn
}

export interface SparqlResponse {
  head: {
    vars: string[]
  }
  results: {
    bindings: SparqlBinding[]
  }
}

const SPARQL_URL = "https://query.wikidata.org/sparql"

export const sparqlQuery = async (concepturi: string) => {
  const query = buildSparqlQuery(concepturi)
  return axios.get<SparqlResponse>(SPARQL_URL, {
    params: {
      query: query,
    },
  })
}

export interface NotableFigure {
  name: string
  description: string
  birth: Date
  death?: Date
  image: string
}

export const searchFigures = async (
  query: string
): Promise<NotableFigure[]> => {
  const autocompleteResults = (await autocompleteSearch(query)).data.search
  const figures: (NotableFigure | null)[] = await Promise.all(
    autocompleteResults.map(async result => {
      const query = await sparqlQuery(result.concepturi)
      if (query.data.results.bindings.length !== 1) {
        return null
      } else {
        const binding = query.data.results.bindings[0]
        return {
          name: result.label,
          description: result.description,
          birth: new Date(binding.birth.value),
          death: binding.death && new Date(binding.death.value),
          image: binding.image.value,
        }
      }
    })
  )
  return figures.filter((figure): figure is NotableFigure => figure !== null)
}
