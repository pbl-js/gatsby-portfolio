import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

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
    allDatoCmsProject(filter: { id: { eq: $projectId } }) {
      edges {
        node {
          title
          paragraph
          photos {
            originalId
            fluid(maxWidth: 1200) {
              ...GatsbyDatoCmsFluid
            }
          }
          technologies {
            id
            technologyItem
          }
        }
      }
    }
  }
`

const ProjectLayout = ({ data }) => {
  const cmsData = data.allDatoCmsProject.edges[0].node
  return (
    <>
      <Sidebar>
        <ContentGrid>
          <NavigationWrapper>
            <TransitionCoverLink
              length={1}
              delay={0.5}
              to={`/projects/timer-pomodoro`}
            >
              <CircleButton>
                <Home />
              </CircleButton>
            </TransitionCoverLink>

            <div>
              <CircleButton secondary>
                <LeftArrow />
              </CircleButton>
              1/4
              <CircleButton secondary>
                <RightArrow />
              </CircleButton>
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
          <Image fluid={item.fluid} />
          //   <p>{item.originalId}</p>
        ))}
      </Gallery>
    </>
  )
}

export default ProjectLayout
