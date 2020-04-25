import styled from "styled-components"
import SmallButton from "components/reuse/SmallButton/SmallButton"

export const Sidebar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 450px;
  height: 100%;
  padding: 50px;
  background-color: ${({ theme }) => theme.color.greyPrimary};

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

  li {
    margin-bottom: 10px;
    margin-right: 10px;
  }
`

export const TechnologyItem = styled.li`
  padding: 5px 10px;
  background-color: ${({ theme }) => theme.color.greySecondary};
  font-size: ${({ theme }) => theme.fontSize.xxs};
`

export const Divider = styled.span`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.color.greySecondary};
  margin-bottom: 5px;
`

export const Gallery = styled.div`
  margin-right: 30%;
  width: calc(100% - 450px);
  display: grid;
  grid-gap: 20px;

  @media ${({ theme }) => theme.device.laptop} {
    display: none;
  }
`
export const CircleButton = styled(SmallButton)`
  width: 40px;
  height: 40px;
  padding: 0;
  border-radius: 100%;
  border: 0;

  :hover {
    background-color: ${({ theme, secondary }) =>
      secondary && theme.color.greySecondary};
    svg {
      color: ${({ theme }) => theme.color.white};
    }
  }

  svg {
    color: ${({ theme, secondary }) =>
      secondary ? theme.color.greyTertiary : theme.color.white};
    width: 50%;
  }
`
