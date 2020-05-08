import React, { useState } from "react"
import axios from "axios"

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

const Contact = ({ forwardedRef, contacts }) => {
  const [formValue, setFormValue] = useState({
    email: "",
    message: "",
  })
  const [submitting, setSubmitting] = useState(false)
  const [buttonText, setButtonText] = useState("Wyślij")
  const [errors, setErrors] = useState({
    email: "",
    message: "",
  })

  const handleChange = e => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    })
  }

  const validateEmail = email => {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
  }

  const handleBlurEmail = e => {
    const isCorrect = validateEmail(formValue.email)

    if (formValue.email === "") {
      setErrors({
        ...errors,
        email: "Podaj adres email",
      })
    } else if (!isCorrect) {
      setErrors({
        ...errors,
        email: "Niepoprawny adres email",
      })
    } else {
      setErrors({
        ...errors,
        email: "",
      })
    }
  }

  const handleBlurMessage = e => {
    if (formValue.message === "") {
      setErrors({
        ...errors,
        message: "Wpisz treść wiadomości",
      })
    } else {
      setErrors({
        ...errors,
        message: "",
      })
    }
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (!submitting) {
      console.log(formValue)

      axios
        .post(
          "https://us-central1-gatsby-portfolio-a09a3.cloudfunctions.net/sendEmail",
          formValue
        )
        .then(res => {
          setSubmitting(true)
          console.log(res)
          setButtonText("Wysłano")
        })
        .catch(err => {
          console.log(err)
          setSubmitting(true)
        })
    }
  }

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
            <a href={`mailto:${contacts.email}`}>
              <Mail />
              {contacts.email}
            </a>
          </ContactWrapper>

          <ContactWrapper>
            <a href={`tel:${contacts.phone}`}>
              <PhoneAlt />
              {contacts.phone}
            </a>
          </ContactWrapper>
        </InnerContainer>

        <FormWrapper onSubmit={handleSubmit}>
          <StyledInput
            name="email"
            placeholder="Twój email"
            value={formValue.email}
            onChange={handleChange}
            onBlur={handleBlurEmail}
          />

          <StyledTextArea
            placeholder="Zostaw wiadomość"
            name="message"
            value={formValue.message}
            onChange={handleChange}
            onBlur={handleBlurMessage}
          />

          {errors.email && <Paragraph>{errors.email}</Paragraph>}
          {errors.message && <Paragraph>{errors.message}</Paragraph>}

          <StyledButton disable={submitting} type="submit">
            {buttonText}
          </StyledButton>
        </FormWrapper>
      </Container>
    </StyledWrapper>
  )
}

export default Contact
