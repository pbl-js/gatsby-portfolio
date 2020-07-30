import React, { useState, useEffect, useRef, useCallback } from "react"
import { Link as ScrollLink } from "react-scroll"
import { gsap } from "gsap"

import {
  StyledNav,
  Hamburger,
  Close,
  DesktopNav,
  MobileNav,
} from "components/Navigation/Navigation.styles.js"

const Navigation = () => {
  const [open, setOpen] = useState(false)

  const mobileMenuWrapper = useRef(null)

  const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } })

  useEffect(() => {
    gsap.set(mobileMenuWrapper.current, {
      x: "-100%",
    })
    gsap.set(mobileMenuWrapper.current.querySelectorAll("li"), {
      autoAlpha: 0,
      x: -100,
    })
  }, [])

  const toggleMenu = () => {
    if (open === false) {
      document.body.style.overflow = "hidden"
      setOpen(true)

      tl.to(mobileMenuWrapper.current, {
        x: 0,
        duration: 0.5,
      }).to(
        mobileMenuWrapper.current.querySelectorAll("li"),
        {
          x: 0,
          autoAlpha: 1,
          stagger: 0.05,
          duration: 0.5,
        },
        0.25
      )
    } else if (open === true) {
      document.body.style.overflow = "unset"
      setOpen(false)

      tl.to(mobileMenuWrapper.current, {
        x: "100%",
        duration: 0.5,
        delay: 0.25,
      })
        .to(
          mobileMenuWrapper.current.querySelectorAll("li"),
          {
            autoAlpha: 0,
            x: 100,
            stagger: 0.05,
            duration: 0.5,
          },
          0
        )
        .set([mobileMenuWrapper.current], {
          x: "-100%",
        })
        .set(mobileMenuWrapper.current.querySelectorAll("li"), { x: -100 })
    }
  }

  return (
    <StyledNav>
      <Hamburger onClick={toggleMenu} />

      <DesktopNav>
        <li>
          <ScrollLink
            to="aboutSection"
            smooth={true}
            duration={500}
            offset={-100}
          >
            O mnie
          </ScrollLink>
        </li>

        <li>
          <ScrollLink
            to="skillsSection"
            smooth={true}
            duration={500}
            offset={-100}
          >
            Umiejętności
          </ScrollLink>
        </li>

        <li>
          <ScrollLink
            to="projectsSection"
            smooth={true}
            duration={500}
            offset={-100}
          >
            Projekty
          </ScrollLink>
        </li>

        <li>
          <ScrollLink
            to="contactSection"
            smooth={true}
            duration={500}
            offset={-100}
          >
            Kontakt
          </ScrollLink>
        </li>
      </DesktopNav>

      <MobileNav ref={mobileMenuWrapper}>
        <Close onClick={toggleMenu} />

        <li>
          <ScrollLink
            onClick={toggleMenu}
            to="aboutSection"
            smooth={true}
            duration={500}
            offset={-100}
          >
            O mnie
          </ScrollLink>
        </li>

        <li>
          <ScrollLink
            onClick={toggleMenu}
            to="skillsSection"
            smooth={true}
            duration={500}
            offset={-100}
          >
            Umiejętności
          </ScrollLink>
        </li>

        <li>
          <ScrollLink
            onClick={toggleMenu}
            to="projectsSection"
            smooth={true}
            duration={500}
            offset={-100}
          >
            Projekty
          </ScrollLink>
        </li>

        <li>
          <ScrollLink
            onClick={toggleMenu}
            to="contactSection"
            smooth={true}
            duration={500}
            offset={-100}
          >
            Kontakt
          </ScrollLink>
        </li>
      </MobileNav>
    </StyledNav>
  )
}

export default Navigation
