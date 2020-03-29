import React, { useState } from "react"
import styled from "styled-components"
import H1 from "components/atoms/H1"
import SmallButton from "components/atoms/SmallButton"
// import { ReactComponent as Wave } from "../assets/wave.svg";

const StyledWrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 150px 50px;
  overflow: hidden;

  @media ${({ theme }) => theme.device.tablet} {
    padding: 150px 30px;
  }
`

const SVGWrapper = styled.div`
  position: relative;
  max-width: 600px;
  margin: 0 auto;
`

const FormWrapper = styled.form`
  position: relative;
  z-index: 1;
  min-height: 400px;
  padding: 40px;
  background-color: ${({ theme }) => theme.color.greySecondary};
  box-shadow: -10px 10px 0 ${({ theme }) => theme.color.orange};
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-gap: 20px;
`

// const WaveSVG = styled(Wave)`
//   width: 350px;
//   height: 280px;
//   color: red;
//   position: absolute;
//   top: 50%;
//   right: -150px;
//   transform: translateY(-50%);
//   z-index: 0;
//   .wave {
//     fill: ${({ theme }) => theme.color.orange};
//   }
// `;

const StyledInput = styled.input`
  width: 100%;
  /* height: 40px; */
  padding: 15px;
  background-color: ${({ theme }) => theme.color.greyPrimary};
  border: 0;
  border-bottom: 2px solid ${({ theme }) => theme.color.greyTertiary};
  color: ${({ theme }) => theme.color.greyTertiary};
  font-size: ${({ theme }) => theme.fontSize.xs};
`

const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 15px;
  background-color: ${({ theme }) => theme.color.greyPrimary};
  border: 0;
  border-bottom: 2px solid ${({ theme }) => theme.color.greyTertiary};
  color: ${({ theme }) => theme.color.greyTertiary};
  font-size: ${({ theme }) => theme.fontSize.xs};
  resize: none;
`

const StyledButton = styled(SmallButton)`
  margin: 0 auto;
  width: 100px;
`

const Contact = ({ forwardedRef }) => {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  return (
    <StyledWrapper ref={forwardedRef}>
      <H1 center orange>
        <span>{"<"}</span> Kontakt <span>{"/>"}</span>
      </H1>

      <SVGWrapper>
        {/* <WaveSVG /> */}

        <FormWrapper>
          <StyledInput type="email" placeholder="Twój email" />
          <StyledTextArea placeholder="Zostaw wiadomość" />
          <StyledButton>Wyślij</StyledButton>
        </FormWrapper>
      </SVGWrapper>
    </StyledWrapper>
  )
}

export default Contact
