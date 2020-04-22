import React, { useRef, useEffect, useState } from "react"
import { Link } from "gatsby"
import slugify from "slugify"
import Image from "gatsby-image"
import gsap from "gsap"
import { useIntersection } from "react-use"

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

gsap.config({
  nullTargetWarn: false,
})

const animation = (image, content, span) => {
  const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } })

  tl.fromTo(
    [image, content, span],
    { x: "-200px", autoAlpha: 0 },
    { x: "0", autoAlpha: 1, duration: 1, stagger: 0.1 }
  )
}

const outAnimation = (image, content, span) => {
  const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } })

  tl.fromTo(
    [span, content, image],
    { x: "0", autoAlpha: 1 },
    { x: "-200px", autoAlpha: 0, duration: 0.4, stagger: 0.1 }
  )
}

const ProjectItem = ({ title, photo, paragraph, isEven }) => {
  const slug = slugify(title, { lower: true })

  const intersectionRef = useRef(null)
  const imageRef = useRef(null)
  const contentRef = useRef(null)
  const spanRef = useRef(null)

  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  })

  const [runed, setRuned] = useState(false)

  useEffect(() => {
    if (intersection && intersection.intersectionRatio > 0.3 && !runed) {
      animation(imageRef.current, contentRef.current, spanRef.current)
      setRuned(true)
    }

    if (!runed) {
      gsap.set(contentRef.current, { x: "-200px", autoAlpha: 0 })
      gsap.set(spanRef.current, { x: "-200px", autoAlpha: 0 })
      gsap.set(imageRef.current, { x: "-200px", autoAlpha: 0 })
    }
  })

  return (
    <TransitionCoverLink length={1} delay={0.5} to={`/projects/${slug}`}>
      <MainWrapper
        isEven={isEven}
        ref={intersectionRef}
        onClick={() =>
          outAnimation(imageRef.current, contentRef.current, spanRef.current)
        }
      >
        <StyledImage isEven={isEven} ref={imageRef}>
          <Image fluid={photo} />
        </StyledImage>

        <ContentWrapper isEven={isEven}>
          <InnerContentWrapper isEven={isEven} ref={contentRef}>
            <OrangeSpan isEven={isEven} ref={spanRef} />
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
