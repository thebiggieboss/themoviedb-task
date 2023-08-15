<script setup>
import NewsCardComponent from "@/components/cards/news-card-component.vue";
import ObserverComponent from "@/components/blocks/observer-component.vue";
import LoaderComponent from "@/components/blocks/loader-component.vue";

defineProps({
  newsData: {
    type: Array,
    required: true
  },
  isLoader: {
    type: Boolean,
    required: true
  }
})
const emit = defineEmits(["intersect"])
</script>

<template>
  <div class="news-component">
    <div class="news-component__content wrapper">
      <div class="news-component__blocks">
        <template v-if="!newsData.length">
          <div
              class="news-component__blocks-loader skeleton-loader"
              v-for="item in 20"
              :key="item"
          ></div>
        </template>
        <template v-else>
          <news-card-component
              v-for="(item, index) in newsData"
              :key="index"
              :card-data="item"
          />
        </template>
      </div>
      <div class="news-component__loader">
        <loader-component v-if="!isLoader"/>
      </div>
      <observer-component @intersect="emit('intersect')"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.news-component {
  &__blocks {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 20px;
  }
  &__loader {
    display: flex;
    padding: 16px 0;
    justify-content: center;
  }
  &__blocks-loader {
    width: 100%;
    max-width: 200px;
    height: 300px;
  }
  @media screen and (max-width: 1144px) {
    &__blocks {
      grid-template-columns: repeat(5, 1fr);
    }
  }
  @media screen and (max-width: 960px) {
    &__blocks {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  @media screen and (max-width: 768px) {
    &__blocks {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media screen and (max-width: 600px) {
    &__blocks {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media screen and (max-width: 440px) {
    &__blocks {
      grid-template-columns: 1fr;
    }
  }
}
</style>