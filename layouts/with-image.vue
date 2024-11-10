<script setup lang="ts">
import { computed } from 'vue'
import { handleBackground } from '@slidev/client/layoutHelper.ts'

const props = defineProps({
  image: {
    type: String,
  },
  left: {
    type: Boolean,
    default: false,
  },
  class: {
    type: String,
  },
  backgroundSize: {
    type: String,
    default: 'cover',
  },
})

const style = computed(() => handleBackground(props.image, false, props.backgroundSize))
</script>

<template>
  <div class="relative h-full grid">
    <BackDecoration />
    <div class="grid w-full h-full grid-cols-12">
      <div class="w-full h-full col-span-3" :class="[!props.left ? 'order-1' : '']" :style="style" />
      <div
        class="slidev-layout default col-span-9"
        :class="[!props.left ? 'order-0' : '', props.class]"
      >
        <slot />
      </div>
    </div>
  </div>
</template>
