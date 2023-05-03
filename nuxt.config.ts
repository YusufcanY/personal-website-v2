export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@vite-pwa/nuxt'],
  css: ['@/assets/css/main.css'],
  colorMode: {
    classSuffix: '',
  },
  experimental: {
    payloadExtraction: false,
  },
  imports: {
    autoImport: true,
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
          crossorigin: 'anonymous',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous',
        },
        {
          rel: 'preload',
          as: 'style',
          href: 'https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;200;300;400;500;600;700&display=swap',
          crossorigin: 'anonymous',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;200;300;400;500;600;700&display=swap',
          crossorigin: 'anonymous',
        },
        {
          rel: 'apple-touch-icon',
          href: '/img/yusufcan-yilmaz-192x192.png',
          sizes: '192x192',
        },
        {
          rel: 'mask-icon',
          href: '/img/yusufcan-yilmaz-192x192.png',
          color: '#ffffff',
        },
        {
          rel: 'icon',
          href: '/favicon.ico',
        },
      ],
      meta: [
        { charset: 'utf-8' },
        {
          name: 'theme-color',
          content: '#0057ff',
        },
        {
          property: 'og:url',
          content: 'https://yusufcanyilmaz.com/',
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:image',
          content: '/img/yusufcan.jpeg',
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          property: 'twitter:domain',
          content: 'yusufcanyilmaz.com',
        },
        {
          property: 'twitter:url',
          content: 'https://yusufcanyilmaz.com/',
        },
        {
          name: 'twitter:image',
          content: '/img/yusufcan.jpeg',
        },
      ],
    },
  },
  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    prerender: {
      routes: ['/', '/about-me', '/code', '/contact'],
    },
  },
  typescript: {
    shim: false,
    strict: true,
  },
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Yusufcan Yılmaz - Frontend Developer',
      short_name: 'YusufcanYilmaz',
      theme_color: '#0057ff',
      icons: [
        {
          src: '/img/yusufcan-yilmaz-64x64.png',
          sizes: '64x64',
          type: 'image/png',
        },
        {
          src: '/img/yusufcan-yilmaz-144x144.png',
          sizes: '144x144',
          type: 'image/png',
        },
        {
          src: '/img/yusufcan-yilmaz-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/img/yusufcan-yilmaz-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: '/img/yusufcan-yilmaz-192x192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'google-fonts-cache',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
            },
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
        {
          urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'gstatic-fonts-cache',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
            },
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
      ],
    },
    client: {
      periodicSyncForUpdates: 3600,
    },
  },
})
