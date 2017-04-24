<template lang="pug">
transition-group.no-bullet.business-items(tag='ul')
  li(
    v-for='(item, index) in info.items',
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
      .svg-icon.postfix.fill-anchor-font-color(
        v-once="v-once",
        v-html="icon"
      )
    |  ) 
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
import info from '../../../../static/data/business.json'
export default {
  name: 'business',
  data () {
    // items: [...]
    return {
      icon: require('!svg-inline-loader!@/assets/svg/chain.svg'),
      info
    }
  }
}
</script>

<style lang="scss" scoped>
// call settings for global SCSS access
@import '../../../styles/settings';

  // .location {
  //   font-size: $small-font-size;
  // }
  // 
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
    // a {
    //   @include hovershadow;
    // }
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
