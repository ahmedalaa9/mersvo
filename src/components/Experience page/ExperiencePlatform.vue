<template>
  <div class="bg-platform q-pb-xl">
    <div class="bg-patern">
      <div class="container">
        <div class="heading-platform q-py-xl">
          <small-heading-sec
            class="q-py-lg"
            headngText="Mersvo Experience Platform"
          />

          <heading-sec
            :class="styleHeading"
            headingTxt="Our Productivity-Boosting Solutions"
          />
        </div>
        <platform-screen class="screen-platform" id="sec-section" />
        <platform-mobile class="mobile-platform" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import HeadingSec from 'src/components/shared-component/HeadingSec.vue';
import SmallHeadingSec from 'src/components/shared-component/SmallHeadingSec.vue';
import PlatformScreen from './PlatformScreen.vue';
import PlatformMobile from './PlatformMobile.vue';

const styleHeading = ref('white');
</script>

<style lang="scss" scoped>
.bg-platform {
  height: 100%;

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
