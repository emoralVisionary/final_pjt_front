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
    const index = this.$route.params.postId;
    return {
      PostForm: {
      title: "",
      content: "",
      
      },
      // v-model로 양방향 통신을 하도록
      data: data,
      // index를 삼항연산자를 이용하여 data값을 가져옴( 수정기능을 위함 )
      index: index,
      writer: index !== undefined ? data[index].writer : "", 
      title: index !== undefined ? this.$store.state.posts[index].title : "",
      content: index !== undefined ? data[index].content :"" ,
    }
  },
  methods: {
    createPost() {
      axios({
        method: 'post',
        url: "http://127.0.0.1:8000/community/create/",
        headers: this.token,
        data: this.PostForm,
      })
        .then(() => {
          // re-load movie 
          this.$store.dispatch('LoadPosts')
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