<template>
  <div class="q-mt-md">
    <div class="row text-title-menu">
      <span class="q-mx-md">{{ title }}</span>
    </div>
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      padding
      height="300px"
      control-color="black"
      arrows
    >
      <q-carousel-slide
        class="row no-wrap"
        v-for="group in data"
        :key="group.id"
        :name="group.id"
      >
        <div class="col-3" v-for="item in group.data" :key="item.id">
          <q-card class="my-card q-mx-sm" @click="getRoute(item.id)">
            <q-img :src="`https://image.tmdb.org/t/p/original/${item.backdrop_path}`" />

            <q-card-section>
              <div class="row no-wrap items-center">
                <div class="col text-h6">{{ item.original_name }}</div>
              </div>

              <q-rating
                :model-value="item.vote_average / 2"
                icon-half="star_half"
                readonly
                :max="5"
                size="sm"
              />
            </q-card-section>

            <q-card-section class="q-pt-none">
              <div class="text-subtitle1">{{ item.title }}</div>
              <div class="text-caption text-grey ellipsis">{{ item.overview }}</div>
            </q-card-section>
          </q-card>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { ref } from 'vue';

export default {
  name: 'Koleksi',
  props: {
    title: { type: String, default: '' },
    data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      slide: 1,
    };
  },
  methods: {
    getRoute(id) {
      this.$emit('getRoute', id);
    },
  },
};
</script>

<style></style>
