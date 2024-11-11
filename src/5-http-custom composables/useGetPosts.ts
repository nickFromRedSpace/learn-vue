import { onMounted, ref } from 'vue'

export const useGetPosts = () => {
  const posts = ref([])

  onMounted(async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      posts.value = await response.json()
    } catch (error) {
      console.error('Error fetching posts:', error)
    }
  })

  return { posts }
}
