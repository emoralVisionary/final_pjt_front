<template>
  <div>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Community',
  data: function () {
    return {
      posts: [],
    }
  },
  created() {
    axios({
      method: 'get',
      url: 'http://127.0.0.1:8000/community/'
    })
      .then(res => )
  }
}
</script>

<style>

</style>