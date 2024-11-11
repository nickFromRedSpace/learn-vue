<script setup lang="ts">
import { inject } from 'vue'

const count = inject<number>('count')
const increment = inject<() => void>("increment")
const decrement = inject<() => void>("decrement")
</script>

<template>
  <div>Counter: {{ count }}</div>

  <button @click="increment">Increment</button>
  <button @click="decrement">Decrement</button>
</template>

<style scoped>

</style>