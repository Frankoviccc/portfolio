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
    githubToken: process.env.GITHUB_TOKEN || '',
    resendKey: process.env.RESEND_API_KEY || ''
  },

  icon: {
    serverBundle: false,
    clientBundle: {
      scan: true,
      sizeLimitKb: 0,
      icons: [
        'tabler:clock',
        'tabler:palette',
        'tabler:device-mobile'
      ]
    },
  },

  vite: {
    //@ts-ignore
    plugins: [svgLoader()],
  },

  css: ['@/assets/scss/main.scss'],

  fonts: {
    families: [
      {
        display: 'swap',
        name: 'Casanova',
        provider: 'local',
        src: '/fonts/CasanovaScotia.woff2'
      },
      {
        display: 'swap',
        name: 'Manrope',
        provider: 'google',
        weights: [400, 600],
      }
    ],
  },

  i18n: {
    locales: [
      { code: 'nl', iso: 'nl-NL' },
      { code: 'en', iso: 'en-US' },
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
  },

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  colorMode: {
    preference: 'system',
    fallback: 'light',
    storageKey: 'nuxt-color-mode',
    storage: 'cookie'
  },

  nitro: {
    preset: 'cloudflare-pages'
  },

  routeRules: {
    '/': { prerender: true }
  },

  image: {
    screens: {
      xs: 320,
      sm: 576,
      md: 768,
      lg: 1024,
      xl: 1200,
      xxl: 1600,
    },
    provider: process.env.NODE_ENV === 'production' ? 'cloudflare' : 'ipx',
    cloudflare: {
      baseURL: 'https://frankstruik.com/'
    }
  },

  app: {
    head: {
      title: "Frank Struik",
      htmlAttrs: {
        lang: 'en'
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})