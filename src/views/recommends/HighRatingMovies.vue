<template>
  <div>
    <h1>평점이 높은 영화</h1>
    <p>{{ highRatingMovies }}</p>
  </div>
</template>

<script>
export default {
  name: 'HighRatingMovies',
  computed: {
    highRatingMovies() {
      return this.$store.state.rating
    }
  }
}
</script>

<style>

</style>