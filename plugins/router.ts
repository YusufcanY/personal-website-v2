import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('page:finish', async (a) => {
    console.log('s')
    window.scrollTo({ top: 0 })
  })
})
