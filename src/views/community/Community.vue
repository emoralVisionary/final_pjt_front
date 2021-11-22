<template>
  <div>
    <div class="row justify-content-between my-2">
      <div class="col-3 fs-2"><strong>자유 게시판</strong></div>
      <div class="col-2">
        <button
          class="btn btn-primary btn-sm"
          @click="getPostForm"
        >
          글쓰기
        </button>        
      </div>
    </div>
    <table class="table table-dark table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">작성자</th>
          <th scope="col">제목</th>
          <th scope="col">게시일</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="post in posts" 
          :key="post.id" 
        >
          <th scope="row">{{ post.id }}</th>
          <td>{{ post.userName }}</td>
          <td>
            <router-link 
              :to="{ 
                name: 'PostDetail', 
                params: { postId: post.id },
              }"
              class="text-reset"
            >
              {{ post.title }} 
            </router-link>
          </td>
          <td>{{ postDate[`${post.id}`] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import moment from 'moment'

export default {
  name: 'Community',
  data: function () {
    return {
      postDate: {},
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
    this.posts.forEach(element => {
      this.postDate[`${element.id}`] = moment(element.created_at).format('YYYY-MM-DD, hh:mm a')
    })
    // this.posts.forEach(element => {
    //   console.log(element.id, element.created_at)
    //   Object.defineProperty(this.postDate, element.id, { 
    //     value: moment(element.created_at).format('YYYY-MM-DD, hh:mm a'), 
    //     writable: false
    //   })
    // })
  },
  computed: {
    ...mapState(['posts', 'token']),
  },
  watch: {
    posts(newPosts) {
      newPosts.forEach(element => {
        if (!Object.keys(this.postDate).includes(element.id)) {
          this.postDate[`${element.id}`] = moment(element.created_at).format('YYYY-MM-DD, hh:mm a')
        }
      });
    }
  }
}
</script>

<style>

</style>