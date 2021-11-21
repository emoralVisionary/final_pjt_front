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
        v-model="reviewForm.content"
      >
    </div>
    <div>
      <label for="rank">평점: </label>
      <input 
        type="number" 
        id="rank"
        v-model="reviewForm.rank"
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
      reviewForm: {
        title: '',
        content: '',
        rank: 0,
      }
    }
  },
  methods: {
    createReview() {
      console.log(this.reviewForm)
    },
  },
  computed: {
    ...mapState(['movieData']),
  }
}
</script>

<style>

</style>