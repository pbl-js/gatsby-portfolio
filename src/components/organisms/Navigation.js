import React from "react"
import styled from "styled-components"
import { Menu } from "@styled-icons/entypo/Menu"

const StyledNav = styled.nav`
  position: absolute;
  top: 50px;
  right: 50px;
  z-index: 4;

  @media ${({ theme }) => theme.device.tablet} {
    top: 20px;
    right: 20px;
  }
`

const Hamburger = styled(Menu)`
  width: 70px;
  display: none;
  cursor: pointer;

  @media ${({ theme }) => theme.device.tablet} {
    display: block;
  }
`

const StyledUl = styled.ul`
  display: flex;
  list-style: none;

  @media ${({ theme }) => theme.device.tablet} {
    display: none;
  }
`

const StyledA = styled.a`
  position: relative;
  margin-left: 50px;
  text-decoration: none;
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.bold};

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
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`

const Navigation = ({ executeScroll, refs }) => {
  return (
    <StyledNav>
      <Hamburger />
      <StyledUl>
        <li>
          <StyledA href="#" onClick={() => executeScroll(refs.aboutMe)}>
            O mnie
          </StyledA>
        </li>

        <li>
          <StyledA href="#" onClick={() => executeScroll(refs.skills)}>
            Umiejętności
          </StyledA>
        </li>

        <li>
          <StyledA href="#" onClick={() => executeScroll(refs.projects)}>
            Projekty
          </StyledA>
        </li>

        <li>
          <StyledA href="#" onClick={() => executeScroll(refs.contact)}>
            Kontakt
          </StyledA>
        </li>
      </StyledUl>
    </StyledNav>
  )
}

export default Navigation
