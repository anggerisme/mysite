module.exports = {
  siteMetadata: {
    title: `Angger's Blog`,
    nama: `@anggerisme`,
    description: `Official site of @anggerisme.`,
    author: `@Anggerisme`,
    email: `kontak@angger.me`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `yx6wthvo3rg2`,
        accessToken: `drVxljZ6A9IOh29AgdhvUsr3H5c7oXOGbfAzZwKEDxY`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },

    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        useResolveUrlLoader: true,
        sourceMap: true,
      },
    },

    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {},
    },
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
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        debug: {
          copyHTMLResponseOnError: true,
        },
        url: `https://angger.me/graphql`,
        schema: {
          typePrefix: `Wp`,
        },
        develop: {
          hardCacheMediaFiles: true,
        },
        // I have created a dummy site for us to use with the plugins we discussed
        baseUrl: "https://www.angger.me",
        protocol: "https",
        hostingWPCOM: false,
        // We will be using some advanced custom fields
        useACF: true,
        acfOptionPageIds: [],
        verboseOutput: false,
        perPage: 100,
        searchAndReplaceContentUrls: {
          sourceUrl: "https://www.angger.me",
          replacementUrl: "https://localhost:8000",
        },
        // Set how many simultaneous requests are sent at once.
        concurrentRequests: 10,
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/media",
          "**/tags",
          "**/taxonomies",
          "**/users",
        ],
        excludedRoutes: [],
        normalizer: function ({ entities }) {
          return entities
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
