import React, { useRef } from "react"
import { graphql } from "gatsby"

import Header from "components/indexSections/Header/Header"
import AboutMe from "components/indexSections/AboutMe/AboutMe"
import Skills from "components/indexSections/Skills/Skills"
import Projects from "components/indexSections/Projects/Projects"
import Contact from "components/indexSections/Contact/Contact"
import Footer from "components/indexSections/Footer/Footer"

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
      <Projects
        forwardedRef={refs.projects}
        projects={data.allDatoCmsProject}
      />
      <AboutMe forwardedRef={refs.aboutMe} gallery={data.datoCmsGallery} />
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

    datoCmsGallery {
      image {
        originalId
        fluid {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
`

export default IndexPage
