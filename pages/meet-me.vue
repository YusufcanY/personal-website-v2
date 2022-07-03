<script setup>
  import {
    ArrowNarrowRightIcon,
    ExternalLinkIcon,
  } from '@heroicons/vue/outline'
  const hashnodePosts = useState('hashnodePosts', () => [])
  const mediumPosts = useState('mediumPosts', () => [])
  const timeSince = (date) => {
    if (date.charAt(date.length - 1) !== 'Z')
      date = date.replace(' ', 'T') + 'Z' // It fixes IOS date bug
    const seconds = Math.floor((new Date() - new Date(date)) / 1000)

    let interval = seconds / 31536000

    if (interval > 1) {
      return (
        [Math.floor(interval)] +
        ` year${Math.floor(interval) === 1 ? '' : 's'} ago`
      )
    }
    interval = seconds / 2592000
    if (interval > 1) {
      return (
        [Math.floor(interval)] +
        ` month${Math.floor(interval) === 1 ? '' : 's'} ago`
      )
    }
    interval = seconds / 86400
    if (interval > 1) {
      return (
        [Math.floor(interval)] +
        ` day${Math.floor(interval) === 1 ? '' : 's'} ago`
      )
    }
    interval = seconds / 3600
    if (interval > 1) {
      return (
        [Math.floor(interval)] +
        ` hour${Math.floor(interval) === 1 ? '' : 's'} ago`
      )
    }
    interval = seconds / 60
    if (interval > 1) {
      return (
        [Math.floor(interval)] +
        ` minute${Math.floor(interval) === 1 ? '' : 's'} ago`
      )
    }
    return (
      [Math.floor(interval)] +
      ` second${Math.floor(interval) === 1 ? '' : 's'} ago`
    )
  }
  const { data: hashnode } = await useFetch('https://api.hashnode.com/', {
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
          dateAdded
        }
      }
    }
  }`,
    },
  })
  const { data: medium } = await useFetch(
    'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@yusufcan-yilmaz'
  )
  hashnodePosts.value = hashnode.value.data.user.publication.posts
  mediumPosts.value = medium.value.items
</script>
<template>
  <div
    class="container mx-auto space-y-4 bg-light-foreground p-4 text-dark-foreground dark:bg-dark-foreground dark:text-light-foreground lg:pt-48"
  >
    <div class="flex items-center justify-between">
      <h2 class="text-4xl font-black">
        Meet <span class="text-accent">Yusufcan</span>
      </h2>
      <NuxtLink
        class="bg-dark-foreground bg-opacity-0 p-2 hover:bg-opacity-10 dark:bg-light-foreground dark:bg-opacity-0 dark:hover:bg-opacity-10"
        to="/"
      >
        <ArrowNarrowRightIcon class="h-8 w-8" />
      </NuxtLink>
    </div>
    <div
      class="flex flex-col items-center space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0"
    >
      <div class="relative">
        <img
          alt="yusufcan yılmaz"
          class="relative z-10 max-w-[200px] select-none rounded-full"
          draggable="false"
          src="@/assets/yusufcan.jpeg"
        />
      </div>
      <p class="text-lg">
        I enjoy gaming and skating; those are two of my favorite pastimes. There
        are also social events, meeting new people is something I like. Outside
        of work, I'm now attempting to improve my English on Cambly. Right now,
        I'm working on some articles these days and I'm sharing my Frontend
        experience, especially about Vue.js. You can easily find my articles
        down below:
      </p>
    </div>
    <h3 class="!mt-8 text-2xl font-black">Articles</h3>
    <div
      v-if="hashnodePosts[0] || mediumPosts[0]"
      class="grid grid-cols-1 gap-4 lg:grid-cols-3"
    >
      <a
        v-for="(post, index) in hashnodePosts"
        :key="index"
        class="group relative flex flex-col overflow-hidden border border-dark-foreground border-opacity-20 bg-dark-foreground !bg-opacity-10 p-4 hover:shadow-xl dark:border-light-foreground dark:border-opacity-20 dark:bg-light-foreground lg:h-60"
        :href="`https://blog.yusufcanyilmaz.com/${post.slug}`"
        target="_blank"
      >
        <img
          alt=""
          class="top-0 left-0 z-0 mb-4 h-full w-full lg:absolute lg:mb-0"
          :src="post.coverImage"
        />
        <div class="hidden h-0 ease-in-out group-hover:h-full lg:block"></div>
        <div>
          <h4 class="relative z-10 text-2xl font-black">
            {{ post.title }}
          </h4>
          <span class="relative z-10 h-full">{{
            timeSince(post.dateAdded)
          }}</span>
        </div>
        <div
          class="absolute top-0 left-0 z-[6] hidden h-full w-full bg-light-foreground opacity-70 group-hover:opacity-0 dark:bg-dark-foreground lg:block"
        ></div>

        <div
          class="absolute top-0 left-0 z-[5] hidden h-full w-full bg-gradient-to-t from-light-foreground to-transparent opacity-0 group-hover:opacity-100 dark:from-dark-foreground lg:block"
        ></div>
        <button
          class="top-4 right-4 z-10 mt-4 flex items-center justify-center space-x-2 border-b-2 border-accent border-opacity-0 bg-light-foreground p-4 text-lg opacity-100 hover:border-opacity-100 hover:shadow-md group-hover:opacity-100 dark:bg-dark-foreground lg:absolute lg:mt-0 lg:py-2 lg:text-base lg:opacity-0"
        >
          <ExternalLinkIcon class="hidden h-5 w-5 lg:block" />
          <span class="flex space-x-1">
            <span>Read More</span>
            <span class="block lg:hidden">on Hashnode</span></span
          >
        </button>
      </a>
      <a
        v-for="(post, index) in mediumPosts"
        :key="index"
        class="group relative flex flex-col overflow-hidden border border-dark-foreground border-opacity-20 bg-dark-foreground !bg-opacity-10 p-4 hover:shadow-xl dark:border-light-foreground dark:border-opacity-20 dark:bg-light-foreground lg:h-60"
        :href="post.link"
        target="_blank"
      >
        <img
          alt=""
          class="top-0 left-0 z-0 mb-4 h-full w-full lg:absolute lg:mb-0"
          :src="post.thumbnail"
        />
        <div class="hidden h-0 ease-in-out group-hover:h-full lg:block"></div>
        <div>
          <h4 class="relative z-10 text-2xl font-black">
            {{ post.title }}
          </h4>
          <span class="relative z-10 h-full">{{
            timeSince(post.pubDate)
          }}</span>
        </div>
        <div
          class="absolute top-0 left-0 z-[6] hidden h-full w-full bg-light-foreground opacity-70 group-hover:opacity-0 dark:bg-dark-foreground lg:block"
        ></div>

        <div
          class="absolute top-0 left-0 z-[5] hidden h-full w-full bg-gradient-to-t from-light-foreground to-transparent opacity-0 group-hover:opacity-100 dark:from-dark-foreground lg:block"
        ></div>
        <button
          class="top-4 right-4 z-10 mt-4 flex items-center justify-center space-x-2 border-b-2 border-accent border-opacity-0 bg-light-foreground p-4 text-lg opacity-100 hover:border-opacity-100 hover:shadow-md group-hover:opacity-100 dark:bg-dark-foreground lg:absolute lg:mt-0 lg:py-2 lg:text-base lg:opacity-0"
        >
          <ExternalLinkIcon class="hidden h-5 w-5 lg:block" />
          <span class="flex space-x-1">
            <span>Read More</span>
            <span class="block lg:hidden">on Medium</span></span
          >
        </button>
      </a>
    </div>
  </div>
</template>
