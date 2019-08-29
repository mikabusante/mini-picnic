import React from 'react'
import { graphql } from 'gatsby'

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <div>
      <p>Home</p>
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query dataQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            featuredImage
            title
          }
        }
      }
    }
  }
`
