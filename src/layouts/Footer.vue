<template>
  <div>
    <div class="bg-section-screen">
      <div class="container">
        <navbar class="footer-container fit items-center row q-py-md">
          <div class="logo col-2">
            <img src="src/assets/mersvo-logo.png" alt="mersvo logo" />
          </div>
          <div class="footer-navitems-container col-md-5 offset-md-1">
            <nav-items class="footer-navitems" />
          </div>

          <div class="icons-footer row justify-end col-4 text-right">
            <icons-loop />
          </div>
        </navbar>
      </div>
    </div>
    <div class="bg-section-tablet">
      <div class="container">
        <nav-items class="footer-navitems" />
        <div class="row justify-between items-center q-py-sm">
          <div class="logo col-3">
            <img src="src/assets/mersvo-logo.png" alt="mersvo logo" />
          </div>
          <div class="icons-footer row justify-end col-9 text-right">
            <icons-loop />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import NavItems from '../components/shared-component/NavItems.vue';

import IconsLoop from './../components/shared-component/IconsLoop.vue';
</script>

<style lang="scss" scoped>
.bg-section-screen,
.bg-section-tablet {
  background: linear-gradient(265.86deg, #001237 -1.9%, #001237 96.4%);
  backdrop-filter: blur(234.245px);
  padding-top: 2.8rem;

  .container {
    border-top: 0.8px solid rgba(255, 255, 255, 0.4);

    .footer-navitems {
      width: 85%;
      margin: 1.3rem auto;
    }
    .logo {
      img {
        width: 100%;
      }
    }
  }
}
.bg-section-tablet {
  display: none;
}
.footer-container {
  .logo {
    img {
      width: 100%;
    }
  }
}

@media screen and (max-width: 1023px) {
  .bg-section-screen {
    display: none;
  }
}
@media screen and (max-width: 500px) {
  .bg-section-tablet {
    .container {
      .footer-navitems {
        width: 90%;
        margin: 1.3rem auto;

        font-size: 14px !important;
      }
    }
  }
}
@media screen and (max-width: 1023px) {
  .bg-section-tablet {
    display: block !important;
  }
}
</style>
