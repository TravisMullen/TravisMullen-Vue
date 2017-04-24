<template lang="pug">
.footer.wrap
  .grid-block.small-12.medium-6.noscroll.copyright
    small.grid-content.noscroll(v-html='copyright')
  .grid-block.small-12.medium-6.noscroll.contact.end.medium-text-right
    small.grid-content.noscroll
      a.hover-shadow(
        :href='mailto',
        title='mail'
      )
        | {{ email }}
        .svg-icon.postfix.fill-anchor-font-color(
          v-once="v-once",
          v-html="icon"
        )
          
</template>

<script>

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
  data () {
    return {
      icon: require('!svg-inline-loader!@/assets/svg/paper-plane.svg'),
      email: 'travis@travismullen.com',
      copyright: 'copyright &copy; ' + toRoman(new Date().getFullYear()) + ' &bullet; TravisMullen.com'
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
// call settings for global SCSS access
@import '../styles/settings';

.footer {
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  align-items: center;
  padding: $global-padding/2 $global-padding;
  border-top: rem-calc(1) solid $body-font-color;
  svg {
    fill: $anchor-font-color;
  }
  
  .grid-content {
    padding-left: 0;
    padding-right: 0;
  }

  // .copyright {
  //   text-align: center;
  // }
  @include breakpoint(small only) {
    .contact {
      margin-top: $global-padding/4;
    }
  }
  // @include breakpoint(medium) {
  //   .copyright {
  //     text-align: left;
  //   }
  //   .contact {
  //     text-align: right;
  //   }
  // }
}

small {
  // flex: 1 0 auto;
  // display: block;
  font-weight: normal;
  // color: $secondary-color;
  // text-align: center;
}

.hover-shadow {
  @include hovershadow;
//   filter: drop-shadow(rem-calc(1) rem-calc(2) rem-calc(2) rgba(0, 0, 0, 0.3));
//   &:hover {
//     filter: drop-shadow(rem-calc(1) rem-calc(2) rem-calc(2) rgba(0, 0, 0, 0.4));
//   }
}
</style>
