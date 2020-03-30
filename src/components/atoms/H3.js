import styled from "styled-components"

export default styled.h3`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  /* color: ${({ theme }) => theme.color.white}; */
  letter-spacing: 1px;
`
