import React from "react"
import { graphql } from "gatsby"

import Header from "components/organisms/indexSections/Header"
import AboutMe from "components/organisms/indexSections/AboutMe"
import Skills from "components/organisms/indexSections/Skills"

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <div>
      <Header image={data.file.childImageSharp.fluid} />
      <AboutMe />
      <Skills />
    </div>
  )
}

export const query = graphql`
  query {
    file(name: { eq: "person" }) {
      childImageSharp {
        fluid(maxHeight: 1440, maxWidth: 1045) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`

export default IndexPage
