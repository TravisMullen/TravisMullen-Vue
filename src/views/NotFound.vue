<template lang="pug">
.not-found-view(v-once='')
  h1
    | {{msg}}
  pied-piper-alt
</template>

<script>
import PiedPiperAlt from '@/assets/svg/pied-piper-alt.svg'

export default {
  name: 'notfound',
  components: {
    PiedPiperAlt
  },
  data () {
    return {
      msg: 'Page Not Found'
    }
  }
}
</script>

<style lang="scss" scoped>
.not-found-view {
  text-align: center;
  h1 {
    margin-top: 3rem;
  }
  pied-piper-alt {
    display: block;
    svg {
      margin: 3rem;
    }
  }
}
</style>
