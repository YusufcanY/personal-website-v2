import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  buildModules: ['./modules/auto-import-eslint'],
  css: ['@/assets/css/main.css', '@/assets/css/tailwind.css'],
  build: {
    transpile: ['@heroicons/vue'],
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  app: {
    head: {
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;200;300;400;500;600;700&display=swap',
        },
      ],
      meta: [
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
  vite: {
    logLevel: 'info',
    optimizeDeps: {
      include: ['vue', '@heroicons/vue/solid', '@heroicons/vue/outline'],
    },
  },
})
