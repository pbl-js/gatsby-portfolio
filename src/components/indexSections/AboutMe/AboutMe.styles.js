import styled from "styled-components"
import { darken } from "polished"

import dots from "assets/images/dots.svg"

export const BackgroundWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.color.greyPrimary};
`

export const AniBackground = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100vw;
  height: 100%;
  background-color: ${({ theme }) => darken(0.03, theme.color.greyPrimary)};
`

export const MainWrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
`

export const StyledArticle = styled.article`
  padding: 150px 50px;
  width: 100%;
  display: flex;
`

export const ContentWrapper = styled.div`
  width: 55%;
  padding-right: 100px;
  margin: auto 0;
  p {
    margin-bottom: 40px;
  }

  @media ${({ theme }) => theme.device.laptop} {
    width: 100%;
    padding-right: 0;
  }
`

export const StyledSection = styled.section`
  margin-bottom: 40px;
  position: relative;

  h2 {
    margin-bottom: 20px;
  }
`

export const Gallery = styled.div`
  position: relative;
  width: 45%;
  margin: auto 0;

  @media ${({ theme }) => theme.device.laptop} {
    display: none;
  }
`

export const ImageWrapper = styled.div`
  width: 60%;
  margin-left: auto;

  :nth-child(1) {
    margin-right: 10%;
    position: relative;

    &::before {
      position: absolute;
      top: -30px;
      right: -45px;
      content: "";
      display: block;
      width: 120px;
      height: 120px;
      background-image: url(${dots});
      background-repeat: no-repeat;
      background-size: 100% 100%;
      filter: invert(100%) sepia(100%) saturate(1%) hue-rotate(305deg)
        brightness(103%) contrast(101%);
    }
  }

  :nth-child(2) {
    margin-top: -35%;
    margin-right: 100%;
  }

  :nth-child(3) {
    position: relative;
    margin-top: -35%;
  }

  :nth-last-child(1) {
    &::before {
      position: absolute;
      bottom: -30px;
      left: -45px;
      /* z-index: 5; */
      content: "";
      display: block;
      width: 120px;
      height: 120px;
      background-image: url(${dots});
      background-repeat: no-repeat;
      background-size: 100% 100%;
      filter: invert(68%) sepia(55%) saturate(488%) hue-rotate(3deg)
        brightness(98%) contrast(93%);
    }
  }
`
// https://codepen.io/sosuke/pen/Pjoqqp - generator
//           ? `invert(68%) sepia(55%) saturate(488%) hue-rotate(3deg) brightness(98%) contrast(93%);`
