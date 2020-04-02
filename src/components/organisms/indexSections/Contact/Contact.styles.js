import styled from "styled-components"
import SmallButton from "components/atoms/SmallButton"

export const StyledWrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 150px 50px;
  overflow: hidden;

  @media ${({ theme }) => theme.device.tablet} {
    padding: 150px 30px;
  }
`

export const FormWrapper = styled.form`
  position: relative;
  z-index: 1;
  min-height: 400px;
  max-width: 650px;
  margin: 0 auto;
  padding: 40px;
  background-color: ${({ theme }) => theme.color.greySecondary};
  box-shadow: -10px 10px 0 ${({ theme }) => theme.color.orange};
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-gap: 20px;
`

export const StyledInput = styled.input`
  width: 100%;
  padding: 15px;
  background-color: ${({ theme }) => theme.color.greyPrimary};
  border: 0;
  border-bottom: 2px solid ${({ theme }) => theme.color.greyTertiary};
  color: ${({ theme }) => theme.color.greyTertiary};
  font-size: ${({ theme }) => theme.fontSize.xs};
`

export const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 15px;
  background-color: ${({ theme }) => theme.color.greyPrimary};
  border: 0;
  border-bottom: 2px solid ${({ theme }) => theme.color.greyTertiary};
  color: ${({ theme }) => theme.color.greyTertiary};
  font-size: ${({ theme }) => theme.fontSize.xs};
  resize: none;
`

export const StyledButton = styled(SmallButton)`
  margin: 0 auto;
  width: 100px;
`
