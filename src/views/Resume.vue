<template lang="pug">
.resume(v-once='')
  article
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
