<template lang="pug">
.home
  nav
    router-link.button.large(to='/resume')
      | {{ msg }}
      .svg-icon.postfix.fill-white(
        v-once="v-once",
        v-html="icon"
      )
        //- img.yellow(:src="icon")
        //- | {{icon}}
        //- img(src="~@/assets/svg/arrow-right.svg")
        //- ~@/assets/svg/arrow-right.svg

</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      icon: require('!svg-inline-loader!@/assets/svg/caret-right.svg'),
      msg: 'View Resume'
    }
  }
}
</script>

<style lang="scss" scoped>
// call settings for global SCSS access
@import '../../styles/settings';

.home {
  width: 100%;
	display: flex;
  flex-direction: row nowrap;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: flex-start;
  @include breakpoint(medium) {
    align-items: center;
  }
}
.button {
  // white-space: nowrap;
  margin: $global-padding*3;
  filter: drop-shadow(rem-calc(1) rem-calc(2) rem-calc(2) rgba(0, 0, 0, 0.3));
  &:hover {
    filter: drop-shadow(rem-calc(1) rem-calc(2) rem-calc(2) rgba(0, 0, 0, 0.4));
  }
}

</style>
