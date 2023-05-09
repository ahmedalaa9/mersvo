<template>
  <div class="container q-py-lg">
    <div class="section-container q-py-xl">
      <small-heading-sec
        class="q-my-lg"
        headngText="How can mersvo help you?"
      />
      <heading-sec
        class="q-my-lg"
        headingTxt="Leveraging a team of experts, we build experiences with well thought of user Journeys with 360°coverage from all angels.
"
      />

      <div class="cardsHome-container">
        <card-sec
          v-for="card in cardContent"
          :key="card.id"
          :icon="card.icon"
          :headingCard="card.headingCard"
          :cardPrag="card.cardPrag"
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

const cardContent = ref([
  {
    id: 1,
    icon: 'src/assets/icons8-account.gif',
    headingCard: 'Boost your team productivity',
    cardPrag:
      'We help building a collaborative solutions to shape up customer experiences whether internal users or external with set of automation tools for enterprise workplace.',
  },
  {
    id: 2,
    icon: 'src/assets/icons8-double-tap-gesture.gif',
    headingCard: 'Shape up your customer experience',
    cardPrag:
      'We help into shaping up your customer experience with automated smart solution that seamlessly enhance your customer and visitor experience.',
  },
  {
    id: 3,
    icon: 'src/assets/icons8-ok-hand.gif',
    headingCard: 'Build experience to remember',
    cardPrag:
      'An Executive solution for building a WoW experience for your visitors that leaves them with something to remember.',
  },
]);
</script>

<style lang="scss">
.cardsHome-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 1.5rem;
  grid-column-gap: 1.5rem;
}

@media screen and (max-width: 767px) {
  .cardsHome-container {
    text-align: center !important;
  }
  .section-container {
    text-align: center;
  }
  .cardsHome-container {
    grid-template-columns: 1fr;
  }
}
</style>
