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

const Skills = ({ skills }) => {
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
  }, [runed, setRuned, intersection])

  // CMS data
  const [frontendSkills] = skills.filter(
    item => item.node.header.toLowerCase() === "frontend"
  )

  const [backendSkills] = skills.filter(
    item => item.node.header.toLowerCase() === "backend"
  )

  const [designSkills] = skills.filter(
    item => item.node.header.toLowerCase() === "design"
  )

  return (
    <BackgroundWrapper ref={intersectionRef} id="skillsSection">
      <StyledWrapper>
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
                <H2>{frontendSkills.node.header}</H2>
              </SectionHeaderWrapper>

              <StyledUl primary ref={frontendUlRef}>
                {frontendSkills.node.skillList.map(skill => (
                  <li key={skill.id}>{skill.title}</li>
                ))}
              </StyledUl>
            </StyledSection>

            <StyledSection>
              <SectionHeaderWrapper>
                <IconStyleWrapper>
                  <Nodejs />
                </IconStyleWrapper>
                <H2>{backendSkills.node.header}</H2>
              </SectionHeaderWrapper>

              <StyledUl ref={backendUlRef}>
                {backendSkills.node.skillList.map(skill => (
                  <li key={skill.id}>{skill.title}</li>
                ))}
              </StyledUl>
            </StyledSection>

            <StyledSection>
              <SectionHeaderWrapper>
                <IconStyleWrapper>
                  <Adobe />
                </IconStyleWrapper>
                <H2>{designSkills.node.header}</H2>
              </SectionHeaderWrapper>

              <StyledUl ref={designUlRef}>
                {designSkills.node.skillList.map(skill => (
                  <li key={skill.id}>{skill.title}</li>
                ))}
              </StyledUl>
            </StyledSection>
          </SectionsWrapper>
        </StyledArticle>
      </StyledWrapper>
    </BackgroundWrapper>
  )
}

export default Skills
