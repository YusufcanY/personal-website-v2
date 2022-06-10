<script setup lang="ts">
  const isDark = useCookie<Boolean>('isDark')
  if (isDark.value === null || isDark.value === undefined) {
    isDark.value = false
  }
  useHead({
    htmlAttrs: {
      class: isDark.value ? 'dark' : 'light',
    },
  })
</script>
<template>
  <div class="absolute top-0 left-0 hidden"></div>
</template>
