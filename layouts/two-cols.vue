<script setup lang="ts">
const props = defineProps({
  class: {
    type: String,
  },
  leftClass: {
    type: String,
  },
  rightClass: {
    type: String,
  },
  verticalMiddle: {
    type: Boolean,
    default: true,
  },
})
</script>

<template>
  <div class="relative h-full grid">
    <BackDecoration />
    <div class="slidev-layout two-columns w-full h-full grid grid-cols-12">
      <div :class="[verticalMiddle ? 'my-auto' : '', props.class, props.leftClass]">
        <slot />
      </div>
      <div :class="[verticalMiddle ? 'my-auto' : '', props.class, props.rightClass]">
        <slot name="right" />
      </div>
    </div>
  </div>
</template>
