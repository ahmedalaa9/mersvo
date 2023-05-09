<template>
  <div id="sec-section">
    <div class="row vision-screen">
      <div class="col-6">
        <img
          class="fit"
          src="src/assets/vision-img.png"
          alt="vision mersvomedia"
        />
      </div>
      <div class="col-6 row justify-center items-center">
        <div class="vision-content">
          <small-heading-sec class="q-my-lg" headngText="Mersvo" />

          <heading-sec class="q-my-sm" headingTxt="Vision &#38; Mission" />
          <p>
            Our mission is to help enterprises to boost their corporate
            productivity via use of well thought of innovative solutions that
            are built based on modern state of the art software's and
            technologies capitalizing on integration of systems and aiming to
            streamline operation, boost staff productivity and provide
            experience to remember to our valued customers, their guests and
            visitors. Our customers always come first and has to experience our
            enterprise grade support.
          </p>
        </div>
      </div>
    </div>
    <div class="row vision-tablet items-center justify-center">
      <div class="vision-content">
        <small-heading-sec class="q-my-md text-center" headngText="Mersvo" />

        <heading-sec
          class="q-my-sm text-center"
          :class="styleHeading"
          headingTxt="Vision &#38; Mission"
        />
        <p>
          Our mission is to help enterprises to boost their corporate
          productivity via use of well thought of innovative solutions that are
          built based on modern state of the art software's and technologies
          capitalizing on integration of systems and aiming to streamline
          operation, boost staff productivity and provide experience to remember
          to our valued customers, their guests and visitors. Our customers
          always come first and has to experience our enterprise grade support.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import HeadingSec from '../shared-component/HeadingSec.vue';
import SmallHeadingSec from '../shared-component/SmallHeadingSec.vue';

import { ref } from 'vue';
const styleHeading = ref('white');
</script>

<style lang="scss" scoped>
.vision-tablet {
  background: linear-gradient(
      270.29deg,
      rgba(3, 6, 91, 0.21) -54.22%,
      rgba(3, 5, 92, 0.247097) -35.61%,
      rgba(3, 5, 93, 0.28) 0.33%,
      rgba(2, 10, 78, 0.480976) 31.46%,
      rgba(1, 16, 61, 0.63) 99.81%
    ),
    url('src/assets/vision-img.png');
  background-position: center;
  background-size: cover;
  height: 100vh;

  .vision-content {
    p {
      width: 80%;
      margin: 1rem auto;
      font-weight: 300;
      font-size: 1.1rem;
      line-height: 1.5rem;
      opacity: 0.95;
      color: #ffffff;
      text-align: center;
    }
  }
}
.vision-screen {
  display: none;
  .vision-content {
    padding: 3rem;
    width: 85%;
  }
}
@media screen and (min-width: 1023px) {
  .vision-screen {
    display: flex;
  }
  .vision-tablet {
    display: none;
  }
}
</style>
