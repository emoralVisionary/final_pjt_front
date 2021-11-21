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