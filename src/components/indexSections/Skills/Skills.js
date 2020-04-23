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
} from "components/indexSections/Skills/Skills.styles.js"

const animation = (frontendLi, backendLi, designLi) => {
  const duration = 0.5
  const stagger = 0.1

  gsap.to(frontendLi, {
    autoAlpha: 1,
    x: 0,
    duration: duration,
    stagger: stagger,
  })

  gsap.to(backendLi, {
    autoAlpha: 1,
    x: 0,
    duration: duration,
    stagger: stagger,
  })

  gsap.to(designLi, {
    autoAlpha: 1,
    x: 0,
    duration: duration,
    stagger: stagger,
  })
}

const Skills = ({ forwardedRef }) => {
  const intersectionRef = useRef(null)

  const frontendUlRef = useRef(null)
  const backendUlRef = useRef(null)
  const designUlRef = useRef(null)

  const [runed, setRuned] = useState(false)

  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  })

  useEffect(() => {
    const frontendLi = frontendUlRef.current.children
    const backendLi = backendUlRef.current.children
    const designLi = designUlRef.current.children

    if (intersection && intersection.intersectionRatio > 0.2 && !runed) {
      animation(frontendLi, backendLi, designLi)
      setRuned(true)
    }

    if (!runed) {
      gsap.set([frontendLi, backendLi, designLi], {
        autoAlpha: "0",
        x: "-100%",
      })
    }
  })

  return (
    <BackgroundWrapper ref={intersectionRef}>
      <StyledWrapper ref={forwardedRef}>
        <StyledArticle>
          <H1 orange center>
            <span>{"<"}</span> Umiejętności <span>{"/>"}</span>
          </H1>

          <SectionsWrapper>
            <StyledSection primary>
              <SectionHeaderWrapper>
                <IconStyleWrapper>
                  <ReactLogo />
                </IconStyleWrapper>
                <H2>Frontend</H2>
              </SectionHeaderWrapper>

              <StyledUl primary ref={frontendUlRef}>
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

              <StyledUl ref={backendUlRef}>
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

              <StyledUl ref={designUlRef}>
                <li>Figma</li>
                <li>Photoshop</li>
                <li>AfterEffects | animacja</li>
                <li>Blender | 3D</li>
              </StyledUl>
            </StyledSection>
          </SectionsWrapper>
        </StyledArticle>
      </StyledWrapper>
    </BackgroundWrapper>
  )
}

export default Skills
