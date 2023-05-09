<template>
  <h3 class="heading-secondary">{{ headingTxt }}</h3>
</template>

<script setup>
const props = defineProps({
  headingTxt: { type: String },
});
</script>

<style lang="scss" scoped>
.heading-secondary {
  width: 70%;
  font-style: normal;
  font-weight: 600;
  font-size: 2rem;
  text-transform: capitalize;
  line-height: 50px;
  letter-spacing: -0.02em;
  margin-bottom: 50px;
  color: #000000;
}
.white {
  color: white !important;
}

@media screen and (max-width: 767px) {
  .heading-secondary {
    font-size: 1.4rem;
    text-align: center;
    width: 100%;
    line-height: 35px;
    font-weight: 700;
    text-align: center;
  }
}

@media screen and (min-width: 768px) {
  .heading-secondary {
    font-size: 1.7rem;
    // width: 100%;
    line-height: 50px;
  }
}

@media screen and (min-width: 1920px) {
  .heading-secondary {
    font-size: 2.7rem;
  }
}
</style>
