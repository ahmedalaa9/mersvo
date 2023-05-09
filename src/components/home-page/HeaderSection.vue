<template>
  <div class="header-container">
    <div class="bg-video">
      <video class="bg-video__content" autoplay loop muted>
        <source src="src/assets/vid.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="container row q-mt-xl">
      <div class="header-content col-7 q-mt-lg">
        <h1 class="heading">We invent software solutions for Enterprises</h1>
        <p class="lead text-body2 q-my-lg">
          Solutions that boost enterprise productivity, streamline and automate
          operation and enrich user experience taking it to a new level.
        </p>
        <div class="header-btns q-py-lg">
          <q-btn
            to="/contact-us"
            class="q-mr-lg q-px-xl contactUsBtn"
            size="lg"
            unelevated
            rounded
            color="primary"
            label="Contact Us"
          />
          <q-btn
            class="q-px-xl solutionBtn"
            size="lg"
            outline
            rounded
            color="white"
            label="Our Solution"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.bg-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: -1;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;

    background: linear-gradient(
      270deg,
      rgba(3, 6, 91, 0.3) 0%,
      rgba(3, 5, 92, 0.352996) 12.08%,
      rgba(3, 5, 93, 0.4) 35.42%,
      rgba(2, 10, 78, 0.687109) 55.62%,
      rgba(1, 16, 61, 0.9) 100%
    );
  }

  &__content {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}

.header-content {
  height: calc(100vh - 170px);

  .heading {
    margin-top: 2rem;
    font-size: 4rem;
    font-weight: 700;
    line-height: 90px;
    color: white;
    text-transform: capitalize;
  }
  .lead {
    color: rgba(white, 0.7);
    font-size: 1.5rem;
    line-height: 38.5px;
  }
}
.header-btns {
  .contactUsBtn,
  .solutionBtn {
    transition: all 0.6s;
  }
  .contactUsBtn:hover,
  .solutionBtn:hover {
    background-color: white !important;
    color: $primary !important;

    .q-btn--outline:before {
      border: white;
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .header-content {
    width: 90%;
    text-align: center;
    padding: 0 2rem;
    margin: 1.8rem auto;

    .heading {
      margin-top: 2rem;
      font-size: 3rem;
      line-height: 3.6rem;
    }
    .lead {
      font-size: 1.3rem;
      line-height: 1.6rem;
    }
    .header-btns {
      margin-top: 40px;

      .contactUsBtn,
      .solutionBtn {
        border-radius: 50px;
        margin-bottom: 1rem;
      }
    }
  }
}
@media screen and (min-width: 1920px) {
  .header-content {
    width: 67%;
    margin-top: 3%;

    .heading {
      margin-top: 1.7rem;
      font-size: 5.3rem;
      line-height: 140px;
    }
    .lead {
      font-size: 2.2rem;
      line-height: 3rem;
    }
    .header-btns {
      margin-top: 4rem;
      .contactUsBtn,
      .solutionBtn {
        font-size: 35px;
        border-radius: 70px;
        padding: 1rem 4rem;
      }
    }
  }
}
@media screen and (max-width: 767px) {
  .header-content {
    width: 90%;
    text-align: center;
    padding: 0 1rem;
    margin: 1.5rem auto;

    .heading {
      margin-top: 2.5rem;
      font-size: 1.9rem;
      line-height: 2.5rem;
    }
    .lead {
      font-size: 16px;
      line-height: 1.4rem;
      text-align: center;
    }
    .header-btns {
      margin-top: 30px;

      .contactUsBtn,
      .solutionBtn {
        font-size: 16px;
        border-radius: 50px;
        width: 100%;
        margin-left: 0;
        margin-bottom: 1.3rem;
      }
    }
  }
}
</style>
