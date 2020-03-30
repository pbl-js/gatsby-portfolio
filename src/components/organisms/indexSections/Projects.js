import React from "react"
import styled from "styled-components"
import H1 from "components/atoms/H1"
import ProjectItem from "components/organisms/ProjectItem"

const BackgroundWrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.color.greyPrimary};
  overflow: hidden;
  padding: 150px 50px;

  @media ${({ theme }) => theme.device.tablet} {
    padding: 150px 30px;
  }
`

const StyledWrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  background-color: ${({ theme }) => theme.color.greyPrimary};
  margin: 0 auto;
  position: relative;
`

const StyledArticle = styled.article`
  width: 100%;
  display: grid;
  grid-gap: 150px;

  @media ${({ theme }) => theme.device.tablet} {
    grid-gap: 30px;
  }
`

// const projectItems = [
//   {
//     title: "generator cv",
//     technologies: [
//       "react",
//       "styled-components",
//       "react-router",
//       "framer-motion",
//       "axios",
//       "firebase",
//       "express.js",
//       "MongoDB",
//     ],
//     description: [
//       {
//         title: "Założenia projektu",
//         body: `W programowaniu najbardziej lubię fakt, że jeden dobrze napisany
//         program jest w stanie wykonać pracę dziesiątek a nawet setek
//         ludzi. Pewien znany wizjoner technologi określił komputer „rowerem
//         dla umysłu”. Bardzo spodobało mi się to określenie.Dlatego, ucząc
//         się programowania...`,
//       },
//       {
//         title: "Użyte technologie",
//         body: `W programowaniu najbardziej lubię fakt, że jeden dobrze napisany
//         program jest w stanie wykonać pracę dziesiątek a nawet setek
//         ludzi. Pewien znany wizjoner technologi określił komputer „rowerem
//         dla umysłu”. Bardzo spodobało mi się to określenie.Dlatego, ucząc
//         się programowania...`,
//       },
//       {
//         title: "Napotkane problemy",
//         body: `W programowaniu najbardziej lubię fakt, że jeden dobrze napisany
//         program jest w stanie wykonać pracę dziesiątek a nawet setek
//         ludzi. Pewien znany wizjoner technologi określił komputer „rowerem
//         dla umysłu”. Bardzo spodobało mi się to określenie.Dlatego, ucząc
//         się programowania...`,
//       },
//     ],
//   },
//   {
//     title: "generator cv",
//     technologies: [
//       "react",
//       "styled-components",
//       "react-router",
//       "framer-motion",
//       "axios",
//       "firebase",
//       "express.js",
//       "MongoDB",
//     ],
//     description: [
//       {
//         title: "Założenia projektu",
//         body: `W programowaniu najbardziej lubię fakt, że jeden dobrze napisany
//         program jest w stanie wykonać pracę dziesiątek a nawet setek
//         ludzi. Pewien znany wizjoner technologi określił komputer „rowerem
//         dla umysłu”. Bardzo spodobało mi się to określenie.Dlatego, ucząc
//         się programowania...`,
//       },
//       {
//         title: "Użyte technologie",
//         body: `W programowaniu najbardziej lubię fakt, że jeden dobrze napisany
//         program jest w stanie wykonać pracę dziesiątek a nawet setek
//         ludzi. Pewien znany wizjoner technologi określił komputer „rowerem
//         dla umysłu”. Bardzo spodobało mi się to określenie.Dlatego, ucząc
//         się programowania...`,
//       },
//       {
//         title: "Napotkane problemy",
//         body: `W programowaniu najbardziej lubię fakt, że jeden dobrze napisany
//         program jest w stanie wykonać pracę dziesiątek a nawet setek
//         ludzi. Pewien znany wizjoner technologi określił komputer „rowerem
//         dla umysłu”. Bardzo spodobało mi się to określenie.Dlatego, ucząc
//         się programowania...`,
//       },
//     ],
//   },
//   {
//     title: "generator cv",
//     technologies: [
//       "react",
//       "styled-components",
//       "react-router",
//       "framer-motion",
//       "axios",
//       "firebase",
//       "express.js",
//       "MongoDB",
//     ],
//     description: [
//       {
//         title: "Założenia projektu",
//         body: `W programowaniu najbardziej lubię fakt, że jeden dobrze napisany
//         program jest w stanie wykonać pracę dziesiątek a nawet setek
//         ludzi. Pewien znany wizjoner technologi określił komputer „rowerem
//         dla umysłu”. Bardzo spodobało mi się to określenie.Dlatego, ucząc
//         się programowania...`,
//       },
//       {
//         title: "Użyte technologie",
//         body: `W programowaniu najbardziej lubię fakt, że jeden dobrze napisany
//         program jest w stanie wykonać pracę dziesiątek a nawet setek
//         ludzi. Pewien znany wizjoner technologi określił komputer „rowerem
//         dla umysłu”. Bardzo spodobało mi się to określenie.Dlatego, ucząc
//         się programowania...`,
//       },
//       {
//         title: "Napotkane problemy",
//         body: `W programowaniu najbardziej lubię fakt, że jeden dobrze napisany
//         program jest w stanie wykonać pracę dziesiątek a nawet setek
//         ludzi. Pewien znany wizjoner technologi określił komputer „rowerem
//         dla umysłu”. Bardzo spodobało mi się to określenie.Dlatego, ucząc
//         się programowania...`,
//       },
//     ],
//   },
// ]

const Projects = ({ forwardedRef, projects }) => {
  console.log(projects)
  return (
    <BackgroundWrapper ref={forwardedRef}>
      <StyledWrapper>
        <H1>
          <span>{"<"}</span> Projekty <span>{"/>"}</span>
        </H1>
        <StyledArticle>
          {projects.edges.map(
            (
              {
                node: {
                  id,
                  title,
                  photos,
                  technologies,
                  paragraph,
                  description,
                },
              },
              index
            ) => (
              <ProjectItem
                key={id}
                isEven={index % 2 === 0}
                photo={photos[0].fluid}
                title={title}
                technologies={technologies}
                description={description}
                paragraph={paragraph}
              />
            )
          )}
        </StyledArticle>
      </StyledWrapper>
    </BackgroundWrapper>
  )
}

export default Projects
