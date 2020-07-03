import React, { useState } from "react"
import axios from "axios"
import { useFormik } from "formik"
import * as Yup from "yup"

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

const Contact = ({ contacts }) => {
  const [submiting, setSubmiting] = useState(false)
  const [messageConfirm, setMessageConfirm] = useState("")

  const initialValues = {
    email: "",
    message: "",
  }

  const onSubmit = values => {
    setSubmiting(true)
    setMessageConfirm("")

    axios
      .post(
        "https://us-central1-gatsby-portfolio-a09a3.cloudfunctions.net/sendEmail",
        formik.values
      )
      .then(res => {
        setSubmiting(false)
        setMessageConfirm("Wiadomość wysłana poprawnie")
      })
      .catch(err => {
        setSubmiting(false)
        setMessageConfirm("Problem z wysłaniem wiadomości")
      })
  }

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Podaj adres email")
      .email("Niepoprawny email"),
    message: Yup.string().required("Podaj treść wiadomości"),
  })

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  })

  return (
    <StyledWrapper id="contactSection">
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

        <FormWrapper onSubmit={formik.handleSubmit}>
          <StyledInput
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
          />

          <StyledTextArea
            id="message"
            name="message"
            placeholder="Message"
            onChange={formik.handleChange}
            value={formik.values.message}
            onBlur={formik.handleBlur}
          />

          {formik.errors.email && formik.touched.email && (
            <div>{formik.errors.email}</div>
          )}
          {formik.errors.message && formik.touched.message && (
            <div>{formik.errors.message}</div>
          )}

          <StyledButton disable={submiting} type="submit">
            {submiting ? "Wysyłanie" : "Wyślij"}
          </StyledButton>

          {messageConfirm && (
            <div style={{ textAlign: "center" }}>{messageConfirm}</div>
          )}
        </FormWrapper>
      </Container>
    </StyledWrapper>
  )
}

export default Contact
