<template lang="pug">
ul.no-bullet
  li(
    v-for='item in items',
    :key='item.title'
  )
    em(v-html='item.title')
    br
    a(
      v-bind:href='item.url',
      target='_blank',
      :title='item.company'
    )
      strong(v-html='item.company')
    |&nbsp;|&nbsp;
    strong.location {{item.location}}
    br
    span(v-html='description(item.desc)')
    br
    span.info-color(
      v-if='item.tech',
      v-html='item.tech'
    )
  h6
    em There is additional work and clients, but it's too old to be relevant...
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
  },
  methods: {
    // this could be done more gracefully, prob as another component
    description (content) {
      if (Array.isArray(content)) {
        const list = ['<ul>']
        for (const item of content) {
          list.push(`<li>${item}</li>`)
        }
        list.push('</ul>')
        return list.join('')
      } else {
        return content
      }
    }
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
        fill: $anchor-color;
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
  .location {
    white-space: nowrap;
  }
  li {
    padding-bottom: $global-padding*2;
  }
</style>
