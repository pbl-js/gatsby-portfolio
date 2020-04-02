import React from "react"
import { Link } from "gatsby"
import slugify from "slugify"

import H3 from "components/atoms/H3"
import Paragraph from "components/atoms/Paragraph"
import SmallButton from "components/atoms/SmallButton"

import {
  MainWrapper,
  ContentWrapper,
  InnerContentWrapper,
  OrangeSpan,
  StyledImage,
} from "components/organisms/ProjectItem/ProjectItem.styles.js"

const ProjectItem = ({ title, photo, paragraph, isEven }) => {
  const slug = slugify(title, { lower: true })

  return (
    <Link to={`/projects/${slug}`}>
      <MainWrapper isEven={isEven}>
        <ContentWrapper isEven={isEven}>
          <InnerContentWrapper isEven={isEven}>
            <H3>{title}</H3>
            <Paragraph>{paragraph}</Paragraph>
            <SmallButton secondary>Zobacz więcej</SmallButton>
          </InnerContentWrapper>

          <OrangeSpan isEven={isEven} />
        </ContentWrapper>

        <StyledImage fluid={photo} isEven={isEven} />
      </MainWrapper>
    </Link>
  )
}

export default ProjectItem
