import React, { useEffect, useState } from "react"
import {
  NotableFigure,
  searchFigures,
} from "../../components/widgets/gamer/api"

const GamerWidget = () => {
  const [data, setData] = useState<NotableFigure[] | null>(null)

  useEffect(() => {
    searchFigures("John Cena")
      .then(figures => {
        setData(figures)
      })
      .catch(err => {
        alert(err.message)
      })
  }, [])

  return data ? <pre>{JSON.stringify(data, null, 2)}</pre> : null
}

export default GamerWidget
