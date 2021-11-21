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

    },
    deleteReview() {

    }
  },
  computed: {
    ...mapState(['movieData', 'userName']),
    review() {
      return this.movieData.review_set[this.$route.params.reviewId - 1]
    }
  }
}
</script>

<style>

</style>