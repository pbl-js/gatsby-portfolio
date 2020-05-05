import styled from "styled-components"
import SmallButton from "components/reuse/SmallButton/SmallButton"

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

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 150px;

  @media ${({ theme }) => theme.device.laptop} {
    grid-template-columns: 1fr;
    grid-gap: 30px;
  }
`

export const InnerContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto auto auto 1fr;
  grid-gap: 50px;
  h1 {
    margin-bottom: 0;
  }
`

export const ContactWrapper = styled.div`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-size: ${({ theme }) => theme.fontWeight.semiBold};

  a {
    color: white;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  svg {
    color: ${({ theme }) => theme.color.orange};
    width: 40px;
    margin-right: 20px;
  }
`

export const FormWrapper = styled.form`
  position: relative;
  z-index: 1;
  min-height: 400px;
  width: 100%;
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
