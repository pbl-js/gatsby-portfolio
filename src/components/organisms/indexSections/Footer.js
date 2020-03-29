import React from "react"
import styled from "styled-components"

const StyledWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.color.orange};
`

const StyledFooter = styled.footer`
  min-height: 100px;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  text-align: center;
  line-height: 100px;
`

const Footer = () => {
  return (
    <StyledWrapper>
      <StyledFooter>
        <p>© 2020 Paweł Miłczak</p>
      </StyledFooter>
    </StyledWrapper>
  )
}

export default Footer
