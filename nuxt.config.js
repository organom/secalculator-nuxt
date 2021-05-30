module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'secalculator',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Space Engineers calculator' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  plugins: [
    { src: '~/plugins/vue-good-table', ssr: false }
  ],
  render: {
    bundleRenderer: {
      runInNewContext: false,
    },
  },
  router: { base: '/secalculator/' },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  target: 'static',
  vue: {
    config: {
      productionTip: false,
      devtools: true
    }
  },
  modules: ['@nuxt/http'],
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

