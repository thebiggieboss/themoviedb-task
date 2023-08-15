<script setup>
defineProps({
  tabs: {
    type: Array,
    required: true
  },
  value: {
    type: String,
    required: true
  }
})
defineEmits(["input"])

</script>

<template>
  <div class="tabs-component">
    <div
        v-for="(item, index) in tabs"
        :key="index"
        class="tabs-component__list"
    >
      <label
          class="tabs-component__label list-el"
          :class="{ 'list-el--active': value === item.key }"
      >
        <input
            :value="value"
            @input="() => $emit('input', item.key)"
            :checked="value === item.key"
            type="radio"
            class="tabs-component__input"
        />
        <span>{{ item.title }}</span>
      </label>
    </div>
  </div>
</template>

<style scoped lang="scss">
.tabs-component {
  width: 100%;
  border-radius: 50px;
  display: flex;
  justify-content: stretch;
  align-items: center;
  user-select: none;
  max-width: 220px;
  margin: 0 auto;
  margin-bottom: 32px;
  background: linear-gradient(110deg,#ececec 8%,#f5f5f5 18%,#ececec 33%);
  &__list {
    width: 100%;
    border-radius: inherit;
    .list-el {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #333333;
      font-weight: 600;
      font-size: 12px;
      line-height: 16px;
      text-align: center;
      border-radius: inherit;
      cursor: pointer;
      transition: 0.2s;
      min-height: 24px;
      &--active {
        background-color: #333333;
        color: white;
      }
    }
    .tabs-component__input {
      position: absolute;
      z-index: -1;
      opacity: 0;
      display: block;
      width: 0;
      height: 0;
    }
  }
}
</style>