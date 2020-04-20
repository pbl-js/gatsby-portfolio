import React from "react"
import Image from "gatsby-image"

import dots from "assets/images/dots.svg"

import H1 from "components/reuse/H1/H1"
import Paragraph from "components/reuse/Paragraph/Paragraph"
import {
  BackgroundWrapper,
  MainWrapper,
  ContentWrapper,
  StyledArticle,
  StyledSection,
  Gallery,
  ImageWrapper,
} from "components/indexSections/AboutMe/AboutMe.styles.js"

const Aboutme = ({ forwardedRef, gallery }) => {
  return (
    <BackgroundWrapper ref={forwardedRef}>
      <MainWrapper>
        <StyledArticle>
          <ContentWrapper>
            <H1>
              <span>{"<"}</span> Poznajmy się <span>{"/>"}</span>
            </H1>

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

            <StyledSection>
              <h2>Dlaczego programowanie?</h2>

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
            </StyledSection>
          </ContentWrapper>

          <Gallery>
            <>
              {gallery.image.map(item => (
                <ImageWrapper key={item.originalId}>
                  <Image fluid={item.fluid} />
                </ImageWrapper>
              ))}
            </>
          </Gallery>
        </StyledArticle>
      </MainWrapper>
    </BackgroundWrapper>
  )
}

export default Aboutme
