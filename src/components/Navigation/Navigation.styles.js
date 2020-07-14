import styled from "styled-components"
import { fontSize, fontWeight } from "utils/typography"
import { Menu } from "@styled-icons/entypo/Menu"
import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline"

export const StyledNav = styled.nav``

export const Hamburger = styled(Menu)`
  position: absolute;
  z-index: 10;
  top: 20px;
  right: 20px;
  width: 70px;
  display: none;
  cursor: pointer;

  @media ${({ theme }) => theme.device.tablet} {
    display: block;
  }
`

export const Close = styled(CloseOutline)`
  position: absolute;
  z-index: 10;
  top: 20px;
  right: 20px;
  width: 70px;
  display: none;
  cursor: pointer;

  @media ${({ theme }) => theme.device.tablet} {
    display: block;
  }
`

export const DesktopNav = styled.ul`
  position: absolute;
  top: 50px;
  right: 50px;
  z-index: 4;

  display: flex;
  list-style: none;

  @media ${({ theme }) => theme.device.tablet} {
    display: none;
    top: 20px;
    right: 20px;
  }

  li {
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
  }
`

export const MobileNav = styled.ul`
  display: flex;
  transform: translateX(-101%);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.color.orange};
  list-style: none;

  li {
    padding: 20px 0;
    text-decoration: none;
    color: ${({ theme }) => theme.color.white};
    font-size: ${fontSize.xl};
    font-weight: ${fontWeight.bold};
    cursor: pointer;
    color: ${({ theme }) => theme.color.navyBlue};

    :hover {
      color: white;
    }
  }
`
