import React from "react"
import Header from "components/organisms/indexSections/Header"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <div>
      <Header image={data.file.childImageSharp.fluid} />
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
