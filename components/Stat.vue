<script setup lang="ts">
defineProps<{
  value: string | number
  label: string
}>()
</script>

<template>
  <div class="stat">
    <span class="stat-value">{{ value }}</span>
    <span class="stat-label">{{ label }}</span>
  </div>
</template>

<style scoped>
.stat {
  display: flex;
  align-items: baseline;
  gap: 1.25rem;
}

.stat-value {
  font-family: var(--font-serif);
  font-weight: 700;
  font-size: 3.75rem;
  color: var(--color-accent);
  line-height: 1;
}

.stat-label {
  color: var(--color-muted);
  font-size: 1.5rem;
}
</style>
