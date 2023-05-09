<template>
  <div class="bg-about_map q-py-md">
    <div class="container q-pb-lg">
      <div class="about-screen">
        <div class="about-map_content row q-py-xl">
          <div class="content-sec col-md-6">
            <small-heading-sec class="q-my-lg" headngText="Mersvo" />

            <heading-sec
              :class="styleHeading"
              headingTxt="Expansion Across Borders"
            />
            <p class="lead">
              We are a fast growing startup capture clients everyday, all
              happened over a course of less than 2 years and yet going!
            </p>
            <div class="cards-contaner row">
              <card-sec
                class="col-4"
                v-for="card in cardContent"
                :key="card.id"
                :icon="card.icon"
                :headingCard="card.headingCard"
                :cardPrag="card.cardPrag"
                :colorHeding="card.colorHeding"
              />
            </div>
          </div>
          <div class="map-sec col-md-6">
            <img src="src/assets/about-mab.png" alt="" />
          </div>
        </div>
      </div>
      <div class="about-tablet q-py-xl">
        <small-heading-sec class="q-my-lg" headngText="Mersvo" />

        <heading-sec
          :class="styleHeading"
          headingTxt="Expansion Across Borders"
        />
        <p class="lead">
          We are a fast growing startup capture clients everyday, all happened
          over a course of less than 2 years and yet going!
        </p>
        <div class="map-sec">
          <img src="src/assets/about-mab.png" alt="" />
        </div>
        <div class="cards-contaner row">
          <card-sec
            class="col-4"
            v-for="card in cardContent"
            :key="card.id"
            :icon="card.icon"
            :headingCard="card.headingCard"
            :cardPrag="card.cardPrag"
            :colorHeding="card.colorHeding"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import HeadingSec from '../shared-component/HeadingSec.vue';
import SmallHeadingSec from '../shared-component/SmallHeadingSec.vue';
import CardSec from '../shared-component/CardSec.vue';
const styleHeading = ref('white');

const cardContent = ref([
  {
    id: 1,
    icon: 'src/assets/map-vector1.svg',
    headingCard: '55',
    colorHeding: 'white',
    cardPrag: 'Number of clients',
  },
  {
    id: 2,
    icon: 'src/assets/map-vector2.svg',
    headingCard: '6',
    colorHeding: 'white',
    cardPrag: 'Number of operating countries',
  },
  {
    id: 3,
    icon: 'src/assets/map-vector3.svg',
    headingCard: '+100',
    colorHeding: 'white',
    cardPrag: 'Number of cloud customers',
  },
]);
</script>

<style lang="scss" scoped>
.bg-about_map {
  .about-tablet {
    display: none;
  }
  position: relative;
  background: linear-gradient(265.86deg, #001237 -1.9%, #001237 96.4%);

  .lead {
    margin: 1.5rem 0;
    font-weight: 300;
    font-size: 1.1rem;
    line-height: 1.5rem;
    opacity: 0.95;
    color: #ffffff;
    width: 85%;
  }

  .map-sec {
    img {
      width: 100%;
    }
  }
}

@media screen and (max-width: 768px) {
  .bg-about_map {
    .about-tablet .lead {
      text-align: center;
      margin: 1.5rem auto;
    }
  }
}
@media screen and (max-width: 1023px) {
  .bg-about_map {
    .container {
      .about-screen {
        display: none;
      }
      .about-tablet {
        display: block;
      }
    }
  }
}
</style>
