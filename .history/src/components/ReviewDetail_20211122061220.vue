<template>
  <div>
    {{ review }}
    <button v-if="review.userName === userName" @click="updatePost">리뷰 수정</button>
    <button v-if="review.userName === userName" @click="deletePost">리뷰 삭제</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ReviewDetail',
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