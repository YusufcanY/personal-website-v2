<script setup>
  // import {
  //   MinusCircleIcon,
  //   PlusCircleIcon,
  // } from '@heroicons/vue/outline/esm/index.js'
  const activeSkill = useState('activeSkill', () => null)
</script>
<template>
  <div>
    <div class="absolute top-0 left-1/2 font-black text-white">
      {{ activeSkill }}
    </div>
    <div
      class="relative flex space-x-4 p-4 lg:h-screen"
      :class="{
        'justify-end':
          activeSkill === 50 || activeSkill === 60 || activeSkill === 70,
        'justify-center': activeSkill === 30 || activeSkill === 40,
        'items-start': activeSkill === 50 || activeSkill === 60,
      }"
    >
      <div
        v-if="!activeSkill || activeSkill === 10 || activeSkill === 20"
        class="flex basis-3/12 flex-col space-y-4 transition-all duration-200"
        :class="{
          'justify-end': activeSkill === 20,
          'basis-full': activeSkill === 10 || activeSkill === 20,
        }"
      >
        <button
          v-if="!activeSkill || activeSkill === 10"
          class="relative w-full overflow-hidden text-left transition-all duration-300"
          :class="activeSkill === 10 ? 'h-full' : 'h-4/6'"
          @click="
            activeSkill === 10 ? (activeSkill = null) : (activeSkill = 10)
          "
        >
          <div
            class="h-full cursor-pointer overflow-hidden bg-gray-800 text-white transition-all duration-200 hover:bg-opacity-50 hover:shadow-2xl"
          >
            <div
              class="button-container group flex h-full flex-col justify-end p-6"
            >
              <p class="-ml-1 pb-1 text-6xl font-black uppercase opacity-10">
                VUE
              </p>
              <p
                class="font-500 fade-in flex items-center text-sm uppercase tracking-wide"
              >
                Vision &amp; Value<span
                  class="-translate-y-0.5 translate-x-0 transform pl-2 text-lg opacity-0 duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                  >→</span
                >
              </p>
              <img
                class="absolute bottom-0 right-0 w-1/2 translate-x-1/3 translate-y-1/3 select-none opacity-20"
                draggable="false"
                src="@/assets/icons/vue.svg"
              />
            </div>
          </div>
        </button>
        <button
          v-if="!activeSkill || activeSkill === 20"
          class="relative w-full overflow-hidden text-left transition-all duration-300"
          :class="activeSkill === 20 ? 'h-full' : 'h-2/6'"
          @click="
            activeSkill === 20 ? (activeSkill = null) : (activeSkill = 20)
          "
        >
          <div
            class="h-full cursor-pointer overflow-hidden bg-gray-800 text-white transition-all duration-200 hover:bg-opacity-50 hover:shadow-2xl"
          >
            <div
              class="button-container group flex h-full flex-col justify-end p-6"
            >
              <p class="-ml-1 pb-1 text-6xl font-black uppercase opacity-10">
                TESTING
              </p>
              <p
                class="font-500 fade-in flex items-center text-sm uppercase tracking-wide"
              >
                Metaverse<span
                  class="-translate-y-0.5 translate-x-0 transform pl-2 text-lg opacity-0 duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                  >→</span
                >
              </p>
              <img
                class="absolute bottom-0 right-0 w-1/2 translate-x-1/3 translate-y-1/3 select-none opacity-20"
                draggable="false"
                src="@/assets/icons/vitest.svg"
              />
            </div>
          </div>
        </button>
      </div>
      <div
        v-if="!activeSkill || activeSkill === 30 || activeSkill === 40"
        class="flex basis-3/12 flex-col space-y-4 transition-all duration-200"
        :class="{
          'justify-end': activeSkill === 40,
          'basis-full': activeSkill === 30 || activeSkill === 40,
        }"
      >
        <button
          v-if="!activeSkill || activeSkill === 30"
          class="relative w-full overflow-hidden text-left transition-all duration-300"
          :class="activeSkill === 30 ? 'h-full' : 'h-2/6'"
          @click="
            activeSkill === 30 ? (activeSkill = null) : (activeSkill = 30)
          "
        >
          <div
            class="h-full cursor-pointer overflow-hidden bg-gray-800 text-white transition-all duration-200 hover:bg-opacity-50 hover:shadow-2xl"
          >
            <div
              class="button-container group flex h-full flex-col justify-end p-6"
            >
              <p class="-ml-1 pb-1 text-6xl font-black uppercase opacity-10">
                REACT
              </p>
              <p
                class="font-500 fade-in flex items-center text-sm uppercase tracking-wide"
              >
                Bridge Between<span
                  class="-translate-y-0.5 translate-x-0 transform pl-2 text-lg opacity-0 duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                  >→</span
                >
              </p>
              <img
                class="absolute bottom-0 right-0 w-1/2 translate-x-1/3 translate-y-1/3 select-none opacity-20"
                draggable="false"
                src="@/assets/icons/react.svg"
              />
            </div>
          </div>
        </button>
        <button
          v-if="!activeSkill || activeSkill === 40"
          class="relative w-full overflow-hidden text-left transition-all duration-300"
          :class="activeSkill === 40 ? 'h-full' : 'h-4/6'"
          @click="
            activeSkill === 40 ? (activeSkill = null) : (activeSkill = 40)
          "
        >
          <div
            class="h-full cursor-pointer overflow-hidden bg-gray-800 text-white transition-all duration-200 hover:bg-opacity-50 hover:shadow-2xl"
          >
            <div
              class="button-container group flex h-full flex-col justify-end p-6"
            >
              <p class="-ml-1 pb-1 text-6xl font-black uppercase opacity-10">
                TAILWIND
              </p>
              <p
                class="font-500 fade-in flex items-center text-sm uppercase tracking-wide"
              >
                Seedlings<span
                  class="-translate-y-0.5 translate-x-0 transform pl-2 text-lg opacity-0 duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                  >→</span
                >
              </p>
              <img
                class="absolute bottom-0 right-0 w-1/2 translate-x-1/3 translate-y-1/3 select-none opacity-20"
                draggable="false"
                src="@/assets/icons/tailwind.svg"
              />
            </div>
          </div>
        </button>
      </div>
      <div
        v-if="
          !activeSkill ||
          activeSkill === 50 ||
          activeSkill === 60 ||
          activeSkill === 70
        "
        class="flex h-full basis-6/12 flex-col space-y-4 transition-all duration-200"
        :class="{
          'items-end justify-end': activeSkill === 70,
          'items-end justify-start': activeSkill === 60,
          'basis-full':
            activeSkill === 50 || activeSkill === 60 || activeSkill === 70,
        }"
      >
        <div
          v-if="!activeSkill || activeSkill === 50 || activeSkill === 60"
          class="w-full"
          :class="activeSkill === 50 || activeSkill === 60 ? 'h-full' : 'h-4/6'"
        >
          <div class="flex h-full basis-1/2 space-x-4">
            <button
              v-if="!activeSkill || activeSkill === 50"
              class="relative w-full overflow-hidden text-left transition-all duration-300"
              @click="
                activeSkill === 50 ? (activeSkill = null) : (activeSkill = 50)
              "
            >
              <div
                class="h-full cursor-pointer overflow-hidden bg-gray-800 text-white transition-all duration-200 hover:bg-opacity-50 hover:shadow-2xl"
              >
                <div
                  class="button-container group flex h-full flex-col justify-end p-6"
                >
                  <p
                    class="-ml-1 pb-1 text-6xl font-black uppercase opacity-10"
                  >
                    SASS
                  </p>
                  <p
                    class="font-500 fade-in flex items-center text-sm uppercase tracking-wide"
                  >
                    Community<span
                      class="-translate-y-0.5 translate-x-0 transform pl-2 text-lg opacity-0 duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                      >→</span
                    >
                  </p>
                  <img
                    class="absolute bottom-0 right-0 w-1/2 translate-x-1/3 translate-y-1/3 select-none opacity-20"
                    draggable="false"
                    src="@/assets/icons/sass.svg"
                  />
                </div>
              </div>
            </button>
            <button
              v-if="!activeSkill || activeSkill === 60"
              class="relative w-full overflow-hidden text-left transition-all duration-300"
              @click="
                activeSkill === 60 ? (activeSkill = null) : (activeSkill = 60)
              "
            >
              <div
                class="h-full cursor-pointer overflow-hidden bg-gray-800 text-white transition-all duration-200 hover:bg-opacity-50 hover:shadow-2xl"
              >
                <div
                  class="button-container group flex h-full flex-col justify-end p-6"
                >
                  <p
                    class="-ml-1 pb-1 text-6xl font-black uppercase opacity-10"
                  >
                    JS
                  </p>
                  <p
                    class="font-500 fade-in flex items-center text-sm uppercase tracking-wide"
                  >
                    Physical World<span
                      class="-translate-y-0.5 translate-x-0 transform pl-2 text-lg opacity-0 duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                      >→</span
                    >
                  </p>
                  <img
                    class="absolute bottom-0 right-0 w-1/2 translate-x-1/3 translate-y-1/3 select-none opacity-20"
                    draggable="false"
                    src="@/assets/icons/javascript.svg"
                  />
                </div>
              </div>
            </button>
          </div>
        </div>
        <div
          v-if="!activeSkill || activeSkill === 70"
          class="w-full"
          :class="[activeSkill === 70 ? 'h-full' : 'h-2/6']"
        >
          <div class="flex h-full basis-full">
            <button
              v-if="!activeSkill || activeSkill === 70"
              class="relative w-full overflow-hidden text-left transition-all duration-300"
              @click="
                activeSkill === 70 ? (activeSkill = null) : (activeSkill = 70)
              "
            >
              <div
                class="h-full cursor-pointer overflow-hidden bg-gray-800 text-white transition-all duration-200 hover:bg-opacity-50 hover:shadow-2xl"
              >
                <div
                  class="button-container group flex h-full flex-col justify-end p-6"
                >
                  <p
                    class="-ml-1 pb-1 text-6xl font-black uppercase opacity-10"
                  >
                    NUXT
                  </p>
                  <p
                    class="font-500 fade-in flex items-center text-sm uppercase tracking-wide"
                  >
                    Connect Your Mind<span
                      class="-translate-y-0.5 translate-x-0 transform pl-2 text-lg opacity-0 duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                      >→</span
                    >
                  </p>
                  <img
                    class="absolute bottom-0 right-0 w-1/2 translate-x-1/3 translate-y-1/3 select-none opacity-20"
                    draggable="false"
                    src="@/assets/icons/nuxt.svg"
                  />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
