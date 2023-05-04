<script setup>
  import { ArrowRightIcon } from '@heroicons/vue/24/outline'
  definePageMeta({
    title: 'Skills',
  })
</script>
<template>
  <div
    class="bg-light-foreground text-dark-foreground dark:bg-dark-foreground dark:text-light-foreground container mx-auto space-y-4 p-4 lg:pt-48"
  >
    <div class="flex items-center justify-between">
      <h2 class="text-4xl font-black">Coding</h2>
      <NuxtLink
        class="hover:bg-dark-foreground/5 dark:hover:bg-light-foreground/5 bg-opacity-0 p-2"
        to="/"
      >
        <ArrowRightIcon class="h-8 w-8" />
      </NuxtLink>
    </div>
    <p>
      I'm a Frontend Developer who is passionate about new technologies. I began
      programming with Wordpress but then asked myself, "Why am I not making my
      own website?". I chose to build my own websites. In high school, I made
      simple webpages using HTML, CSS, and JavaScript. I also used C# to develop
      various form apps. Then, in October 2020, I started working as an intern
      at my first company. Four months later, I started working as a full-time
      Frontend Developer for the same firm. I'm familiar with crypto currency
      systems and have worked with web3.js. I've mentioned several technologies
      that I'm working on below:
    </p>
    <div class="grid grid-cols-2 gap-4 lg:grid-cols-4">
      <div
        class="bg-dark-foreground/5 dark:bg-light-foreground/5 relative flex flex-col justify-center overflow-hidden p-6 pt-12"
      >
        <h4 class="text-2xl font-black">VUE</h4>
        <p class="opacity-50">Progressive JS Framework</p>
        <img
          alt=""
          class="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 scale-110 opacity-40"
          src="@/assets/icons/vue.svg"
        />
      </div>
      <div
        class="bg-dark-foreground/5 dark:bg-light-foreground/5 relative flex flex-col justify-center overflow-hidden p-6 pt-12"
      >
        <h4 class="text-2xl font-black">NUXT</h4>
        <p class="opacity-50">Intuitive Vue Framework</p>
        <img
          alt=""
          class="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 scale-110 opacity-40"
          src="@/assets/icons/nuxt.svg"
        />
      </div>
      <div
        class="bg-dark-foreground/5 dark:bg-light-foreground/5 relative col-span-2 flex flex-col justify-center overflow-hidden p-6 pt-12 lg:col-span-1"
      >
        <h4 class="text-2xl font-black">TAILWINDCSS</h4>
        <p class="opacity-50">Class Based CSS Framework</p>
        <img
          alt=""
          class="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 scale-110 opacity-40"
          src="@/assets/icons/tailwind.svg"
        />
      </div>
      <div
        class="bg-dark-foreground/5 dark:bg-light-foreground/5 relative flex flex-col justify-center overflow-hidden p-6 pt-12"
      >
        <h4 class="text-2xl font-black">TESTING</h4>
        <p class="opacity-50">I'm Test Driven Developer</p>
        <img
          alt=""
          class="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 scale-110 opacity-40"
          src="@/assets/icons/vitest.svg"
        />
      </div>
      <div
        class="bg-dark-foreground/5 dark:bg-light-foreground/5 relative flex flex-col justify-center overflow-hidden p-6 pt-12"
      >
        <h4 class="text-2xl font-black">SASS</h4>
        <p class="opacity-50">Syntactically Awesome Styling</p>
        <img
          alt=""
          class="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 scale-110 opacity-40"
          src="@/assets/icons/sass.svg"
        />
      </div>
      <div
        class="bg-dark-foreground/5 dark:bg-light-foreground/5 relative flex flex-col justify-center overflow-hidden p-6 pt-12"
      >
        <h4 class="text-2xl font-black">REACT</h4>
        <p class="opacity-50">JS Library</p>
        <img
          alt=""
          class="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 scale-110 opacity-40"
          src="@/assets/icons/react.svg"
        />
      </div>
      <div
        class="bg-dark-foreground/5 dark:bg-light-foreground/5 relative flex flex-col justify-center overflow-hidden p-6 pt-12"
      >
        <h4 class="text-2xl font-black">PHP</h4>
        <p class="opacity-50">Hypertext Preprocessor</p>
        <img
          alt=""
          class="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 scale-110 opacity-40"
          src="@/assets/icons/php.svg"
        />
      </div>
      <div
        class="bg-dark-foreground/5 dark:bg-light-foreground/5 relative col-span-2 flex flex-col justify-center overflow-hidden p-6 pt-12 lg:col-span-1"
      >
        <h4 class="text-2xl font-black">TYPESCRIPT</h4>
        <p class="opacity-50">JavaScript With Syntax For Types</p>
        <img
          alt=""
          class="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 scale-110 opacity-40"
          src="@/assets/icons/ts.svg"
        />
      </div>
    </div>
  </div>
</template>
