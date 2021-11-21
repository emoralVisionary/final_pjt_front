import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const SetToken = function () {
  const token = localStorage.getItem('jwt')
  const config = {
    Authorization: `JWT ${token}`
  }
  return config
}

export default new Vuex.Store({
  state: {
    isLogin: false,
    movies: [],
    movieData: {},
    token: '',
  },
  mutations: {
    LOAD_MOVIES(state, results) {
      state.movies = results
    },
    LOAD_DETAIL(state, detail) {
      console.log(detail)
      state.movieData = detail
    },
    LOGIN(state) {
      state.isLogin = true
    },
  },
  actions: {
    SetToken = function () {
      const token = localStorage.getItem('jwt')
      const config = {
        Authorization: `JWT ${token}`
      }
      return config
    },
    LoadMovies({ commit }) {
      const baseUrl = 'http://127.0.0.1:8000/'
      axios({
        method: 'get',
        url: `${baseUrl}movies/`
      })
        .then(res => commit('LOAD_MOVIES', res.data))
        .catch(err => console.error(err))
    },
    LoadDetail({ commit, }, movieId) {
      const baseUrl = 'http://127.0.0.1:8000/'
      axios({
        method: 'get',
        url: `${baseUrl}movies/${movieId}`,
        headers: SetToken()
      })
      .then(res => commit('LOAD_DETAIL', res.data))
      .catch(err => console.error(err))
    }
  },
  modules: {
  }
})
