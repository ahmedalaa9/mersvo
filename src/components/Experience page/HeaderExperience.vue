<template>
  <div class="bg-exp"></div>
  <div class="container">
    <div class="header-exp row justify-center items-center">
      <div class="header-section">
        <div class="heading-content">
          <h2>Mersvo experience platform</h2>
          <p>
            A platform that helps our customer to recreate experience to
            remember, again and again!
          </p>
        </div>
        <div class="feauters-content q-pa-lg">
          <p>
            The platform consist of a core CMS system to manage user experience
            with help of advanced Interactive experience modules that articulate
            user experience in many possible ways aiming to provide the WoW
            effect!
          </p>
        </div>
      </div>
      <a href="#sec-section" class="arrow-icon-about">
        <icon-container src="src/assets/arrow-down-rounded.svg" />
      </a>
    </div>
  </div>
</template>

<script setup>
import IconContainer from '../shared-component/IconContainer.vue';
</script>

<style lang="scss" scoped>
.bg-exp {
  height: 100vh;
  width: 100%;

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
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
.header-exp {
  position: relative;
  height: calc(100vh - 165px);
  // margin-bottom: 40px;

  .header-section {
    margin: 0 auto;

    .heading-content {
      border-left: 3px solid #fff;
      border-bottom: 3px solid #fff;
      position: relative;

      &::before,
      &::after {
        content: '';
        width: 7px;
        height: 7px;
        background-color: #fff;
        position: absolute;
        border-radius: 50%;
      }
      &::before {
        top: 0;
        left: -4px;
      }
      &::after {
        bottom: -4px;
        right: -1px;
      }

      padding: 0 2rem;
      h2 {
        color: white;
        font-weight: 700;
        font-size: 3rem;
        line-height: 96px;
        text-align: center;
        margin-bottom: 1rem;
      }
      p {
        font-weight: 400;
        font-size: 1.3rem;
        line-height: 36px;
        text-align: center;
        color: rgba(255, 255, 255, 0.7);
      }
    }

    .feauters-content {
      border-right: 3px solid #fff;
      border-bottom: 3px solid #fff;
      position: relative;

      &::before,
      &::after {
        content: '';
        width: 7px;
        height: 7px;
        background-color: #fff;
        position: absolute;
        border-radius: 50%;
      }
      &::before {
        bottom: -4px;
        left: -3px;
      }
      &::after {
        bottom: -4px;
        right: -3.5px;
      }

      p {
        font-weight: 400;
        font-size: 1.3rem;
        line-height: 1.5rem;
        text-align: center;
        color: rgba(255, 255, 255, 0.7);
      }
    }
  }
  .arrow-icon-about {
    position: absolute;
    bottom: 70px;
    right: 5px;
    font-size: 10px;
  }
}
@media screen and (max-width: 1023px) {
  .arrow-icon-about {
    display: none;
  }
}
@media screen and (max-width: 479px) {
  .header-exp {
    .header-section {
      width: 95vw;
      margin-top: 3rem;
      .heading-content {
        h2 {
          text-align: center;
          font-weight: 500;
          font-size: 1.7rem;
          line-height: 28px;
        }
        p {
          text-align: center;
          font-weight: 400;
          font-size: 0.7rem;
          line-height: 15px;
        }
      }
      .feauters-content p {
        text-align: center;
        font-weight: 400;
        font-size: 0.7rem;
        line-height: 15px;
      }
    }
  }
}
@media screen and (min-width: 479px) and (max-width: 767px) {
  .header-exp {
    .header-section {
      width: 95vw;
      margin-top: 2rem !important;
      .heading-content {
        h2 {
          text-align: center;
          font-weight: 500;
          font-size: 2.4rem;
          line-height: 50px;
        }
        p {
          text-align: center;
          font-weight: 400;
          font-size: 1rem;
          line-height: 20px;
        }
      }
      .feauters-content p {
        text-align: center;
        font-weight: 400;
        font-size: 1rem;
        line-height: 20px;
      }
    }
  }
}
@media screen and (min-width: 768px) {
  .header-exp {
    .header-section {
      width: 83vw;

      .heading-content {
        h2 {
          font-weight: 600;
          font-size: 2.2rem;
          line-height: 40px;
        }
        p {
          font-weight: 400;
          font-size: 1rem;
          line-height: 17px;
        }
      }
      .feauters-content p {
        text-align: center;
        font-weight: 400;
        font-size: 1rem;
        line-height: 17px;
      }
    }
  }
}

@media screen and (min-width: 1024px) {
  .header-exp {
    .header-section {
      width: 50vw;

      .heading-content {
        h2 {
          font-weight: 600;
          font-size: 2.5rem;
          line-height: 2.4rem;
          margin: 2.1rem 0 1.5rem;
        }
        p {
          font-weight: 400;
          font-size: 1.1rem;
          line-height: 1.3rem;
          margin-bottom: 1.1rem;
        }
      }
      .feauters-content p {
        font-weight: 400;
        font-size: 1.1rem;
        line-height: 1.3rem;
        margin-bottom: 1.1rem;
      }
    }
  }
}
@media screen and (min-width: 1920px) {
  .header-exp {
    .header-section {
      width: 40vw;

      .heading-content {
        h2 {
          font-weight: 600;
          font-size: 4.3rem;
          line-height: 60px;
          margin: 2rem 0 1rem;
        }
        p {
          font-weight: 400;
          font-size: 1.8rem;
          line-height: 2.6rem;
        }
      }
      .feauters-content p {
        font-weight: 400;
        font-size: 1.8rem;
        line-height: 2.6rem;
      }
    }
  }
}
</style>
