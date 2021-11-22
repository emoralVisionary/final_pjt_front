<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-4">
        <img :src="posterPath" class="img-fluid" alt="">
      </div>
      <div class="col-8">
        <h2 class="text-start">{{ movieData.title }}</h2>
        <p class="text-start">{{ movieData.overview }}</p>
        <p>{{ movieData }}</p>
      </div> 
    </div>
    <div>
      <div class="row justify-content-between my-2">
        <div class="col-2 fs-3">리뷰 목록</div>
        <div class="col-2">
          <button
            class="btn btn-light btn-sm"
            @click="getReviewForm"
          >
            리뷰 작성
          </button>        
        </div>
      </div>
      <table class="table table-dark table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">작성자</th>
            <th scope="col">제목</th>
            <th scope="col">평점</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="review in reviews" 
            :key="review.id" 
          >
            <th scope="row">{{ review.id }}</th>
            <td>{{ review.userName }}</td>
            <td>
              <router-link 
                class="text-reset"
                :to="{ 
                  name: 'ReviewDetail', 
                  params: { movieID: movieData.id, reviewId: review.id, review: review },        
                  }"
                >
                {{ review.title }}
              </router-link>
            </td>
            <td>{{ review.rank }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'MovieDetail',
  methods: {
    getReviewForm() {
      this.$router.push({ name: 'MovieReview', params: { movieId: this.movieData.id} })
    },
  },
  computed: {
    ...mapState(['movieData']),
    reviews() {
      return this.movieData.review_set
    },
    posterPath() {
      return `https://image.tmdb.org/t/p/w500/${this.movieData.poster_path}`
    },
  },
}
</script>

<style>
 /* .table {
   color: antiquewhite;
 } */
</style>