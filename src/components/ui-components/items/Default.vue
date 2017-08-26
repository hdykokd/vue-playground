<template lang="pug">
  div
    h1 {{title}}
    router-link(to='/') top
</template>

<script>
export default {
  name: 'Default',
  data () {
    return {
      title: 'Default'
    }
  }
}
</script>

<style lang="stylus" scoped>
.btn
  cursor pointer
  padding 5px 10px
  width 200px
  color #fff
  font-size 17px
  display block
  text-decoration none

.btn1
  background #e7ae00
  border-radius 10px
  box-shadow 0 6px 0 #b48000, 0 12px 0 rgba(0,0,0,.2)
  text-shadow 0px -1px 0px rgba(0,0,0,.25)
  transition all .3s
  &:hover
    box-shadow 0 3px #ce9b00, 0 6px 0px rgba(0,0,0,.2)
    transform translateY(3px)
    background #ffc71b

.btn2
  line-height 36px
  position relative
  z-index 2
  background-color #000
  border 2px solid #333
  transition all .3s linear
  transform-origin 50% 50%

  &::after
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    z-index -1
    display block
    content ''
    transition all .2s linear
    transform-origin 50% 50%
    transform scale(.5)

  &:hover
    color: #333

  &:hover::after
    background #fff
    transform scale(1)


</style>
