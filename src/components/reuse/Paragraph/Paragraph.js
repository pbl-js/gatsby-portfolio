import styled from "styled-components"

export default styled.p`
  font-size: ${({ theme }) => theme.fontSize.xs};
  line-height: 150%;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.color.greyTertiary};
`
