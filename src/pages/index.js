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
        cv={data.datoCmsBasic.cv.url}
      />
      <Skills forwardedRef={refs.skills} skills={data.allDatoCmsSkill.edges} />
      <Projects
        forwardedRef={refs.projects}
        projects={data.allDatoCmsProject}
      />
      <AboutMe forwardedRef={refs.aboutMe} aboutMe={data.datoCmsAboutMe} />
      <Contact forwardedRef={refs.contact} contacts={data.datoCmsBasic} />
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

    datoCmsBasic {
      email
      github
      phone
      cv {
        url
      }
    }

    allDatoCmsSkill {
      edges {
        node {
          id
          header
          skillList {
            id
            title
          }
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
        }
      }
    }

    datoCmsAboutMe {
      paragraph
      textBlocks {
        id
        header
        paragraph
      }
      gallery {
        originalId
        fluid {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
`

export default IndexPage
