<template>
  <div>
<!--    basically the react children -->
    <slot> </slot>

    <slot name="one" />

    <slot name="two" />

    <slot name="three">
      Default value for slot three
    </slot>

  </div>
</template>

<style scoped></style>
