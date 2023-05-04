<script setup></script>
<template>
  <div
    class="safe-area bg-light-foreground dark:bg-dark-foreground dark:text-light-foreground text-dark-foreground grid grid-cols-12 grid-rows-6 gap-2 p-4"
  >
    <div class="col-span-8 lg:col-span-6 lg:p-4">
      <h1 class="text-2xl font-bold lg:text-xl">yusufcan yılmaz</h1>
    </div>
    <NuxtLink
      class="group col-span-6 hidden items-start justify-end text-xl lg:flex lg:p-4"
      to="/contact"
    >
      <span>say <span class="group-hover:text-accent">hi</span>.</span>
    </NuxtLink>
    <div class="col-span-4 flex items-start justify-end lg:hidden">
      <ThemeChanger />
    </div>
    <div class="row-span-4 hidden lg:block"></div>
    <div
      class="xs:space-y-4 col-span-12 row-span-4 space-y-2 font-black lg:col-span-10"
    >
      <h2 class="xs:text-5xl text-4xl lg:text-8xl">
        FRONTEND <span class="bg-accent">DEVELOPER</span>
      </h2>
      <h3 class="xs:text-3xl text-2xl lg:text-6xl">UI & UX DESIGNER</h3>
      <h3 class="xs:text-4xl text-3xl lg:text-7xl">SKATER</h3>
      <h3 class="xs:text-5xl text-4xl lg:text-8xl">BLOGGER</h3>
    </div>
    <div class="row-span-4 hidden items-center justify-end lg:flex">
      <ThemeChanger />
    </div>
    <NuxtLink
      class="group col-span-4 flex items-end text-xl lg:col-span-6 lg:p-4"
      to="/code"
    >
      <span>coding<span class="group-hover:text-accent">.</span></span>
    </NuxtLink>
    <NuxtLink
      class="group col-span-4 flex items-end justify-center text-xl lg:hidden lg:p-4"
      to="/contact"
    >
      <span>say <span class="group-hover:text-accent">hi</span>.</span>
    </NuxtLink>
    <NuxtLink
      class="group col-span-4 flex items-end justify-end text-xl lg:col-span-6 lg:p-4"
      to="/about-me"
    >
      <span>meet <span class="group-hover:text-accent">me</span>.</span>
    </NuxtLink>
  </div>
</template>
