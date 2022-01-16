import { api } from 'boot/axios'

export const getPopularMovie = async ({ commit }) => {
  try {
    await api.get("https://api.themoviedb.org/3/movie/popular").then((result) => {
      let data = result.data
      commit('setPopular', data.results)
    }).catch((err) => {
      console.error(err)
      throw err;
    });
  } catch (err) {
    throw err;
  }
}

export const getNowPlaying = async ({ commit }) => {
  try {
    await api.get("https://api.themoviedb.org/3/movie/now_playing").then((result) => {
      let data = result.data
      commit('setNowPlaying', data.results)
    }).catch((err) => {
      console.error(err)
      throw err;
    });
  } catch (err) {
    throw err;
  }
}
