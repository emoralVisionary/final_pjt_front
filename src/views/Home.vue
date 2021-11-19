<template>
  <div class="container-fluid bg-dark">
    <h1>최신 영화</h1>
    
    <h1>영화 리스트</h1>
    <div class="card-group row">
      <movie-card
      v-for="movie in movies"
      :key="movie.id"
      :movie="movie"
      >
      </movie-card>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import { mapState } from 'vuex'
import MovieCard from '@/components/MovieCard.vue'

export default {
  name: 'Home',
  components: { MovieCard, },
  created() {
    this.$store.dispatch('LoadMovies')
  },
  computed: {
    ...mapState(['movies']),
  },
}
</script>
