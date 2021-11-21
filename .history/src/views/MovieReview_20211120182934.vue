<template>
  <div>
    <h1>Movie Review</h1>
    <div>
      <label for="title">제목: </label>
      <input 
        type="text" 
        id="title"
        v-model="reviewForm.title"
      >
    </div>
    <div>
      <label for="content">내용: </label>
      <input 
        type="text" 
        id="content"
        v-model="review.content"
      >
    </div>
    <div>
      <label for="rank">평점: </label>
      <input 
        type="number" 
        id="rank"
        v-model="review.rank"
      >
    </div>
    <button @click="createReview">리뷰 작성</button>
  </div>
</template>

<script>
export default {
  name: 'MovieReview',
  props: {},
  data: function() {
    return {

    }
  }
}
</script>

<style>

</style>