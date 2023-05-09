<template>
  <div class="shape-container row justify-center items-center">
    <div class="modal-container">
      <div class="close-btn-bg row justify-center items-center">
        <q-icon
          @click="$emit('close-modal')"
          :name="outlinedClose"
          size="25px"
        />
      </div>
      <div class="shape shape-up">
        <div class="shape_content text-center">
          <div class="shape_content--img">
            <img :src="imgModal" alt="" />

            <!-- <ul :class="[hideUl, marginItem]" class="q-pt-md q-ml-lg text-left">
              <li>{{ itemOne }}</li>
              <li>{{ itemTwo }}</li>
              <li :class="hide">{{ itemThree }}</li>
            </ul> -->
            <p>{{ prodPragraph }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { outlinedClose } from '@quasar/extras/material-icons-outlined';

const emit = defineEmits(['close-modal']);

const props = defineProps({
  imgModal: { type: String },
  // itemOne: { type: String },
  // itemTwo: { type: String },
  // itemThree: { type: String },
  hide: { type: String },
  marginItem: { type: String },
  // hideUl: { type: String },
  prodPragraph: { type: String },
});
</script>

<style lang="scss" scoped>
.shape-container {
  width: 100%;
  height: 90vh;
  position: relative;
  .modal-container {
    position: relative;
    width: 375px;
    height: 80%;
  }
  .close-btn-bg {
    position: absolute;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: linear-gradient(234.53deg, #c4d0dd 33.91%, #bbc9d8 89.6%);
    top: -5px;
    right: 85px;
    z-index: 99;
    cursor: pointer;
  }
  .shape {
    background: linear-gradient(234.53deg, #c7d2df 33.91%, #bbc9d8 89.6%);
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    width: 100%;
    height: 350px;
    position: relative;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    transition: all 0.5s;

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
      padding-top: 15px;
      justify-content: center;

      .shape_content--img {
        p {
          text-align: center;
          width: 75%;
          margin: 15px auto;
        }
        img {
          max-width: 40%;
        }
      }
    }
  }
}
.margin-item {
  margin-left: 44px;
}
.hide-item {
  display: none;
}
</style>
