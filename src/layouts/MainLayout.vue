<template>
  <q-layout>
    <q-page-container>
      <Header />
      <router-view />
      <Footer />
    </q-page-container>
  </q-layout>
</template>
<script setup>
import Header from './Header.vue';
import Footer from './Footer.vue';
</script>
