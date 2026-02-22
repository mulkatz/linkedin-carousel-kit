<script setup lang="ts">
withDefaults(defineProps<{
  cols?: 1 | 2
}>(), {
  cols: 1,
})
</script>

<template>
  <div class="card-grid" :class="`card-grid--${cols}`">
    <slot />
  </div>
</template>

<style scoped>
.card-grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
}

.card-grid--2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
