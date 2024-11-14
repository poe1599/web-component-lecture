<script setup lang="ts">
const props = defineProps({
  class: {
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
    <div class="slidev-layout two-columns w-full h-full grid grid-cols-2">
      <div :class="[verticalMiddle ? 'my-auto' : '', props.class]">
        <slot />
      </div>
      <div :class="[verticalMiddle ? 'my-auto' : '', props.class]">
        <slot name="right" />
      </div>
    </div>
  </div>
</template>
