import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

export default function ListProducts({ data }) {
  const products = data.products.nodes
  return (
    <Layout>
      <h1>Unfinited store products.</h1>
      <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Ante commodo proin leo augue elementum phasellus ornare. Eu arcu consectetur ut netus nascetur; ipsum dictumst. Aurna per platea ultricies lectus tempor morbi tortor. Lacus fames auctor consectetur porttitor conubia netus sodales. Aliquam auctor consequat mi in enim tellus sed. Ornare libero nulla mollis urna in ridiculus pulvinar interdum. Est egestas elit est inceptos venenatis; taciti metus.</p>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <ShopifyProductImage product={product}></ShopifyProductImage>
          </li>
        ))}
      </ul>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

function ShopifyProductImage({ product }) {
  const firstImage = product.featuredMedia.preview.image
  const placehold = "https://placehold.co/640x400"
  const eager = true

  return(
    <GatsbyImage
      alt={firstImage?.altText ?? product.title}
      image={firstImage?.gatsbyImageData ?? placehold}
      loading={eager ? "eager" : "lazy"}
    />
  )
}

export const query = graphql`
  query {
    products: allShopifyProduct {
      nodes {
        id
        title
        featuredMedia {
          preview {
            image {
              gatsbyImageData(aspectRatio: 1, width: 640)
            }
          }
        }
      }
    }
  }
`

export const Head = () => <Seo title="Shopify" />
