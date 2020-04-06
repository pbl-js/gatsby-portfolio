import React from "react"

import workingMan from "assets/images/workingMan.png"
import H1 from "components/reuse/H1/H1"
import Paragraph from "components/reuse/Paragraph/Paragraph"
import {
  BackgroundWrapper,
  MainWrapper,
  OrangeDiv,
  StyledImg,
  StyledArticle,
  StyledH2,
  StyledSection,
  SectionBackground,
  InnerSection,
} from "components/indexSections/AboutMe/AboutMe.styles.js"

const Aboutme = ({ forwardedRef }) => {
  return (
    <BackgroundWrapper ref={forwardedRef}>
      <MainWrapper>
        <OrangeDiv>
          <StyledImg src={workingMan} />
        </OrangeDiv>

        <StyledArticle>
          <H1>
            <span>{"<"}</span> Poznajmy się <span>{"/>"}</span>
          </H1>

          <StyledSection>
            <Paragraph>
              W programowaniu najbardziej lubię fakt, że jeden dobrze napisany
              program jest w stanie wykonać pracę dziesiątek a nawet setek
              ludzi. Pewien znany wizjoner technologi określił komputer „rowerem
              dla umysłu”. Bardzo spodobało mi się to określenie.Dlatego, ucząc
              się programowania, robiłem to na W programowaniu najbardziej lubię
              fakt, że jeden dobrze napisany program jest w stanie wykonać pracę
              dziesiątek a nawet setek ludzi. Pewien znany wizjoner technologi
              określił komputer „rowerem dla umysłu”. Bardzo spodobało mi się to
              określenie.Dlatego, ucząc się programowania, robiłem to na
            </Paragraph>
          </StyledSection>

          <StyledSection>
            <InnerSection>
              <StyledH2>Dlaczego programowanie?</StyledH2>

              <Paragraph>
                W programowaniu najbardziej lubię fakt, że jeden dobrze napisany
                program jest w stanie wykonać pracę dziesiątek a nawet setek
                ludzi. Pewien znany wizjoner technologi określił komputer
                „rowerem dla umysłu”. Bardzo spodobało mi się to
                określenie.Dlatego, ucząc się programowania, robiłem to na W
                programowaniu najbardziej lubię fakt, że jeden dobrze napisany
                program jest w setek ludzi. Pewien znany wizjoner technologi
                określił komputer „rowerem dla umysłu”. Bardzo spodobało mi się
                to określenie.Dlatego, ucząc się programowania, robiłem to na
              </Paragraph>
            </InnerSection>
            <SectionBackground />
          </StyledSection>
        </StyledArticle>
      </MainWrapper>
    </BackgroundWrapper>
  )
}

export default Aboutme
