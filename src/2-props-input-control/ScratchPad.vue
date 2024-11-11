<script setup lang="ts">
import { ref } from 'vue'

const notes = ref('')
</script>

<template>
  <textarea v-model="notes" />

  <textarea :value="notes" @input="notes = $event.target.value" />
</template>

<style scoped></style>
