<template>
  <div>
    <button v-if="review.userName === userName" @click="updateReview">리뷰 수정</button>
    <button v-if="review.userName === userName" @click="deleteReview">리뷰 삭제</button>
    {{ review }}
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ReviewDetail',
  data: function() {
    const index = this.$route.params.postId;
    return {
      index: index,
    }
  },
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
        url: `http://127.0.0.1:8000/movies/${this.movieData.id}/reviews/${this.index}/update_delete/`,
        headers: this.$store.state.token,
      })
        .then(() => {
          // re-load movie 
          this.$store.dispatch('LoadDetail', this.movieData.id)
          // to review detail
          this.$router.push({ name: 'MovieDetail', params: { movieId: this.movieData.id} })
        })
        .catch(err => console.error(err))
    }
  },
  computed: {
    ...mapState(['movieData', 'userName']),
  }
}
</script>

<style>

</style>