<script setup>

</script>

<template>
  <div class="loader loader--dark">
    <div class="loader__blade"></div>
    <div class="loader__blade"></div>
    <div class="loader__blade"></div>
    <div class="loader__blade"></div>
    <div class="loader__blade"></div>
    <div class="loader__blade"></div>
    <div class="loader__blade"></div>
    <div class="loader__blade"></div>
    <div class="loader__blade"></div>
    <div class="loader__blade"></div>
    <div class="loader__blade"></div>
    <div class="loader__blade"></div>
  </div>
</template>

<style scoped lang="scss">
.loader {
  display: inline-block;
  font-size: 30px;
  height: 30px;
  position: relative;
  vertical-align: middle;
  width: 30px;

  &__blade {
    animation: loader-fade 1s infinite linear;
    background-color: white;
    border-radius: .5em;
    bottom: 0;
    height: .2777em;
    left: .4629em;
    position: absolute;
    transform-origin: center -.2222em;
    width: .074em;

    $animation-delay: 0s;
    $blade-rotation: 0deg;

    @for $i from 1 through 12 {
      &:nth-child(#{$i}) {
        animation-delay: $animation-delay;
        transform: rotate($blade-rotation);
        $blade-rotation: $blade-rotation + calc(360 / 12);
        $animation-delay: $animation-delay + calc(1 / 12);
      }
    }
  }

  &--dark .loader__blade {
    background-color: #2c3e50;
  }
}

@keyframes loader-fade {
  0% {
    opacity: 1;
  }

  100% {
    opacity: .3;
  }
}
</style>