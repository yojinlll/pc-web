<template>
  <div class="quick-buy-popup page-max">
    <h1 class="title">一键购买 USDT</h1>
    <p class="sub-title">小额快速交易，0手续费</p>
    <div class="quick-buy-inner">
      <el-form :model="form">
        <el-form-item label="按金额购买" class="input-amount">
          <el-input type="text" v-model="form.amount" placeholder="请输入金额" />
          <span class="input-symbol">CNY</span>
        </el-form-item>
        <el-form-item label="选择付款方式">
          <div class="pay-options line-wrap">
            <label class="common-btn" :class="{active: pay.value === form.radio}" v-for="pay in payOptions" :key="pay.value">
              <span>{{ pay.label }}</span>
              <input type="radio" :value="pay.value" v-model="form.radio">
            </label>
          </div>
        </el-form-item>
        <el-form-item label="成交单价：">
          <div class="form-item">12121212</div>
        </el-form-item>
        <el-form-item label="成交数量：">
          <div class="form-item">12121212</div>
        </el-form-item>
        <el-form-item label="实付金额：">
          <div class="form-item">12121212</div>
        </el-form-item>
        <el-form-item>
          <div class="common-btn y-btn">购买 USDT</div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { form, formItem, Input } from 'element-ui'
export default {
  name: "quickBuyPopup",
  components: {
    [Input.name]: Input,
    [form.name]: form,
    [formItem.name]: formItem
  },
  data() {
    return {
      payOptions: [
        { label: '支付宝', value: 'alipay' },
        { label: '银行卡', value: 'bank' },
        { label: '微信', value: 'wechat' }
      ],
      form: {
        amount: '',
        radio: ''
      },
      test: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.quick-buy-popup{
  color: #fff;
  padding: 100px 300px;

  .title{ font-weight: 400; }
  .sub-title{
    margin: 10px 0;
    color: #7B7B7B;
}
}
.quick-buy-inner{
  min-height: 400px;
  background-color: #23252B;
  border-radius: 8px;
  padding: 40px 40px;

  .common-btn{
    width: 100%;
    padding: 16px;
  }
  .pay-options{
    margin: 40px 0 20px;

    .common-btn{
      color: #fff;
      background-color: #2D2E32;
      border: 2px solid #2D2E32;
      margin-right: 10px;
      position: relative;
      &.active{ border: 2px solid #FFC100; }
      &:last-child{ margin-right: 0 }

      input{ position: absolute; visibility: hidden;}
    }
  }
  .form-item{
    text-align: end;
  }
  .input-amount{
    margin-bottom: 32px;
    position: relative;

    .input-symbol{
      position: absolute;
      right: 12px;
    }
  }
}

/deep/ .el-input__inner{ background-color: transparent; border: 1px solid #484848; color: #fff;}
/deep/ .el-form-item{ margin-bottom: 10px; }
/deep/ .el-form-item__label{ font-size: 16px; color: #fff;}
</style>