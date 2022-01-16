export const getListPopular = (state) => {
  const data = state.listPopular.slice(0, 8)
  return data
}

export const getListForBanner = (state) => {
  return state.listNowPlaying
}
