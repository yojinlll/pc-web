<template>
  <div class="deposit">
    <div class="go-back" @click="$router.go(-1)">
      <i class="el-icon-back"></i>
      <span>返回</span>
    </div>
    <h1 class="title">充币</h1>
    <div class="deposit-inner">
      <div class="token">USDT</div>
      <p class="tips">仅限 USDT 充值，请勿充入其他币种。</p>

      <div class="depositaddress-wrap flex">
        <div class="QR-code-main flex row-v-c col">
          <div class="QR-code">
            <fg-qrcode :text="address"></fg-qrcode>
          </div>
          <div class="common-btn">保存二维码至桌面</div>
        </div>

        <div class="deposit-address">
          <span class="title">充币地址：</span>
          <div class="address-input line-wrap">
            <el-input v-model="address" placeholder="请输入内容" />
            <fg-copy :text="address">
              <div class="common-btn y-btn">复制</div>
            </fg-copy>
          </div>

          <p>请勿向上述地址充值任何非</p>
          <p>请勿向上述地址充值任何非</p>
          <p>请勿向上述地址充值任何非</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FgQrcode from '@/components/qrcode/Qrcode'
import FgCopy from '@/components/copy/Copy'
import { Input } from 'element-ui'
export default {
  name: 'Deposit',
  components: {
    [Input.name]: Input,
    FgQrcode,
    FgCopy
  },
  data() {
    return {
      address: 'testtesttesttest'
    }
  }
}
</script>

.<style lang="scss" scoped>
.deposit{
  padding: 20px;
  > .title{
    margin: 20px 0;
    font-weight: 400;
    font-size: 2em;
  }
}
.go-back{ cursor: pointer; }

.deposit-inner{
  border-radius: 7px;
  background-color: #34353D;
  padding: 20px;

  .token{ font-weight: 600; }
  .tips{ margin: 20px 0 30px; color: #C3C3C4; }
}
.QR-code-main{
  flex: 3;
  text-align: center;

  .QR-code{
    width: 240px;
    height: 240px;
  }
  .common-btn{
    border: 1px solid #fff;
    color: #fff;
    font-weight: 400;
    margin-top: 20px;
  }
}
.deposit-address{
  flex: 5;

  .title{ color: #FFC100; }
  .address-input{
    width: 90%;
    margin: 20px 0;

    .common-btn{
      padding: 14px 40px;
      margin-left: 20px;
    }
  }
}
</style>