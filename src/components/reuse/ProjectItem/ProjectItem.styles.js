import styled, { css } from "styled-components"

export const MainWrapper = styled.section`
  margin-top: ${({ isEven }) => (isEven ? "0px" : "30px")};
  width: 100%;
  cursor: pointer;
  display: flex;
`

export const ContentWrapper = styled.div`
  position: relative;
  width: 45%;
  color: white;

  ${({ isEven }) =>
    isEven &&
    css`
      transform: translateX(30px);
    `}
`

export const InnerContentWrapper = styled.div`
  position: relative;
  z-index: 20;
  top: 15%;
  /* transform: translateY(-50%); */
  display: grid;
  grid-gap: 30px;
  padding: 30px;
  background-color: ${({ theme }) => theme.color.greySecondary};

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    height: 100%;
    width: 100%;
    display: block;
    background-color: ${({ theme }) => theme.color.greySecondary};
  }

  button {
    width: 150px;
  }

  ${({ isEven }) =>
    isEven &&
    css`
      width: 110%;
      top: 0;
      transform: translateY(0%);
      padding-left: 30px;
      padding-right: 110px;
    `}
`

export const OrangeSpan = styled.span`
  position: absolute;
  z-index: -2;
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
`
