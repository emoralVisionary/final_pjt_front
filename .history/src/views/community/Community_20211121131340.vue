<template>
  <div>
    <button @click="getPostForm">글쓰기</button>
    <p v-for="post in this.Posts" :key=post.id>
      {{ post }}
    </p>
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