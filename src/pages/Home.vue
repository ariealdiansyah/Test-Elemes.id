<template>
  <q-carousel
    animated
    v-model="slide"
    infinite
    :autoplay="autoplay"
    arrows
    transition-prev="slide-right"
    transition-next="slide-left"
    @mouseenter="autoplay = false"
    @mouseleave="autoplay = true"
  >
    <q-carousel-slide
      v-for="slide in banner"
      :key="slide.id"
      :name="slide.original_title"
      :img-src="`https://image.tmdb.org/t/p/original/${slide.backdrop_path}`"
    >
      <div class="absolute-bottom custom-caption">
        <div class="text-h2">{{ slide.original_title }}</div>
        <div class="text-subtitle1">{{ slide.overview }}</div>
      </div>
    </q-carousel-slide>
  </q-carousel>
  <div class="q-pa-md">
    <ListFilm title="Popular Movie" :data="popular" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ListFilm from 'components/ListFilm';

export default {
  name: 'Home',
  components: {
    ListFilm,
  },
  data() {
    return {
      autoplay: true,
      slide: 1,
      stars: 5,
    };
  },
  async created() {
    await this.$store.dispatch('home/getPopularMovie');
    await this.$store.dispatch('home/getNowPlaying');
  },
  computed: {
    ...mapGetters('home', {
      popular: 'getListPopular',
      banner: 'getListForBanner',
    }),
  },
};
</script>

<style lang="sass" scoped>
.custom-caption
  text-align: center
  padding: 12px
  color: white
  background-color: rgba(0, 0, 0, .3)
</style>
