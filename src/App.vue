<!-- App view -->
<template lang="pug">
#app.grid-frame
  .grid-block.expanded
    .grid-content(
      @click="isActive = !isActive" 
    )
      p(style='height: 800px') Some body content {{isActive}}
  .grid-block.shrink(
    :class="{ close: isActive }"
  )
    .grid-content
      .fill
        p hello world
</template>

<!-- App Ctrl -->
<script>

export default {
  name: 'app',
  data () {
    return {
      hello: 'world',
      isActive: false
    }
  }

}

</script>

<!-- App syles -->
<style lang="scss">
// do NOT add `scoped` to this <style> !!
// call `globals` to define the base styles globally
@import 'styles/globals';
@import 'styles/svg-icon';

#app {
  .grid-block {
    &.shrink {
      transition: all .5s ease;
      .grid-content {
        // display: none;
        // position: relative;
        // position: relative;
        transform: translateX(0)
      }
      &.close {
        .grid-content {
          // display: none;
          // position: relative;
          // position: absolute;
          transform: translateX(-100%)
        }
      }
    }
  }
}

</style>
