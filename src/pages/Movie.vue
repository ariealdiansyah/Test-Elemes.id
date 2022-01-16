<template>
  <div class="q-pa-md">
    <!-- <country-flag country="fr" size="small" /> -->
    <collections />
  </div>
</template>

<script>
import Collections from './Collections.vue';
// import CountryFlag from 'vue-country-flag';

export default {
  name: 'Movie',
  data() {
    return {
      stars: 5,
    };
  },
  components: {
    Collections,
    // CountryFlag,
  },
};
</script>

<style></style>
