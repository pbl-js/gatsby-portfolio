import styled from "styled-components"
import { fontSize, fontWeight } from "utils/typography"
import SmallButton from "components/reuse/SmallButton/SmallButton"
import { scrollbar } from "utils/mixins"

export const Sidebar = styled.div`
  position: fixed;
  overflow-y: auto;
  top: 0;
  right: 0;
  width: 450px;
  height: 100%;
  padding: 50px;
  background-color: ${({ theme }) => theme.color.greyPrimary};

  ${scrollbar}

  @media ${({ theme }) => theme.device.laptop} {
    width: 100%;
  }
`

export const ContentGrid = styled.div`
  display: grid;
  grid-gap: 20px;
`

export const NavigationWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
  div {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 10px;
    align-items: center;
    color: ${({ theme }) => theme.color.greyTertiary};
  }
`

export const TechnologiesWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  color: ${({ theme }) => theme.color.greyTertiary};
  margin-right: -10px;

  li {
    margin-bottom: 10px;
    margin-right: 10px;
  }
`

export const TechnologyItem = styled.li`
  padding: 5px 10px;
  background-color: ${({ theme }) => theme.color.greySecondary};
  font-size: ${fontSize.xxs};
  flex-grow: 1;
  text-align: center;
`

export const Divider = styled.span`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.color.greySecondary};
  margin-bottom: 5px;
`

export const Gallery = styled.div`
  height: 100vh;
  margin-right: 30%;
  width: calc(100% - 450px);
  ${scrollbar}
  overflow-y: auto;
  display: grid;
  grid-gap: 30px;
  padding: 30px 0;

  div {
    padding: 0 30px;
  }

  @media ${({ theme }) => theme.device.laptop} {
    display: none;
  }
`
export const CircleButton = styled(SmallButton)`
  width: 40px;
  height: 40px;
  padding: 0;
  border-radius: ${({ disable }) => (disable ? 0 : "100%")};
  border: 0;
  cursor: ${({ disable }) => (disable ? "auto " : "pointer")};

  :hover {
    background-color: ${({ theme, secondary, disable }) =>
      secondary && (disable ? "transparent" : theme.color.greySecondary)};
    svg {
      color: ${({ theme, disable }) =>
        disable ? theme.color.greyTertiary : theme.color.white};
    }
  }

  svg {
    color: ${({ theme, secondary }) =>
      secondary ? theme.color.greyTertiary : theme.color.white};
    width: 50%;
  }
`

export const ButtonWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr;
  a {
    text-decoration: none;
    outline: 0;
  }
`

export const StyledContent = styled.div`
  font-size: ${fontSize.xs};
  line-height: 150%;
  font-weight: ${fontWeight.regular};
  color: ${({ theme }) => theme.color.greyTertiary};
  margin-bottom: -20px;

  p {
    margin-bottom: 20px;
    text-align: justify;
  }

  h3 {
    margin: 10px 0;
    color: white;
  }
`
