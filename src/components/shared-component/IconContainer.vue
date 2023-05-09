<template>
  <div>
    <a
      :href="href"
      target="_blank"
      class="contact-Icon__container q-mr-sm items-center row justify-center"
    >
      <img :src="src" />
    </a>
  </div>
</template>
<script setup>
const props = defineProps(['src', 'href']);
</script>

<style lang="scss" scoped>
.contact-Icon__container {
  cursor: pointer;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background: linear-gradient(180deg, #2560f1 0%, #7944ff 48.75%, #c623ff 100%);
}
@media screen and (max-width: 500px) {
  .contact-Icon__container {
    height: 35px;
    width: 35px;
  }
}
@media screen and (min-width: 500px) and (max-width: 1023px) {
  .contact-Icon__container {
    height: 35px;
    width: 35px;
    font-size: 14px;
  }
}
</style>
