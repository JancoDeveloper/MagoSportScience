import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import PoseNet from 'react-posenet'

// Export Template for use in CMS preview
export const LabPageTemplate = ({ title, subtitle, featuredImage, body }) => (
  <main className="Lab">
    <section className="section">
      <div className="container">
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
