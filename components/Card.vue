<script setup lang="ts">
defineProps<{
  title?: string
  description?: string
}>()
</script>

<template>
  <div class="card">
    <div v-if="title" class="card-title">{{ title }}</div>
    <div v-if="description" class="card-description">{{ description }}</div>
    <slot />
  </div>
</template>

<style scoped>
.card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 0.75rem;
  padding: 1.5rem;
}

.card-title {
  color: var(--color-accent);
  font-weight: 600;
  font-size: 1.25rem;
  margin-bottom: 0.25rem;
}

.card-description {
  color: var(--color-muted);
  font-size: 1.125rem;
}
</style>
