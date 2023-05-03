<script setup>
  import {
    ArrowRightIcon,
    ClipboardDocumentIcon,
  } from '@heroicons/vue/24/outline'
  import { useClipboard } from '@vueuse/core'

  definePageMeta({
    title: 'Contact',
    description: 'Have a great idea to share? Just send me a message.',
  })

  const { copy, copied, isSupported } = useClipboard({
    source: 'yusufcan.yilmaz@outlook.com',
  })
</script>
<template>
  <div
    class="bg-light-foreground text-dark-foreground dark:bg-dark-foreground dark:text-light-foreground container mx-auto space-y-8 p-4 lg:pt-48"
  >
    <div class="flex items-center justify-between">
      <div class="flex flex-col">
        <h2 class="text-4xl font-black">
          Have a great idea to <span class="text-accent">share?</span>
        </h2>
        <h3 class="hidden text-xl font-semibold md:block">
          or, if you'd like to meet for a cup of coffee and chit chat, simply
          drop me a message.
        </h3>
      </div>
      <NuxtLink
        class="bg-dark-foreground dark:bg-light-foreground bg-opacity-0 p-2 hover:bg-opacity-10 dark:bg-opacity-0 dark:hover:bg-opacity-10"
        to="/"
      >
        <ArrowRightIcon class="h-8 w-8" />
      </NuxtLink>
    </div>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      <h3 class="block text-xl font-semibold md:hidden">
        or, if you'd like to meet for a cup of coffee and chit chat, simply drop
        me a message.
      </h3>
      <div class="group relative col-span-1 md:col-span-2">
        <a
          class="flex min-w-0 flex-col border border-opacity-0 p-4 hover:shadow-lg group-hover:border-opacity-100"
          :class="copied ? 'border-green-500' : 'border-accent'"
          href="mailto:yusufcan.yilmaz@outlook.com"
        >
          <span class="mb-4 text-lg">email:</span>
          <span class="truncate text-xl font-bold"
            >yusufcan.yilmaz@outlook.com</span
          >
        </a>
        <button
          v-if="isSupported"
          class="bg-accent absolute top-0 h-10 w-10 p-2 max-md:right-0 md:left-0 md:top-1/2 md:-translate-x-full md:-translate-y-1/2 md:opacity-0 md:group-hover:opacity-100"
          :class="copied ? 'bg-green-500' : 'bg-accent'"
          @click="copy()"
        >
          <ClipboardDocumentIcon />
        </button>
      </div>
      <a
        class="border-accent col-span-1 flex flex-col space-y-4 border border-opacity-0 p-4 hover:border-opacity-100 hover:shadow-lg"
        href="https://github.com/YusufcanY"
        target="_blank"
      >
        <span class="text-lg">github:</span>
        <span class="text-xl font-bold">@YusufcanY</span>
      </a>
      <a
        class="border-accent col-span-1 flex flex-col space-y-4 border border-opacity-0 p-4 hover:border-opacity-100 hover:shadow-lg"
        href="https://gitlab.com/YusufcanY"
        target="_blank"
      >
        <span class="text-lg">gitlab:</span>
        <span class="text-xl font-bold">@YusufcanY</span>
      </a>
      <a
        class="border-accent col-span-1 flex flex-col space-y-4 border border-opacity-0 p-4 hover:border-opacity-100 hover:shadow-lg"
        href="https://www.linkedin.com/in/yusufcan-yilmaz"
        target="_blank"
      >
        <span class="text-lg">linkedin:</span>
        <span class="text-xl font-bold">linkedin.com/in/yusufcan-yilmaz</span>
      </a>
      <a
        class="border-accent col-span-1 flex flex-col space-y-4 border border-opacity-0 p-4 hover:border-opacity-100 hover:shadow-lg"
        href="https://twitter.com/yusufcan_nn"
        target="_blank"
      >
        <span class="text-lg">twitter:</span>
        <span class="text-xl font-bold">@yusufcan_nn</span>
      </a>
      <a
        class="bg-accent col-span-1 flex flex-col space-y-4 border border-white border-opacity-0 p-4 text-white hover:border-opacity-100 hover:shadow-lg md:col-span-2"
        href="https://blog.yusufcanyilmaz.com/"
        target="_blank"
      >
        <span class="text-lg">hashnode:</span>
        <span class="text-xl font-bold">blog.yusufcanyilmaz.com</span>
      </a>
    </div>
  </div>
</template>
