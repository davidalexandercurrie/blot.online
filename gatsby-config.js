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
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: 'vBATydupJekSpEr6haRPDDfzPymNXn_0GTMMichOm-Y',
        spaceId: 'lwz00y8jn7m3',
      },
    },
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
  ],
};
