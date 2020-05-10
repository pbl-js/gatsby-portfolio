import styled from "styled-components"
import { fontSize, fontWeight } from "utils/typography"

export default styled.p`
  font-size: ${fontSize.s};
  line-height: 150%;
  font-weight: ${fontWeight.regular};
  color: ${({ theme }) => theme.color.greyTertiary};
`
