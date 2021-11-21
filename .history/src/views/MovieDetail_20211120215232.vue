<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-4">
        <img :src="posterPath" class="img-fluid" alt="">
      </div>
      <div class="col-8">
        <h2 class="text-start">{{ movieData.title }}</h2>
        <p class="text-start">{{ movieData.overview }}</p>
      </div> 
    </div>
    <div>
      <span>리뷰 목록</span>
      <button
        @click="getReviewForm"
      >
        리뷰 작성
      </button>
      <div class="list-group accordian">
        <div v-for="review in reviews" :key="review.id" class="list-group-item list-group-item-action accordian-item">
          <span>작성자: {{ review.userName }}</span> |
          <span>제목: {{ review.title }}</span>
        </div>
      </div>
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

</style>