<template lang="pug">
#app
  .grid-y.grid-frame
    .cell.shrink.cell-block-container.bg-color-primary.border-bottom
      //- p header area
    .cell.auto.cell-block-container
      .wrapper.cell.auto.grid-x.grid-padding-x.align-stretch(
        :class="view"
      )
        .header.cell.shrink.small-2.medium-4
          page-header
        .main.cell.auto.cell-block-y(
          ref='scroller'
        )
          .cell.auto.medium-10.large-8
            router-view(
              v-slot="{ Component }"
            )
              transition(
                name='slide-fade'
              )
                component(
                  :is="Component"
                )
    .footer.cell.shrink.border-top
      page-footer
</template>

<script>

import pageHeader from './components/Header.vue'
import pageFooter from './components/Footer.vue'
import Trigger from './components/Trigger.vue'

export default {
  name: 'app',
  computed: {
    view () {
      return this.$route.name
    }
  },
  components: {
    pageHeader,
    pageFooter,
    Trigger
  }

}

</script>

<style lang="scss">
@import 'styles/_settings.scss';
// do NOT add `scoped` to this <style> !!
// call `globals` to define the base styles globally
@import 'styles/base';

.bg-color-primary {
  background-color: $primary-color;
}

.border-top {
  border-top: 1px solid $secondary-color;
}
.border-bottom {
  border-bottom: rem-calc(4) solid $primary-color;
}
.main {
  padding-top: $global-padding;
}
.header {
  z-index: z('site-header');
  padding-top: $global-padding;
}
.footer {
  z-index: z('site-footer');
  background-color: $body-background;
}

$animation-duration-default: 0.3s !default;

.main,
.header {
  transition: padding $animation-duration-default ease;
  .home & {
    padding-top: 10vh;
    @include breakpoint(medium) {
      padding-top: 15vh;
    }
    @include breakpoint(large) {
      padding-top: 25vh;
    }
  }
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all $animation-duration-default linear $animation-duration-default*2;
}
.slide-fade-leave-active {
  transition: all $animation-duration-default linear $animation-duration-default;
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
