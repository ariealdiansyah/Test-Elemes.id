import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'
import app from './app'
import menu from './menu'
import home from './home'
import tv from './tv'
import movie from './movie'
import similiar from './similiar'
// import example from './module-example'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      app,
      menu,
      home,
      tv,
      movie,
      similiar
      // example
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })

  return Store
})
