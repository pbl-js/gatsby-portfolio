import React from "react"

import H1 from "components/reuse/H1/H1"
import ProjectItem from "components/reuse/ProjectItem/ProjectItem"
import {
  BackgroundWrapper,
  StyledWrapper,
  StyledArticle,
} from "components/indexSections/Projects/Projects.styles.js"

const Projects = ({ projects }) => {
  return (
    <BackgroundWrapper id="projectsSection">
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
                isEven={!(index % 2 === 0)}
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
