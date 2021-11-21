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
      
      <div v-for="review in reviews" :key="review.id">
        {{ review }}
      </div>
    </div>
    <!-- {{ movieData }} -->
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'MovieDetail',
  methods: {
    createReview() {

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