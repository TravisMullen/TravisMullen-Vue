<template lang="pug">
.resume(v-once='')
  article.wrapper
    h2 {{academic}}
    academic
    h2 {{business}}
    business
</template>

<script>
import academic from '@/components/ResumeAcademic'
import business from '@/components/ResumeBusiness'

export default {
  name: 'resume',
  data () {
    return {
      title: 'Resume',
      academic: 'Academic',
      business: 'Business'
    }
  },
  components: {
    academic,
    business
  }
}
</script>

<style lang="scss" scoped>
  .resume {
    display: block;
    width: 100%;
    padding-top: $global-padding*2;
    padding-left: $global-padding*2;
    .wrapper {
      max-width: rem-calc(600);
    }
    h2 {
      height: $global-padding*5;
      margin-top: rem-calc(8);
      margin-bottom: rem-calc(15);
      padding-top: 0;
      padding-bottom: 0;
    }
  }
</style>
