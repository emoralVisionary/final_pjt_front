<template>
  <div>
    {{ review }}
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ReviewDetail',
  computed: {
    ...mapState(['movieData']),
  },
}
</script>

<style>

</style>