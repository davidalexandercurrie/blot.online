module.exports = {
  siteMetadata: {
    title: `blot`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": "vBATydupJekSpEr6haRPDDfzPymNXn_0GTMMichOm-Y",
      "spaceId": "lwz00y8jn7m3"
    }
  }, "gatsby-plugin-mdx", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};