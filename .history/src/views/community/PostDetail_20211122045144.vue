<template>
  <div>
    {{ $route.query.post }}
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
            PostId: this.$router.query.post.id
        }
      })
    }
  }
}
</script>

<style>

</style>