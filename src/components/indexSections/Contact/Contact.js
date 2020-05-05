import React from "react"

import { Mail } from "@styled-icons/entypo/Mail"
import { PhoneAlt } from "@styled-icons/fa-solid/PhoneAlt"

import H1 from "components/reuse/H1/H1"
import Paragraph from "components/reuse/Paragraph/Paragraph"
import {
  StyledWrapper,
  Container,
  InnerContainer,
  ContactWrapper,
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
      <Container>
        <InnerContainer>
          <H1 orange>
            <span>{"<"}</span> Kontakt <span>{"/>"}</span>
          </H1>

          <Paragraph>
            Wybierz jeden z poniższych sposobów, lub użyj formularza
            kontaktowego. Odpowiem najszybciej jak to możliwe.
          </Paragraph>

          <ContactWrapper>
            <a href="mailto:pblpawelmilczak@gmail.com">
              <Mail />
              pblpawelmilczak@gmail.com
            </a>
          </ContactWrapper>

          <ContactWrapper>
            <a href="tel:502 572 544">
              <PhoneAlt />
              797 792 613
            </a>
          </ContactWrapper>
        </InnerContainer>

        <FormWrapper>
          <StyledInput type="email" placeholder="Twój email" />
          <StyledTextArea placeholder="Zostaw wiadomość" />
          <StyledButton>Wyślij</StyledButton>
        </FormWrapper>
      </Container>
    </StyledWrapper>
  )
}

export default Contact
