<template>
  <div>
    <h1>날씨에 맞는 영화 추천</h1>
    <p>{{ weatherBasedMovies }}</p>
  </div>
</template>

<script>
export default {
  name: 'WeatherBasedMovies',
  computed: {
    weatherBasedMovies() {
      return this.$store.state.weather
    }
  }
}
</script>

<style>

</style>