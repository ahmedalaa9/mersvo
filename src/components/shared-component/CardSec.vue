<template>
  <div class="card-content">
    <div class="icons">
      <img :src="icon" alt="logo" />
    </div>
    <h6 class="card-content__heading" :class="colorHeding">
      {{ headingCard }}
    </h6>
    <p class="card-content__parg" :class="colorHeding">
      {{ cardPrag }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  icon: { type: String },
  headingCard: { type: String },
  cardPrag: { type: String },
  colorHeding: { type: String },
});
</script>

<style lang="scss" scoped>
.cards-contaner {
  .card-content {
    &__parg {
      font-size: 1rem;
      line-height: 1.1rem;
    }
  }
}

.card-content {
  max-width: 350px;
  padding: 0.2rem 1rem 0;
  border-left: rgba(24, 26, 140, 0.4) 2px dotted;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 22px;
    height: 2px;
    top: 70px;

    left: -11px;
    opacity: 0.85;
    border: 2.5px solid #246aff;
    border-radius: 5px;
    transform: rotate(90deg);
  }

  &__heading {
    margin: 0.7rem 0;
    color: #001237;
  }

  &__parg {
    font-weight: 300;
    font-size: 1rem;
    line-height: 1.35rem;
    margin-bottom: 0;
    opacity: 0.85;
  }
}
.white-light {
  color: rgba(white, 0.7) !important;
}
.white {
  color: white !important;
}

@media screen and (max-width: 767px) {
  .icons {
    text-align: center;
  }
  .card-content {
    place-self: center;
    align-self: stretch;
    text-align: center;

    border-left: none;
    &::before {
      display: none;
    }
    &__heading {
      text-align: center !important;
    }
  }
}
@media screen and (min-width: 1400px) {
  .card-content {
    &__heading {
      font-size: 1.65rem;
      line-height: 1.8rem;
    }
    &__parg {
      font-size: 1.5rem;
      line-height: 1.8rem;
    }
  }
}
</style>
