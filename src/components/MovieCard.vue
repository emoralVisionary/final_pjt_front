<template>
  <div class="col-3">
    <div class="card" @click="getDetail">
      <img :src="posterPath" alt="">
      <div class="card-body">
        <h5 class="card-title crop-text-2">{{ movie.title }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieCard',
  props: {
    movie: Object
  },
  methods: {
    getDetail() {
      if (!this.$store.state.isLogin) {
        this.$router.push({ name: 'Login' })
      } else {
        // this.$store.dispatch('Test')
        this.$store.dispatch('LoadDetail', this.movie.id)
        this.$router.push({ name: 'MovieDetail', params: { movieId: this.movie.id} })
      }
    }
  },
  computed: {
    posterPath() {
      return `https://image.tmdb.org/t/p/w500/${this.movie.poster_path}`
    }
  }
}
</script>

<style>
  .card {
    background-color:rgb(26, 25, 32)
  }
  .crop-text-2 {
    -webkit-line-clamp: 2;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
</style>