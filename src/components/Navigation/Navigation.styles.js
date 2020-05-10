import styled from "styled-components"
import { fontSize, fontWeight } from "utils/typography"
import { Menu } from "@styled-icons/entypo/Menu"

export const StyledNav = styled.nav`
  position: absolute;
  top: 50px;
  right: 50px;
  z-index: 4;

  @media ${({ theme }) => theme.device.tablet} {
    top: 20px;
    right: 20px;
  }
`

export const Hamburger = styled(Menu)`
  width: 70px;
  display: none;
  cursor: pointer;

  @media ${({ theme }) => theme.device.tablet} {
    display: block;
  }
`

export const StyledUl = styled.ul`
  display: flex;
  list-style: none;

  @media ${({ theme }) => theme.device.tablet} {
    display: none;
  }
`

export const StyledLi = styled.li`
  position: relative;
  margin-left: 50px;
  text-decoration: none;
  color: ${({ theme }) => theme.color.white};
  font-size: ${fontSize.m};
  font-weight: ${fontWeight.bold};
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    position: absolute;
    bottom: -15px;
    left: 50%;
    width: 0%;
    height: 5px;
    transform: translateX(-50%);
    background-color: ${({ theme }) => theme.color.orange};
    transition: 0.2s;
  }

  :hover {
    &::after {
      width: 80%;
      color: red;
    }
  }

  @media ${({ theme }) => theme.device.laptop} {
    font-size: ${fontSize.m};
  }
`
