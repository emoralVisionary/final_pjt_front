<template>
  <div>
    {{ $route.query.post }}
    <button @click="updatePost">글 수정</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'PostDetail',
  methods: {
    updatePost() {
      this.$router.push({
        name: 'Post',
        params: {
            PostId: this.$router.query.post.id
        }
      })
    },
  },
  computed: {
    post() {

    }
  }
}
</script>

<style>

</style>