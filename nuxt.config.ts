// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader'
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
  ],

  runtimeConfig: {
    pagespeedKey: process.env.PAGESPEED_KEY || '',
    public: {
      githubToken: process.env.GITHUB_TOKEN || '',
    }
  },

  image: {
    dir: 'assets/images',
  },

  icon: {
    serverBundle: {
      collections: ['tabler']
    }
  },

  vite: {
    //@ts-ignore
    plugins: [svgLoader()],
  },

  css: ['@/assets/scss/main.scss'],

  fonts: {
    families: [
      {
        name: 'Casanova',
        provider: 'local',
        src: '/fonts/CasanovaScotia.otf'
      },
      {
        name: 'Manrope',
        provider: 'google',
        weights: [400, 600],
      }
    ],
  },
  // i18n: {
  //   locales: [
  //     { code: 'nl', iso: 'nl-NL', file: 'nl.json' },
  //     { code: 'en', iso: 'en-US', file: 'en.json' },
  //   ],
  //   defaultLocale: 'en',
  //   strategy: 'prefix_except_default',
  // },

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  site: { indexable: false },

  colorMode: {
    preference: 'system',
    fallback: 'light',
    storageKey: 'nuxt-color-mode',
    storage: 'cookie'
  },

  ssr: true,
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  }
})