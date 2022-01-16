<template>
  <div class="q-pa-md">
    <collections />
  </div>
</template>

<script>
import Collections from './Collections.vue';

export default {
  name: 'TV',
  data() {
    return {
      stars: 5,
    };
  },
  components: {
    Collections,
  },
};
</script>

<style></style>
