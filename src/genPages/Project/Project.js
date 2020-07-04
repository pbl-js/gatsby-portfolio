import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import slugify from "slugify"
import { Link } from "gatsby"
import SEO from "components/SEO"

import { Home } from "@styled-icons/entypo/Home"
import { LeftArrow } from "@styled-icons/boxicons-solid/LeftArrow"
import { RightArrow } from "@styled-icons/boxicons-solid/RightArrow"

import H2 from "components/reuse/H2/H2"
import H3 from "components/reuse/H3/H3"
import SmallButton from "components/reuse/SmallButton/SmallButton"
import Paragraph from "components/reuse/Paragraph/Paragraph"
import TransitionCoverLink from "components/reuse/TransitionCoverLink/TransitionCoverLink"

import {
  Sidebar,
  ContentGrid,
  NavigationWrapper,
  Gallery,
  TechnologiesWrapper,
  Divider,
  CircleButton,
  TechnologyItem,
} from "genPages/Project/Project.style.js"

//$slug: String! - wymagana zmienna
export const query = graphql`
  query querySingleArticle($projectId: String!) {
    datoCmsProject(id: { eq: $projectId }) {
      title
      description
      paragraph
      photos {
        originalId
        url
        fluid(maxWidth: 1200) {
          ...GatsbyDatoCmsFluid
        }
      }
      technologies {
        id
        technologyItem
      }
    }

    allDatoCmsProject {
      edges {
        node {
          title
        }
      }
    }
  }
`

const ProjectLayout = ({ data }) => {
  const cmsData = data.datoCmsProject
  const links = data.allDatoCmsProject.edges.map(({ node: { title } }) => {
    return slugify(title, { lower: true })
  })
  const actualLink = links.indexOf(slugify(cmsData.title, { lower: true }))

  const canNext = actualLink === links.length - 1 ? true : false
  const canBack = actualLink === 0 ? true : false

  return (
    <>
      <SEO
        title={cmsData.title}
        description={cmsData.description}
        image={cmsData.photos[0].url}
      />
      <Sidebar>
        <ContentGrid>
          <NavigationWrapper>
            <TransitionCoverLink length={1} delay={0} to="/">
              <CircleButton>
                <Home />
              </CircleButton>
            </TransitionCoverLink>

            <div>
              <Link
                to={
                  canBack
                    ? `/projects/${links[actualLink]}`
                    : `/projects/${links[actualLink - 1]}`
                }
              >
                <CircleButton secondary disable={canBack}>
                  <LeftArrow />
                </CircleButton>
              </Link>

              {`${actualLink + 1} / ${links.length}`}

              <Link
                to={
                  canNext
                    ? `/projects/${links[actualLink]}`
                    : `/projects/${links[actualLink + 1]}`
                }
              >
                <CircleButton secondary disable={canNext}>
                  <RightArrow />
                </CircleButton>
              </Link>
            </div>
          </NavigationWrapper>

          <H2>{cmsData.title}</H2>
          <Paragraph>{cmsData.paragraph}</Paragraph>

          <H3>Technologie</H3>
          <TechnologiesWrapper>
            {cmsData.technologies.map(item => (
              <TechnologyItem key={item.id}>
                {item.technologyItem}
              </TechnologyItem>
            ))}
          </TechnologiesWrapper>

          <Divider />

          <SmallButton secondary>Wersja live</SmallButton>
        </ContentGrid>
      </Sidebar>

      <Gallery>
        {cmsData.photos.map(item => (
          <div key={item.originalId}>
            <Image fluid={item.fluid} />
          </div>
        ))}
      </Gallery>
    </>
  )
}

export default ProjectLayout
