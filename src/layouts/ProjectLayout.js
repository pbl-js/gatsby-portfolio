import React from "react"
import { graphql } from "gatsby"

//$slug: String! - wymagana zmienna
export const query = graphql`
  query querySingleArticle($projectId: String!) {
    allDatoCmsProject(filter: { id: { eq: $projectId } }) {
      edges {
        node {
          title
          paragraph
        }
      }
    }
  }
`

const ProjectLayout = ({ data }) => {
  return (
    <div>
      <h1>{data.allDatoCmsProject.edges[0].node.title}</h1>
      <p>{data.allDatoCmsProject.edges[0].node.paragraph}</p>
    </div>
  )
}

export default ProjectLayout
