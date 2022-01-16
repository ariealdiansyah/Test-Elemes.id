<template>
  <q-header elevated class="bg-dark text-white">
    <q-toolbar align="center">
      <q-toolbar-title>
        <q-icon name="theaters" />
        Movie Vue
      </q-toolbar-title>
    </q-toolbar>

    <q-tabs align="center">
      <template v-for="item in menu" :key="item">
        <q-route-tab :to="'/' + item.route" :label="item.label" />
      </template>
    </q-tabs>
  </q-header>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Header',
  computed: {
    ...mapState('menu', {
      menu: 'listMenu',
    }),
  },
};
</script>

<style></style>
