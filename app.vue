<script setup>
  const route = useRoute()
  const title = computed(() => {
    return route.meta.title
      ? route.meta.title + ' | Yusufcan Yılmaz'
      : 'Yusufcan Yılmaz | Frontend Developer'
  })
  const description = computed(() => {
    return route.meta.description
      ? route.meta.description
      : 'Yusufcan Yılmaz is a Frontend Developer. Love skating and coding.'
  })
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
  })
</script>
<template>
  <div>
    <InitTheme />
    <NuxtPage />
  </div>
</template>
