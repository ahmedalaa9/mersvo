<template>
  <div class="mobile-shape">
    <modal-prod-shape
      imgModal="src/assets/serv-icon.svg"
      prodPragraph="Add sense of hospitality while reducing meetings interruption with our user-friendly catering solution set in 60 min!"
      v-show="showModal"
      v-if="activeModal === 'serv'"
      @close-modal="showModal = false"
      class="modal"
    />
    <modal-prod-shape
      v-show="showModal"
      v-if="activeModal === 'meet'"
      @close-modal="showModal = false"
      class="modal"
      imgModal="src/assets/meeting-icon.svg"
      marginItem="margin-item"
      prodPragraph=" Proactive meeting management with customizable workflow for your facilities and rooms puts you in control"
    />
    <modal-prod-shape
      v-show="showModal"
      v-if="activeModal === 'visit'"
      @close-modal="showModal = false"
      class="modal"
      imgModal="src/assets/visit-icon.svg"
      prodPragraph="A visitor management that integrates to the smart IoT story has got it all providing an end to end unique visitor experience"
    />
    <modal-prod-shape
      v-show="showModal"
      v-if="activeModal === 'work'"
      @close-modal="showModal = false"
      class="modal"
      imgModal="src/assets/workspace-icon.svg"
      prodPragraph="A solution that saves employee time and conserve and optimize space utilization in today’s dynamic environment."
    />
    <modal-prod-shape
      v-show="showModal"
      v-if="activeModal === 'event'"
      @close-modal="showModal = false"
      class="modal"
      imgModal="src/assets/Events-icon.svg"
      prodPragraph="360° of Event management from organization, coordination and after event services supported with  powerful  event analytics."
    />
    <modal-prod-shape
      v-show="showModal"
      v-if="activeModal === 'exc'"
      @close-modal="showModal = false"
      class="modal"
      imgModal="src/assets/exc-icon.svg"
      prodPragraph="The executive assistant module is the executive best friend to avoid interruptions and mis-coordination"
    />
    <div v-show="!showModal" class="full-width row justify-center items-center">
      <div class="shape-container row justify-center items-center">
        <div class="center-item_screen">
          <div
            @click="(showModal = true), (activeModal = 'serv')"
            class="shape shape-up"
          >
            <div class="shape_content mobile row justify-center items-center">
              <h4>Service Management</h4>
            </div>
          </div>
          <div
            @click="(showModal = true), (activeModal = 'exc')"
            class="shape shape-down"
          >
            <div class="shape_content mobile">
              <h4>Executiven Assistance</h4>
            </div>
          </div>
          <span></span>
          <div
            @click="(showModal = true), (activeModal = 'meet')"
            class="shape shape-left-1"
          >
            <div class="shape_content mobile">
              <h4>Meeting Management</h4>
            </div>
          </div>
          <div
            @click="(showModal = true), (activeModal = 'visit')"
            class="shape shape-left-2"
          >
            <div class="shape_content mobile">
              <h4>Visitor Management</h4>
            </div>
          </div>
          <div class="shape-center row justify-center items-center">
            <div class="shape-center_content row justify-center items-center">
              <h5>
                Mersvo <br />
                Productivity <br />
                Suite
              </h5>
            </div>
          </div>
          <div
            @click="(showModal = true), (activeModal = 'work')"
            class="shape shape-right-1"
          >
            <div class="shape_content mobile">
              <h4>Workspace Management</h4>
            </div>
          </div>
          <div
            @click="(showModal = true), (activeModal = 'event')"
            class="shape shape-right-2"
          >
            <div class="shape_content mobile">
              <h4>Event Management System</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ModalProdShape from './ModalProdShape.vue';

import { ref } from 'vue';
const showModal = ref(false);
const activeModal = ref('');
</script>

<style lang="scss" scoped>
.shape-container {
  width: 100%;
  height: 55vh;
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
      height: 130%;
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
  .shape-down {
    bottom: -64%;
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
      img {
        width: 40%;
      }
      h4 {
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
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
    }

    .shape {
      width: 90px;
      height: 90px;

      &_content {
        h4 {
          font-style: normal;
          font-weight: 400;
          font-size: 9px;
          line-height: 12px;
        }
      }
    }
  }
}
</style>
