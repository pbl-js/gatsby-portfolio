import React from "react"
import { graphql } from "gatsby"
import SEO from "components/SEO"

import Header from "components/indexSections/Header/Header"
import AboutMe from "components/indexSections/AboutMe/AboutMe"
import Skills from "components/indexSections/Skills/Skills"
import Projects from "components/indexSections/Projects/Projects"
import Contact from "components/indexSections/Contact/Contact"
import Footer from "components/indexSections/Footer/Footer"

const IndexPage = ({ data }) => {
  return (
    <div>
      <SEO title="Portfolio" />
      <Header
        image={data.file.childImageSharp.fluid}
        cv={data.datoCmsBasic.cv.url}
      />
      <Skills skills={data.allDatoCmsSkill.edges} />
      <Projects projects={data.allDatoCmsProject} />
      <AboutMe aboutMe={data.datoCmsAboutMe} />
      <Contact contacts={data.datoCmsBasic} />
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
          description
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
