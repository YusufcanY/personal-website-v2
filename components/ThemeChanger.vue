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
    <Transition mode="out-in" name="fade-scale">
      <SunIcon v-if="isDark" />
      <MoonIcon v-else />
    </Transition>
  </button>
</template>
<style scoped>
  .fade-scale-enter-active,
  .fade-scale-leave-active {
    transition: 0.2s ease-in;
  }

  .fade-scale-enter-from {
    opacity: 1;
    transform: scale(1);
  }
  .fade-scale-leave-to {
    opacity: 0;
    transform: scale(0.9);
  }
</style>
