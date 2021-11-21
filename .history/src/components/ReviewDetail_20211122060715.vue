<template>
  <div>
    {{ $route.query.review }}
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ReviewDetail',
  props: {
    review: Object
  },
  computed: {
    ...mapState(['movieData']),
    post() {
      return this.$store.state.posts[this.$route.params.postId - 1]
    }
  }
}
</script>

<style>

</style>