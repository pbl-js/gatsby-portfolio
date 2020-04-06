import React from "react"

import H1 from "components/reuse/H1/H1"
import {
  StyledWrapper,
  FormWrapper,
  StyledInput,
  StyledTextArea,
  StyledButton,
} from "components/indexSections/Contact/Contact.styles.js"

const Contact = ({ forwardedRef }) => {
  // const [email, setEmail] = useState("")
  // const [message, setMessage] = useState("")

  return (
    <StyledWrapper ref={forwardedRef}>
      <H1 center orange>
        <span>{"<"}</span> Kontakt <span>{"/>"}</span>
      </H1>

      <FormWrapper>
        <StyledInput type="email" placeholder="Twój email" />
        <StyledTextArea placeholder="Zostaw wiadomość" />
        <StyledButton>Wyślij</StyledButton>
      </FormWrapper>
    </StyledWrapper>
  )
}

export default Contact
