<template lang="pug">
.not-found
  h1
    | {{msg}}
    .svg-icon.postfix
      svg(
        version='1.1',
        xmlns='http://www.w3.org/2000/svg',
        xmlns:xlink='http://www.w3.org/1999/xlink',
        width='27',
        height='32',
        viewbox='0 0 27 32'
      )
        path(d='M20.25 21.946q.143.446-.071.866t-.661.563-.875-.071-.571-.679q-.446-1.429-1.652-2.313t-2.705-.884-2.705.884-1.652 2.313q-.143.464-.563.679t-.866.071q-.464-.143-.679-.563t-.071-.866q.661-2.161 2.464-3.482t4.071-1.321 4.071 1.321 2.464 3.482zM11.429 11.429q0 .946-.67 1.616t-1.616.67-1.616-.67-.67-1.616.67-1.616 1.616-.67 1.616.67.67 1.616zM20.571 11.429q0 .946-.67 1.616t-1.616.67-1.616-.67-.67-1.616.67-1.616 1.616-.67 1.616.67.67 1.616zM25.143 16q0-2.321-.911-4.438t-2.438-3.643-3.643-2.438-4.438-.911-4.438.911-3.643 2.438-2.438 3.643-.911 4.438.911 4.438 2.438 3.643 3.643 2.438 4.438.911 4.438-.911 3.643-2.438 2.438-3.643.911-4.438zM27.429 16q0 3.732-1.839 6.884t-4.991 4.991-6.884 1.839-6.884-1.839-4.991-4.991-1.839-6.884 1.839-6.884 4.991-4.991 6.884-1.839 6.884 1.839 4.991 4.991 1.839 6.884z')
</template>

<script>
export default {
  name: 'notfound',
  data () {
    return {
      msg: 'Page Not Found'
    }
  }
}
</script>

<style lang="scss" scoped>
// call settings for global SCSS access
@import '../../styles/settings';

.not-found {
  width: 100%;
	display: flex;
  flex-direction: row nowrap;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: flex-start;
  @include breakpoint(medium) {
    align-items: center;
  }
}

</style>
