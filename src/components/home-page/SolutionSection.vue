<template>
  <div class="bg-section bg-solution q-pt-xl">
    <div class="container">
      <small-heading-sec class="q-mt-xl" headngText="Why Mersvo?" />

      <heading-sec
        class="q-my-lg"
        :class="styleHeading"
        headingTxt="Simply software solutions that can capitalize on integration and put scalability and usability first.
"
      />
      <div class="cardsHome-container">
        <card-sec
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
</template>

<script setup>
import { ref } from 'vue';
import CardSec from '../shared-component/CardSec.vue';
import HeadingSec from '../shared-component/HeadingSec.vue';
import SmallHeadingSec from '../shared-component/SmallHeadingSec.vue';
const styleHeading = ref('white');

const cardContent = ref([
  {
    id: 1,
    icon: 'src/assets/Development1 - icon.svg',
    headingCard: 'Smart Development',
    colorHeding: 'white',
    cardPrag:
      'Engage Automation and modern tools to build highly integrated solution that is born from customer experiences and tackles customers’ pain points with suite of applications that talks to each other.',
  },
  {
    id: 2,
    icon: 'src/assets/Vector1.svg',
    headingCard: 'Fast Scalable development',
    colorHeding: 'white',
    cardPrag:
      'Scalable framework that scale well from small enterprise customers with high integration and dynamic application requirements to high end large enterprise solutions.',
  },
  {
    id: 3,
    icon: 'src/assets/Vector3.svg',
    headingCard: 'Omni-channel strategy',
    colorHeding: 'white',
    cardPrag:
      'Our development adapts modern technologies that help us to target and address different channels to reach out to the customers in their comfort zone.',
  },
]);
</script>

<style lang="scss" scoped>
.container {
  padding-bottom: 7rem;
}
.bg-section.bg-solution {
  position: relative;
  bottom: -2px;
  background: linear-gradient(265.86deg, #001237 -1.9%, #001237 96.4%);
  clip-path: polygon(0 0, 100% 22%, 100% 100%, 0% 100%);
}

@media screen and (max-width: 767px) {
  .bg-solution {
    text-align: center;
  }
  .bg-section.bg-solution {
    clip-path: polygon(0 0, 100% 10%, 100% 100%, 0% 100%);
  }
}
</style>
