import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import JSONData from "../content/navigator.json"

const Navigator = () => (
  <Layout>
    <h1>{JSONData.title}</h1>
    <ul>
      {JSONData.links.map((data, index) => {
        return <a href={`${data.url}`}>{data.text + " | "}</a>
      })}
    </ul>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="JSON at buildtime" />

export default Navigator
