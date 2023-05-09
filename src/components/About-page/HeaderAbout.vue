<template>
  <div class="bg-about"></div>
  <div class="about-container">
    <div class="container">
      <div class="header-about_content row justify-center items-center q-mt-xl">
        <div class="about-content q-my-lg">
          <h2 class="col-12 text-center">About Mersvo</h2>
          <p class="col-12 text-center about-prag">
            Aiming to build immersive experiences for Enterprise customers
            Mersvo Media is established in the UK as a modern software
            development and rapidly evolving company and from there, it
            digitally transform customers lives every day.
          </p>
          <div class="header-about_content--contact col-12 row justify-center">
            <div
              class="mail-contact q-my-md row items-center justify-center col-12"
            >
              <img src="src/assets/gmail.png" alt="gmail logo" />

              <span> <a href="http://">info@mersvo.com</a> </span>
            </div>
            <div
              class="col-12 icons-contact q-mt-sm row justify-center col-2 q-my-lg"
            >
              <icons-loop />
            </div>
          </div>
        </div>
      </div>
    </div>
    <a href="#sec-section" class="arrow-icon-about">
      <icon-container src="src/assets/arrow-down-rounded.svg" />
    </a>
  </div>
</template>

<script setup>
import IconsLoop from '../shared-component/IconsLoop.vue';
import IconContainer from '../shared-component/IconContainer.vue';
</script>

<style lang="scss" scoped>
.about-container {
  height: calc(98vh - 165px);
  position: relative;
}
.about-prag {
  font-size: 2rem;
  margin: 0 50px;
}
.bg-about {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    linear-gradient(
      360deg,
      rgba(3, 5, 93, 0.4) 5.34%,
      rgba(2, 10, 78, 0.687109) 34.96%,
      rgba(1, 16, 61, 0.9) 100%
    ),
    url('src/assets/bg-prod.png');
  background-size: cover;
  background-position: top;
}
.header-about_content {
  position: relative;

  h2 {
    font-weight: 700;
    font-size: 3.5rem;
    line-height: 3rem;

    color: #ffffff;
  }
  p {
    width: 75%;
    margin: 4rem auto;
    font-weight: 300;
    font-size: 2rem;
    line-height: 2.7rem;
    text-align: center;
    opacity: 0.85;
    color: #ffffff;
  }

  &--contact {
    .mail-contact {
      .icon-mail {
        padding: 0;
        background: white;
      }
      span a {
        text-decoration: none;
        margin-left: 8px;
        color: white;
      }
    }
  }
}
.arrow-icon-about {
  position: absolute;
  bottom: 50px;
  right: 50px;
  font-size: 10px;
}
@media screen and (max-width: 1025px) {
  .arrow-icon-about {
    display: none;
  }

  .header-about_content {
    h2 {
      font-weight: 700;
      font-size: 3rem;
      line-height: 3rem;
    }
    p {
      width: 80%;
      margin: 2rem auto;
      font-size: 1.1rem;
      line-height: 1.3rem;
    }
  }
}
@media screen and (max-width: 768px) {
  .header-about_content {
    h2 {
      font-weight: 700;
      font-size: 2.5rem;
      line-height: 2.7rem;
    }
    p {
      width: 85%;
      margin: 1.8rem auto;
      font-size: 1rem;
      line-height: 1.3rem;
    }
  }
}
@media screen and (max-width: 468px) {
  .header-about_content {
    h2 {
      font-weight: 700;
      font-size: 2rem;
      line-height: 2.4rem;
    }
    p {
      width: 85%;
      margin: 1.5rem auto;
      font-size: 0.8rem;
      line-height: 1rem;
    }
  }
}
</style>
