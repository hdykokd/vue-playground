<template lang="pug">
  .content
    .content--item
      Default(v-if="!selectedContent")
      ButtonView(v-if="selectedContent === 'button'")
      TableView(v-if="selectedContent === 'table'")
      LoadingIndicator(v-if="selectedContent === 'loading_indicator'")
</template>

<script>
import Default from './items/Default';
import ButtonView from './items/ButtonView';
import TableView from './items/TableView';
import LoadingIndicator from './items/LoadingIndicator';

export default {
  data() {
    return {
      selectedContent: '',
    };
  },
  components: {
    Default,
    ButtonView,
    TableView,
    LoadingIndicator,
  },
  watch: {
    $route(to) {
      this.navigate(to);
    },
  },
  methods: {
    navigate(to) {
      this.selectedContent = to.params.name;
    },
  },
  mounted() {
    if (!this.$route.params.name) {
      return this.$router.replace({path: '/components'});
    } else {
      return this.navigate(this.$route);
    }
  },
};
</script>

<style lang="stylus" scoped>
.content
  width 70%
  height 100%
  border 1px solid #ccc
  box-shadow 1px 0 0 0 rgba(0,0,0,.2)

  &--item
    height 100%
    width 100%

</style>
