<template lang="pug">
  .tables
    .title
      h1 {{title}}
    ul.table--list
      li.table--list__item
        table.table
          tr.table--row
            th.table--header(v-for="header in headers") {{header}}
          tr.table--row(v-for="row in rows")
            td.table--body {{row.name}}
            td.table--body {{row.email}}
            td.table--body {{row.age}}
</template>

<script>
export default {
  data() {
    return {
      title: 'Table',
      string: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
    };
  },
  computed: {
    headers() {
      return ['name', 'email', 'age'];
    },
    rows() {
      const rows = [];

      for (let i = 0; i < 10; i++) {
        rows.push({
          name: this.randomString(),
          email: `${this.randomString()}@example.com`,
          age: Math.floor(Math.random() * this.string.length),
        });
      }
      return rows;
    },
  },
  methods: {
    randomString() {
      return (
        this.string[Math.floor(Math.random() * this.string.length)] +
        this.string[Math.floor(Math.random() * this.string.length)] +
        this.string[Math.floor(Math.random() * this.string.length)]
      );
    },
  },
};
</script>

<style lang="stylus" scoped>

.table--list
  height 100%
  width 100%
  padding 0

  display flex
  flex-flow column nowrap
  align-items center

  &__item
    display block
    width: 80%
    height 100%

.table
  width 100%
  /*border-collapse collapse*/
  border-collapse collapse
  border-spacing 0
  table-layout fixed
  text-align center
  line-height 2
  border 1px solid #E3E3E3

.table-header, .table--body
  padding 0 10px
  vertical-align middle
  text-align center
  overflow-x auto
  white-space nowrap

.table--header
  font-weight bold
  background-color #F5F5F5
  border 1px solid #E3E3E3
  font-size 14px

 .table--body
  border 1px solid #ccc
  border-width 0 0 1px 1px
  background-color #fff

</style>
