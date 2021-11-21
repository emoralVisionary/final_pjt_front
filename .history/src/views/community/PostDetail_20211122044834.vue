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
        name: 'Create',
        params: {
            contentId: this.index
        }
      })
    }
  }
}
</script>

<style>

</style>