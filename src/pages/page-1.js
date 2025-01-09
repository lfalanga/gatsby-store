import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const FirstPage = () => (
  <Layout>
    <h1>Hi from the first page</h1>
    <p>Welcome to page 1</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Page one" />

export default FirstPage
