import styled from "styled-components"

export const BackgroundWrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.color.navyBlue};
  overflow: hidden;
`

export const StyledWrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
  padding: 150px 50px;

  @media ${({ theme }) => theme.device.tablet} {
    padding: 150px 30px;
  }
`

export const StyledArticle = styled.article`
  width: 100%;
  display: grid;
  grid-gap: 150px;

  @media ${({ theme }) => theme.device.tablet} {
    grid-gap: 30px;
  }
`
