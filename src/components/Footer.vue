<template lang="pug">
.footer.grid-x.grid-padding-x.align-center(v-once='')
  .cell.small-6.copyright
    small(v-html='copyright')
  .cell.small-6.contact.text-right
    small
      a(
        :href='mailto',
        title='mail'
      )
        | {{ email }}
        .svg-icon.postfix
          paper-plane-icon
</template>

<script>
import PaperPlaneIcon from '@/assets/svg/paper-plane.svg'

function toRoman (num) {
  let result = ''
  const decimal = [
    1000,
    900,
    500,
    400,
    100,
    90,
    50,
    40,
    10,
    9,
    5,
    4,
    1
  ]

  const roman = [
    'M',
    'CM',
    'D',
    'CD',
    'C',
    'XC',
    'L',
    'XL',
    'X',
    'IX',
    'V',
    'IV',
    'I'
  ]

  for (let i = 0; i <= decimal.length; i++) {
  // looping over every element of our arrays
    while (num % decimal[i] < num) {
    // keep trying the same number until it won't fit anymore
      result += roman[i]
      // add the matching roman number to our result string
      num -= decimal[i]
      // remove the decimal value of the roman number from our number
    }
  }
  return result
}

export default {
  name: 'pageFooter',
  components: {
    PaperPlaneIcon
  },
  data () {
    return {
      email: 'travis@travismullen.com',
      copyright: `copyright &copy; ${toRoman(new Date().getFullYear())} &bullet; TravisMullen.com`
    }
  },
  computed: {
    mailto () {
      return 'mailto:' + this.email
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

// .footer {
//   display: flex;
//   justify-content: space-between;
//   align-content: space-between;
//   align-items: center;
//   padding: $global-padding/2 $global-padding;
//   border-top: rem-calc(1) solid $body-font-color;
  svg {
    fill: $anchor-color;
  }

//   .grid-content {
//     padding-left: 0;
//     padding-right: 0;
//   }

//   @include breakpoint(small only) {
//     .contact {
//       margin-top: $global-padding/4;
//     }
//   }
// }

small {
  font-weight: bold;
}

</style>
