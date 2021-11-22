<template>
  <div>
    <h1>{{ review.title }}</h1>
    <button v-if="review.userName === userName" @click="updateReview">리뷰 수정</button>
    <button v-if="review.userName === userName" @click="deleteReview">리뷰 삭제</button>
    <hr>
    {{ review }}
    <hr>
    <div class="container mt-5 mb-5">
      <div class="row height d-flex justify-content-center align-items-center">
        <div class="col-md-9">
          <div class="card">
            <div class="align-middle fs-3">
              Comments
            </div>
            <hr>
            <div v-for="comment in comments" :key="comment.id">
              <div class="d-flex flex-row p-3"> 
                <img src="https://i.imgur.com/zQZSWrt.jpg" width="40" height="40" class="rounded-circle mr-3">
                <div class="w-100">
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex flex-row align-items-center"> 
                      <span class="mx-2 fs-4">{{ comment.userName }}</span> 
                      <button 
                        class="btn btn-danger btn-sm"
                        v-if="comment.userName === userName"
                        @click="deleteComment(comment.id)"
                      >삭제
                      </button>
                    </div> 
                    <small>{{ comment.timeStamp }}</small>
                  </div>
                  <p class="text-justify comment-text mb-0 ms-3 fs-6">
                    {{ comment.content }}
                  </p>
                  <hr>
                  <!-- <div class="d-flex flex-row user-feed"> <span class="wish"><i class="fa fa-heartbeat mr-2"></i>24</span> <span class="ml-3"><i class="fa fa-comments-o mr-2"></i>Reply</span> </div> -->
                </div>
              </div>
            </div>
            <div class="mt-3 d-flex flex-row align-items-center p-3 form-color"> 
              <img src="https://i.imgur.com/zQZSWrt.jpg" width="50" class="rounded-circle me-2"> 
              <small><input type="number" class="form-control" v-model.number="commentForm.rank"></small>
              <input type="text" class="form-control" placeholder="Enter your comment..." v-model="commentForm.content">
              <button class="btn btn-primary ms-2" @click="createComment">
                <i class="bi bi-arrow-return-left" style="font-size: 1.5rem;"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'
import moment from 'moment'

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
        .then(res => {
          this.comments = res.data
          this.comments.forEach(comment => {
            Object.defineProperty(comment, 'timeStamp', { value: this.getTimestamp(comment.updated_at), writable: true })
          })
        })
    },
    createComment() {
      axios({
      method: 'post',
      url: `http://127.0.0.1:8000/movies/${this.review.id}/comments/`,
      headers: this.token,
      data: this.commentForm
      })
        .then(res => {
          this.loadComments()
          // const selected_date = new Date(res.data.updated_at)
          console.log(moment(res.data.updated_at).fromNow())
          // console.log(selected_date)
        })
    },
    getTimestamp(time) {
      return moment(time).fromNow()
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
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.1/font/bootstrap-icons.css");

  .card {
      background-color: rgb(148, 144, 137);
      border: none
  }

  .form-color {
      background-color: #fafafa
  }

  .form-control {
      height: 48px;
      border-radius: 25px
  }

  .form-control:focus {
      color: #495057;
      background-color: #fff;
      border-color: #35b69f;
      outline: 0;
      box-shadow: none;
      text-indent: 10px
  }

  .c-badge {
      background-color: #35b69f;
      color: white;
      height: 20px;
      font-size: 11px;
      width: 92px;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 2px
  }

  .comment-text {
    font-size: 13px;
    text-align: start;  
  }

  .wish {
    color: #35b69f;
  }

  .user-feed {
    font-size: 14px;
    margin-top: 12px
  }
</style>