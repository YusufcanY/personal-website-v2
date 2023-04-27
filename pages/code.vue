<script setup>
  import { ArrowNarrowRightIcon } from '@heroicons/vue/outline'
  definePageMeta({
    title: 'Skills',
    description:
      'Yusufcan Yılmaz building high quality websites with latest technologies like Vue.js and Nuxt.js.',
  })
</script>
<template>
  <div
    class="container mx-auto space-y-4 bg-light-foreground p-4 text-dark-foreground dark:bg-dark-foreground dark:text-light-foreground lg:pt-48"
  >
    <div class="flex items-center justify-between">
      <h2 class="text-4xl font-black">Coding</h2>
      <NuxtLink
        class="bg-dark-foreground bg-opacity-0 p-2 hover:bg-opacity-10 dark:bg-light-foreground dark:bg-opacity-0 dark:hover:bg-opacity-10"
        to="/"
      >
        <ArrowNarrowRightIcon class="h-8 w-8" />
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
      that I've worked in the past:
    </p>
    <div class="grid grid-cols-2 gap-4 lg:grid-cols-4">
      <div
        class="relative flex flex-col justify-center overflow-hidden bg-dark-foreground !bg-opacity-10 p-6 pt-12 dark:bg-light-foreground"
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
        class="relative flex flex-col justify-center overflow-hidden bg-dark-foreground !bg-opacity-10 p-6 pt-12 dark:bg-light-foreground"
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
        class="relative col-span-2 flex flex-col justify-center overflow-hidden bg-dark-foreground !bg-opacity-10 p-6 pt-12 dark:bg-light-foreground lg:col-span-1"
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
        class="relative flex flex-col justify-center overflow-hidden bg-dark-foreground !bg-opacity-10 p-6 pt-12 dark:bg-light-foreground"
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
        class="relative flex flex-col justify-center overflow-hidden bg-dark-foreground !bg-opacity-10 p-6 pt-12 dark:bg-light-foreground"
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
        class="relative flex flex-col justify-center overflow-hidden bg-dark-foreground !bg-opacity-10 p-6 pt-12 dark:bg-light-foreground"
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
        class="relative flex flex-col justify-center overflow-hidden bg-dark-foreground !bg-opacity-10 p-6 pt-12 dark:bg-light-foreground"
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
        class="relative col-span-2 flex flex-col justify-center overflow-hidden bg-dark-foreground !bg-opacity-10 p-6 pt-12 dark:bg-light-foreground lg:col-span-1"
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
