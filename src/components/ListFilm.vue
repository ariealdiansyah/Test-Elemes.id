<template>
  <q-page class="q-mt-md">
    <div class="row text-title-menu">
      <span class="q-mx-md">{{ title }}</span>
    </div>
    <div class="row text-title-menu">
      <div class="col-3" v-for="item in data" :key="item.id">
        <q-card class="my-card q-mx-md q-my-md" @click="getRoute(item.id)">
          <q-img :src="`https://image.tmdb.org/t/p/original/${item.backdrop_path}`" />

          <q-card-section>
            <div class="row no-wrap items-center">
              <div class="col text-h6">
                {{ item.original_title || item.original_name }}
              </div>
            </div>

            <q-rating
              :model-value="item.vote_average / 2"
              icon-half="star_half"
              readonly
              :max="5"
              size="md"
            />
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-subtitle1">{{ item.title }}</div>
            <div class="text-caption text-grey ellipsis">
              {{ item.overview }}
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'List',
  props: {
    title: { type: String, default: '' },
    data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    getRoute(id) {
      this.$emit('getRoute', id);
    },
  },
};
</script>

<style></style>
