import React from 'react'
import uuid from 'uuid'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Post = ({ postData }) => {
  console.log('postData:', postData)
  let { title, date, description, link, tags } = postData.node.frontmatter
  let imgSrc = postData.node.frontmatter.featuredImage.childImageSharp.fluid

  return (
    <Wrapper>
      <Text>
        <div>
          <Date>{date}</Date>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <Link href={link}>Visit Site </Link>
        </div>

        <TagList>
          {tags.map(tag => (
            <Tag key={uuid()}>{tag}</Tag>
          ))}
        </TagList>
      </Text>

      <div>
        <DateMobile>{date}</DateMobile>
        <Image fluid={imgSrc} alt="" />
      </div>
    </Wrapper>
  )
}

export default Post

const Wrapper = styled.div`
  margin-bottom: 8rem;
  display: flex;
  flex-direction: column-reverse;

  @media (min-width: 745px) {
    display: grid;
    grid-template-columns: 300px 3fr;
    grid-gap: 5vw;
  }
`

const Text = styled.div`
  margin-top: 3.2rem;
  padding-left: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 745px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: initial;
  }
`

const Date = styled.p`
  font-family: 'Karla';

  :before {
    content: '*';
    font-size: 2rem;
  }

  @media (max-width: 745px) {
    display: none;
  }
`

const DateMobile = styled.p`
  font-family: 'Karla';

  :before {
    content: '*';
    font-size: 2rem;
  }

  @media (min-width: 745px) {
    display: none;
  }
`

const Title = styled.h2`
  font-family: 'Savate';
  font-size: 2.5rem;
`

const Description = styled.p`
  font-family: 'Karla';
  margin-top: 1rem;
  font-size: 1.75rem;
  max-width: 50vw;

  @media (min-width: 745px) {
    max-width: 90%;
  }
`

const Link = styled.a`
  font-family: 'Karla';
  font-weight: 800;
  color: black;
  display: block;
  margin-top: 1.5rem;
  font-size: 1.65rem;
  text-decoration: none;

  :visited {
    color: var(--black);
  }

  :hover {
    text-decoration: underline;
  }

  :before {
    content: '↪';
    padding-right: 3px;
    vertical-align: -4%;
    display: inline-block;

    :hover {
      text-decoration: none;
    }
  }
`

const TagList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-right: 5vw;

  @media (min-width: 745px) {
    margin-top: 3rem;
  }
`

const Tag = styled.li`
  font-family: 'Karla';
  white-space: nowrap;
  font-style: italic;
  font-size: 1.5rem;

  :before {
    content: '# ';
    font-family: 'Biorhyme Expanded';
    vertical-align: 4%;
    font-size: 1.1rem;
  }
`

const Image = styled(Img)`
  border: 2px solid var(--black);
  box-shadow: 8px 8px var(--black);
  width: 100%;
  margin-top: 1.5rem;
`
