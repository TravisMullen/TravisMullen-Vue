<!-- App view -->
<template lang="pug">
#app.grid-frame.vertical
  section.grid-block.align-left
    .grid-block.small-2.medium-3
      page-header.grid-content.noscroll
    .grid-block.medium-9.align-left
      transition(
        name='slide-fade'
      )
        router-view.grid-content.stage
  page-footer.grid-block.shrink.align-center
</template>

<!-- App Ctrl -->
<script>

import pageHeader from './components/Header'
import pageFooter from './components/Footer'

export default {
  name: 'app',
  data () {
    return {
      transitionName: 'slide-left'
    }
  },
  beforeRouteUpdate (to, from, next) {
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    next()
  },
  components: {
    pageHeader,
    pageFooter
  }

}

</script>

<!-- App syles -->
<style lang="scss">
// do NOT add `scoped` to this <style> !!
// call `globals` to define the base styles globally
@import 'styles/globals';
@import 'styles/svg-icon';

#app {
  border-top: rem-calc(3) solid $primary-color;
  // font-family: 'Avenir', Helvetica, Arial, sans-serif;
  // text-align: center;
  // color: #2c3e50;
}

$animation-duration-default: 0.3s !default;
// /* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all $animation-duration-default linear .5s;
}
.slide-fade-leave-active {
  transition: all $animation-duration-default linear;
}
.slide-fade-enter
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateY(100%);
}
.slide-fade-leave-to {
  opacity: 0;
  overflow: hidden;

  transform: translateY(-80%);
}

</style>
