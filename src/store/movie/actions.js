import { api } from 'boot/axios'

export const nowPlaying = async ({ commit }, type) => {
  let sec_type
  if (type === 'movie') {
    sec_type = 'now_playing'
  } else {
    sec_type = 'on_the_air'
  }
  try {
    await api.get(`https://api.themoviedb.org/3/${type}/${sec_type}`).then((result) => {
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
export const topRated = async ({ commit }, type) => {
  try {
    await api.get(`https://api.themoviedb.org/3/${type}/top_rated`).then((result) => {
      let data = result.data
      commit('setTopRated', data.results)
    }).catch((err) => {
      console.error(err)
      throw err;
    });
  } catch (err) {
    throw err;
  }
}
export const upComing = async ({ commit }, type) => {
  let sec_type
  if (type === 'movie') {
    sec_type = 'upcoming'
  } else {
    sec_type = 'popular'
  }
  try {
    await api.get(`https://api.themoviedb.org/3/${type}/${sec_type}`).then((result) => {
      let data = result.data
      commit('setUpComing', data.results)
    }).catch((err) => {
      console.error(err)
      throw err;
    });
  } catch (err) {
    throw err;
  }
}
export const similiar = async ({ commit }, { type, id }) => {
  try {
    await api.get(`https://api.themoviedb.org/3/${type}/${id}/similar`).then((result) => {
      let data = result.data
      commit('setSimiliar', data.results)
    }).catch((err) => {
      console.error(err)
      throw err;
    });
  } catch (err) {
    throw err;
  }
}
export const detail = async ({ commit }, { type, id }) => {
  try {
    await api.get(`https://api.themoviedb.org/3/${type}/${id}`).then((result) => {
      let data = result.data
      console.log(data);
      commit('setDetail', data)
    }).catch((err) => {
      console.error(err)
      throw err;
    });
  } catch (err) {
    throw err;
  }
}
