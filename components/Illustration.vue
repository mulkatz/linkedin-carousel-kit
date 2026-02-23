<script setup lang="ts">
withDefaults(defineProps<{
  src: string
  alt?: string
  caption?: string
  rounded?: boolean
  shadow?: boolean
  maxWidth?: string
}>(), {
  alt: '',
  rounded: true,
  shadow: true,
  maxWidth: '100%',
})
</script>

<template>
  <figure class="illustration" :style="{ maxWidth }">
    <img
      :src="src"
      :alt="alt"
      :class="{ rounded, shadow }"
    />
    <figcaption v-if="caption">{{ caption }}</figcaption>
  </figure>
</template>

<style scoped>
.illustration {
  margin: 1rem auto;
  text-align: center;
}

.illustration img {
  width: 100%;
  height: auto;
  display: block;
}

.illustration img.rounded {
  border-radius: 0.75rem;
}

.illustration img.shadow {
  box-shadow: 0 4px 24px rgba(44, 36, 22, 0.12);
}

.illustration figcaption {
  color: var(--color-muted);
  font-size: 1rem;
  margin-top: 0.75rem;
  font-style: italic;
}
</style>
