<template>
  <q-page>
    <div class="bg-grey text-white">
      <div class="q-pa md">
        <div class="row">
          <div class="col-4 q-ma-md">
            <q-card class="my-card">
              <q-img
                :src="`https://image.tmdb.org/t/p/original/${details.backdrop_path}`"
              />
            </q-card>
          </div>
          <div class="col q-ma-md">
            <div class="row items-center q-py-sm">
              <div class="col-3">Judul</div>
              <div class="col">{{ details.original_name || details.original_title }}</div>
            </div>
            <div class="row items-center q-py-sm">
              <div class="col-3">Description</div>
              <div class="col">{{ details.overview }}</div>
            </div>
            <!-- <div class="row items-center q-py-sm">
              <div class="col-3">Genre</div>
              <div class="col">BATMAN</div>
            </div> -->
            <div class="row items-center q-py-sm">
              <div class="col-3">Tanggal Rilis</div>
              <div class="col">{{ details.first_air_date || details.release_date }}</div>
            </div>
            <!-- <div class="row items-center q-py-sm">
              <div class="col-3">Popularity</div>
              <div class="col">
                <q-rating
                  v-model="rated"
                  :max="5"
                  size="xs"
                  readonly
                  icon-half="star_half"
                />
              </div>
            </div> -->
            <div class="row items-center q-py-sm">
              <div class="col-3">Bahasa</div>
              <div class="col">{{ details.original_language }}</div>
            </div>
            <!-- <div class="row items-center q-py-sm">
              <div class="col-3">Durasi</div>
              <div class="col">105 menit</div>
            </div> -->
            <div class="row">
              <q-btn
                unelevated
                color="primary"
                label="Watch Trailer"
                type="a"
                href="https://www.youtube.com/watch?v=6JnN1DmbqoU"
                target="_blank"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="q-ma-md">
      <ListFilm title="Similiar" :data="similiar" @getRoute="getRoute" />
      <q-btn unelevated color="primary" label="Back" @click="goBack" />
    </div>
  </q-page>
</template>

<script>
import ListFilm from 'components/ListFilm';
import { mapGetters } from 'vuex';

export default {
  name: 'Details',
  data() {
    return {
      lorem: 'ASHIIAAAAAPPPP',
      stars: 5,
      rated: 2.3,
      id: '',
    };
  },
  async mounted() {
    this.id = this.$route.params.id;
    this.isMovie = this.$route.fullPath.includes('movie');
    const type = this.isMovie ? 'movie' : 'tv';
    await this.$store.dispatch('movie/detail', { type: type, id: this.id });
    await this.$store.dispatch('movie/similiar', { type: type, id: this.id });
  },
  components: {
    ListFilm,
  },
  computed: {
    ...mapGetters('movie', {
      similiar: 'getListSimiliar',
      details: 'getDetails',
    }),
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    getRoute(val) {
      this.isMovie
        ? this.$router.push(`/movie/details/${val}`)
        : this.$router.push(`/tv/details/${val}`);
      // this.isMovie
      //   ? this.$router.push(`/movie/details`)
      //   : this.$router.push(`/tv/details`);
    },
  },
};
</script>

<style></style>
