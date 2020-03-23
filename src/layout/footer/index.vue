<template>
  <footer class="footer">
    <div class="page-max">
      <div class="logo flex row-v-c">
        <img alt="Vue logo" src="@/assets/logo.png">
        Beex
      </div>
      <div class="row-part line-wrap">
        <ul class="nav flex">
          <router-link to="/" tag="li">返回首页</router-link>
          <router-link to="/" tag="li">关于Beex</router-link>
          <router-link to="/" tag="li">APP下载</router-link>
        </ul>
        <div class="icons">
          <svg-icon icon-class="footer_1" class="icon" />
          <svg-icon icon-class="footer_2" class="icon" />
          <svg-icon icon-class="footer_3" class="icon" />
        </div>
      </div>
      <div class="copyright row-part">
        © 2020 Beex. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="scss" scoped>
.footer{
  background-color: #06070B;
  color: #fff;
  min-height: 250px;
  padding: 20px 0;
}
.row-part{ margin-top: 30px; padding: 0 20px;}
.logo{ font-size: 24px; font-weight: 600; }
.nav{
  li{
    color: #86878d;
    text-decoration: underline #86878d;
    margin-right: 50px;
  }
}
.icon { margin-left: 10px; width: 2.5em; height: 2.5em; }
.copyright{ font-size: 14px; color: #646A7B;}
</style>