import styled from "styled-components"
import { fontSize, fontWeight } from "utils/typography"

export default styled.h2`
  font-size: ${fontSize.l};
  font-weight: ${fontWeight.bold};
  /* color: ${({ theme }) => theme.color.white}; */
  letter-spacing: 3px;
  text-transform: uppercase;

  @media ${({ theme }) => theme.device.tablet} {
    font-size: ${fontSize.m};
  }
`
