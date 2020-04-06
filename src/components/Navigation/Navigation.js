import React from "react"

import {
  StyledNav,
  Hamburger,
  StyledUl,
  StyledLi,
} from "components/Navigation/Navigation.styles.js"

const Navigation = ({ executeScroll, refs }) => {
  return (
    <StyledNav>
      <Hamburger />
      <StyledUl>
        <StyledLi onClick={() => executeScroll(refs.aboutMe)}>O mnie</StyledLi>

        <StyledLi onClick={() => executeScroll(refs.skills)}>
          Umiejętności
        </StyledLi>

        <StyledLi onClick={() => executeScroll(refs.projects)}>
          Projekty
        </StyledLi>

        <StyledLi onClick={() => executeScroll(refs.contact)}>Kontakt</StyledLi>
      </StyledUl>
    </StyledNav>
  )
}

export default Navigation
