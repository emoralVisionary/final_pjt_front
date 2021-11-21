<template>
  <div>
    <h1>Movie Review</h1>
    <h2>{{ movieData.title }} 리뷰 작성</h2>
    <div>
      <label for="title">제목: </label>
      <input 
        type="text" 
        id="title"
        v-model="reviewForm.title"
      >
    </div>
    <div>
      <label for="content">내용: </label>
      <input 
        type="text" 
        id="content"
        v-model="reviewForm.content"
      >
    </div>
    <div>
      <label for="rank">평점: </label>
      <input 
        type="number" 
        id="rank"
        v-model.number="reviewForm.rank"
      >
    </div>
    <button @click="index !== undefined ? updateReview() : createReview()">
      {{index !== undefined ? '수정' : '작성'}}
    </button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'

export default {
  name: 'MovieReview',
  props: {},
  data: function() {
    const index = this.$route.params.reviewId;
    return {
      index: index,
      reviewForm: {
        title: index !== undefined ? this.movieData.review_set[index-1].title : "",
        content: index !== undefined ? this.movieData.review_set[index-1].content : "",      
        rank: index !== undefined ? this.movieData.review_set[index-1].rank : 0
      }
    }
  },
  methods: {
    createReview() {
      console.log(this.reviewForm)
      axios({
        method: 'post',
        url: `http://127.0.0.1:8000/movies/${ this.movieData.id }/reviews/`,
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
    updatePost() {
      axios({
        method: 'put',
        url: `http://127.0.0.1:8000/community/${this.index}/update_delete/`,
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
    ...mapState(['movieData', 'token']),
    review() {
      for (const rv of this.movieData.review_set) {
        if (rv.id == this.index)
      }
    }
  }
}
</script>

<style>

</style>