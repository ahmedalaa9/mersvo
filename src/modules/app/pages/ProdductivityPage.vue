<template>
  <div class="bg-prod"></div>
  <header-prodductivity />

  <paltform-prod />
</template>

<script setup>
import HeaderProdductivity from 'src/components/Prodductivity-page/HeaderProdductivity.vue';
import PaltformProd from 'src/components/Prodductivity-page/PaltformProd.vue';
</script>

<style lang="scss" scoped>
.bg-prod {
  height: 100vh;

  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    linear-gradient(
      360deg,
      rgba(3, 5, 93, 0.4) 5.34%,
      rgba(2, 10, 78, 0.687109) 34.96%,
      rgba(1, 16, 61, 0.9) 100%
    ),
    url('src/assets/bg-prod.png');
  background-size: cover;
  background-position: top;
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>
