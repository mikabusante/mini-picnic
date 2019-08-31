import React, { useState } from 'react'
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
      <Wrapper>
        <Header>
          <Heading href="/">mini picnic</Heading>

          <Description>
            A collection of nice websites,
            <br /> hand picked by{' '}
            <Link href="https://mikabusante.com" target="_blank">
              Mika Busante
            </Link>{' '}
            .
          </Description>
        </Header>

        {posts.map(post => (
          <Post key={uuid()} postData={post} />
        ))}
      </Wrapper>
    </>
  )
}

export default IndexPage

const Wrapper = styled.div`
  padding: 7vh 5vw;

  @media (min-width: 745px) {
    padding: 8vh 7vw 8vh 5vw;
  }
`
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: top;
  flex-wrap: wrap;
`
const Heading = styled.a`
  font-family: 'BioRhyme Expanded';
  font-size: 2.5rem;
  white-space: nowrap;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;

  :visited {
    color: var(--black);
  }

  :hover {
    color: #${Math.floor(Math.random() * 16777215).toString(16)};
  }
`
const Description = styled.p`
  font-family: 'Karla';
  margin: 1.5rem 0 7vh 0;
  font-size: 1.5rem;
  text-align: right;

  @media (max-width: 520px) {
    text-align: left;
  }
`

const Link = styled.a`
  font-family: 'Karla';
  font-weight: 800;
  color: var(--black);
  margin-top: 1.5rem;
  text-decoration: none;

  :visited {
    color: var(--black);
  }

  :hover {
    text-decoration: underline;
  }
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
