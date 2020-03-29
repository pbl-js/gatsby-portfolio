import styled from "styled-components"

export default styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme, orange }) =>
    orange ? theme.color.orange : theme.color.white};
  letter-spacing: 3px;
  position: relative;
  text-transform: uppercase;
  text-align: ${({ center }) => (center ? "center" : "left")};
  margin-bottom: 60px;

  @media ${({ theme }) => theme.device.laptop} {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`
