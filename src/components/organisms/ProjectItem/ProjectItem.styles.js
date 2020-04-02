import styled, { css } from "styled-components"
import Image from "gatsby-image"

export const MainWrapper = styled.section`
  margin-top: ${({ isEven }) => (isEven ? "0px" : "30px")};
  width: 100%;
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: ${({ isEven }) => (isEven ? "flex-start" : "flex-end")};
`

export const ContentWrapper = styled.div`
  width: calc(50% + 50px);
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(30px, -30px);
  color: white;

  ${({ isEven }) =>
    isEven &&
    css`
      left: auto;
      right: 0;
      top: 50%;
      transform: translate(0, -50%);
      /* width: 50%; */
    `}
`

export const InnerContentWrapper = styled.div`
  position: relative;
  z-index: 20;
  display: grid;
  grid-gap: 30px;
  padding: 30px;
  padding-right: 110px;
  background-color: ${({ theme }) => theme.color.greySecondary};

  button {
    width: 150px;
  }

  ${({ isEven }) =>
    isEven &&
    css`
      padding-left: 80px;
      padding-right: 30px;
    `}
`

export const OrangeSpan = styled.span`
  position: absolute;
  z-index: 10;
  bottom: -20px;
  left: -20px;
  width: calc(100% - 90px);
  height: ${({ isEven }) => (isEven ? "30%" : "100%")};
  background-color: ${({ theme }) => theme.color.orange};
`

export const StyledImage = styled(Image)`
  /* position: absolute !important; */
  right: 0;
  top: 0;
  z-index: 30;
  width: 50%;
  /* height: 100%; */
  max-height: 450px;
  filter: grayscale(100%);
  transition: filter 0.3s;

  ${MainWrapper}:hover & {
    filter: grayscale(0%);
  }

  ${({ isEven }) =>
    isEven &&
    css`
      left: 0;
    `}
`