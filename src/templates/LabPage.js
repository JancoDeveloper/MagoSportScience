import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PoseNet from 'react-posenet'

// Export Template for use in CMS preview
export const LabPageTemplate = ({ title, subtitle, featuredImage, body }) => (
  <main className="Home">
    <section className="section">
      <div className="container">
        <h2>Test Alpha MagoBikeFit</h2>
        <h3>
          Identificación de puntos clave del cuerpo (Recomendado ver en PC){' '}
        </h3>
        <PoseNet />
      </div>
    </section>
  </main>
)

// Export Default HomePage for front-end
const LabPage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <LabPageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default LabPage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query LabPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredImage
      }
    }
  }
`
