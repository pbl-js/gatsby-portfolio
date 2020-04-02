import React from "react"

import Button from "components/atoms/Button"
import Navigation from "components/organisms/Navigation/Navigation"
import {
  StyledWrapper,
  OrangeDiv,
  StyledImg,
  Container,
  InnerWrapper,
  ButtonWrapper,
  NameSurname,
  JobTitle,
} from "components/organisms/indexSections/Header/Header.styles.js"

const Header = ({ executeScroll, refs, image }) => {
  return (
    <>
      <StyledWrapper>
        <OrangeDiv>
          <StyledImg fluid={image} />
        </OrangeDiv>
        <Navigation refs={refs} executeScroll={executeScroll} />
        <Container>
          <InnerWrapper>
            <NameSurname>paweł Miłczak</NameSurname>
            <JobTitle>frontend developer</JobTitle>
            <ButtonWrapper>
              <Button secondary>Pobierz CV</Button>
              <Button onClick={() => executeScroll(refs.projects)}>
                Zobacz projekty
              </Button>
            </ButtonWrapper>
          </InnerWrapper>
        </Container>
      </StyledWrapper>
    </>
  )
}

export default Header
