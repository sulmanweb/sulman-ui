module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Sulman Baig',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no'},
      {
        hid: 'description',
        name: 'description',
        content: 'Ruby on Rails with VueJS experienced web app developer in Lahore, Pakistan'
      }
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.2.0/css/all.css',
        integrity: 'sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ',
        crossorigin: 'anonymous'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Raleway'
      }
    ]
  },
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/google-analytics'
  ],
  'google-analytics': {
    id: 'UA-124527415-1'
  },
  /*
  ** Customize the progress bar color
  */
  loading: {color: '#3B8070'},
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, {isDev, isClient}) {
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

