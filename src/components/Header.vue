<template lang="pug">
.page-header(v-once='')
  router-link.button.action.hollow.secondary.large(:to="{ name: 'home' }")
    strong {{initials}}
  swing-headline(
    :headline="title",
    :breakpoint="true"
  )
  //- h1
  //-   span {{title}}
</template>

<script>
import SwingHeadline from '../components/SwingHeadline.vue'
export default {
  name: 'pageHeader',
  components: {
    SwingHeadline
  },
  data () {
    return {
      true: true, // so true is not a string
      initials: 'tm',
      title: 'Travis Mullen',
      subtitle: 'interactive consultant'
    }
  }
}
</script>

<style lang="scss">
// not scoped to override child component

.page-header {
  padding-top: $global-padding;
  @include breakpoint(medium) {
    padding-right: $global-padding;
  }

  .action {
    strong {
    }
  }

  .swing-headline {
    h1 {
      color: $body-font-color;
      @include breakpoint(medium) {
        padding-right: $global-padding;
      }
    }
  }

  .button.action {
    font-size: 1rem;
    @include breakpoint(medium) {
      font-size: 2rem;
    }
    @include breakpoint(large) {
      font-size: 3rem;
    }
    padding: $global-padding*0.5 $global-padding*0.5;
  }
}

</style>
