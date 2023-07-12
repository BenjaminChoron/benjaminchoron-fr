<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <h2 class="title">{{ title }}</h2>
</template>

<style scoped lang="scss">
.title {
  position: absolute;
  top: var(--top-bottom-padding);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1rem;

  &::after {
    content: '';
    display: block;
    width: 10rem;
    height: 2px;
    background-color: var(--color-border);
  }
}
</style>
