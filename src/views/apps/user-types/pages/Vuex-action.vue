<template>
  <div>
    <h1>xin chào thế giới </h1>
    {{ tasks }}{{ data }}
  </div>
</template>

<script>

import { mapActions } from 'vuex'

export default {
  name: 'VuexAction',
  data() {
    return {
      data: 'tiennguytne',
    }
  },
  methods: {
    ...mapActions(['tasks']),
  },
}
</script>

<style>

</style>
