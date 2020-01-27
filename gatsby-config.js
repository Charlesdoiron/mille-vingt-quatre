require(`dotenv`).config({ path: `.env` })

module.exports = {
  siteMetadata: {
    title: `1024 Architecture`,
    description: `1024 designs architectural and digital works,
in which sound and light scores are orchestrated within the space, and controlled by custom computer code.`,
    url: "https://www.1024architecture.net",
    image: "/images/1024.jpg",
    author: `Fragile - David Benmussa & Charles d'Oiron`,
    twitterUsername: "@1024official",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-background-image`,
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://hiver2010.us8.list-manage.com/subscribe/post?u=c4d90a0b380781cb3658a71b0&amp;id=b1feefc1bc",
      },
    },
    `gatsby-plugin-netlify-cache`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `static/images/favicon/fav.jpg`,
        crossOrigin: `use-credentials`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,

    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN,
        environment: "master",
      },
    },
  ],
}
