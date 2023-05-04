<script setup>
  import {
    ArrowRightIcon,
    ArrowTopRightOnSquareIcon,
  } from '@heroicons/vue/24/outline'
  definePageMeta({
    title: 'About Me',
    description:
      'Yusufcan Yılmaz is a Frontend Developer who is passionate about building beautiful and functional websites.',
  })
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
  const {
    data: hashnode,
    pending: pendingHash,
    error: errHash,
  } = useLazyFetch('https://api.hashnode.com/', {
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
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  })
  const {
    data: medium,
    pending: pendingMed,
    error: errMed,
  } = useLazyFetch(
    'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@yusufcan-yilmaz'
  )
</script>
<template>
  <div
    class="bg-light-foreground text-dark-foreground dark:bg-dark-foreground dark:text-light-foreground container mx-auto space-y-4 p-4 lg:pt-48"
  >
    <div class="flex items-center justify-between">
      <h2 class="text-4xl font-black">
        Meet <span class="text-accent">Yusufcan</span>
      </h2>
      <NuxtLink
        class="hover:bg-dark-foreground/5 dark:hover:bg-light-foreground/5 bg-opacity-0 p-2"
        to="/"
      >
        <ArrowRightIcon class="h-8 w-8" />
      </NuxtLink>
    </div>
    <div
      class="flex flex-col items-center space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0"
    >
      <div>
        <img
          alt="yusufcan yılmaz"
          class="max-w-[200px] select-none"
          draggable="false"
          src="@/assets/yusufcan.jpeg"
        />
      </div>
      <p class="text-lg">
        Hello, I'm <strong>Yusufcan Yılmaz</strong>, and I've been working as a
        professional Frontend Developer for over <strong>3 years</strong>. I
        have strong technical skills and extensive experience in web
        development. I actively follow and utilize the latest technologies, with
        particular expertise in
        <strong>Vue.js, React.js, and SSR (Server-Side Rendering)</strong>.
        <br />
        <br />
        Throughout my career, I've gained significant experience in creating
        <u>user-friendly and visually appealing user interfaces</u>. By
        effectively using HTML, CSS, and JavaScript in frontend development,
        I've developed web applications that prioritize exceptional user
        experiences. I'm also experienced in working with
        <strong
          >RESTful APIs, optimizing performance, and adhering to security
          standards</strong
        >.
      </p>
    </div>
    <p class="text-lg">
      I'm a <u>team player</u> with <u>strong communication skills</u> and
      problem-solving abilities. I'm also proficient in project management and
      time management, consistently delivering projects on time and with success
      in team-oriented environments.
      <br />
      <br />
      In my free time, I try to improve myself in different areas. Currently,
      I'm learning <strong>German</strong> and <strong>English</strong>. I also
      enjoy participating in social activities. Skateboarding, playing video
      games, and playing the guitar are some of my hobbies. Besides, I write
      blog articles about frontend development to share and reinforce my
      knowledge.
    </p>
    <h3
      v-if="!(pendingHash || pendingMed || (errHash && errMed))"
      class="!mt-8 text-2xl font-black"
    >
      Articles
    </h3>
    <div v-if="pendingHash || pendingMed">loading</div>
    <div v-else class="grid grid-cols-1 gap-4 lg:grid-cols-3">
      <article
        v-for="(post, index) in errHash
          ? []
          : hashnode.data.user.publication.posts"
        :key="index"
      >
        <a
          class="border-dark-foreground bg-dark-foreground dark:border-light-foreground dark:bg-light-foreground group relative flex flex-col overflow-hidden border border-opacity-20 !bg-opacity-10 p-4 hover:shadow-xl dark:border-opacity-20 lg:h-60"
          :href="`https://blog.yusufcanyilmaz.com/${post.slug}`"
          target="_blank"
        >
          <img
            alt=""
            class="left-0 top-0 z-0 mb-4 h-full w-full lg:absolute lg:mb-0"
            :src="post.coverImage"
          />
          <div class="hidden h-0 ease-in-out group-hover:h-full lg:block"></div>
          <div>
            <h4 class="relative z-10 text-2xl font-black">
              {{ post.title }}
            </h4>
            <span class="relative z-10 h-full"
              >{{ timeSince(post.dateAdded) }} in Hashnode</span
            >
          </div>
          <div
            class="bg-light-foreground dark:bg-dark-foreground absolute left-0 top-0 z-[6] hidden h-full w-full opacity-70 group-hover:opacity-0 lg:block"
          ></div>

          <div
            class="from-light-foreground dark:from-dark-foreground absolute left-0 top-0 z-[5] hidden h-full w-full bg-gradient-to-t to-transparent opacity-0 group-hover:opacity-100 lg:block"
          ></div>
          <button
            class="border-accent bg-light-foreground dark:bg-dark-foreground right-4 top-4 z-10 mt-4 flex items-center justify-center space-x-2 border-b-2 border-opacity-0 p-4 text-lg opacity-100 hover:border-opacity-100 hover:shadow-md group-hover:opacity-100 lg:absolute lg:mt-0 lg:py-2 lg:text-base lg:opacity-0"
          >
            <ArrowTopRightOnSquareIcon class="hidden h-5 w-5 lg:block" />
            <span class="flex space-x-1">
              <span>Read More</span>
            </span>
          </button>
        </a>
      </article>
      <article v-for="(post, index) in errMed ? [] : medium.items" :key="index">
        <a
          class="border-dark-foreground bg-dark-foreground dark:border-light-foreground dark:bg-light-foreground group relative flex flex-col overflow-hidden border border-opacity-20 !bg-opacity-10 p-4 hover:shadow-xl dark:border-opacity-20 lg:h-60"
          :href="post.link"
          target="_blank"
        >
          <img
            alt=""
            class="left-0 top-0 z-0 mb-4 h-full w-full lg:absolute lg:mb-0"
            :src="post.thumbnail"
          />
          <div class="hidden h-0 ease-in-out group-hover:h-full lg:block"></div>
          <div>
            <h4 class="relative z-10 text-2xl font-black">
              {{ post.title }}
            </h4>
            <span class="relative z-10 h-full"
              >{{ timeSince(post.pubDate) }} in Medium</span
            >
          </div>
          <div
            class="bg-light-foreground dark:bg-dark-foreground absolute left-0 top-0 z-[6] hidden h-full w-full opacity-70 group-hover:opacity-0 lg:block"
          ></div>

          <div
            class="from-light-foreground dark:from-dark-foreground absolute left-0 top-0 z-[5] hidden h-full w-full bg-gradient-to-t to-transparent opacity-0 group-hover:opacity-100 lg:block"
          ></div>
          <button
            class="border-accent bg-light-foreground dark:bg-dark-foreground right-4 top-4 z-10 mt-4 flex items-center justify-center space-x-2 border-b-2 border-opacity-0 p-4 text-lg opacity-100 hover:border-opacity-100 hover:shadow-md group-hover:opacity-100 lg:absolute lg:mt-0 lg:py-2 lg:text-base lg:opacity-0"
          >
            <ArrowTopRightOnSquareIcon class="hidden h-5 w-5 lg:block" />
            <span class="flex space-x-1">
              <span>Read More</span>
            </span>
          </button>
        </a>
      </article>
    </div>
  </div>
</template>
