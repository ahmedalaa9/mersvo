<template>
  <icon-container
    v-for="icon in icons"
    :key="icon.name"
    :src="icon.src"
    :href="icon.href"
  />
</template>

<script setup>
import IconContainer from './IconContainer.vue';
import { ref } from 'vue';

const icons = ref([
  {
    name: 'youtube',
    src: 'src/assets/youtube.png',
    href: 'https://www.youtube.com/',
  },
  // {
  //   name: 'facebook',
  //   src: 'src/assets/facebook.png',
  //   href: 'https://www.facebook.com/',
  // },
  {
    name: 'twitter',
    src: 'src/assets/twitter.png',
    href: 'https://www.twitter.com/',
  },
  {
    name: 'instagram',
    src: 'src/assets/instagram.png',
    href: 'https://www.instagram.com/',
  },
  {
    name: 'linkedin',
    src: 'src/assets/linkedin.png',
    href: 'https://www.linkedin.com/',
  },
]);
</script>

<style lang="scss" scoped></style>
