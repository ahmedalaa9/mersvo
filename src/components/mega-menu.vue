<template>
  <div class="full-width row col-10 justify-center">
    <div class="box-item row col-6">
      <router-link to="/prodductivity"></router-link>
      <div
        class="iconBox items-center row q-mt-sm q-mr-sm justify-center col-2"
      >
        <img src="src/assets/Vectorlogomegamenu.svg" alt="icon" />
      </div>
      <div class="contentBoxSol q-pl-sm col-10">
        <h3>Productivity Suite</h3>
        <p>
          Mersvo Productivity suite is a suite of applications which are made to
          boost enterprise
        </p>
      </div>
    </div>
    <div class="box-item row col-6">
      <router-link to="/experience"></router-link>
      <div
        class="iconBox items-center row q-mt-sm q-mr-sm justify-center col-2"
      >
        <img src="src/assets/Vectorlogomegamenu.svg" alt="icon" />
      </div>
      <div class="contentBoxSol q-pl-sm col-10">
        <h3>Experience platform</h3>
        <p>
          A platform that helps our customer to recreate experience to remember,
          again and again!
        </p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss">
.box-item {
  padding: 2rem;
  padding-right: 0.5rem;
  border-radius: 8px;
  transition: all 0.8s;
  background-color: white;
  position: relative;

  &:hover {
    background-color: $primary;
  }
  &:hover .contentBoxSol h3 {
    color: white;
  }
  &:hover .contentBoxSol p {
    color: white;
    opacity: 0.8;
  }
  &:hover .iconBox {
    background-color: white;
  }
  .iconBox {
    background: rgba(36, 106, 255, 0.2);
    border-radius: 8px;
    width: 50px;
    height: 50px;
    transition: all 0.8s;
  }

  .contentBoxSol h3 {
    font-weight: 500;
    font-size: 22px;
    line-height: 33px;
    color: #000;
    transition: all 0.8s;
  }
  .contentBoxSol p {
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    transition: all 0.8s;
    color: rgba(0, 0, 0, 0.5);
    margin-top: 20px;
  }
  a {
    text-decoration: none;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
  }
}
</style>
