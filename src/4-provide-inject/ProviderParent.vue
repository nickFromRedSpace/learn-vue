<script setup lang="ts">
import InjectedChild from '@/4-provide-inject/InjectedChild.vue'
import { provide, ref } from 'vue'

const counter = ref(0)

provide('count', counter)
provide('increment', () => counter.value++)
provide('decrement', () => counter.value--)

</script>

<template>
  <InjectedChild />
</template>

<style scoped></style>
