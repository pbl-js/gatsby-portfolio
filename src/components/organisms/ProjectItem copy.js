import React, { useState } from "react"
import styled from "styled-components"
import Image from "gatsby-image"

import H2 from "components/atoms/H2"
import H3 from "components/atoms/H3"
import Paragraph from "components/atoms/Paragraph"
import SmallButton from "components/atoms/SmallButton"

const StyledSection = styled.section`
  position: relative;
  background-color: ${({ theme }) => theme.color.greySecondary};
  padding: 20px;
  display: grid;
  grid-template-columns: 320px auto;
  grid-gap: 20px;
  transition: height 1s;

  :hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
    cursor: pointer;
  }

  @media ${({ theme }) => theme.device.tablet} {
    display: flex;
    flex-direction: column;
  }
`

const SectionLeftSide = styled.div`
  display: flex;
  flex-direction: column;

  @media ${({ theme }) => theme.device.tablet} {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 20px;
    margin-top: 43px;
  }

  @media ${({ theme }) => theme.device.mobileL} {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto 1fr;
    grid-gap: 20px;
    margin-top: 43px;
  }
`

const StyledH2 = styled(H2)`
  @media ${({ theme }) => theme.device.tablet} {
    position: absolute;
    top: 20px;
    left: 20px;
  }
`

const ButtonWrapper = styled.div`
  display: ${({ isOpen }) => (isOpen ? "grid" : "none")};
  grid-gap: 10px;

  @media ${({ theme }) => theme.device.tablet} {
    display: grid;
  }
`

const DescriptionButton = styled(SmallButton)`
  display: none;

  @media ${({ theme }) => theme.device.tablet} {
    display: block;
  }
`

const SectionRightSide = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledParagraph = styled(Paragraph)`
  margin-top: 10px;
  margin-bottom: 20px;
`

const ProjectPhoto = styled(Image)`
  width: 320px;
  height: 180px;
  margin-bottom: ${({ isOpen }) => isOpen && "20px"};

  @media ${({ theme }) => theme.device.tablet} {
    height: 100%;
  }

  @media ${({ theme }) => theme.device.mobileL} {
    width: 100%;
    height: auto;
    margin-bottom: 0px;
  }
`

const TechnologyWrapper = styled.ul`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 10px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;

  @media ${({ theme }) => theme.device.tablet} {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  }
`

const TechnologyItem = styled.li`
  padding: 10px 20px;
  margin-right: 10px;
  margin-bottom: 10px;
  background-color: rgba(0, 0, 0, 0.3);
  font-size: ${({ theme }) => theme.fontSize.xs};
`

const ProjectItem = ({
  title,
  photos,
  paragraph,
  technologies,
  description,
  index,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  console.log(index)

  return (
    <StyledSection onClick={() => setIsOpen(!isOpen)}>
      <SectionLeftSide>
        <ProjectPhoto fluid={photos[0].fluid} isOpen={isOpen} />

        <ButtonWrapper isOpen={isOpen}>
          <SmallButton
            as="a"
            href="https://www.w3schools.com/html/"
            onClick={e => {
              e.stopPropagation()
            }}
          >
            Wersja live
          </SmallButton>

          <SmallButton
            secondary
            as="a"
            href="https://www.w3schools.com/html/"
            onClick={e => {
              e.stopPropagation()
            }}
          >
            GitHub
          </SmallButton>

          <DescriptionButton secondary description>
            Opis projektu
          </DescriptionButton>
        </ButtonWrapper>
      </SectionLeftSide>

      <SectionRightSide>
        <StyledH2>{title}</StyledH2>

        <TechnologyWrapper isOpen={isOpen}>
          {technologies.map(item => (
            <TechnologyItem key={item.id}>{item.technologyItem}</TechnologyItem>
          ))}
        </TechnologyWrapper>

        <StyledParagraph>{paragraph}</StyledParagraph>

        {isOpen &&
          description.map(({ id, header, body }) => (
            <div key={id}>
              <H3>{header}</H3>
              <StyledParagraph>{body}</StyledParagraph>
            </div>
          ))}
      </SectionRightSide>
    </StyledSection>
  )
}

export default ProjectItem