<template>
  <div class="assets page-max">
    <div class="container flex">
      <div class="assets-nav">
        <ul class="assets-nav-group" v-for="(group, index) in nav" :key="index">
          <li class="assets-nav-title">{{ group.name }}</li>
          <router-link
            tag="li"
            :to="{ name: item.route }"
            v-for="(item, i) in group.router"
            :key="i"
            class="assets-nav-item flex row-v-c"
          >
            <svg-icon :icon-class="item.icon" class="nav-icon"/>
            <span>{{ item.name }}</span>
          </router-link>
        </ul>
      </div>
      <div class="assets-main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Assets',
  data() {
    return {
      nav: [
        {
          name: '资产',
          router: [
            {
              name: '我的资产',
              route: 'myAssets',
              icon: 'account_assets',
            },
            {
              name: '资产变动记录',
              route: 'changeRecords',
              icon: 'account_records',
            },
            {
              name: '场外交易记录',
              route: 'tradeRecords',
              icon: 'account_assets',
            },
          ]
        },
        {
          name: '我的',
          router: [
            {
              name: '身份认证',
              route: 'auth',
              icon: 'account_user',
            },
            {
              name: '设置',
              route: 'home',
              icon: 'assets_setting',
            },
          ],
        },
        {
          name: '其他',
          router: [
            {
              name: '公告消息',
              route: 'home',
              icon: 'account_assets',
            },
            {
              name: '帮助中心',
              route: 'home',
              icon: 'account_assets',
            },
            {
              name: '关于我们',
              route: 'home',
              icon: 'account_user',
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
$bg: #23252B;

.assets{
  min-height: 80vh;
  color: #fff;
  margin-top: 20px;
  margin-bottom: 20px;
}
.container{
  min-height: 800px;
}
.assets-nav{
  margin-right: 20px;
  background-color: $bg;
  border-radius: 4px;
}
.assets-nav-group{
  width: 200px;
  font-size: 14px;
  &::after{
    content: '';
    display: block;
    position: relative;
    background-color: red;;
    width: 80%;
    left: 50%;
    transform: translateX(-50%);
    border-bottom: 1px solid #414258;
  }
}
.assets-nav-title, .assets-nav-item{
  line-height: 3;
  border-left: 4px solid transparent;
  padding: 0 20px 0 10px;
}
.assets-nav-item{
  cursor: pointer;
  &.router-link-active{
    background-color: #383640;
    border-left: 4px solid #FFCF35;
  }
  &:hover{ background-color: #383640; }
}
.nav-icon{
  margin-right: 6px;
}
.assets-main{
  background-color: $bg;
  flex: 1;
  border-radius: 4px;
}
</style>