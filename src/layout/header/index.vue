<template>
  <header class="header">
    <div class="inner page-main flex row-v-c">
      <div class="logo line-wrap">
        <img alt="Vue logo" src="@/assets/logo.png">
        Beex
      </div>
      <ul class="nav flex">
        <router-link :to="link.router" tag="li" v-for="(link, index) in navList" :key="index">{{ link.name }}</router-link>
      </ul>

      <div class="action flex row-v-c">
        <div class="login-btn">登录</div>
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
          name: 'home',
          router: 'home',
        },
        {
          name: 'about',
          router: 'about',
        },
        {
          name: 'layout',
          router: 'layout',
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
}

.inner{ padding: 10px; }
.logo{ font-size: 24px; font-weight: 600; }

.nav{
  margin-left: 100px;
  & > li{ margin-right: 50px; cursor: pointer; color: #bebdc5; }
}
.action{
  margin-left: auto;

  .login-btn{
    padding: 8px 20px;
    font-size: 14px;
    font-weight: 600;
    color: #000;
    background:linear-gradient(169deg,rgba(255,229,82,1) 0%,rgba(255,198,41,1) 100%);
    border-radius:6px;
    margin-right: 10px;
  }
}
</style>