<!-- todo: make this a custom element -->

<template lang="pug">
.swing-headline.text-center
  h1(:class='{ horizontal, breakpoint }') {{headline}}
</template>

<script>
export default {
  name: 'SwingHeadline',
  props: {
    headline: {
      type: String,
      required: true
    },
    breakpoint: {
      type: Boolean,
      default: false
    },
    horizontal: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
@import '../styles/_settings.scss';
// intended to play nice with foundation-sites (settings.scss)
// or design system with similar naming conventions.

$breakpoints: (
  medium: 640px
) !default;
$global-padding: 1rem !default;
$header-color: #464646 !default;
$animation-duration-default: 0.3s !default;

@mixin horizontal-position {
  transform: rotate(0) translateY(0);
  white-space: pre-wrap;
}

.swing-headline {
  h1 {
    letter-spacing: -1px;

    text-align: left;
    color: $header-color;

    margin: 0;
    padding-top: $global-padding;
    padding-bottom: 0;

    transform-origin: bottom left;
    transition: transform $animation-duration-default*1.5 ease-out;
    transform: rotate(90deg) translateY(0);

    white-space: nowrap;

    &.horizontal {
      @include horizontal-position;
    }

    &.breakpoint {
      @media print, screen and (min-width: #{ map-get($breakpoints, medium) }) {
        @include horizontal-position;
      }
    }
  }
}
</style>
