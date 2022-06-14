<script setup></script>
<template>
  <div
    class="grid h-screen grid-cols-12 grid-rows-6 gap-2 bg-light-foreground p-4 text-black dark:bg-dark-foreground dark:text-light-foreground"
  >
    <div class="col-span-6 text-2xl font-bold lg:p-4 lg:text-xl">
      <span>yusufcan</span>
    </div>
    <NuxtLink
      class="group col-span-6 hidden items-start justify-end text-xl lg:flex lg:p-4"
      to="/say-hi"
    >
      <span>say <span class="group-hover:text-accent">hi</span>.</span>
    </NuxtLink>
    <div class="col-span-6 flex items-start justify-end lg:hidden">
      <ThemeChanger />
    </div>
    <div class="row-span-4 hidden lg:block"></div>
    <div class="col-span-12 row-span-4 lg:col-span-10"></div>
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
      to="/say-hi"
    >
      <span>say <span class="group-hover:text-accent">hi</span>.</span>
    </NuxtLink>
    <NuxtLink
      class="group col-span-4 flex items-end justify-end text-xl lg:col-span-6 lg:p-4"
      to="/meet-me"
    >
      <span>meet <span class="group-hover:text-accent">me</span>.</span>
    </NuxtLink>
  </div>
</template>
