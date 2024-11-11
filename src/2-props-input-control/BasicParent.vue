<script setup lang="ts">
import BasicInput from '@/2-props-input-control/BasicInput.vue'
import { computed, ref, watch } from 'vue'
import { hashPassword } from '@/utils'

const userName = ref<string>('')
const password = ref<string>('')

const hashedPassword = computed(() => {
  // run crazy algo to hash the password
  return hashPassword(password.value);
  // return password;
})

watch(userName, () => {
  console.log(userName.value)
})
</script>

<template>
  <BasicInput
    formTitle="Registration"

    v-model:userName="userName"

    :password="password"
    @update:password="(value) => (password = value)"
  />

  <div>Hacker watching</div>
  <div>Username is {{ userName }}</div>
  <div>Password is {{ password }}</div>
  <div>Hashed Password is {{ hashedPassword }}</div>
</template>

<style scoped></style>
