<template>
  <div>
    <h2>글 작성</h2>
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
  </div>
</template>

<script>
export default {
  name: 'Post',
  data: function() {
    return {
      PostForm: {
        title: "",
        content: "",
      }
    }
  },
}
</script>

<style>

</style>