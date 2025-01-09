import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ShopifyTest = ({data}) => (
  <Layout>
    <h1>GraphQL test</h1>
    <p>{data.site.siteMetadata.description}</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        description
      }
    }
  }
`

export const Head = () => <Seo title="Shopify" />

export default ShopifyTest
