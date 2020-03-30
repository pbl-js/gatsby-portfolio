import React, { useRef } from "react"
import { graphql } from "gatsby"

import Header from "components/organisms/indexSections/Header"
import AboutMe from "components/organisms/indexSections/AboutMe"
import Skills from "components/organisms/indexSections/Skills"
import Projects from "components/organisms/indexSections/Projects"
import Contact from "components/organisms/indexSections/Contact"
import Footer from "components/organisms/indexSections/Footer"

const IndexPage = ({ data }) => {
  const refs = {
    aboutMe: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  }
  const scrollToRef = ref => {
    window.scrollTo(0, ref.current.offsetTop)
  }
  const executeScroll = ref => scrollToRef(ref)

  return (
    <div>
      <Header
        image={data.file.childImageSharp.fluid}
        executeScroll={executeScroll}
        refs={refs}
      />
      <Skills forwardedRef={refs.skills} />
      <AboutMe forwardedRef={refs.aboutMe} />
      <Projects
        forwardedRef={refs.projects}
        projects={data.allDatoCmsProject}
      />
      <Contact forwardedRef={refs.contact} />
      <Footer />
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
    allDatoCmsProject {
      edges {
        node {
          id
          title
          paragraph
          photos {
            fluid(maxWidth: 600) {
              ...GatsbyDatoCmsFluid
            }
          }
          technologies {
            id
            technologyItem
          }
          description {
            id
            header
            body
          }
        }
      }
    }
  }
`

export default IndexPage
