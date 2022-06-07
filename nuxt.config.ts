import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  buildModules: ['./modules/auto-import-eslint'],
  css: ['@/assets/css/main.css', '@/assets/css/tailwind.css'],
  build: {
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
      title: 'Yusufcan Yılmaz',
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
    },
  },
  vite: {
    logLevel: 'info',
    optimizeDeps: {
      include: [
        '@headlessui/vue',
        'vue',
        '@heroicons/vue/solid',
        '@heroicons/vue/outline',
      ],
    },
  },
})
