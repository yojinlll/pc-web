<template>
  <div id="layout">
    <the-header />
    <router-view class="main"/>
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
#layout{
  min-width: 1000px;
  background-color: #181A1E;
  min-height: 100vh;
}
.main{
  min-height: calc(100vh - 70px - 250px);
}
</style>