<template>
  <header class="header">
    <div style="margin: 0 20px">
      <div class="page-max flex row-v-c">
        <div class="logo line-wrap">
          <svg-icon icon-class="logo" />
          <span>Beex</span>
        </div>
        <ul class="nav flex">
          <router-link
            :to="{name: link.name}"
            tag="li"
            v-for="(link, index) in navList"
            :key="index">
            {{ link.meta.title }}
          </router-link>
        </ul>

        <div class="action flex row-v-c">

          <el-popover
            placement="bottom"
            popper-class="account-wrap"
            width="280"
            trigger="click">
            <div class="account-main">
              <ul class="part assets">
                <li>钱包余额</li>
                <li>OTC账户</li>
                <li>区块链游戏</li>
                <li>真人视讯 & 体育竞猜</li>
                <li>精彩视频</li>
              </ul>
              <ul class="part">
                <li>
                  <svg-icon icon-class="account_assets" />
                  <span>我的资产</span>
                </li>
                <li>
                  <svg-icon icon-class="account_user" />
                  <span>个人中心</span>
                </li>
              </ul>
              <ul class="part">
                <li>
                  <svg-icon icon-class="account_deposit" />
                  <span>充币</span>
                </li>
                <li>
                  <svg-icon icon-class="account_withdraw" />
                  <span>提币</span>
                </li>
                <li>
                  <svg-icon icon-class="account_records" />
                  <span>资产变动记录</span>
                </li>
              </ul>
              <div class="logout">
                <svg-icon icon-class="account_logout" />
                <span>退出</span>
              </div>
            </div>
            <div class="account line-wrap" slot="reference">
              <svg-icon icon-class="avatar" class="avatar" />
              <span>username</span>
              <i class="el-icon-caret-bottom" />
            </div>
          </el-popover>

          <div class="login-btn common-btn y-theme">登录</div>

          <div class="lang">En</div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { Popover } from 'element-ui'
export default {
  name: 'Header',
  components:{
    [Popover.name]: Popover
  },
  data() {
    return {
      navList: this.$router.options.routes[1].children.filter(item => item.meta.isHeaderVisible)
    }
  }
}
</script>

<style lang="scss">
@mixin popover-li {
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 250ms;
  &:hover{ color: #fff; }

  svg{ margin-right: 4px; }
}

.header{
  background-color: #23252B;
  width: 100%;
  color: #fff;
  padding: 10px 0;

  .logo{
    font-size: 24px; font-weight: 600;
    svg{ width: 1.5em; height: 1.5em; margin-right: 4px;}
  }

  .nav{
    margin-left: 100px;
    & > li{ margin-right: 50px; cursor: pointer; color: #bebdc5; }
    .router-link-active{
      position: relative;
      color: #FFCF35;

      &::after{
        display: block;
        content: '';
        width: 30px; height: 4px;
        background-color: #FFCF35;
        position: absolute;
        bottom: -8px; left: 50%;
        transform: translateX(-50%);
      }
    }
  }
  .action{
    margin-left: auto;

    .login-btn{
      margin-right: 10px;
    }

    .account{
      border-radius: 8px;
      padding: 6px 20px;
      background-color: #424449;
      margin-right: 10px;
      cursor: pointer;

      .avatar{ margin-right: 12px; }
      .el-icon-caret-bottom{ margin-left: 12px; }
    }
  }
}

.account-wrap{
  border: none;
  color: #bbbbbb;
  background: #23252B;
  padding-top: 0;
  padding-bottom: 0;
  box-shadow:-1px 4px 14px 0px #00000069;

  .account-main{

    .part{
      border-bottom: 1px solid #414258; 
      padding-top: 20px;
      li{
        padding-bottom: 14px;
        @include popover-li;
      }

      &:first-child{
        padding: 10px 0;
        li{ cursor: text; }
        li:hover{ color: #bbbbbb; }
      }
    }
    .part.assets{
      li{ padding-bottom: 4px; }
    }

    .logout{
      padding: 10px 0;
      @include popover-li;
    }
  }

}
.el-popper[x-placement^=bottom] .popper__arrow{ display: none; }
.el-popper .popper__arrow::after { display: none; }
</style>