import Vuex from 'vuex'

export default () => {
  const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state: {
      count: 0
    },
    mutations: {
      increment (state, value) {
        state.count = value
      }
    }
  })

  return store
}
