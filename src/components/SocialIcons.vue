<template>
  <q-item>
    <q-item-section
      class="social-icons follow-icons"
      style="display: flex; flex-direction: row"
    >
      <q-btn
        v-ripple
        round
        icon="fab fa-facebook-f"
        @click="redirectTo('https://www.facebook.com/kzkulaklikcom/')"
      />
      <q-btn
        v-ripple
        round
        icon="fab fa-instagram"
        @click="redirectTo('https://www.instagram.com/kzkulaklik/')"
      />
      <q-btn
        v-ripple
        round
        icon="fab fa-twitter"
        @click="redirectTo('https://twitter.com/kzkulaklik')"
      />
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  methods: {
    redirectTo(url) {
      window.open(url, '_blank');
    },
  },
};
</script>

<style scoped>
.social-icons q-btn {
  z-index: 1;
}
.social-icons q-btn {
  background-color: transparent !important;
}
</style>
