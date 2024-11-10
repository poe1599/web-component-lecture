<script setup lang="ts">
const props = defineProps({
  class: {
    type: String,
  },
})
</script>

<template>
  <div class="relative h-full grid">
    <BackDecoration />
    <div class="slidev-layout grid" :class="[props.class]">
      <div class="my-auto">
        <slot />
      </div>
    </div>
  </div>
</template>