export const getListNowPlaying = (state) => {
  const data = state.listNowPlaying.slice(0, 8)
  return data
}
export const getListTopRated = (state) => {
  const data = state.listTopRated.slice(0, 8)
  return data
}
export const getListUpComing = (state) => {
  const data = state.listUpComing.slice(0, 8)
  return data
}
export const getListSimiliar = (state) => {
  const data = state.listSimiliar.slice(0, 8)
  return data
}
export const getDetails = (state) => {
  const data = state.details
  return data
}

export const getNewListNowPlaying = (state) => {
  const data = state.listNowPlaying
  // const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
  var c = 0
  let x = []
  let b = []
  var d = 0;
  var id = 0

  while (c <= data.length) {
    if (d <= 3) {
      if (!data[c] && b.length > 0) {
        x.push(b)
        b = []
        d = 0
      }
      b.push(data[c])
      c++;
      d++;
    } else {
      x.push(
        {
          id : id+1,
          name: id+1,
          data : b
        }
      )
      b = []
      id++;
      d = 0
    }
  }
  console.log(x)
  return x
}

export const getNewListTopRated = (state) => {
  const data = state.listTopRated
  // const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
  var c = 0
  let x = []
  let b = []
  var d = 0;
  var id = 0

  while (c <= data.length) {
    if (d <= 3) {
      if (!data[c] && b.length > 0) {
        x.push(b)
        b = []
        d = 0
      }
      b.push(data[c])
      c++;
      d++;
    } else {
      x.push(
        {
          id : id+1,
          name: id+1,
          data : b
        }
      )
      b = []
      id++;
      d = 0
    }
  }
  console.log(x)
  return x
}

export const getNewListUpComing = (state) => {
  const data = state.listUpComing
  // const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
  var c = 0
  let x = []
  let b = []
  var d = 0;
  var id = 0

  while (c <= data.length) {
    if (d <= 3) {
      if (!data[c] && b.length > 0) {
        x.push(b)
        b = []
        d = 0
      }
      b.push(data[c])
      c++;
      d++;
    } else {
      x.push(
        {
          id : id+1,
          name: id+1,
          data : b
        }
      )
      b = []
      id++;
      d = 0
    }
  }
  console.log(x)
  return x
}
