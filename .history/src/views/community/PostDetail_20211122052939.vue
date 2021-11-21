<template>
  <div>
    {{ post }}
    <button v-if="post.userName === this.$store.state.userName" @click="updatePost">글 수정</button>
    <button v-if="post.userName === this.$store.state.userName" @click="deletePost">글 삭제</button>
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
    deletePost() {
      axios({
        method: 'delete',
        url: `http://127.0.0.1:8000/community/${this.index}/update_delete/`,
        headers: this.token,
        data: this.PostForm,
      })
        .then(() => {
          // re-load movie 
          this.$store.dispatch('LoadPosts')
          // to review detail
          // this.$router.push({ name: 'PostDetail' })
          this.$router.push({ name: 'Community' })
        })
        .catch(err => console.error(err))
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