<script setup lang="ts">
// 👇 === init props here
defineProps({
  formTitle: {
    required: true,
    type: String,
    default: "Default Title"
  },
  userName: {
    required: true,
    type: String
  },
  password: {
    required: true,
    type: String
  }
})

const emits = defineEmits(['update:userName', 'update:password'])

function handlePasswordUpdate(event: InputEvent) {
  emits('update:password', event.target.value)
}
</script>

<template>
  <div>{{ formTitle }}</div>
  <label>Username</label>

    <!-- 👇=== value={userName}👇 == onChange -->
  <input :value="userName" @input="emits('update:userName', $event.target.value)" />

  <label>Password</label>
  <input :value="password" @input="handlePasswordUpdate" type="password" />
</template>

<style scoped></style>
