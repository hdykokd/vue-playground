<template lang="pug">
  div
    h1.title {{title}}

    ul
      li
        .circle1
          .circle1__item.circle1__item1
          .circle1__item.circle1__item2
          .circle1__item.circle1__item3
          .circle1__item.circle1__item4
          .circle1__item.circle1__item5
      li
        .circle2
          .circle2__item.circle2__item1
          .circle2__item.circle2__item2
          .circle2__item.circle2__item3
          .circle2__item.circle2__item4
          .circle2__item.circle2__item5
          .circle2__item.circle2__item6
          .circle2__item.circle2__item7
          .circle2__item.circle2__item8
      li
        .loader1
      li
        .loader2
</template>

<script>
export default {
  data() {
    return {
      title: 'LoadingIndicator',
    };
  },
};
</script>

<style lang="stylus" scoped>

.title
  padding 14.5px 0
  margin-bottom 60px
  border-bottom 1px solid #ccc

ul
  display flex
  align-items center
  justify-content center
  flex-direction column

  li
    padding 10px 0

.circle1
  display flex
  justify-content center

  &__item
    width 10px
    height 10px
    border-radius 50%
    background #333
    margin 5px

for num in (1..5)
  .circle1__item{num}
    animation opacity 2s linear (num*0.25)s infinite

@keyframes opacity
  0%
    opacity 1

  50%
    opacity .3

  100%
    opacity 1

for num in (1..8)
  .circle2__item{num}
    animation rotate 2s linear (num*0.25)s infinite

.circle2
  width 50px
  height 50px
  border-radius 50%
  position relative
  margin 10px


  &__item
    width 10px
    height 10px
    border-radius 50%
    background #333
    position absolute
    top 0
    left 0

  &__item{num}
    animation rotate 2s linear (num*0.25)s infinite

  &__item1
    top -1px
    left 20px
  &__item2
    top 5px
    left 35px
  &__item3
    top 20px
    left 41px
  &__item4
    top 35px
    left 35px
  &__item5
    top 41px
    left 20px
  &__item6
    top 35px
    left 5px
  &__item7
    top 20px
    left -1px
  &__item8
    top 5px
    left 5px

@keyframes rotate
  0%
    opacity 0
  50%
    opacity 1
  100%
    opacity 0

.loader1
  border-radius 50%
  width 6em
  height 6em

.loader1
  font-size 10px
  border-top .3em solid rgba(204,204,204,.2)
  border-right .3em solid rgba(204,204,204,.2)
  border-bottom .3em solid rgba(204,204,204,.2)
  border-left .3em solid #ccc
  animation load1 .8s infinite linear

@keyframes load1
  0%
    transform rotate(0deg)
  100%
    transform rotate(360deg)

.loader2, .loader2:before, .loader2:after
  background #ccc
  animation load2 1s infinite ease-in-out
  width 1em
  height 4em

.loader2
  color #ccc
  position relative
  margin 30px auto
  font-size 11px
  animation-delay -0.16s
  background: #ccc;

  &:before, &:after
    position absolute
    top 0
    content ''

  &:before
    left -1.5em
    animation-delay -.32s

  &:after
    left 1.5em



@keyframes load2
  0%,80%,100%
    box-shadow 0 0
    height 4em
  40%
    box-shadow 0 -2em
    height 5em
</style>
