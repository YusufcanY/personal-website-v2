<script setup>
  const route = useRoute()
  const title = computed(() => {
    return route.meta.title
      ? route.meta.title + ' | Yusufcan Yılmaz - Frontend Developer'
      : 'Yusufcan Yılmaz - Frontend Developer'
  })
  const description = computed(() => {
    return route.meta.description
      ? route.meta.description
      : "Hello, I'm Yusufcan Yılmaz, and I've been a Frontend Developer professionally for almost three years. I'm a keen user of the most recent technologies, with a focus on Vue.js, React.js, and server-side rendering."
  })
  const canonical = computed(
    () => 'https://www.yusufcanyilmaz.com' + route.path
  )
  useHead({
    title,
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { name: 'description', content: description },
      {
        name: 'twitter:title',
        content: title,
      },
      { name: 'twitter:description', content: description },
      { name: 'og:title', content: title },
      { name: 'og:description', content: description },
    ],
    link: [{ rel: 'canonical', hid: 'canonical', href: canonical }],
  })
</script>
<template>
  <div class="relative">
    <VitePwaManifest />
    <NuxtPage />
    <Transition name="fade">
      <div
        v-if="$pwa.offlineReady"
        class="bg-dark-foreground/5 dark:bg-light-foreground/5 text-dark-foreground dark:text-light-foreground fixed bottom-8 left-1/2 hidden -translate-x-1/2 rounded-full px-8 py-2 text-sm lg:block"
      >
        Offline Ready
      </div>
    </Transition>
  </div>
</template>
<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.2s;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
