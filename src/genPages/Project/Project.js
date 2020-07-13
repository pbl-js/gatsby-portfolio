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
  StyledContent,
  ButtonWrapper,
} from "genPages/Project/Project.style.js"

//$slug: String! - wymagana zmienna
export const query = graphql`
  query querySingleArticle($projectId: String!) {
    datoCmsProject(id: { eq: $projectId }) {
      title
      description
      paragraph
      livelink
      githublink
      photos {
        originalId
        url
        fluid(maxWidth: 1200) {
          ...GatsbyDatoCmsFluid
        }
      }
      technologies {
        technologyItem {
          id
          technologyItem
        }
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

          <Divider />
          <StyledContent
            dangerouslySetInnerHTML={{ __html: cmsData.paragraph }}
          />

          <H3>Zastosowane technologie</H3>
          <TechnologiesWrapper>
            {cmsData.technologies.map(item => (
              <TechnologyItem key={item.technologyItem.id}>
                {item.technologyItem.technologyItem}
              </TechnologyItem>
            ))}
          </TechnologiesWrapper>

          <Divider />

          <ButtonWrapper>
            <a
              href={cmsData.livelink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SmallButton>Wersja live</SmallButton>
            </a>

            <a
              href={cmsData.githublink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SmallButton secondary>Github</SmallButton>
            </a>
          </ButtonWrapper>
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
