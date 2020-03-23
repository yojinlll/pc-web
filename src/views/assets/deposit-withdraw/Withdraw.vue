<template>
  <div class="withdraw">
    <div class="go-back" @click="$router.go(-1)">
      <i class="el-icon-back"></i>
      <span>返回</span>
    </div>
    <h1 class="title">提币</h1>
    <div class="withdraw-inner">
      <div class="token">USDT</div>
      <p>仅限 USDT 提现，请确保输入 USDT 账户地址。</p>

      <form>
        <div class="address">
          <label>提币地址:</label>
          <el-input v-model="withdrawForm.address" placeholder="请输入内容"></el-input>
          <span class="tips">* 请确保输入正确的 USDT地址，轉入其他幣種地址將無法找回！</span>
        </div>
        <div class="line-wrap">
          <div class="amount">
            <label>提币数量:</label>
            <el-input v-model="withdrawForm.amount" placeholder="请输入内容"></el-input>
          </div>
          <div class="fee">
            <label>手续费:</label>
            <el-input v-model="withdrawForm.fee" placeholder="请输入内容"></el-input>
          </div>
        </div>
        <div class="form-action">
          <div class="common-btn cancel-btn">取消</div>
          <div class="common-btn b-btn">使用提币</div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { Icon, Input } from 'element-ui'
export default {
  name: 'Withdraw',
  components: {
    [Icon.name]: Icon,
    [Input.name]: Input,
  },
  data() {
    return {
      withdrawForm: {
        address: '',
        amount: '',
        fee: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.withdraw{ padding: 20px; }
.title{
  margin: 20px 0;
  font-weight: 400;
  font-size: 2em;
}
.go-back{ cursor: pointer; }
.withdraw-inner{
  border-radius: 7px;
  background-color: #34353D;
  padding: 20px;
}
form{
  label{
    display: inline-block;
    margin-bottom: 20px;
  }
  .address{
    margin: 40px 0; 
    .label{
      color: #FFC100;
    }
  }
  .amount, .fee{
    flex: 1;
  }
  .amount{
    margin-right: 60px;
  }
  .tips{
    color: #EF3D5E;
    font-size: 14px;
    line-height: 2;
  }
}
.form-action{
  margin-top: 20px;
  text-align: end;

  .common-btn{
    color: #fff; width: 150px; line-height: 25px;
    &:first-child{
      margin-right: 40px;
    }
  }
}
</style>