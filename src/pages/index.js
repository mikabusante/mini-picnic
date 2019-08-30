import React from 'react'
import uuid from 'uuid'
import { graphql } from 'gatsby'

import styled from 'styled-components'
import Global from '../utils/Global'
import Post from '../components/Post'

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <>
      <Global />
      <div>
        <Heading>mini picnic</Heading>

        {posts.map(post => (
          <Post key={uuid()} postData={post} />
        ))}
      </div>
    </>
  )
}

export default IndexPage

const Heading = styled.h1`
  font-family: 'BioRhyme Expanded';
`

export const query = graphql`
  query postQuert {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            date
            description
            link
            tags
            featuredImage {
              id
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
