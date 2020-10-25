import Layout from "../../components/layout"

import React from "react"
import WidgetCard from "../../components/widgets/widget-card"

const Widgets = () => {
  return (
    <Layout>
      <h1>Widgets</h1>
      <p>I'm only paying for one domain, so any one-offs I do will go here.</p>
      <WidgetCard name="Were They A Gamer?" path="/widgets/gamer">
        <p>
          For any notable person in history, the question must be asked: were
          they a gamer?
        </p>
      </WidgetCard>
    </Layout>
  )
}

export default Widgets
