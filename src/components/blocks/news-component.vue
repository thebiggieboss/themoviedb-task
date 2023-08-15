<script setup>
import NewsCardComponent from "@/components/cards/news-card-component.vue";

defineProps({
  newsData: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="news-component">
    <div class="news-component__content wrapper">
      <div class="news-component__blocks">
        <news-card-component
          v-for="(item, index) in newsData"
          :key="index"
          :card-data="item"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.news-component {
  &__blocks {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
  }
}
</style>