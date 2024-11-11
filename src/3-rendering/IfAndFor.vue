<script setup lang="ts">
const listData = [0, 1, 2, 3, 4, 5, 6, 7, 8]
</script>

<template>
  <div v-for="element in listData" v-bind:key="element">
    <div v-if="element % 2 === 0">{{ element }} is even</div>
    <div v-else-if="element % 2 === 1">{{ element }} is odd</div>
    <div v-else>Invalid</div>
  </div>

<!--  will set display to none -->
  <div v-show="true">
    hello
  </div>

</template>

<style scoped></style>
