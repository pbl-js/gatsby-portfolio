import styled from "styled-components"
import { fontSize, fontWeight } from "utils/typography"

export default styled.h1`
  font-size: ${fontSize.xxl};
  font-weight: ${fontWeight.bold};
  color: ${({ theme, orange }) =>
    orange ? theme.color.orange : theme.color.white};
  letter-spacing: 3px;
  position: relative;
  text-transform: uppercase;
  text-align: ${({ center }) => (center ? "center" : "left")};
  margin-bottom: 60px;

  span {
    color: ${({ theme, orange }) =>
      orange ? theme.color.white : theme.color.orange};
  }

  @media ${({ theme }) => theme.device.laptop} {
    font-size: ${fontSize.xl};
  }
`
