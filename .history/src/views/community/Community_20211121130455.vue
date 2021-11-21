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
        this.$router.push({ name: 'Post' })
      }
    },
  },
  created() {
    this.$store.dispatch('')
  }
}
</script>

<style>

</style>