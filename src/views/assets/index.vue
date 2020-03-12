<template>
  <div class="assets page-max">
    <div class="container flex">
      <div class="assets-nav">
        <ul class="assets-nav-group">
          <li class="assets-nav-title">资产</li>
          <router-link
            tag="li"
            :to="{ name: item.route }"
            v-for="(item, index) in nav.assets"
            :key="index"
            class="assets-nav-item"
          >
            {{ item.name }}
          </router-link>
        </ul>

        <ul class="assets-nav-group">
          <li class="assets-nav-title">我的</li>
          <router-link
            tag="li"
            :to="{ name: item.route }"
            v-for="(item, index) in nav.my"
            :key="index"
            class="assets-nav-item"
          >
            {{ item.name }}
          </router-link>
        </ul>
        
        <ul class="assets-nav-group">
          <li class="assets-nav-title">其他</li>
          <router-link
            tag="li"
            :to="{ name: item.route }"
            v-for="(item, index) in nav.other"
            :key="index"
            class="assets-nav-item"
          >
            {{ item.name }}
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
      nav: {
        assets: [
          {
            name: '我的资产',
            route: 'myAssets'
          },
          {
            name: '资产变动记录',
            route: 'assets'
          },
          {
            name: '场外交易记录',
            route: 'assets'
          },
        ],
        my: [
          {
            name: '身份认证',
            route: 'assets'
          },
          {
            name: '资产变动记录',
            route: 'assets'
          },
        ],
        other: [
          {
            name: '公告消息',
            route: 'myAssets'
          },
          {
            name: '关于我们',
            route: 'assets'
          }
        ]
      }
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
  padding: 0 20px;
}
.assets-nav-item{
  cursor: pointer;
  &:hover{
    background-color: #383640;
  }
}
.assets-main{
  background-color: $bg;
  flex: 1;
  border-radius: 4px;
}
</style>