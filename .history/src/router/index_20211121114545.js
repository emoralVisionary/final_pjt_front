import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MovieDetail from '../views/MovieDetail.vue'
import MovieReview from '../views/MovieReview.vue'
import ReviewDetail from '@/components/ReviewDetail.vue'
import Signup from '@/views/accounts/Signup'
import Login from '@/views/accounts/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:movieId',
    name: 'MovieDetail',
    component: MovieDetail
  },
  {
    path: '/:movieId/review',
    name: 'MovieReview',
    component: MovieReview
  },
  {
    path: '/:movieId/review/:reviewId',
    name: 'ReviewDetail',
    component: ReviewDetail
  },
  {
    path: '/accounts/signup',
    name: 'Signup',
    component: Signup,
  },
  {
    path: '/accounts/login',
    name: 'Login',
    component: Login,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
