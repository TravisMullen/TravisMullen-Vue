<template lang="pug">
transition-group.no-bullet.business-items(tag='ul',v-once='')
  li(
    v-for='(item, index) in items',
    v-bind:key='item.company'
  )
    em(v-html='item.title')
    br
    |
    strong(v-html='item.company') The University of the Arts
    |  (
    a(
      v-bind:href='item.url',
      target='_blank',
      :title='item.company'
    )
      | {{item.shortUrl}}&nbsp;
      .svg-icon
        chain-icon
    | &nbsp;)
    strong.location {{item.location}}
    br
    span(v-html='item.desc')
    br
    span.info-color(
      v-if='item.tech',
      v-html='item.tech'
    )
</template>

<script>
import ChainIcon from '@/assets/svg/chain.svg'
import json from '@/assets//business.json'

export default {
  name: 'business',
  components: {
    ChainIcon
  },
  data () {
    return json
  }
}
</script>

<style lang="scss" scoped>

  .business-items {
    .svg-icon {
      top: 0.125em;
      // top: 0.25em;
      color: $secondary-color;
      svg {
        height: $small-font-size;
        width: $small-font-size;
        fill: $anchor-font-color;
      }
    }
  }
  .info-color {
    color: $info-color;
  }
  .info-color,
  .location {
    font-size: $small-font-size;
  }
  li {
    padding-bottom: $global-padding*2;
  }
</style>
