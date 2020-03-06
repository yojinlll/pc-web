<template>
  <div class="trade page-max">
    <div class="trade-action flex">
      <div class="btn buy" @click="isSell = false" :class="{active: !isSell}">购买</div>
      <div class="btn sell" @click="isSell = true" :class="{active: isSell}">出售</div>
    </div>
    <keep-alive>
      <component :is="currentComponent" class="component"></component>
    </keep-alive>
  </div>
</template>

<script>
import QuickBuy from './quick-buy/index'
import QuickSell from './quick-sell/index'
export default {
  name: 'Trade',
  data() {
    return {
      isSell: false,
    }
  },
  computed: {
    currentComponent() {
      if (!this.isSell) {
        return QuickBuy
      } else {
        return QuickSell
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/mixin.scss';

.trade{
  color: #fff;
  margin-top: 20px;
  margin-bottom: 20px;
}
.trade-action{
  background-color: #23252B;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  padding: 20px 60px;
  .btn{
    padding: 2px 20px;
    cursor: pointer;
    position: relative;
  }
  .buy{
    border-right: 1px solid #5E5E5E;

    &.active{
      color: #FFCF35;

      &::after{
        @include active;
        background-color: #FFCF35;
      }
    }
  }
  .sell.active{
    color: #39B167;
      &::after{
        @include active;
        background-color: #39B167;
      }
  }
}
</style>