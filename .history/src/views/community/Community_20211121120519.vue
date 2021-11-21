<template>
  <div>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Community',
  created() {
    axios({
      method: 'get',
      url: 'http://127.0.0.1:8000/community/'
    })
  }
}
</script>

<style>

</style>