<template>
  <div class="mobile-shape">
    <modal-shape
      imgModal="src/assets/Smartwatch-pana 1.svg"
      itemOne="Vocal commanding"
      itemTwo="Touch Interactivity"
      itemThree="Gesture Interactivity"
      v-show="showModal"
      v-if="activeModal === 'smart'"
      @close-modal="showModal = false"
      class="modal"
    />
    <modal-shape
      v-show="showModal"
      v-if="activeModal === 'chatBot'"
      @close-modal="showModal = false"
      class="modal"
      imgModal="src/assets/Chatbot.svg"
      itemOne="Variety of Input / Output channels"
      itemTwo="Touch Interactivity"
      hide="hide-item"
      marginItem="margin-item"
    />
    <modal-shape
      v-show="showModal"
      v-if="activeModal === 'Ai'"
      @close-modal="showModal = false"
      class="modal"
      imgModal="src/assets/Ai.svg"
      itemOne="Smart Prediction"
      itemTwo="Pre-defined Responses"
      itemThree="Mind Games"
    />
    <modal-shape
      v-show="showModal"
      v-if="activeModal === 'Xr'"
      @close-modal="showModal = false"
      class="modal"
      imgModal="src/assets/xr.svg"
      itemOne="AR"
      itemTwo="VR"
      itemThree="3D Modeling"
    />
    <modal-shape
      v-show="showModal"
      v-if="activeModal === 'ux'"
      @close-modal="showModal = false"
      class="modal"
      imgModal="src/assets/ux.svg"
      itemOne="UI / UX"
      itemTwo="3D Experience"
      itemThree="Motion Graphics"
    />
    <div v-show="!showModal" class="full-width row justify-center items-center">
      <div class="shape-container row justify-center items-center">
        <div class="center-item_screen">
          <div
            @click="(showModal = true), (activeModal = 'smart')"
            class="shape shape-up"
          >
            <div class="shape_content mobile">
              <h4>
                Smart <br />
                Interactive <br />Experience
              </h4>
            </div>
          </div>
          <span></span>
          <div
            @click="(showModal = true), (activeModal = 'chatBot')"
            class="shape shape-left-1"
          >
            <div class="shape_content mobile">
              <h4>Chatbot</h4>
            </div>
          </div>
          <div
            @click="(showModal = true), (activeModal = 'Ai')"
            class="shape shape-left-2"
          >
            <div class="shape_content mobile">
              <h4>AI</h4>
            </div>
          </div>
          <div class="shape-center row justify-center items-center">
            <div class="shape-center_content row justify-center items-center">
              <h5>
                Mersvo <br />
                Experience <br />
                Platform
              </h5>
            </div>
          </div>
          <div
            @click="(showModal = true), (activeModal = 'Xr')"
            class="shape shape-right-1"
          >
            <div class="shape_content mobile">
              <h4>XR</h4>
            </div>
          </div>
          <div
            @click="(showModal = true), (activeModal = 'ux')"
            class="shape shape-right-2"
          >
            <div class="shape_content mobile">
              <h4>User Experience</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ModalShape from 'src/components/Experience page/ModalShape.vue';

import { ref } from 'vue';
const showModal = ref(false);
const activeModal = ref('');
</script>

<style lang="scss" scoped>
.shape-container {
  width: 100%;
  height: 70vh;
  position: relative;

  .center-item_screen {
    width: 210px;
    height: 200px;
    text-align: center;
    position: relative;
    margin-top: 10%;

    span,
    &::before,
    &::after {
      width: 10px;
      position: absolute;
      background-color: #00478f;
      z-index: 1;
      display: block;
    }
    &::before,
    &::after {
      content: '';
      height: 105%;
      top: -12px;
      left: 101px;
    }
    span {
      height: 30px;
      top: -25px;
      left: 45%;
    }
    &::before {
      transform: rotate(-60deg);
    }

    &::after {
      transform: rotate(60deg);
    }

    .shape-center {
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      width: 96%;
      height: 96%;
      margin: 0 auto;
      z-index: 3;
      position: relative;
      background: linear-gradient(234.53deg, #c7d2df 33.91%, #bbc9d8 89.6%);

      &_content {
        background: linear-gradient(
          234.53deg,
          rgba(255, 255, 255, 1) 33.91%,
          rgba(187, 201, 216, 1) 89.6%
        );

        clip-path: polygon(
          25% 0%,
          75% 0%,
          100% 50%,
          75% 100%,
          25% 100%,
          0% 50%
        );
        width: 81%;
        height: 81%;
      }

      h5 {
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        color: #001237;
      }
    }
  }
  .shape-up {
    top: -66%;
    left: 20%;
  }

  .shape {
    background: linear-gradient(234.53deg, #c7d2df 33.91%, #bbc9d8 89.6%);
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    width: 120px;
    height: 120px;
    position: absolute;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.7s;
    opacity: 1;

    &_content {
      background: linear-gradient(
        234.53deg,
        rgba(255, 255, 255, 0.8) 33.92%,
        rgba(187, 201, 216, 0.8) 89.6%
      );
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      width: 81%;
      height: 81%;
      display: flex;
      align-items: center;
      justify-content: center;

      h4 {
        font-style: normal;
        font-weight: 500;
        font-size: 13px;
        line-height: 20px;
        text-align: center;
        letter-spacing: -0.014em;

        color: #001237;
      }
    }
  }
  .shape-left {
    &-1 {
      top: -24%;
      left: -40%;
    }
    &-2 {
      top: 56%;
      left: -42%;
    }
  }
  .shape-right {
    &-1 {
      top: -24%;
      right: -40%;
    }
    &-2 {
      top: 56%;
      right: -42%;
    }
  }
}
@media screen and (max-width: 400px) {
  .shape-container {
    .center-item_screen {
      width: 160px;
      height: 150px;

      &::before,
      &::after {
        content: '';
        height: 105%;
        top: -6px;
        left: 73px;
      }
      span {
        height: 30px;
        top: -25px;
        left: 45%;
      }
    }

    .shape {
      width: 90px;
      height: 90px;

      &_content {
        h4 {
          font-style: normal;
          font-weight: 400;
          font-size: 10px;
          line-height: 14px;
        }
      }
    }
  }
}
</style>
