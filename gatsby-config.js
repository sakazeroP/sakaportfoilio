
module.exports = {
  siteMetadata: {
    title: "myportfolio",
  },
  plugins: ["gatsby-plugin-theme-ui", "gatsby-plugin-gatsby-cloud",'gatsby-plugin-postcss',`gatsby-plugin-image`,
  `gatsby-plugin-sharp`,`gatsby-transformer-sharp`,
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `GatsbyJS`,
      short_name: `GatsbyJS`,
      start_url: `../images/icon.png`,
      background_color: `#f7f0eb`,
      theme_color: `#a2466c`,
      display: `standalone`,
    },
  }],
};
