import React, { useRef, useEffect, useState } from "react"
import { useIntersection } from "react-use"
import { gsap } from "gsap"

import { ReactLogo } from "@styled-icons/fa-brands/ReactLogo"
import { Nodejs } from "@styled-icons/boxicons-logos/Nodejs"
import { Adobe } from "@styled-icons/boxicons-logos/Adobe"

import H1 from "components/reuse/H1/H1"
import H2 from "components/reuse/H2/H2"
import {
  BackgroundWrapper,
  StyledWrapper,
  StyledArticle,
  SectionsWrapper,
  StyledSection,
  StyledUl,
  SectionHeaderWrapper,
  IconStyleWrapper,
  AniBackground,
} from "components/indexSections/Skills/Skills.styles.js"

const animation = (background, sections, header) => {
  const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } })

  tl.fromTo(background.current, { x: "-100%" }, { duration: 0.5, x: "0%" })
    .fromTo(background.current, { x: "0%" }, { duration: 0.5, x: "100%" })
    .fromTo(
      [header.current, ...sections],
      { autoAlpha: 0 },
      { autoAlpha: 1, stagger: 0.1 }
    )
}

const Skills = ({ forwardedRef }) => {
  const intersectionRef = useRef(null)
  const background = useRef(null)
  const sectionWrapperRef = useRef(null)
  const header = useRef(null)

  const [runed, setRuned] = useState(false)

  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  })

  useEffect(() => {
    const sections = sectionWrapperRef.current.children

    if (intersection && intersection.intersectionRatio > 0.2 && !runed) {
      animation(background, sections, header)
      setRuned(true)
    }

    if (!runed) {
      gsap.set(background.current, { x: "-100%" })
      gsap.set([sections, header.current], { autoAlpha: 0 })
    }
  })

  return (
    <BackgroundWrapper ref={intersectionRef}>
      <StyledWrapper ref={forwardedRef}>
        <StyledArticle>
          <H1 orange center ref={header}>
            <span>{"<"}</span> Umiejętności <span>{"/>"}</span>
          </H1>

          <SectionsWrapper ref={sectionWrapperRef}>
            <StyledSection primary>
              <SectionHeaderWrapper>
                <IconStyleWrapper>
                  <ReactLogo />
                </IconStyleWrapper>
                <H2>Frontend</H2>
              </SectionHeaderWrapper>

              <StyledUl primary>
                <li>React | HOOKS</li>
                <li>CSS | SASS | BEM</li>
                <li>styled-components</li>
                <li>Redux | redux-thunk</li>
                <li>SSR | Gatsby</li>
                <li>GSAP | react-spring</li>
                <li>gatsby-transition-link</li>
              </StyledUl>
            </StyledSection>

            <StyledSection>
              <SectionHeaderWrapper>
                <IconStyleWrapper>
                  <Nodejs />
                </IconStyleWrapper>
                <H2>Backend</H2>
              </SectionHeaderWrapper>

              <StyledUl>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>Firebase</li>
                <li>HeadlessCMS | DatoCMS</li>
              </StyledUl>
            </StyledSection>

            <StyledSection>
              <SectionHeaderWrapper>
                <IconStyleWrapper>
                  <Adobe />
                </IconStyleWrapper>
                <H2>Design</H2>
              </SectionHeaderWrapper>

              <StyledUl>
                <li>Figma</li>
                <li>Photoshop</li>
                <li>AfterEffects | animacja</li>
                <li>Blender | 3D</li>
              </StyledUl>
            </StyledSection>
          </SectionsWrapper>
        </StyledArticle>
      </StyledWrapper>

      <AniBackground ref={background} />
    </BackgroundWrapper>
  )
}

export default Skills
