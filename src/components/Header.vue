<template lang="pug">
.page-header(v-once='')
  router-link.action-item(:to="{ name: 'home' }")
    h3 {{initials}}
  | &nbsp;
  h1
    span {{title}}
</template>

<script>
export default {
  name: 'pageHeader',
  data () {
    return {
      initials: 'tm',
      title: 'Travis Mullen',
      subtitle: 'interactive consultant'
    }
  }
}
</script>

<style lang="scss" scoped>

.page-header {
  overflow: hidden;
  position: relative;
  // display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: flex-start;
  align-items: flex-start;
  flex-wrap: nowrap;
  // display: flex;
  // flex: 1;
  padding-top: $global-padding*4;
//   background-color: green;
//   border: 2px solid $secondary-color;
}
.action-item {
  display: flex;
  flex: 1 1 auto;

  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-wrap: nowrap;

  width: 100%;
  max-width: rem-calc(60);
  border: rem-calc(3) solid $body-font-color;
  border-radius: $global-radius;
  // font-size: 4vw;
  color: $body-font-color;

  filter: drop-shadow(rem-calc(1) rem-calc(2) rem-calc(2) rgba(0, 0, 0, 0.3));
  &:hover {
    filter: drop-shadow(rem-calc(1) rem-calc(2) rem-calc(2) rgba(0, 0, 0, 0.4));
  }
}

h1 {
  width: rem-calc(30);
  position: absolute;
  top: rem-calc(130);
  left: rem-calc(23);

  letter-spacing: -1px;
  span {
    @include breakpoint(small only) {
      white-space: nowrap;
    }
  }
}
h4 {
  padding-top: $global-padding*1;
}
h1,h4 {
  margin: auto;
  transition: transform 400ms ease-out;
  transform: rotate(90deg);
  @include breakpoint(medium) {
    transform: rotate(0);
  }
}
</style>
