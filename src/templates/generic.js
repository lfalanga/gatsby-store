import React from "react"

import Layout from "../components/layout"

export default function Generic({ pageContext }) {
  return (
    <Layout>
      <div>
        <div>
          <h1>{pageContext.title}</h1>
          <h2>{pageContext.description}</h2>
        </div>
      </div>
    </Layout>
  )
}
