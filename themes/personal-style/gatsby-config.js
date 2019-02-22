const path = require('path')

module.exports = ({ root }) => ({
  __experimentalThemes: ['personal-style'],
  siteMetadata: {
    title: 'Gatsby Theme Blog',
    author: 'Kyle Mathews',
    description: 'A starter blog demonstrating what Gatsby can do.',
    siteUrl: 'https://gatsbyjs.github.io/gatsby-starter-blog/',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.resolve('./src/assets'),
        name: 'pages',
      },
    },
      'gatsby-plugin-offline',
      {
          resolve: 'gatsby-plugin-typography',
          options: {
              pathToConfigModule: path.relative(
                  root,
                  require.resolve('./src/utils/typography')
              ),
          },
      },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: require.resolve('./src/pages'),
      },
    },
  ],
});
