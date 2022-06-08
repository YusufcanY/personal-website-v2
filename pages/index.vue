<script setup></script>
<template>
  <div
    class="grid h-screen grid-cols-12 grid-rows-6 gap-2 bg-white p-4 text-black dark:bg-dark-foreground dark:text-white"
  >
    <div class="col-span-6 text-xl font-bold lg:p-4">yusufcan</div>
    <div class="col-span-6 flex justify-end text-xl lg:p-4">
      <span>say hi.</span>
    </div>
    <div class="row-span-4 hidden lg:block"></div>
    <div class="col-span-12 row-span-4 lg:col-span-10"></div>
    <div class="row-span-4 hidden flex-col items-end justify-center lg:flex">
      <ThemeChanger />
    </div>
    <div class="col-span-4 flex items-end text-xl lg:col-span-6 lg:p-4">
      <span>coding.</span>
    </div>
    <div class="col-span-4 block lg:hidden"></div>
    <div
      class="col-span-4 flex items-end justify-end text-xl lg:col-span-6 lg:p-4"
    >
      <span>meet me.</span>
    </div>
  </div>
</template>
