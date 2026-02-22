<script setup lang="ts">
import { useNav } from '@slidev/client'
import { computed } from 'vue'

const { currentSlideNo, currentLayout, total } = useNav()

const visible = computed(() => {
  return currentLayout.value !== 'cover' && currentLayout.value !== 'end'
})
</script>

<template>
  <div v-if="visible" class="slide-counter">
    {{ currentSlideNo }} / {{ total }}
  </div>
</template>

<style scoped>
.slide-counter {
  position: fixed;
  bottom: 2rem;
  right: 2.5rem;
  color: var(--color-border);
  font-size: 0.8rem;
  font-family: var(--font-sans);
  pointer-events: none;
  z-index: 10;
}
</style>
