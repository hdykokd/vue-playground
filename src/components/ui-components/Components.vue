<template lang="pug">
  .components
    SideBar
    MainContent
</template>

<script>
import MainContent from './MainContent.vue'
import SideBar from './SideBar.vue'

export default {
  name: 'UIComponents',
  components: {
    SideBar,
    MainContent
  },
  data() {
    return {
      title: 'Components',
      currentComponent: null
    }
  }
}
</script>

<style lang="stylus" scoped>
.components
  display flex
  height 100%
  width 100%
</style>
