module.exports = {
  siteName: 'Gridsome',
  siteUrl: '',
  plugins: [
    {
      use: 'gridsome-source-sanity',
      options: {
        projectId: process.env.GRIDSOME_SANITY_PROJECT_ID,
        dataset: process.env.GRIDSOME_SANITY_DATASET,
        token: process.env.SANITY_TOKEN,
        overlayDrafts: process.env.NODE_ENV === 'development',
        watchMode: process.env.NODE_ENV === 'development'
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: process.env.GRIDSOME_ANALYTICS_ID
      }
    },
    {
      use: 'gridsome-plugin-manifest',
      options: {
        background_color: '#000000',
        icon_path: './src/assets/logos/icon.png',
        name: 'My app name',
        short_name: 'App',
        theme_color: '#FFFFFF',
        lang: 'en'
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        exclude: [],
        config: {}
      }
    },
    'gridsome-plugin-robots-txt'
  ]
}
