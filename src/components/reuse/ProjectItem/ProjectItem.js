import React from "react"
import { Link } from "gatsby"
import slugify from "slugify"
import Image from "gatsby-image"

import H3 from "components/reuse/H3/H3"
import Paragraph from "components/reuse/Paragraph/Paragraph"
import SmallButton from "components/reuse/SmallButton/SmallButton"
import TransitionCoverLink from "components/reuse/TransitionCoverLink/TransitionCoverLink"

import {
  MainWrapper,
  ContentWrapper,
  InnerContentWrapper,
  OrangeSpan,
  StyledImage,
} from "components/reuse/ProjectItem/ProjectItem.styles.js"

const ProjectItem = ({ title, photo, paragraph, isEven }) => {
  const slug = slugify(title, { lower: true })

  return (
    <TransitionCoverLink length={0.8} delay={0.4} to={`/projects/${slug}`}>
      <MainWrapper isEven={isEven}>
        <StyledImage isEven={isEven}>
          <Image fluid={photo} />
        </StyledImage>

        <ContentWrapper isEven={isEven}>
          <InnerContentWrapper isEven={isEven}>
            <OrangeSpan isEven={isEven} />
            <H3>{title}</H3>
            <Paragraph>{paragraph}</Paragraph>
            <SmallButton secondary>Zobacz więcej</SmallButton>
          </InnerContentWrapper>
        </ContentWrapper>
      </MainWrapper>
    </TransitionCoverLink>
  )
}

export default ProjectItem
