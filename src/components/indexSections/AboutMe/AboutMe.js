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
  AniBackground,
} from "components/indexSections/AboutMe/AboutMe.styles.js"

const animation = (background, sectionWrapper, galleryItems) => {
  const tl = gsap.timeline()
  console.log(galleryItems)

  tl.fromTo(background, { x: "-100%" }, { duration: 0.5, x: "0%" })
    .fromTo(background, { x: "0%" }, { duration: 0.5, x: "100%" })
    .to(sectionWrapper, { autoAlpha: 1, x: 0, duration: 0.5 })
    .to(
      galleryItems,
      { autoAlpha: 1, scale: 1, duration: 0.5, stagger: 0.1 },
      1
    )
}

const Aboutme = ({ forwardedRef, aboutMe }) => {
  const intersectionRef = useRef(null)
  const background = useRef(null)
  const sectionWrapperRef = useRef(null)
  const galleryRef = useRef(null)

  console.log(aboutMe)

  const [runed, setRuned] = useState(false)

  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  })

  useEffect(() => {
    if (intersection && intersection.intersectionRatio > 0.5 && !runed) {
      animation(
        background.current,
        sectionWrapperRef.current,
        galleryRef.current.children
      )
      setRuned(true)
    }

    if (!runed) {
      gsap.set(background.current, { x: "-100%" })
      gsap.set(sectionWrapperRef.current, { autoAlpha: 0, x: -100 })
      gsap.set(galleryRef.current.children, { autoAlpha: 0, scale: 0.5 })
    }
  })

  return (
    <BackgroundWrapper ref={forwardedRef} ref={intersectionRef}>
      <MainWrapper>
        <StyledArticle>
          <ContentWrapper ref={sectionWrapperRef}>
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

          <Gallery ref={galleryRef}>
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
      <AniBackground ref={background} />
    </BackgroundWrapper>
  )
}

export default Aboutme
