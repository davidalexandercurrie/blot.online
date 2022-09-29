module.exports = {
  siteMetadata: {
    title: `blot`,
    siteUrl: `https://blot.online`,
    author: `blot`,
    description: `a journal of music, sound, and performance`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-netlify`,
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: 'vBATydupJekSpEr6haRPDDfzPymNXn_0GTMMichOm-Y',
        spaceId: 'lwz00y8jn7m3',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'G-EZNNSP1JNS', // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
  ],
};
