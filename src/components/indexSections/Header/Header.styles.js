import styled from "styled-components"
import Image from "gatsby-image"
import { fontSize, fontWeight } from "utils/typography"

export const BackgroundWrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.color.navyBlue};
  overflow: hidden;
`

export const StyledWrapper = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
`

export const OrangeDiv = styled.div`
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

export const StyledImg = styled(Image)`
  position: absolute !important;
  width: 55vh;
  right: 0;
  bottom: 0;
  z-index: 1;
  transform: translateX(40%);

  @media ${({ theme }) => theme.device.laptopL} {
    width: 40vh;
  }

  @media ${({ theme }) => theme.device.laptop} {
    width: 25vh;
  }

  @media ${({ theme }) => theme.device.tablet} {
    display: none;
  }
`

export const Container = styled.div`
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

export const InnerWrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

export const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;
  margin-top: 30px;

  @media ${({ theme }) => theme.device.mobileM} {
    grid-template-columns: auto;
  }
`

export const NameSurname = styled.h1`
  position: relative;
  font-size: ${fontSize.xxxl};
  text-transform: uppercase;
  text-align: right;
  color: ${({ theme }) => theme.color.orange};
  letter-spacing: 3px;
  overflow: hidden;

  @media ${({ theme }) => theme.device.laptop} {
    font-size: ${fontSize.xxl};
  }

  .nameText {
    visibility: hidden;
  }
`

export const JobTitle = styled.h2`
  position: relative;
  overflow: hidden;
  font-size: ${fontSize.xxl};
  font-weight: ${fontWeight.regular};
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: right;
  color: ${({ theme }) => theme.color.white};
  margin-top: 10px;

  @media ${({ theme }) => theme.device.laptop} {
    font-size: ${fontSize.l};
  }

  .positionText {
    visibility: hidden;
  }
`

export const AniSpan = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.orange};
  /* visibility: hidden; */
  transform: translateX(101%);
`
