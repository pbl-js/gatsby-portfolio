import React, { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll"

import Button from "components/reuse/Button/Button"
import Navigation from "components/Navigation/Navigation"
import {
  BackgroundWrapper,
  StyledWrapper,
  OrangeDiv,
  StyledImg,
  Container,
  InnerWrapper,
  ButtonWrapper,
  NameSurname,
  JobTitle,
  AniSpan,
} from "components/indexSections/Header/Header.styles.js"

gsap.config({
  nullTargetWarn: false,
})

const Header = ({ image, cv }) => {
  const nameRef = useRef(null)
  const nameSpanRef = useRef(null)
  const positionRef = useRef(null)
  const positionSpanRef = useRef(null)
  const buttonFirstRef = useRef(null)
  const buttonSecondRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } })

    tl.to(nameSpanRef.current, {
      css: { transform: "translateX(0%)" },
      delay: 1.25,
      duration: 0.25,
    })
      .set(nameRef.current, { autoAlpha: 1 })
      .to(nameSpanRef.current, {
        css: { transform: "translateX(-101%)" },
        duration: 0.25,
      })
      .set(nameSpanRef.current, {
        css: { visibility: "hidden" },
      })
      .to(positionSpanRef.current, {
        css: { transform: "translateX(0%)" },
        duration: 0.25,
      })
      .set(positionRef.current, { autoAlpha: 1 })
      .to(positionSpanRef.current, {
        css: { transform: "translateX(-101%)" },
        duration: 0.25,
      })
      .set(positionSpanRef.current, {
        css: { visibility: "hidden" },
      })
      .to([buttonFirstRef.current, buttonSecondRef.current], {
        css: { transform: "translateX(0%)" },
        duration: 0.25,
        delay: 0.25,
      })
  }, [])

  return (
    <BackgroundWrapper>
      <StyledWrapper>
        <OrangeDiv>
          <StyledImg fluid={image} />
        </OrangeDiv>
        <Navigation />
        <Container>
          <InnerWrapper>
            <NameSurname>
              <span className="nameText" ref={nameRef}>
                paweł Miłczak
              </span>
              <AniSpan ref={nameSpanRef} />
            </NameSurname>

            <JobTitle>
              <span className="positionText" ref={positionRef}>
                frontend developer
              </span>
              <AniSpan ref={positionSpanRef} />
            </JobTitle>

            <ButtonWrapper>
              <div style={{ overflow: "hidden" }}>
                <Button
                  secondary
                  as="a"
                  target="_blank "
                  href={cv}
                  ref={buttonFirstRef}
                >
                  Pobierz CV
                </Button>
              </div>

              <div style={{ overflow: "hidden" }}>
                <ScrollLink to="projectsSection" smooth={true} duration={500}>
                  <Button ref={buttonSecondRef}>Zobacz projekty</Button>
                </ScrollLink>
              </div>
            </ButtonWrapper>
          </InnerWrapper>
        </Container>
      </StyledWrapper>
    </BackgroundWrapper>
  )
}

export default Header
