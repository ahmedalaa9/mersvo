<template>
  <div class="menu-item" @click="toggleSubMenu = !toggleSubMenu">
    <div class="row justify-between">
      <span> {{ address }} </span>
      <span class="">
        <img v-if="!toggleSubMenu" src="src/assets/expand_more.svg" alt="" />
        <img v-else src="src/assets/expand_less.svg" alt="" />
      </span>
    </div>
    <div class="sub-menu" v-if="toggleSubMenu">
      <ul v-for="(item, i) in items" :key="i">
        <li>
          <router-link :to="item.link">{{ item.title }} </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
// import { expand_less } from '@quasar/extras/material-icons';
import { ref } from 'vue';
const props = defineProps({
  address: { type: String },
  items: { type: Array },
});

const toggleSubMenu = ref(false);
</script>

<style lang="scss" scoped>
.menu-item {
  .sub-menu {
    margin: 10px 0;
    ul {
      list-style: none;
      margin-left: 20px;

      li a {
        display: inline-block;
        text-decoration: none;
        font-size: 0.9rem;
        margin-top: 20px;
      }
    }
  }
}
</style>
