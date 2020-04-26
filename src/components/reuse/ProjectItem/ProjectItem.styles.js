import styled, { css } from "styled-components"

export const MainWrapper = styled.section`
  margin-top: ${({ isEven }) => (isEven ? "0px" : "30px")};
  width: 100%;
  cursor: pointer;
  display: flex;

  @media ${({ theme }) => theme.device.tablet} {
    flex-direction: column;
  }
`

export const ContentWrapper = styled.div`
  position: relative;
  width: 45%;
  color: white;
  transform: translateX(-60px);

  ${({ isEven }) =>
    isEven &&
    css`
      transform: translateX(30px);
    `}

    @media ${({ theme }) => theme.device.tablet} {
      width: 70%;
      left: 50%;
      margin-top: -20%;
      transform: translateX(-50%);
    } 
`

export const InnerContentWrapper = styled.div`
  position: relative;
  z-index: 20;
  top: 15%;
  display: grid;
  grid-gap: 30px;
  padding: 30px;
  padding-right: 30px;
  padding-left: 90px;
  background-color: ${({ theme }) => theme.color.greySecondary};

  button {
    width: 150px;
  }

  ${({ isEven }) =>
    isEven &&
    css`
      top: 0;
      padding-left: 30px;
      padding-right: 60px;
    `}

    @media ${({ theme }) => theme.device.tablet} {
      padding-left: 30px;
      padding-right: 30px;
    } 
`

export const OrangeSpan = styled.span`
  position: absolute;
  z-index: 10;
  height: 100%;
  width: 80%;
  top: 30px;
  left: -30px;
  display: block;
  background-color: ${({ theme }) => theme.color.orange};
`

export const StyledImage = styled.div`
  z-index: 30;
  width: 55%;
  filter: grayscale(100%);
  transition: filter 0.3s;
  ${MainWrapper}:hover & {
    filter: grayscale(0%);
  }

  ${({ isEven }) =>
    isEven &&
    css`
      order: 1;
      margin-top: 50px;
    `}

    @media ${({ theme }) => theme.device.tablet} {
      width: 100%;
      order: 0;
      z-index: 0;
    }
`
