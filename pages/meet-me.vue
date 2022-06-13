<script setup>
  import {
    ArrowNarrowRightIcon,
    ExternalLinkIcon,
  } from '@heroicons/vue/outline'
  const posts = useState('posts', () => [])
  const { data } = await useFetch('https://api.hashnode.com/', {
    method: 'post',
    body: {
      query: `
      {
  user(username: "yusufcan") {
    publication {
      posts(page: 0) {
        coverImage
        title
        brief
        slug
      }
    }
  }
}`,
    },
  })
  posts.value = data.value.data.user.publication.posts
</script>
<template>
  <div
    class="container mx-auto space-y-4 bg-light-foreground p-4 text-dark-foreground dark:bg-dark-foreground dark:text-light-foreground lg:pt-48"
  >
    <div class="flex items-center justify-between">
      <h2 class="text-4xl font-black">Meet Yusufcan</h2>
      <NuxtLink
        class="bg-dark-foreground bg-opacity-0 p-2 hover:bg-opacity-10 dark:bg-light-foreground dark:bg-opacity-0 dark:hover:bg-opacity-10"
        to="/"
      >
        <ArrowNarrowRightIcon class="h-8 w-8" />
      </NuxtLink>
    </div>
    <p>
      I enjoy gaming and skating; those are two of my favorite pastimes. There
      are also social events. I enjoy meeting new people and talking about my
      hobbies. <br />
      Right now, I'm working on some articles on my Frontend experience,
      particularly using Vue.js. You directly can find my articles down below:
    </p>
    <div v-if="posts[0]" class="grid grid-cols-1 gap-4 lg:grid-cols-3">
      <a
        v-for="(post, index) in posts"
        :key="index"
        class="group relative flex h-60 flex-col overflow-hidden bg-dark-foreground !bg-opacity-10 p-4 hover:shadow-xl dark:bg-light-foreground"
        :href="`https://blog.yusufcanyilmaz.com/${post.slug}`"
        target="_blank"
      >
        <h4 class="relative z-10 text-2xl font-black group-hover:mt-32">
          {{ post.title }}
        </h4>
        <p class="relative z-10">{{ post.brief.slice(0, 120) }}...</p>
        <div
          class="absolute top-0 left-0 z-[6] h-full w-full bg-light-foreground opacity-50 group-hover:opacity-0 dark:bg-dark-foreground"
        ></div>

        <div
          class="absolute top-0 left-0 z-[5] h-full w-full bg-gradient-to-t from-light-foreground to-transparent dark:from-dark-foreground"
        ></div>
        <img alt="" class="absolute top-0 left-0 z-0" :src="post.coverImage" />
        <a
          class="absolute top-2 right-2 z-10 flex space-x-2 bg-light-foreground px-4 py-2 opacity-0 hover:shadow-md group-hover:opacity-100 dark:bg-dark-foreground"
          :href="`https://blog.yusufcanyilmaz.com/${post.slug}`"
          target="_blank"
        >
          <ExternalLinkIcon class="h-5 w-5" />
          <span>Read More</span>
        </a>
      </a>
    </div>
  </div>
</template>
