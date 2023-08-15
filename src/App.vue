<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="default-layout">
    <RouterView />
  </div>
</template>

<style scoped>
.default-layout {
  display: grid;
  grid-template-columns: 1fr;
  min-height: 100vh;
  height: 100%;
}
</style>
