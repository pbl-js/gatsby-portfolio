import React from "react"
import H1 from "components/reuse/H1/H1"
import H2 from "components/reuse/H2/H2"

import { ReactLogo } from "@styled-icons/fa-brands/ReactLogo"
import { Nodejs } from "@styled-icons/boxicons-logos/Nodejs"
import { Adobe } from "@styled-icons/boxicons-logos/Adobe"

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

const Skills = ({ forwardedRef }) => {
  return (
    <BackgroundWrapper>
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

              <StyledUl primary>
                <li>React | HOOKS</li>
                <li>CSS | SASS | BEM</li>
                <li>styled-components</li>
                <li>Redux | redux-thunk</li>
                <li>React router</li>
                <li>Axios</li>
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
    </BackgroundWrapper>
  )
}

export default Skills
