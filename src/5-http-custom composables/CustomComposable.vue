<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useGetPosts } from '@/5-http-custom composables/useGetPosts'

// const posts = ref([])
//
// // 👇=== useEffect with empty dependency array
// onMounted(async () => {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts')
//     posts.value = await response.json()
//   } catch (error) {
//     console.error('Error fetching posts:', error)
//   }
// })

// OR
const { posts } = useGetPosts();

</script>

<template>
  <div>
    <h1>Posts</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
    </ul>
  </div>
</template>

<style scoped></style>
