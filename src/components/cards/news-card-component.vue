<script setup>
import {computed, onMounted, ref, watch} from "vue";
import {formatDate} from "@/modules/formatter";

const props = defineProps({
  cardData: {
    type: Object,
    default: () => ({})
  }
})

const isLoader = ref(false)
const img = ref("")
const getImage = async () => {
  isLoader.value = true
  try {
     img.value = `https://image.tmdb.org/t/p/w500${props.cardData.poster_path}`
  } catch (e) {
    console.log(e)
  }
  isLoader.value = false
}
watch(props, value => {
  console.log('fsafsa')
  getImage()
})
</script>

<template>
  <div class="news-card-component">
    <template v-if="isLoader">
      <div class="news-card-component__loader-img skeleton-loader"></div>
    </template>
    <template v-else>
      <img
          :src="`https://image.tmdb.org/t/p/w500${props.cardData.poster_path}`"
          class="news-card-component__img"
          alt=""
      >
    </template>
    <div class="news-card-component__content">
      <p class="news-card-component__title">{{cardData.name}}</p>
      <span class="small-des">{{formatDate(cardData.first_air_date)}}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.news-card-component {
  border: 1px solid #e3e3e3;
  box-shadow: 0 2px 8px rgba(0,0,0,.1);
  border-radius: 10px;
  max-width: 150px;
  display: grid;
  min-height: 225px;
  &__img {
    width: 100%;
    border-radius: 10px 10px 0 0;
  }
  &__loader-img {
    width: 100%;
    max-width: 250px;
    height: 225px;
    border-radius: 10px 10px 0 0;
  }
  &__content {
    padding: 10px;
  }
  &__title {
    font-weight: 700;
    color: #000000;
    word-break: break-word;
    font-size: 14px;
  }
  .small-des {
    font-size: 12px;
  }
  @media screen and (max-width: 1144px) {
    max-width: 100%;
    &__img {
      height: 280px;
    }
  }
  @media screen and (max-width: 1144px) {
    max-width: 280px;
    margin: 0 auto;
    &__img {
      height: auto;
    }
  }
}
</style>