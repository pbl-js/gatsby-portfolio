import React, { useRef, useEffect } from "react"
import { gsap } from "gsap"

import Button from "components/reuse/Button/Button"
import Navigation from "components/Navigation/Navigation"
import {
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

const Header = ({ executeScroll, refs, image }) => {
  const nameRef = useRef(null)
  const positionRef = useRef(null)
  const buttonWrapper = useRef(null)
  const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } })

  useEffect(() => {
    const name = nameRef.current.children[0]
    const nameSpan = nameRef.current.children[1]

    const position = positionRef.current.children[0]
    const positionSpan = positionRef.current.children[1]

    const buttonPrimary = buttonWrapper.current.children[0].children[0]
    const buttonSecondary = buttonWrapper.current.children[1].children[0]
    console.log(buttonSecondary)

    gsap.set([nameSpan, positionSpan, buttonPrimary, buttonSecondary], {
      x: "101%",
    })
    gsap.set([name, position], { autoAlpha: 0 })

    tl.to(nameSpan, {
      x: "0%",
      delay: 1,
      duration: 0.25,
    })
      .set(name, { autoAlpha: 1 })
      .to(nameSpan, { x: "-101%", duration: 0.25 })
      .to(positionSpan, {
        x: "0%",
        duration: 0.25,
      })
      .set(position, { autoAlpha: 1 })
      .to(positionSpan, { x: "-101%", duration: 0.25 })
      .to([buttonPrimary, buttonSecondary], {
        x: "0%",
        duration: 0.25,
        delay: 0.25,
      })
  }, [])

  return (
    <>
      <StyledWrapper>
        <OrangeDiv>
          <StyledImg fluid={image} />
        </OrangeDiv>
        <Navigation refs={refs} executeScroll={executeScroll} />
        <Container>
          <InnerWrapper>
            <NameSurname ref={nameRef}>
              <span>paweł Miłczak</span> <AniSpan />
            </NameSurname>
            <JobTitle ref={positionRef}>
              <span> frontend developer</span>
              <AniSpan />
            </JobTitle>
            <ButtonWrapper ref={buttonWrapper}>
              <div style={{ overflow: "hidden" }}>
                <Button secondary>Pobierz CV</Button>
              </div>

              <div style={{ overflow: "hidden" }}>
                <Button onClick={() => executeScroll(refs.projects)}>
                  Zobacz projekty
                </Button>
              </div>
            </ButtonWrapper>
          </InnerWrapper>
        </Container>
      </StyledWrapper>
    </>
  )
}

export default Header
