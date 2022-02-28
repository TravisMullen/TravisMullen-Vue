<template lang="pug">
ul.no-bullet
  li(
    v-for='item in items',
    :key='item.title'
  )
    strong {{ item.title }}
    span(v-html='item.subtitle')
    br
    span(v-html='item.desc')
</template>

<script>
import json from '../assets/academic.json'

export default {
  name: 'academic',
  data () {
    return json
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/_settings.scss';
li {
  padding-bottom: $global-padding*2;
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s linear .5s;
}
.slide-fade-leave-active {
  transition: all .3s linear;
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
