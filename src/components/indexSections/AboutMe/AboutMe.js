import React, { useRef, useEffect, useState } from "react"
import Image from "gatsby-image"
import { useIntersection } from "react-use"
import { gsap } from "gsap"

import H1 from "components/reuse/H1/H1"
import Paragraph from "components/reuse/Paragraph/Paragraph"
import {
  BackgroundWrapper,
  MainWrapper,
  ContentWrapper,
  StyledArticle,
  StyledSection,
  Gallery,
  ImageWrapper,
} from "components/indexSections/AboutMe/AboutMe.styles.js"

const Aboutme = ({ aboutMe }) => {
  return (
    <BackgroundWrapper id="aboutSection">
      <MainWrapper>
        <StyledArticle>
          <ContentWrapper>
            <H1>
              <span>{"<"}</span> Poznajmy się <span>{"/>"}</span>
            </H1>

            <Paragraph>{aboutMe.paragraph}</Paragraph>

            {aboutMe.textBlocks.map(textBlock => (
              <StyledSection key={textBlock.id}>
                <h2>{textBlock.header}</h2>

                <Paragraph>{textBlock.paragraph}</Paragraph>
              </StyledSection>
            ))}
          </ContentWrapper>

          <Gallery>
            <>
              {aboutMe.gallery.map(item => (
                <ImageWrapper key={item.originalId}>
                  <Image fluid={item.fluid} />
                </ImageWrapper>
              ))}
            </>
          </Gallery>
        </StyledArticle>
      </MainWrapper>
    </BackgroundWrapper>
  )
}

export default Aboutme
