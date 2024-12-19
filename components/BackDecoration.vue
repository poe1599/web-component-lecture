<template>
  <div class="absolute h-full w-full" style="z-index: -10">
    <div class="relative h-full w-full">
      <div class="bubble bubble--top-left">
        <svg height="200" width="200">
          <circle cx="100" cy="100" r="100" fill="#008080"></circle>
        </svg>
      </div>
      <div class="bubble bubble--bottom-left">
        <svg height="200" width="200">
          <circle cx="100" cy="100" r="100" fill="#008080"></circle>
        </svg>
      </div>
      <div class="bubble bubble--bottom-right">
        <svg height="200" width="200">
          <circle cx="100" cy="100" r="100" fill="#008080"></circle>
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bubble {
  position: absolute;
  opacity: 0.6;
}

.bubble--top-left {
  transform: translate(-50%, -50%);
}

.bubble--bottom-left {
  bottom: 0;
  transform: translate(-50%, 50%);
}

.bubble--bottom-right {
  bottom: 0;
  right: 0;
  transform: translate(50%, 50%);
}
</style>
