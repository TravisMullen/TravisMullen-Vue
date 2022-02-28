<template lang="pug">
.home-view(v-once='')
  section.info(v-html='info')
  section
    a.button.secondary.large(
      target='_blank',
      :href='github'
    )
      .svg-icon
        github-icon
    router-link.button.large(to='/resume')
      | {{ msg }}
      .svg-icon.postfix
        arrow-right-icon
</template>

<script>
import { info } from '../assets/metadata.json'
import ArrowRightIcon from '../assets/svg/caret-right.svg?component'
import GithubIcon from '../assets/svg/github.svg?component'

export default {
  name: 'home',
  components: {
    ArrowRightIcon,
    GithubIcon
  },
  data () {
    return {
      info,
      msg: 'View Resume',
      github: 'https://github.com/TravisMullen'
    }
  }
}
</script>

<style lang="scss">

$animation-duration-default: 0.3s !default;
.home-view {

  display: block;
  text-align: left;

  .info {
    h1 {
      font-size: #{map-get(map-get(map-get($header-styles, small), h1), 'font-size')}px;
    }
  }
  strong {
    font-weight: 500;
    white-space: nowrap;
  }

  .button {
    margin-top: $global-padding*2;
    margin-right: $global-padding*2;

    transition: opacity $animation-duration-default*0.5 ease;
    opacity: 0;
    .home & {
      opacity: 1;
    }
  }
}
</style>
