<script setup>
import {onMounted, ref} from "vue";
import {GetPopularMovie} from "@/service/movie";
import TabsComponent from "@/components/elements/tabs-component.vue";
import {GetPopularTv} from "@/service/tv";
import NewsComponent from "@/components/blocks/news-component.vue";

const tabs = ref([
  {
    title: "По ТВ",
    key: "tv"
  },
  {
    title: "В кинотеатрах",
    key: "movie"
  }
])
const currentTab = ref("tv")

const cardList = ref([]);
const isLoader = ref(false);
const page = ref(1)
const getPopularMovie = async () => {
  isLoader.value = true;
  try {
    const res = await GetPopularMovie(page.value)
    cardList.value = res.data.results
  } catch (e) {
    console.log(e)
  } finally {
    isLoader.value = false;
  }
}
const getPopularTv = async () => {
  isLoader.value = true;
  try {
    const res = await GetPopularTv(page.value)
    cardList.value = res.data.results
  } catch (e) {
    console.log(e)
  } finally {
    isLoader.value = false;
  }
}

const setTab = (event) => {
  currentTab.value = event
  page.value = 1
  cardList.value = []
  whichFunc(currentTab.value)
}

const whichFunc = async (val) => {
  if(val === "tv") {
    await getPopularTv()
  } else {
    await getPopularMovie()
  }
}

onMounted( () => {
   whichFunc(currentTab.value)
})
</script>

<template>
  <div class="home-page-component">
    <div class="home-page-component__content wrapper">
      <tabs-component
          :value="currentTab"
          :tabs="tabs"
          @input="setTab"
      />
      <template v-if="isLoader">

      </template>
      <template v-else>
        <news-component
            :news-data="cardList"
        />
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-page-component {
  padding: 64px 0;
}
</style>