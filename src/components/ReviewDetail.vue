<template>
  <div>
    <button v-if="review.userName === userName" @click="updateReview">리뷰 수정</button>
    <button v-if="review.userName === userName" @click="deleteReview">리뷰 삭제</button>
    {{ review }}
    <hr>
    <div v-for="comment in comments" :key="comment.id">
      {{ comment }}
      <button 
        class="btn btn-danger"
        v-if="comment.userName === userName"
        @click="deleteComment(comment.id)"
      >삭제</button>
    </div>
    <div>
      <label for="content">댓글 작성</label>
      <input 
        type="text" 
        id="content"
        v-model="commentForm.content"
      >
      <label for="rank">나의 평점</label>
      <input 
        type="number" 
        id="rank"
        v-model.number="commentForm.rank"
      >
      <button @click="createComment">작성</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'

export default {
  name: 'ReviewDetail',
  data: function() {
    return {
      commentForm: {
        content: '',
        rank: 0,
      },
      comments: [],
    }
  },
  props: {
    review: Object
  },
  methods: {
    updateReview() {
      this.$router.push({
        name: 'MovieReview',
        params: {
          movieId: this.movieData.id,
          reviewId: this.review.id,
          review: this.review
        }
      })
    },
    deleteReview() {
      axios({
        method: 'delete',
        url: `http://127.0.0.1:8000/movies/${this.movieData.id}/reviews/${this.review.id}/update_delete/`,
        headers: this.token,
      })
        .then(() => {
          // re-load movie 
          this.$store.dispatch('LoadDetail', this.movieData.id)
          // to review detail
          this.$router.push({ name: 'MovieDetail', params: { movieId: this.movieData.id} })
        })
        .catch(err => console.error(err))
    },
    loadComments() {
      axios({
      method: 'get',
      url: `http://127.0.0.1:8000/movies/${this.review.id}/comments/`,
      headers: this.token,
      })
        .then(res => this.comments = res.data)
    },
    createComment() {
      axios({
      method: 'post',
      url: `http://127.0.0.1:8000/movies/${this.review.id}/comments/`,
      headers: this.token,
      data: this.commentForm
      })
        .then(() => {
          this.loadComments()
          
        })
    },
    deleteComment(commentId) {
      if (confirm('댓글을 삭제하시겠습니다?')) {
        axios({
        method: 'delete',
        url: `http://127.0.0.1:8000/movies/${this.review.id}/delete/${commentId}/`,
        headers: this.token,
        data: this.commentForm
        })
          .then(() => {
            this.loadComments()          
          })
      }
    }
  },
  created() {
    this.loadComments()
  },
  computed: {
    ...mapState(['movieData', 'userName', 'token']),
  }
}
</script>

<style>

</style>