<template>
  <div
    class="platform-content-screen full-width row justify-center items-center"
  >
    <div class="shape-container row justify-center items-center">
      <div class="center--item_screen center-exp">
        <div class="shape--center row justify-center items--center">
          <img src="src/assets/exp-center.svg" alt="" />
        </div>
        <div class="smart-shape genral-shape">
          <img
            src="src/assets/smart-exp-not-selected.svg"
            alt=""
            class="not-hover"
          />
          <img src="src/assets/smart-exp-Selected.svg" alt="" class="hovered" />
          <div class="smart-shape_list genral-shape-list">
            <ul>
              <li>Vocal commanding</li>
              <li>Touch Interactivity</li>
              <li>Gesture Interactivity</li>
            </ul>
          </div>
        </div>
        <div class="chatbot-shape genral-shape">
          <img
            src="src/assets/chatbot-exp-Not-selected-exp.svg"
            alt=""
            class="not-hover"
          />
          <img
            src="src/assets/chatbot-exp-selected.svg"
            alt=""
            class="hovered"
          />
          <div class="chatbot-shape_list genral-shape-list">
            <ul>
              <li>
                Variety of Input/Output <br />
                channels
              </li>
              <li>Easy open plugins</li>
            </ul>
          </div>
        </div>
        <div class="ai-shape genral-shape">
          <img
            src="src/assets/AI-Not-selected-exp.svg"
            alt="AI"
            class="not-hover"
          />
          <img src="src/assets/AI-Selected-exp.svg" alt="" class="hovered" />
          <div class="ai-shape_list genral-shape-list">
            <ul>
              <li>Smart Prediction</li>
              <li>Pre-defined Responses</li>
              <li>Mind Games</li>
            </ul>
          </div>
        </div>
        <div class="xr-shape genral-shape">
          <img
            src="src/assets/xr-exp-Not-selected.svg"
            alt="AI"
            class="not-hover"
          />
          <img src="src/assets/xr-exp-Selected.svg" alt="" class="hovered" />
          <div class="xr-shape_list genral-shape-list">
            <ul>
              <li>AR</li>
              <li>VR</li>
              <li>3D Modeling</li>
            </ul>
          </div>
        </div>
        <div class="ux-shape genral-shape">
          <img
            src="src/assets/ux-exp-Not-selected.svg"
            alt="AI"
            class="not-hover"
          />
          <img src="src/assets/ux-exp-Selected.svg" alt="" class="hovered" />
          <div class="ux-shape_list genral-shape-list">
            <ul>
              <li>UI / UX</li>
              <li>3D Experience</li>
              <li>Motion Graphics</li>
            </ul>
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
  height: 110vh;
  margin: 7% 0;
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
        opacity: 0;
        top: 40%;
        left: 35%;
        transition: all 0.5s linear;

        ul li {
          font-style: normal;
          font-weight: 500;
          font-size: 20px;
          line-height: 30px;

          color: #ffffff;
        }
      }
    }
    .smart-shape {
      top: -50%;
      left: 15%;

      &:hover {
        .smart-shape_list {
          opacity: 1;
          top: -40px;
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
          left: -40%;
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
      left: -46%;

      &:hover {
        .ai-shape_list {
          opacity: 1;
          left: -40%;
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
          width: 100%;

          top: 30%;
          left: 25%;

          ul li {
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
      .chatbot-shape {
        bottom: 42%;
        left: -24%;
        &:hover {
          .chatbot-shape_list {
            left: -30%;
          }
        }
      }
      .ai-shape {
        bottom: -20%;
        left: -26%;
        &:hover {
          .ai-shape_list {
            left: -30%;
          }
        }
      }
      .xr-shape {
        bottom: 42%;
        right: -40%;
        &:hover {
          .xr-shape_list {
            left: 80%;
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
    .shape--center {
      img {
        max-width: 60%;
      }
    }
    .center-exp {
      .genral-shape {
        &-list {
          top: 30%;
          left: 20%;

          ul li {
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
        top: -50%;
        left: 28%;
      }
      .chatbot-shape {
        left: -6%;
        &:hover {
          .chatbot-shape_list {
            left: -25%;
          }
        }
      }
      .ai-shape {
        left: -8%;
        &:hover {
          .ai-shape_list {
            left: -22%;
          }
        }
      }
      .xr-shape {
        right: -36%;
        &:hover {
          .xr-shape_list {
            left: 60%;
          }
        }
      }
      .ux-shape {
        right: -25%;
        &:hover {
          .ux-shape_list {
            left: 70%;
          }
        }
      }
    }
  }
}
</style>
