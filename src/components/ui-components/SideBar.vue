<template lang="pug">
.sidebar
  router-link(:to="{ path: '/'}").link--top
    | top
  h1.title component list
  ul.sidebar--list
    li.sidebar--list__item(v-for="item in items")
      router-link(:to="{ name: 'components-item', params: {name: item} }").btn
        | {{item}}
</template>

<script>
export default {
  data() {
    return {
      items: ['button', 'table', 'loading_indicator'],
    };
  },
};
</script>

<style lang="stylus" scoped>
.sidebar
  width 30%
  height 100%
  border 1px solid #ccc

.sidebar--list
  margin 0
  padding 0
  border-top 1px solid #ccc

.sidebar--list__item
  display block
  text-align center
  margin 10px auto
  font-size 20px

.title
  line-height 30px
.link--top
  display block
  text-align center

</style>
