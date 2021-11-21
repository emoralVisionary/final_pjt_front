import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MovieDetail from '../views/MovieDetail.vue'
import MovieReview from '../views/MovieReview.vue'
import Community from '../views/community/Community.vue'
import Post from '../views/community/Post.vue'
import PostDetail from '../views/community/PostDetail.vue'
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
    path: '/:movieId/review/:reviewId?',
    name: 'MovieReview',
    component: MovieReview
  },
  {
    path: '/:movieId/review/:reviewId',
    name: 'ReviewDetail',
    component: ReviewDetail
  },
  {
    path: '/community',
    name: 'Community',
    component: Community
  },
  {
    path: '/community/post/:postId?',
    name: 'Post',
    component: Post
  },
  {
    path: '/community/:postId',
    name: 'PostDetail',
    component: PostDetail
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
