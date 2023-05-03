<script setup>
  import { ArrowRightIcon } from '@heroicons/vue/24/outline'
  definePageMeta({
    title: 'Contact',
    description: 'Have a great idea to share? Just send me a message.',
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
      <a
        class="border-accent col-span-1 flex flex-col space-y-4 border border-opacity-0 p-4 hover:border-opacity-100 hover:shadow-lg md:col-span-2"
        href="mailto:mail@yusufcanyilmaz.com"
      >
        <span class="text-lg" for="email">email:</span>
        <span class="text-xl font-bold">mail@yusufcanyilmaz.com</span>
      </a>
      <a
        class="border-accent col-span-1 flex flex-col space-y-4 border border-opacity-0 p-4 hover:border-opacity-100 hover:shadow-lg"
        href="https://github.com/YusufcanY"
        target="_blank"
      >
        <span class="text-lg" for="email">github:</span>
        <span class="text-xl font-bold">@YusufcanY</span>
      </a>
      <a
        class="border-accent col-span-1 flex flex-col space-y-4 border border-opacity-0 p-4 hover:border-opacity-100 hover:shadow-lg"
        href="https://gitlab.com/YusufcanY"
        target="_blank"
      >
        <span class="text-lg" for="email">gitlab:</span>
        <span class="text-xl font-bold">@YusufcanY</span>
      </a>
      <a
        class="border-accent col-span-1 flex flex-col space-y-4 border border-opacity-0 p-4 hover:border-opacity-100 hover:shadow-lg"
        href="https://blog.yusufcanyilmaz.com/"
        target="_blank"
      >
        <span class="text-lg" for="email">hashnode:</span>
        <span class="text-xl font-bold">blog.yusufcanyilmaz.com</span>
      </a>
      <a
        class="border-accent col-span-1 flex flex-col space-y-4 border border-opacity-0 p-4 hover:border-opacity-100 hover:shadow-lg"
        href="https://medium.com/@yusufcan-yilmaz/"
        target="_blank"
      >
        <span class="text-lg" for="email">medium:</span>
        <span class="text-xl font-bold">medium.com/@yusufcan-yilmaz</span>
      </a>
      <a
        class="border-accent col-span-1 flex flex-col space-y-4 border border-opacity-0 p-4 hover:border-opacity-100 hover:shadow-lg"
        href="https://www.linkedin.com/in/yusufcan-yilmaz"
        target="_blank"
      >
        <span class="text-lg" for="email">linkedin:</span>
        <span class="text-xl font-bold">linkedin.com/in/yusufcan-yilmaz</span>
      </a>
      <a
        class="border-accent col-span-1 flex flex-col space-y-4 border border-opacity-0 p-4 hover:border-opacity-100 hover:shadow-lg"
        href="https://twitter.com/yusufcan_nn"
        target="_blank"
      >
        <span class="text-lg" for="email">twitter:</span>
        <span class="text-xl font-bold">@yusufcan_nn</span>
      </a>
    </div>
  </div>
</template>
