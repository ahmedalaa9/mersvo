<template>
  <div class="form-contact">
    <p>Your information</p>
    <q-form @submit.prevent="submitForm">
      <div class="name-group row justify-between">
        <div class="input-group col-md col-sm-12 q-mr-sm">
          <label for="firstName">First Name</label>
          <q-input
            class="input-field"
            outlined
            dark
            v-model="ph"
            placeholder="First Name"
            :dense="dense"
          />
        </div>
        <div class="input-group col-md col-sm-12">
          <label for="lastName">Last Name</label>
          <q-input
            class="input-field"
            outlined
            dark
            borderless
            v-model="ph"
            placeholder="Last Name"
            :dense="dense"
          />
        </div>
      </div>
      <div class="input-group">
        <label for="email">Email</label>
        <q-input
          class="input-field"
          outlined
          dark
          type="email"
          v-model="ph"
          placeholder="exaple@example.com"
          :dense="dense"
        />
      </div>
      <p>Your inquiry</p>

      <div class="name-group row full-width justify-between">
        <div class="input-group col-md col-sm-12 q-mr-sm">
          <Country-flag country="it" size="big" />

          <label for="country">Country</label>

          <q-select
            dark
            outlined
            v-model="model"
            :options="options"
            class="input-field relative-position"
          >
            <template v-slot:prepend>
              <q-icon>
                <img src="src/assets/SaudiArabia(SA).svg" alt="" />
              </q-icon>
            </template>
          </q-select>
        </div>
        <div class="input-group col-md col-sm-12">
          <label for="company">Company</label>
          <q-input
            class="input-field"
            outlined
            dark
            borderless
            v-model="ph"
            placeholder="Your Company"
            :dense="dense"
          />
        </div>
      </div>
      <div class="input-group">
        <label for="message">Message</label>
        <q-input
          class="input-field"
          outlined
          dark
          type="textarea"
          v-model="ph"
          placeholder="How we can help you?"
          :dense="dense"
        />
      </div>
      <q-btn
        class="send-btn full-width q-my-md"
        unelevated
        rounded
        color="primary"
        type="submit"
        label="Send"
      />
    </q-form>
  </div>
  <country-flag country="it" size="big" />
</template>

<script>
import { ref } from 'vue';
import CountryFlag from 'vue-country-flag-next';

export default {
  setup() {
    return {
      model: ref('Saudi Arabia'),

      options: ['Saudi Arabia', 'Egypt'],
    };
  },
};
</script>

<style lang="scss" scoped>
.form-contact {
  background: #001237;
  border-radius: 16px;
  padding: 1.5rem;
  margin: 1.5rem 0;

  p {
    font-weight: 400;
    font-size: 0.8rem;
    line-height: 0.8rem;
    color: rgba(255, 255, 255, 0.2);
    margin-top: 0.5rem;
  }

  .input-group {
    margin: 0.3rem 0;
    label {
      color: white;
    }

    .input-field.q-field {
      margin-top: 10px;
      border-radius: 16px;
    }
  }
}
@media screen and (max-width: 600px) {
  .form-contact {
    .input-group {
      width: 100%;
    }
  }
}
.q-field__control.relative-position.row.no-wrap,
.q-field--outlined .q-field__control,
.q-field--outlined .q-field__control:before {
  border-radius: 16px !important;

  color: red !important;
}
@media screen and (min-width: 600px) {
  .name-group {
    .input-group {
      max-width: 49%;
    }
  }
}
@media screen and (min-width: 1023px) {
  .send-btn {
    font-size: 1.2rem;
    padding-block: 0.7rem;
    border-radius: 35px;
  }
}
</style>
