<template>
  <div id="layout">
    <the-header />
    <router-view />
    <the-footer />
  </div>
</template>

<script>
import TheHeader from './header'
import TheFooter from './footer'
export default {
  name: 'Layout',
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style lang="scss" scoped>
#layout{ min-width: 768px; }

</style>