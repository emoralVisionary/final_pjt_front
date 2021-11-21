<template>
  <div>
    <h2>글 작성</h2>
    <div>
      <label for="title">제목: </label>
      <input 
        type="text" 
        id="title"
        v-model="PostForm.title"
      >
    </div>
    <div>
      <label for="content">내용: </label>
      <input 
        type="text" 
        id="content"
        v-model="PostForm.content"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'Post',
  data: function() {
    return {
      PostForm: {
        title: "",
        content: "",
      }
    }
  },
  methods: {
    createPost() {
      console.log(this.PostForm)
      axios({
        method: 'post',
        url: "http://127.0.0.1:8000/community/",
        headers: this.token,
        data: this.reviewForm,
      })
        .then(() => {
          // re-load movie 
          this.$store.dispatch('LoadDetail', this.movieData.id)
          // to review detail
          this.$router.push({ name: 'MovieDetail', params: { movieId: this.movieData.id} })
        })
        .catch(err => console.error(err))
    },
  }
}
</script>

<style>

</style>