import styled from "styled-components"
import { fontSize, fontWeight } from "utils/typography"
import { StyledIconBase } from "@styled-icons/styled-icon"

export const BackgroundWrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.color.greyPrimary};
  overflow: hidden;
`

export const StyledWrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
`

export const StyledArticle = styled.article`
  padding: 150px 50px;
  width: 100%;

  @media ${({ theme }) => theme.device.tablet} {
    padding: 150px 30px;
  }
`

export const SectionsWrapper = styled.div`
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

export const StyledSection = styled.section`
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
`

export const StyledUl = styled.ul`
  margin-top: 20px;
  margin-left: 20px;
  line-height: 250%;
  font-size: ${fontSize.s};
  font-weight: ${fontWeight.regular};
  display: grid;
  overflow: hidden;

  @media ${({ theme }) => theme.device.laptop} {
    grid-template-columns: auto auto;
  }

  @media ${({ theme }) => theme.device.mobileL} {
    grid-template-columns: auto;
  }
`

export const SectionHeaderWrapper = styled.header`
  display: flex;
  align-items: center;
`

export const IconStyleWrapper = styled.div`
  ${StyledIconBase} {
    width: 40px;
    margin-right: 15px;
  }
`
