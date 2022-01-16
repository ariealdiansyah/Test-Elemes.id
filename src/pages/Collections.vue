<template>
  <div class="q-pa-md">
    <Koleksi
      :title="isMovie ? 'Now Playing' : 'On The Air'"
      :data="newNowPlaying"
      @getRoute="getRoute"
    />
    <Koleksi title="Top Rated" :data="topRated" @getRoute="getRoute" />
    <Koleksi
      :title="isMovie ? 'Up Coming' : 'Popular'"
      :data="upComing"
      @getRoute="getRoute"
    />
  </div>
</template>

<script>
import Koleksi from 'components/KoleksiFilm.vue';
import { mapGetters } from 'vuex';
import { ref } from 'vue';

export default {
  name: 'Collections',
  data() {
    return {
      stars: 5,
      isMovie: false,
    };
  },
  components: {
    Koleksi,
  },
  async mounted() {
    this.isMovie = this.$route.fullPath.includes('movie');
    const type = this.isMovie ? 'movie' : 'tv';
    await this.$store.dispatch('movie/nowPlaying', type);
    await this.$store.dispatch('movie/topRated', type);
    await this.$store.dispatch('movie/upComing', type);
  },
  computed: {
    ...mapGetters('movie', {
      nowPlaying: 'getListNowPlaying',
      topRated: 'getNewListTopRated',
      upComing: 'getNewListUpComing',
      newNowPlaying: 'getNewListNowPlaying',
    }),
  },
  methods: {
    getRoute(val) {
      this.isMovie
        ? this.$router.push(`/movie/details/${val}`)
        : this.$router.push(`/tv/details/${val}`);
      // this.isMovie
      //   ? this.$router.push(`/movie/details`)
      //   : this.$router.push(`/tv/details`);
    },
    onCheckNewData() {
      console.log(this.newNowPlaying);
      console.log(ref('style'));
    },
  },
};
</script>

<style></style>
