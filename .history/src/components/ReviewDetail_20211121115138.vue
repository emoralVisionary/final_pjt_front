<template>
  <div>
    {{ review.title }}
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ReviewDetail',
  props: {
    review: Object
  },
  computed: {
    ...mapState(['movieData']),
  },
}
</script>

<style>

</style>