import React, { useCallback } from "react"

import H1 from "components/reuse/H1/H1"
import ProjectItem from "components/reuse/ProjectItem/ProjectItem"
import {
  BackgroundWrapper,
  StyledWrapper,
  StyledArticle,
} from "components/indexSections/Projects/Projects.styles.js"

const Projects = ({ projects }) => {
  let orderedProjects = projects.edges

  useCallback(() => {
    orderedProjects.sort((a, b) => a.node.position - b.node.position)
  }, [projects])

  return (
    <BackgroundWrapper id="projectsSection">
      <StyledWrapper>
        <H1>
          <span>{"<"}</span> Projekty <span>{"/>"}</span>
        </H1>
        <StyledArticle>
          {orderedProjects.map(
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
