<script setup lang="ts">
import { ref, watch, watchEffect } from 'vue'

// 👇=== useState
const count = ref<number>(0)

function changeCountBy(changeBy: number) {
  count.value += changeBy
}

// 👇=== useEffect with dep tracking
watch([count], (prev) => {
  console.log(`prevcount is ${prev}`)
  console.log(`new count is ${count.value}`)
})

// 👇=== automatic useEffect dep tracking
watchEffect(() => {
  console.log(`new count is ${count.value}`)
})

</script>

<template>
               <!-- 👇=== double curly for dynamic values -->
  <div>Counter: {{ count }}</div>

     <!--  👇 === onclick-->
  <button @click="count++">Increment</button>
  <button @click="count--">Decrement</button>

  <button @click="changeCountBy(5)">Add 5</button>
  <button @click="changeCountBy(-3)">Remove 3</button>
</template>

<!--everything here is scoped to this component-->
<style scoped>
</style>
