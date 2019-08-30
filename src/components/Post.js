import React from 'react'
import uuid from 'uuid'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Post = ({ postData }) => {
  console.log('postData:', postData)
  let { title, date, description, link, tags } = postData.node.frontmatter
  let imgSrc = postData.node.frontmatter.featuredImage.childImageSharp.fluid
  return (
    <div>
      <p>{date}</p>
      <Title>{title}</Title>
      <p>{description}</p>
      <a href={link}>Visit Site</a>

      <ul>
        {tags.map(tag => (
          <li key={uuid()}>{tag}</li>
        ))}
      </ul>

      <div>
        <Img fluid={imgSrc} alt="" />
      </div>
    </div>
  )
}

export default Post

const Title = styled.h2`
  font-family: 'Savate';
`
