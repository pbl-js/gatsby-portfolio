import React from "react"
import styled from "styled-components"
import H1 from "components/atoms/H1"
import H2 from "components/atoms/H2"

import { StyledIconBase } from "@styled-icons/styled-icon"
import { ReactLogo } from "@styled-icons/fa-brands/ReactLogo"
import { Nodejs } from "@styled-icons/boxicons-logos/Nodejs"
import { Adobe } from "@styled-icons/boxicons-logos/Adobe"

const StyledWrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
`

const StyledArticle = styled.article`
  padding: 150px 50px;
  width: 100%;

  @media ${({ theme }) => theme.device.tablet} {
    padding: 150px 30px;
  }
`

const SectionsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 50px;

  @media ${({ theme }) => theme.device.laptop} {
    margin-top: 60px;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    grid-gap: 30px;
  }
`

const StyledSection = styled.section`
  position: relative;
  z-index: 1;
  padding: 40px 30px;
  background-color: ${({ theme, primary }) =>
    primary ? theme.color.orange : theme.color.greySecondary};
  color: ${({ theme, primary }) =>
    primary ? theme.color.whitey : theme.color.greyTertiary};
  ${({ theme, primary }) => (primary ? theme.color.orange : "transparent")};
  border-left: 5px solid
    ${({ theme, primary }) => (primary ? "transparent" : theme.color.orange)};

  :hover {
    transform: scale(1.05);
    transition: 0.2s;
  }
`

const StyledUl = styled.ul`
  margin-top: 20px;
  margin-left: 20px;
  line-height: 230%;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  display: grid;

  @media ${({ theme }) => theme.device.laptop} {
    grid-template-columns: auto auto;
  }

  @media ${({ theme }) => theme.device.mobileL} {
    grid-template-columns: auto;
  }
`

const SectionHeaderWrapper = styled.header`
  display: flex;
  align-items: center;
`

const IconStyleWrapper = styled.div`
  ${StyledIconBase} {
    width: 40px;
    margin-right: 15px;
  }
`

const Skills = ({ forwardedRef }) => {
  return (
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
  )
}

export default Skills
