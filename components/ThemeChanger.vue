<script setup lang="ts">
  import { MoonIcon, SunIcon } from '@heroicons/vue/outline'
  const isDark = useCookie<Boolean>('isDark')
  const changeTheme = () => {
    isDark.value = !isDark.value
    useHead({
      htmlAttrs: {
        class: isDark.value ? 'dark' : 'light',
      },
    })
  }
</script>
<template>
  <button
    aria-label="Change theme"
    class="h-8 w-8 overflow-hidden rounded-full bg-dark-foreground bg-opacity-90 p-1 text-light-foreground dark:bg-light-foreground dark:text-dark-foreground lg:h-10 lg:w-10"
    @click="changeTheme"
  >
    <Transition mode="out-in" name="slide-left">
      <SunIcon v-if="isDark" />
      <MoonIcon v-else />
    </Transition>
  </button>
</template>
<style scoped>
  .slide-left-enter-active,
  .slide-left-leave-active {
    transition: 0.2s ease-in;
  }

  .slide-left-enter-from {
    transform: translateX(100%);
  }
  .slide-left-leave-to {
    transform: translateX(-100%);
  }
</style>
