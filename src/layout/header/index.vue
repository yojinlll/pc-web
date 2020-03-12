<template>
  <header class="header">
    <div class="page-max flex row-v-c">
      <div class="logo line-wrap">
        <img alt="Vue logo" src="@/assets/logo.png">
        Beex
      </div>
      <ul class="nav flex">
        <router-link :to="{name: link.router}" tag="li" v-for="(link, index) in navList" :key="index">{{ link.name }}</router-link>
      </ul>

      <div class="action flex row-v-c">
        <div class="common-btn y-theme">登录</div>
        <div class="lang">En</div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      navList: [
        {
          name: '主页',
          router: 'home',
        },
        {
          name: '场外交易',
          router: 'trade',
        },
        {
          name: '资产',
          router: 'assets',
        },
        {
          name: 'about',
          router: 'about',
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.header{
  background-color: #23252B;
  width: 100%;
  color: #fff;
  padding: 10px 0;
}

.logo{ font-size: 24px; font-weight: 600; }

.nav{
  margin-left: 100px;
  & > li{ margin-right: 50px; cursor: pointer; color: #bebdc5; }
}
.action{ margin-left: auto; }
</style>