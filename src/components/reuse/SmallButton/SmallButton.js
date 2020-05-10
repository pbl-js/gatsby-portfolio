import styled from "styled-components"
import Button from "components/reuse/Button/Button"
import { fontSize } from "utils/typography"

export default styled(Button)`
  width: 100%;
  padding: 15px 0;
  font-size: ${fontSize.xs};
  text-align: center;
  text-decoration: none;

  @media ${({ theme }) => theme.device.tablet} {
    padding: 12px 0;
    font-size: ${fontSize.xs};
  }
`
