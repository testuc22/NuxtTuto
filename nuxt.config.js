export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'NuxtTuto',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxt/http',
    '@nuxtjs/auth-next',
    '@nuxtjs/axios'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    standalone: true
  },
  serverMiddleware:{
    '/api':'~/api'
  },
  axios:{
    baseUrl:'http://localhost:3001/api'
  },
  auth: {
    strategies: {
      local: {
        token: {
          property: 'accessToken',
          required: true,
          type: 'Bearer'
        },
        user: {
          property: "email",
          autoFetch: true
        },
        endpoints: {
          login: { url: '/auth/login', method: 'post' },
          logout: { url: '/auth/logout', method: 'post' },
          user:{ url: '/auth/user', method: 'get'}
        }
      }
    }
  }
  
}
