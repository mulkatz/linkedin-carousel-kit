<script setup lang="ts">
defineProps<{
  icon: string
  title: string
  description?: string
}>()
</script>

<template>
  <div class="icon-text">
    <span class="icon-text-icon">{{ icon }}</span>
    <div>
      <span class="icon-text-title">{{ title }}</span>
      <span v-if="description" class="icon-text-description"> — {{ description }}</span>
    </div>
  </div>
</template>

<style scoped>
.icon-text {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.icon-text-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.icon-text-title {
  font-weight: 600;
  font-size: 1.25rem;
}

.icon-text-description {
  color: var(--color-muted);
  font-size: 1.125rem;
}
</style>
