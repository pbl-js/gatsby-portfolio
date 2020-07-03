import React from "react"
import { Link as ScrollLink } from "react-scroll"

import {
  StyledNav,
  Hamburger,
  StyledUl,
  StyledLi,
} from "components/Navigation/Navigation.styles.js"

const Navigation = () => {
  return (
    <StyledNav>
      <Hamburger />
      <StyledUl>
        <StyledLi>
          <ScrollLink
            to="aboutSection"
            smooth={true}
            duration={500}
            offset={-100}
          >
            O mnie
          </ScrollLink>
        </StyledLi>

        <StyledLi>
          <ScrollLink
            to="skillsSection"
            smooth={true}
            duration={500}
            offset={-100}
          >
            Umiejętności
          </ScrollLink>
        </StyledLi>

        <StyledLi>
          <ScrollLink
            to="projectsSection"
            smooth={true}
            duration={500}
            offset={-100}
          >
            Projekty
          </ScrollLink>
        </StyledLi>

        <StyledLi>
          <ScrollLink
            to="contactSection"
            smooth={true}
            duration={500}
            offset={-100}
          >
            Kontakt
          </ScrollLink>
        </StyledLi>
      </StyledUl>
    </StyledNav>
  )
}

export default Navigation
