<template lang="pug">
  .custom-elements
    code Hello World
    br
    demo-stage(
      :headline='headline',
      :color='color'
    )
    button(
      class="button hollow info"
      style=''
      @click.prevent='setColor'
    ) Change the color.
</template>

<script>
import 'demo-stage'
import(/* webpackChunkName: "crayola-colors" */ '@/assets/crayola_colors.json')

export default {
  name: 'customElements',
  data () {
    return {
      email: 'travis@travismullen.com',
      headline: 'DemoStage in Vue.js',
      colors: [],
      color: ''
    }
  },
  computed: {
    mailto () {
      return 'mailto:' + this.email
    }
  },
  async mounted () {
      
      this.setColor()
  },
  methods: {
    async pickColor () {
      if (this.colors.length === 0) {
        this.colors = await 
      }
      const hexValues = Object.values(this.colors)
      return hexValues[Math.floor(Math.random() * hexValues.length)]
    },
    async setColor () {
      this.color = await this.pickColor(this.colors)
      console.log(`color: %c${this.color}`, `color: ${this.color};font-size: 110%;`)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
pre,
code {
  font-family: 'Fira Mono', 'PT Mono', 'Anonymous Pro', Monaco, monospace;

  background-color: #444;
  color: lime;
  // @include breakpoint(small only) {
  //   .contact {
  //     margin-top: $global-padding/4;
  //   }
  // }
}

small {
  font-weight: normal;
}

.hover-shadow {
  @include hovershadow;
}
</style>
