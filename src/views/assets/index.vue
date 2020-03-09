<template>
  <div class="assets page-max">
    <div class="container flex">
      <div class="assets-nav">
        <div class="assets-nav-group">
          <div class="assets-nav-title">资产</div>
          <div class="assets-nav-item">我的资产</div>
          <div class="assets-nav-item">资产变动记录</div>
          <div class="assets-nav-item">场外交易记录</div>
        </div>
        <div class="assets-nav-group">
          <div class="assets-nav-title">我的</div>
          <div class="assets-nav-item">身份认证</div>
          <div class="assets-nav-item">设置</div>
        </div>
        <div class="assets-nav-group">
          <div class="assets-nav-title">其他</div>
          <div class="assets-nav-item">公告消息</div>
          <div class="assets-nav-item">关于我们</div>
        </div>
      </div>
      <div class="assets-main">
        <component :is="currentComponent" class="component"></component>
      </div>
    </div>
  </div>
</template>

<script>
import MyAssets from './myAssets'
export default {
  name: 'Assets',
  computed: {
    currentComponent() {
      return MyAssets
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
}
</style>