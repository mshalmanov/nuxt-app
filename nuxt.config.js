export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-app',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 
	    hid: 'description', 
		name: 'description', 
		content: 'A mission to explore the Jamstack using Nuxt'
	   }
    ],
    link: [
	/* {
		hid: 'canonical',
		rel: 'canonical',
		href: 'https://jamstack-explorers-nuxt-mission/${this.$route.params.slug}',
	  }, */
	  
	  {
		rel: 'stylesheet',
		href: 'https://fonts.googleapis.com/css?family=Nunito&display=swap'
	  },
	  
	  { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
	
	script: [
	  {
		src:       'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js', 
	  }
	],
	
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/main.css'
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
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
