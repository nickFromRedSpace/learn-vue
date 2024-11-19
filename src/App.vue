<script setup lang="ts">
import BasicState from '@/1-state-and-effects/BasicState.vue'
import BasicParent from '@/2-props-input-control/BasicParent.vue'
import ScratchPad from '@/2-props-input-control/ScratchPad.vue'
import IfAndFor from '@/3-rendering/IfAndFor.vue'
import TrySlots from '@/3-rendering/TrySlots.vue'
import ProviderParent from '@/4-provide-inject/ProviderParent.vue'
import CustomComposable from '@/5-http-custom composables/CustomComposable.vue'
</script>

<template>
  <h3>1. State and Effects</h3>
  <BasicState />

  <h3>2. Props and Controlled Components</h3>
  <ScratchPad />
  <basic-parent />

  <h3>3.1 If and For</h3>
  <IfAndFor />

  <h3>3.2 Slots</h3>
  <TrySlots>
    <template #default>
      <div>default slot content</div>
    </template>
    <template #one>
      <div>content for slot one</div>
    </template>
    <template #two>
      <div>content for slot two</div>
    </template>
  </TrySlots>

  <h3>4. Context</h3>
  <ProviderParent />

  <h3>5. HTTP and Composable (aks hooks)</h3>
  <CustomComposable />
</template>

<style scoped></style>
