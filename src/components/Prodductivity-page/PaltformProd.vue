<template>
  <div class="bg-platform q-pb-xl">
    <div class="bg-patern">
      <div class="container">
        <div class="heading-platform q-py-xl">
          <small-heading-sec headngText="Mersvo Productivity Suite" />

          <heading-sec
            :class="styleHeading"
            class="q-my-lg"
            headingTxt="Our Productivity-Boosting Solutions"
          />
        </div>
        <div>
          <platform-prod-screen class="screen-platform" id="sec-section" />
          <platform-prod-mob class="mobile-platform" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import PlatformProdScreen from 'src/components/Prodductivity-page/PlatformProdScreen.vue';
import PlatformProdMob from 'src/components/Prodductivity-page/PlatformProdMob.vue';
import HeadingSec from '../shared-component/HeadingSec.vue';
import SmallHeadingSec from '../shared-component/SmallHeadingSec.vue';

const styleHeading = ref('white');
</script>

<style lang="scss" scoped>
.bg-platform {
  height: 100%;
  margin-top: 85px;
  position: relative;
  background: linear-gradient(265.86deg, #001237 -1.9%, #001237 96.4%),
    url('src/assets/bg-esp-pattern.png');

  .bg-patern {
    height: 100%;
    background-image: url('src/assets/bg-esp-pattern.png');
  }
}
.mobile-platform {
  display: none;
}
@media screen and (max-width: 975px) {
  .mobile-platform {
    display: flex;
  }
  .screen-platform {
    display: none;
  }
}
</style>
