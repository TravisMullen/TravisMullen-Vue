<template lang="pug">
.home.grid-block.vertical(v-once='')
  .grid-block.shrink
    .grid-content.medium-10
      p(v-html='info')
  .grid-block.expand
    .grid-content.medium-10.text-center
      nav
        router-link.button.large(to='/resume')
          | {{ msg }}
          .svg-icon.postfix
            arrow-right-icon
</template>

<script>
import { info } from '@/assets/metadata.json'
import ArrowRightIcon from '@/assets/svg/caret-right.svg'

export default {
  name: 'home',
  components: {
    ArrowRightIcon
  },
  data () {
    return {
      info,
      msg: 'View Resume'
    }
  }
}
</script>

<style lang="scss">

.home {
  padding-top: $global-padding;
  @include breakpoint(medium) {
    padding-top: $global-padding*4;
  }
  h1 {
    font-size: $h4-font-size;
  }
  strong {
    font-weight: 500;
    white-space: nowrap;
  }
}
.button {
  white-space: nowrap;
  @include breakpoint(medium) {
    margin-top: $global-padding*4;
  }

  // filter: drop-shadow(rem-calc(1) rem-calc(2) rem-calc(2) rgba(0, 0, 0, 0.3));
  // &:hover {
  //   filter: drop-shadow(rem-calc(1) rem-calc(2) rem-calc(2) rgba(0, 0, 0, 0.4));
  // }
}
</style>
