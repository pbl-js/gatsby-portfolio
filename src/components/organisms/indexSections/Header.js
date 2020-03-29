import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"

import person from "assets/images/person.png"
import Button from "components/atoms/Button"
import Navigation from "components/organisms/Navigation"

const StyledWrapper = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
`

const OrangeDiv = styled.div`
  position: absolute;
  width: 200vw;
  height: 100%;
  top: 0;
  right: calc(100% - 500px);
  background: ${({ theme }) => theme.color.orange};

  @media ${({ theme }) => theme.device.laptopL} {
    right: calc(100% - 280px);
  }

  @media ${({ theme }) => theme.device.laptop} {
    right: calc(100% - 170px);
  }

  @media ${({ theme }) => theme.device.tablet} {
    right: calc(100% - 80px);
  }

  @media ${({ theme }) => theme.device.mobileL} {
    right: calc(100% - 40px);
  }
`

const StyledImg = styled(Image)`
  position: absolute !important;
  width: 60vh;
  right: 0;
  bottom: 0;
  z-index: 1;
  transform: translateX(40%);

  @media ${({ theme }) => theme.device.laptopL} {
    width: 45vh;
  }

  @media ${({ theme }) => theme.device.laptop} {
    width: 25vh;
  }

  @media ${({ theme }) => theme.device.tablet} {
    display: none;
  }
`

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: calc(100% - 500px);
  height: 100%;
  margin-left: 500px;
  padding: 50px;

  @media ${({ theme }) => theme.device.laptopL} {
    width: calc(100% - 280px);
    margin-left: 280px;
  }

  @media ${({ theme }) => theme.device.laptop} {
    width: calc(100% - 170px);
    margin-left: 170px;
  }

  @media ${({ theme }) => theme.device.tablet} {
    width: calc(100% - 80px);
    margin-left: 80px;
    padding: 30px;
  }
`

const InnerWrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;
  margin-top: 30px;

  @media ${({ theme }) => theme.device.mobileM} {
    grid-template-columns: auto;
  }
`

const NameSurname = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xxxl};
  text-transform: uppercase;
  text-align: right;
  color: ${({ theme }) => theme.color.orange};
  letter-spacing: 3px;

  @media ${({ theme }) => theme.device.laptop} {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
`

const JobTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: right;
  color: ${({ theme }) => theme.color.white};
  margin-top: 10px;

  @media ${({ theme }) => theme.device.laptop} {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`

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
