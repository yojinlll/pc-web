<template>
  <div id="layout">
    <div style="line-height:100px; border: 1px solid #000">
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/layout">Layout</router-link>
    </div>
    <router-view />
    <div style="line-height:100px; border: 1px solid #000">footer</div>
  </div>
</template>

<script>
export default {
  name: 'Layout',
}
</script>

<style lang="scss" scoped>

</style>