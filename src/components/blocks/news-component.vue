<script setup>
import {Navigation, Pagination, Scrollbar, A11y, FreeMode} from 'swiper/modules';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
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
<!--        <news-card-component-->
<!--          v-for="(item, index) in newsData"-->
<!--          :key="index"-->
<!--          :card-data="item"-->
<!--        />-->
        <swiper
            :freeMode="true"
            :slides-per-view="4"
            :space-between="20"
            class="mySwiper"
            :breakpoints="{ 600:{ slidesPerView:2 }, 900:{ slidesPerView:2 }, 1200:{slidesPerView: 3} }"
        >
          <swiper-slide v-for="(item, index) in newsData">{{item.id}}</swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.news-component {
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100% !important;
    max-width: 220px;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>