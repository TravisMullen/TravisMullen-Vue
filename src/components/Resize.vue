<!-- extended from https://codesandbox.io/s/vy4n7nzjk3 -->
<template>
  <span ref="trigger"/>
</template>

<script>
export default {
  name: 'Trigger',
  props: {
    customEvent: {
      type: String,
      default: 'triggerIntersected'
    },
    options: {
      type: Object,
      default: () => {
        return {
          // circumstances under which the observer's callback is invoked
          root: null, // defaults to the browser viewport if not specified or if null
          threshold: '0' // the degree of intersection between the target element and its root (0 - 1)
          // threshold of 1.0 means that when 100% of the target is visible within
          // the element specified by the root option, the callback is invoked
        }
      }
      // Whether you're using the viewport or some other element as the root,the API works the same way,
      // executing a callback function you provide whenever the visibility of the target element changes
      // so that it crosses desired amounts of intersection with the root
    }
  },
  data () {
    return {
      observer: null
    }
  },

  mounted () {
    /** {@link https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver} */
    this.observer = new ResizeObserver(entries => {
      this.handleIntersect(entries[0])
    }, this.options)

    this.observer.observe(this.$refs.trigger)
  },

  beforeDestroy () {
    this.observer.disconnect()
  },

  methods: {
    handleIntersect (detail) {
      console.log(this.customEvent, detail)
      this.$emit(this.customEvent, {
        /**
           * To align to CustomEven data convention. {@link https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/detail}
           * @type {Object}
           */
        detail
      })
      // };
    }
  }
}
</script>
