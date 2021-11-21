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
  methods: {
    updateReview() {
      this.$router.push({
        name: 'MovieReview',
        params: {
          reviewId: this.review.id
        }
      })
    },
    deleteReview() {

    }
  },
  computed: {
    ...mapState(['movieData', 'userName']),
    reviewIdx() {
      for (let i=0; i<this.movieData.review_set.len; i++ ) {
        if (this.movieData.review_set[i].id === this.index) {
          return i
        }
      }
      return null
    },
    review() {
      return this.movieData.review_set[this.reviewIdx]
    }
  }
}
</script>

<style>

</style>