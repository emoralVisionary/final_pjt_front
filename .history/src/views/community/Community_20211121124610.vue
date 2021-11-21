<template>
  <div>
    <button @click="getPostForm">글쓰기</button>
    <p v-for="post in posts" :key=post.id>
      {{ post }}
    </p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Community',
  data: function () {
    return {
      posts: [],
    }
  },
  methods: {
    getPostForm() {
      if (!this.$store.state.isLogin) {
        this.$router.push({ name: 'Login' })
      } else {
        this.$store.dispatch('LoadDetail', this.movie.id)
        this.$router.push({ name: 'MovieDetail', params: { movieId: this.movie.id} })
      }
    },
  },
  created() {
    axios({
      method: 'get',
      url: 'http://127.0.0.1:8000/community/'
    })
      .then(res => this.posts = res.data)
  }
}
</script>

<style>

</style>