<script setup>
  import { ArrowNarrowRightIcon } from '@heroicons/vue/outline'
</script>
<template>
  <div
    class="container mx-auto space-y-8 bg-light-foreground p-4 text-dark-foreground dark:bg-dark-foreground dark:text-light-foreground lg:pt-48"
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
        class="bg-dark-foreground bg-opacity-0 p-2 hover:bg-opacity-10 dark:bg-light-foreground dark:bg-opacity-0 dark:hover:bg-opacity-10"
        to="/"
      >
        <ArrowNarrowRightIcon class="h-8 w-8" />
      </NuxtLink>
    </div>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      <h3 class="block text-xl font-semibold md:hidden">
        or, if you'd like to meet for a cup of coffee and chit chat, simply drop
        me a message.
      </h3>
      <a
        class="col-span-1 flex flex-col space-y-4 border border-accent border-opacity-0 p-4 hover:border-opacity-100 hover:shadow-lg md:col-span-2"
        href="mailto:yusufcan.yilmaz@outlook.com"
      >
        <span class="text-lg" for="email">email:</span>
        <span class="text-xl font-bold">yusufcan.yilmaz@outlook.com</span>
      </a>
      <a
        class="col-span-1 flex flex-col space-y-4 border border-accent border-opacity-0 p-4 hover:border-opacity-100 hover:shadow-lg"
        href="https://github.com/YusufcanY"
        target="_blank"
      >
        <span class="text-lg" for="email">github:</span>
        <span class="text-xl font-bold">@YusufcanY</span>
      </a>
      <a
        class="col-span-1 flex flex-col space-y-4 border border-accent border-opacity-0 p-4 hover:border-opacity-100 hover:shadow-lg"
        href="https://gitlab.com/YusufcanY"
        target="_blank"
      >
        <span class="text-lg" for="email">gitlab:</span>
        <span class="text-xl font-bold">@YusufcanY</span>
      </a>
      <a
        class="col-span-1 flex flex-col space-y-4 border border-accent border-opacity-0 p-4 hover:border-opacity-100 hover:shadow-lg"
        href="https://blog.yusufcanyilmaz.com/"
        target="_blank"
      >
        <span class="text-lg" for="email">hashnode:</span>
        <span class="text-xl font-bold">blog.yusufcanyilmaz.com</span>
      </a>
      <a
        class="col-span-1 flex flex-col space-y-4 border border-accent border-opacity-0 p-4 hover:border-opacity-100 hover:shadow-lg"
        href="https://medium.com/@yusufcan-yilmaz/"
        target="_blank"
      >
        <span class="text-lg" for="email">medium:</span>
        <span class="text-xl font-bold">medium.com/@yusufcan-yilmaz</span>
      </a>
      <a
        class="col-span-1 flex flex-col space-y-4 border border-accent border-opacity-0 p-4 hover:border-opacity-100 hover:shadow-lg"
        href="https://www.linkedin.com/in/yusufcan-yilmaz"
        target="_blank"
      >
        <span class="text-lg" for="email">linkedin:</span>
        <span class="text-xl font-bold">linkedin.com/in/yusufcan-yilmaz</span>
      </a>
      <a
        class="col-span-1 flex flex-col space-y-4 border border-accent border-opacity-0 p-4 hover:border-opacity-100 hover:shadow-lg"
        href="https://twitter.com/yusufcan_nn"
        target="_blank"
      >
        <span class="text-lg" for="email">twitter:</span>
        <span class="text-xl font-bold">@yusufcan_nn</span>
      </a>
    </div>
  </div>
</template>
