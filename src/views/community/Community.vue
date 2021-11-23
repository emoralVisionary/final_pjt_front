<template>
  <div class="container">
    <h1>Community</h1>
    <div class="row">
      <button @click="getPostForm">글쓰기</button>
      <div class="col-lg-8 col-md-10 mx-auto">
        <p v-for="post in this.posts" :key=post.id>
          <router-link :to="{ 
            name: 'PostDetail', 
            params: { postId: post.id },
            }">
            {{ post.id }}번 글
            {{ post.title }}
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Community',
  data: function () {
    return {
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
    this.$store.dispatch('LoadPosts')
  },
  computed: {
    ...mapState(['posts', 'token']),
  }
}
</script>

<style>

</style>