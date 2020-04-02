import React from "react"

import H1 from "components/atoms/H1"
import ProjectItem from "components/organisms/ProjectItem/ProjectItem"
import {
  BackgroundWrapper,
  StyledWrapper,
  StyledArticle,
} from "components/organisms/indexSections/Projects/Projects.styles.js"

const Projects = ({ forwardedRef, projects }) => {
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
