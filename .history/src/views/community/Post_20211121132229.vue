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
    <button @click="createPost">글 작성</button>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'

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
      axios({
        method: 'post',
        url: "http://127.0.0.1:8000/community/",
        headers: this.token,
        data: this.PostForm,
      })
        .then(() => {
          // re-load movie 
          this.$store.dispatch('LoadPosts', this.movieData.id)
          // to review detail
          // this.$router.push({ name: 'PostDetail' })
          this.$router.push({ name: 'Community' })
        })
        .catch(err => console.error(err))
    },
  },
  computed: {
    ...mapState(['token']),
  }
}
</script>

<style>

</style>