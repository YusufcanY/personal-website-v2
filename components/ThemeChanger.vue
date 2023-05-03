<script setup lang="ts">
  import { MoonIcon, SunIcon } from '@heroicons/vue/24/outline'
  import { useColorMode } from '#imports'

  const colorMode = useColorMode()
  const changeTheme = () => {
    colorMode.preference = colorMode.preference === 'light' ? 'dark' : 'light'
  }
</script>
<template>
  <button
    aria-label="Change theme"
    class="bg-dark-foreground text-light-foreground dark:bg-light-foreground dark:text-dark-foreground h-8 w-8 overflow-hidden rounded-full bg-opacity-90 p-1 lg:h-10 lg:w-10"
    @click="changeTheme()"
  >
    <Transition mode="out-in" name="slide-left">
      <SunIcon v-if="colorMode.preference === 'dark'" />
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
