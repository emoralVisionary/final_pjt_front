<template>
  <div>
    {{ post }}
    <button @click="updatePost">글 수정</button>
  </div>
</template>

<script>
export default {
  name: 'PostDetail',
  methods: {
    updatePost() {
      this.$router.push({
        name: 'Post',
        params: {
          postId: this.post.id
        }
      })
    },
  },
  computed: {
    post() {
      return this.$store.state.posts[this.$route.params.postId - 1]
    }
  }
}
</script>

<style>

</style>