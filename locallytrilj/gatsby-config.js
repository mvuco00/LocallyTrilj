module.exports = {
  siteMetadata: {
    title: `LocallyTrilj`,
    description: `Stranica s ciljem olakšavanja praćenja radnog vremena, podataka i novosti vezanih za uslužne djelatnosti u gradu Trilju`,
    author: `@gatsbyjs`,
    businessObject: [
      {
        name: "Kavana Carpe Diem",
        address: "Vedrine D220, Trilj",
        lat: 43.62559,
        long: 16.737605,
        type: "caffee-bar",
        workTime: "6:00 - 3:00",
        instagram: "/carpediem/",
        facebook: "carpediem",
        path: "/carpediem",
        tag: ["caffe-bar", "carpe-diem"],
      },
      {
        name: "Caffe Bar Midnight",
        address: "Ul. Kralja Tomislava 3, 21240, Trilj",
        lat: 43.61781,
        long: 16.730532,
        type: "caffee-bar",
        workTime: "6:00 - 3:00",
        instagram: "/cb_midnight/",
        facebook: "cb_midnight",
        path: "/midnight",
        tag: ["caffe-bar", "midnight"],
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-catch-links`,
    `gatsby-transformer-remark`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/posts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
