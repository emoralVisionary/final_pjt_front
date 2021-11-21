import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    movies: [],
    movieData: {},
    posts: [],
    token: '',
  },
  mutations: {
    LOAD_MOVIES(state, results) {
      state.movies = results
    },
    LOAD_POSTS(state, results) {
      state.posts = results
    },
    LOAD_DETAIL(state, detail) {
      console.log(detail)
      state.movieData = detail
    },
    SET_TOKEN(state, jwtToken) {
      state.token = jwtToken
    },
    LOGIN(state) {
      state.isLogin = true
    },
  },
  actions: {
    SetToken({ commit }) {
      const token = localStorage.getItem('jwt')
      const config = {
        Authorization: `JWT ${token}`
      }
      commit('SET_TOKEN', config)
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
    LoadPosts({ commit }) {
      axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/community/',
      })
        .then(res => commit('LOAD_POSTS', res.data))
        .catch(err => console.error(err))
    },
    LoadDetail({ commit, state }, movieId) {
      const baseUrl = 'http://127.0.0.1:8000/'
      axios({
        method: 'get',
        url: `${baseUrl}movies/${movieId}`,
        headers: state.token
      })
      .then(res => commit('LOAD_DETAIL', res.data))
      .catch(err => console.error(err))
    }
  },
  modules: {
  }
})
