<template>
  <div>
    {{ review }}
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ReviewDetail',
  computed: {
    ...mapState(['movieData']),
    review() {
      return this.movieData.review_set[this.$route.params.reviewId - 1]
    }
  }
}
</script>

<style>

</style>