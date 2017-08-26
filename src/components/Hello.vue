<template lang="pug">
  .hello
    h1 {{msg}}
    ul
      li
        router-link(to='/components') components
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
