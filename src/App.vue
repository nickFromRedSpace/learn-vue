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
  <h3>1.</h3>
  <BasicState />

  <h3>2.</h3>
  <ScratchPad />
  <basic-parent />

  <h3>3.</h3>
  <IfAndFor />
  <TrySlots>
    <div>this is a slot children</div>
  </TrySlots>

  <h3>4.</h3>
  <ProviderParent />

  <h3>5.</h3>
  <CustomComposable />
</template>

<style scoped></style>
