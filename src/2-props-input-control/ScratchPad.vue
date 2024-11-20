<script setup lang="ts">
import { ref } from 'vue'

const notes = ref('')
</script>

<template>
  <textarea :value="notes" @input="notes = $event.target.value" />
<!--  <textarea :value="notes" @input="(event) => notes = event.target.value" />-->

  <textarea v-model="notes" />
</template>

<style scoped></style>
