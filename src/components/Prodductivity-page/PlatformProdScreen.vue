<template>
  <div
    class="platform-content-screen full-width row justify-center items-center"
  >
    <div class="shape-container row justify-center items-center">
      <div class="center--item_screen center-exp">
        <div class="shape--center row justify-center items--center">
          <img src="src/assets/prod-center.svg" alt="" />
        </div>
        <div class="smart-shape genral-shape">
          <img src="src/assets/prod-serv.svg" alt="" class="not-hover" />
          <img src="src/assets/prod-serv-hovered.svg" alt="" class="hovered" />
          <div class="smart-shape_list genral-shape-list">
            <p>
              Add sense of hospitality while reducing meetings interruption with
              our user-friendly catering solution set in 60 min!
            </p>
          </div>
        </div>
        <div class="exc-shape genral-shape">
          <img src="src/assets/prod-exc.svg" alt="" class="not-hover" />
          <img src="src/assets/prod-exc-hovered.svg" alt="" class="hovered" />
          <div class="smart-shape_list genral-shape-list">
            <p>
              The executive assistant module is the executive best friend to
              avoid interruptions and mis-coordination
            </p>
          </div>
        </div>
        <div class="chatbot-shape genral-shape">
          <img src="src/assets/prod-meet.svg" alt="" class="not-hover" />
          <img src="src/assets/prod-meet-hovered.svg" alt="" class="hovered" />
          <div class="chatbot-shape_list genral-shape-list">
            <p>
              Proactive meeting management with customizable workflow for your
              facilities and rooms puts you in control
            </p>
          </div>
        </div>
        <div class="ai-shape genral-shape">
          <img src="src/assets/prod-visit.svg" alt="" class="not-hover" />
          <img src="src/assets/prod-visit-hovered.svg" alt="" class="hovered" />
          <div class="ai-shape_list genral-shape-list">
            <p>
              A visitor management that integrates to the smart IoT story has
              got it all providing an end to end unique visitor experience
            </p>
          </div>
        </div>
        <div class="xr-shape genral-shape">
          <img src="src/assets/prod-work.svg" alt="AI" class="not-hover" />
          <img src="src/assets/prod-work-hovered.svg" alt="" class="hovered" />
          <div class="xr-shape_list genral-shape-list">
            <p>
              A solution that saves employee time and conserve and optimize
              space utilization in today’s dynamic environment.
            </p>
          </div>
        </div>
        <div class="ux-shape genral-shape">
          <img src="src/assets/prod-event.svg" alt="AI" class="not-hover" />
          <img src="src/assets/prod-event-hovered.svg" alt="" class="hovered" />
          <div class="ux-shape_list genral-shape-list">
            <p>
              360° of Event management from organization, coordination and after
              event services supported with powerful event analytics.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.shape-container {
  width: 100%;
  height: 115vh;
  margin: 8% 0;
  position: relative;

  .center-exp {
    position: relative;

    .not-hover {
      max-width: 100%;
      position: relative;
      z-index: 2;
    }

    .genral-shape {
      position: absolute;

      .hovered {
        display: none;
        position: relative;
        z-index: 2;
      }
      &-list {
        width: 60%;
        position: absolute;
        z-index: 1;
        // display: none;
        opacity: 0;
        // top: 40%;
        top: 30%;
        left: 25%;
        // transform: translateX(35%);
        transition: all 0.3s linear;

        p {
          font-style: normal;
          font-weight: 500;
          font-size: 20px;
          line-height: 30px;
          text-align: center;
          color: #ffffff;
        }
      }
    }
    .smart-shape {
      top: -50%;
      left: 15%;

      // img {
      &:hover {
        .smart-shape_list {
          opacity: 1;
          top: -24%;
        }
        .not-hover {
          display: none;
        }
        .hovered {
          display: block;
        }
      }
    }
    // }
    .exc-shape {
      bottom: -50%;
      left: 15%;

      &:hover {
        .smart-shape_list {
          width: 100%;
          opacity: 1;
          top: 87%;
          left: 16%;
        }
        .not-hover {
          display: none;
        }
        .hovered {
          display: block;
        }
      }
    }
    .chatbot-shape {
      bottom: 42%;
      left: -44%;

      &:hover {
        .chatbot-shape_list {
          opacity: 1;
          left: -50%;
        }
        .not-hover {
          display: none;
        }
        .hovered {
          display: block;
        }
      }
    }
    .ai-shape {
      bottom: -20%;
      left: -43%;

      &:hover {
        .ai-shape_list {
          opacity: 1;
          left: -52%;
        }
        .not-hover {
          display: none;
        }
        .hovered {
          display: block;
        }
      }
    }
    .xr-shape {
      bottom: 42%;
      right: -44%;

      &:hover {
        .xr-shape_list {
          opacity: 1;
          left: 100%;
        }
        .not-hover {
          display: none;
        }
        .hovered {
          display: block;
        }
      }
    }
    .ux-shape {
      bottom: -7%;
      right: -35%;

      &:hover {
        .ux-shape_list {
          opacity: 1;
          left: 110%;
        }
        .not-hover {
          display: none;
        }
        .hovered {
          display: block;
        }
      }
    }
  }
}
@media screen and (max-width: 1700px) {
  .shape-container {
    .shape--center {
      img {
        max-width: 80%;
      }
    }
    .center-exp {
      .genral-shape {
        &-list {
          width: 60% !important;

          top: 30%;
          left: 25%;

          p {
            font-size: 16px;
          }
        }
        &:hover {
          .hovered {
            display: block;
            max-width: 80%;
          }
        }
      }
      .not-hover {
        max-width: 80%;
      }
      .smart-shape {
        top: -50%;
        left: 20%;
      }
      .exc-shape {
        bottom: -50%;
        left: 20%;
      }
      .chatbot-shape {
        bottom: 42%;
        left: -24%;
        &:hover {
          .chatbot-shape_list {
            left: -42%;
          }
        }
      }
      .ai-shape {
        bottom: -20%;
        left: -24%;
        &:hover {
          .ai-shape_list {
            left: -42%;
          }
        }
      }
      .xr-shape {
        bottom: 42%;
        right: -40%;
        &:hover {
          .xr-shape_list {
            left: 77%;
          }
        }
      }
      .ux-shape {
        bottom: -7%;
        right: -30%;
        &:hover {
          .ux-shape_list {
            left: 90%;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 1300px) {
  .shape-container {
    height: 80vh;
    .shape--center {
      img {
        max-width: 60%;
      }
    }
    .center-exp {
      .genral-shape {
        &-list {
          // top: -15% !important;
          left: 10%;

          p {
            font-size: 13px;
          }
        }
        &:hover {
          .hovered {
            max-width: 60%;
          }
        }
      }
      .not-hover {
        max-width: 60%;
      }
      .smart-shape {
        bottom: -50%;
        left: 28%;
        &:hover {
          .smart-shape_list {
            top: -18% !important;
            left: 10%;
          }
        }
      }
      .exc-shape {
        bottom: -50%;
        left: 28%;
        &:hover {
          .exc-shape_list {
            left: -10%;
          }
        }
      }

      .chatbot-shape {
        left: -6%;
        &:hover {
          .chatbot-shape_list {
            left: -25%;
            max-width: 30%;
          }
        }
      }
      .ai-shape {
        left: -6%;
        &:hover {
          .ai-shape_list {
            left: -22%;
            max-width: 30%;
          }
        }
      }
      .xr-shape {
        right: -36%;
        &:hover {
          .xr-shape_list {
            left: 57%;
            max-width: 30%;
          }
        }
      }
      .ux-shape {
        right: -25%;
        &:hover {
          .ux-shape_list {
            left: 65%;
            max-width: 33%;
          }
        }
      }
    }
  }
}
</style>
