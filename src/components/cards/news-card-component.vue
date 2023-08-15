<script setup>
import {computed} from "vue";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const props = defineProps({
  cardData: {
    type: Object,
    default: () => ({})
  }
})

// const getImage = computed(() => {
//   return `https://image.tmdb.org/t/p/w200${props.cardData.poster_path}`
// })
</script>

<template>

</template>

<style scoped lang="scss">
.news-card-component {

}
</style>