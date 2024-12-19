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
    <div class="slidev-layout grid">
      <div :class="[verticalMiddle ? 'my-auto' : '', props.class]">
        <slot />
      </div>
    </div>
  </div>
</template>
