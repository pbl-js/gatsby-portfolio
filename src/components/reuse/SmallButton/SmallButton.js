import styled from "styled-components"
import Button from "components/reuse/Button/Button"

export default styled(Button)`
  width: 100%;
  padding: 15px 0;
  font-size: ${({ theme }) => theme.fontSize.xs};
  text-align: center;
  text-decoration: none;

  @media ${({ theme }) => theme.device.tablet} {
    padding: 12px 0;
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`
