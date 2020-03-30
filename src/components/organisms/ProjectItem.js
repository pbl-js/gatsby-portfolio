import React, { useState } from "react"
import styled, { css } from "styled-components"
import Image from "gatsby-image"

import H2 from "components/atoms/H2"
import H3 from "components/atoms/H3"
import Paragraph from "components/atoms/Paragraph"
import SmallButton from "components/atoms/SmallButton"

const MainWrapper = styled.section`
  margin-top: 30px;
  width: 100%;
  height: 400px;
  position: relative;
  cursor: pointer;
`

const ContentWrapper = styled.div`
  width: calc(50% + 50px);
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(30px, -30px);
`

const InnerContentWrapper = styled.div`
  position: relative;
  z-index: 20;
  display: grid;
  grid-gap: 30px;
  padding: 30px;
  padding-right: 110px;
  background-color: ${({ theme }) => theme.color.greySecondary};

  button {
    width: 150px;
  }
`

const OrangeSpan = styled.span`
  position: absolute;
  z-index: 10;
  bottom: -20px;
  left: -20px;
  width: calc(100% - 90px);
  height: 100%;
  background-color: ${({ theme }) => theme.color.orange};
`

const StyledImage = styled(Image)`
  position: absolute !important;
  right: 0;
  top: 0;
  z-index: 30;
  width: 50%;
  height: 100%;
  filter: grayscale(100%);
  transition: filter 0.3s;

  ${MainWrapper}:hover & {
    filter: grayscale(0%);
  }
`

const ProjectItem = ({
  title,
  photos,
  paragraph,
  technologies,
  description,
  isEven,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <MainWrapper>
      <ContentWrapper isEven={isEven}>
        <InnerContentWrapper>
          <H3>{title}</H3>
          <Paragraph>{paragraph}</Paragraph>
          <SmallButton secondary>Zobacz więcej</SmallButton>
        </InnerContentWrapper>

        <OrangeSpan />
      </ContentWrapper>

      <StyledImage fluid={photos[0].fluid} isEven={isEven} />
    </MainWrapper>
  )
}

export default ProjectItem
