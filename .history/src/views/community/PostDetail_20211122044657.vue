<template>
  <div>
    {{ $route.query.post }}
    <button @click="updatePost">글 수정</button>
  </div>
</template>

<script>
export default {
  name: 'PostDetail',

}
</script>

<style>

</style>