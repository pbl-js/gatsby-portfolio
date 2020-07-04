import { css } from "styled-components"

export const scrollbar = css`
  ::-webkit-scrollbar {
    width: 10px;
    z-index: 10;
    background: ${({ theme }) => theme.color.navyBlue};
    border-left: 1px solid ${({ theme }) => theme.color.greySecondary};
  }

  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.color.orange};
  }
`
