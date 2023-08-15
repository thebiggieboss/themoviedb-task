<script setup>
import {computed} from "vue";

const props = defineProps({
  cardData: {
    type: Object,
    default: () => ({})
  }
})

const getImage = computed(() => {
  return `https://image.tmdb.org/t/p/w200${props.cardData.poster_path}`
})
</script>

<template>
  <div class="news-card-component">
    <img
        :src="getImage"
        class="news-card-component__img"
        alt=""
    >
    <div class="">
      <p>{{cardData.name}}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.news-card-component {
  border: 1px solid #e3e3e3;
  box-shadow: 0 2px 8px rgba(0,0,0,.1);
  border-radius: 10px;
  &__img {
    width: 100%;
    border-radius: 10px 10px 0 0;
  }
}
</style>