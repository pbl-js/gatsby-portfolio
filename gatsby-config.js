require("dotenv").config()
const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Paweł Miłczak`,
    description: `Tworzę oryginalne i dobrze zaprojektowane oprogramowanie.`,
    author: `Paweł Miłczak`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Paweł Miłczak | FrontEnd developer`,
        short_name: `Paweł Miłczak`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        assets: path.join(__dirname, "src/assets"),
        components: path.join(__dirname, "src/components"),
        layouts: path.join(__dirname, "src/layouts"),
        pages: path.join(__dirname, "src/pages"),
        genPages: path.join(__dirname, "src/genPages"),
        utils: path.join(__dirname, "src/utils"),
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            subsets: ["latin-ext"],
            variants: ["300", `400`, "600", "700", `900`],
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-transition-link",
      options: {
        layout: require.resolve(`./src/layouts/MainLayout.js`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.API_DATO_CMS,
      },
    },
  ],
}
