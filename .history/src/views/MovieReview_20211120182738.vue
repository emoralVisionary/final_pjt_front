<template>
  <div>
    <h1>Movie Review</h1>
    <div>
      <label for="title">제목: </label>
      <input 
        type="text" 
        id="title"
        v-model="credentials.username"
      >
    </div>
    <div>
      <label for="content">내용: </label>
      <input 
        type="text" 
        id="content"
        v-model="credentials.username"
      >
    </div>
    <div>
      <label for="rank">평점: </label>
      <input 
        type="number" 
        id="rank"
        v-model="credentials.username"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieReview',

}
</script>

<style>

</style>