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

    }
  },
  computed: {
    ...mapState(['movieData', 'userName']),
  }
}
</script>

<style>

</style>