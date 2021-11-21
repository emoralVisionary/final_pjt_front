<template>
  <div>
    <button v-if="review.userName === userName" @click="updateReview">리뷰 수정</button>
    <button v-if="review.userName === userName" @click="deleteReview">리뷰 삭제</button>
    {{ review }}
  </div>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'

export default {
  name: 'ReviewDetail',
  props: {
    review: Object
  },
  methods: {
    updateReview() {
      this.$router.push({
        name: 'MovieReview',
        params: {
          movieId: this.movieData.id,
          reviewId: this.review.id,
          review: this.review
        }
      })
    },
    deleteReview() {
      axios({
        method: 'delete',
        url: `http://127.0.0.1:8000/movies/${this.movieData.id}/reviews/${this.review.id}/update_delete/`,
        headers: this.token,
      })
        .then(() => {
          // re-load movie 
          this.$store.dispatch('LoadDetail', this.movieData.id)
          // to review detail
          this.$router.push({ name: 'MovieDetail', params: { movieId: this.movieData.id} })
        })
        .catch(err => console.error(err))
    },
    loadComments() {
      axios({
      method: 'get',
      url: `http://127.0.0.1:8000/movies/${this.review.id}/comments/`,
      headers: this.token,
      })
        .then(res => this.comments = res.data)
    }
  },
  created() {
    
  },
  computed: {
    ...mapState(['movieData', 'userName', 'token']),
  }
}
</script>

<style>

</style>