<template>
  <div class="quick-buy">
    <div class="token-options-wrap line-wrap">
      <ul class="token-options flex" >
        <li
          class="token-item"
          v-for="(item, index) in tokenList"
          :key="index"
          @click="curIdx = index"
          :class="{active: tokenList[curIdx].token === item.token}"
        >
          {{ item.token }}
        </li>
      </ul>
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>

    <div class="buy-input-container flex row-between">
      <div class="part">
        <div class="title">一键买币</div>
        <span>小额快速交易，0手续费</span>
      </div>
      <div>
        <div class="line-wrap">
          <el-input placeholder="请输入内容" v-model="inputAmount" >
            <el-select v-model="select" slot="prepend" placeholder="请选择">
              <el-option label="餐厅名" value="1"></el-option>
              <el-option label="订单号" value="2"></el-option>
              <el-option label="用户电话" value="3"></el-option>
            </el-select>
          </el-input>
          <div class="common-btn y-btn" @click="$router.push('quickBuy')"> 购买 {{ tokenList[curIdx].token }} </div>
        </div>
        <ul class="amount-options line-wrap">
          <li
            v-for="amount in amountOptions.options"
            :class="{active: amountOptions.currentAmount === amount}"
            :key="amount"
            class="amount-options-item"
            @click="inputAmount = amount"
          >{{ amount }}</li>
        </ul>
      </div>
    </div>

    <div class="self-choise-buy">
      <div class="title-bar line-wrap">
        <div class="title">自选交易</div>
        <div class="refresh common-btn">
          <i class="el-icon-refresh"></i>
          刷新数据
        </div>
      </div>
      <div class="seller-table">
        <div class="seller-table-head flex">
          <div class="seller-th">卖家</div>
          <div class="seller-th">数量</div>
          <div class="seller-th">限额</div>
          <div class="seller-th">单价</div>
          <div class="seller-th">支付方式</div>
          <div class="seller-th">交易</div>
        </div>
        <div class="seller-table-body">

          <div class="seller-table-tr flex row-v-c" v-for="(item, index) in 4" :key="index" :class="{active: item === activeItem}">

            <div class="seller-td flex row-v-c">
              <div class="avatar"></div>
              <span>seller</span>
            </div>
            <div class="seller-td">2000 USDT</div>
            <div class="seller-td">100 - 500 CNY</div>
            <div class="seller-td">6.78CNY</div>
            <div class="seller-td">支付宝</div>
            <div class="seller-td">
              <div class="common-btn y-btn" @click="activeItem = item">购买 USDT</div>
            </div>

            <div class="inner-dialog flex" v-if="activeItem === item">
              <div class="avatar"></div>
              <div style="flex: 1">
                <div class="dialog-tr flex row-v-c">
                  <div class="dialog-td">username</div>
                  <div class="dialog-td">amount</div>
                  <div class="dialog-td">xxxx</div>
                  <div class="dialog-td">xxxx</div>
                  <div class="dialog-td action flex row-v-c">
                    <input class="dialog-input" type="text" placeholder="请输入购买总金额">
                    <div class="confirm-btn common-btn y-btn">下单</div>
                    <div class="cancel-btn" @click="activeItem = ''">取消</div>
                  </div>
                </div>
                <div class="pay-methods">
                  <div class="common-btn">银行卡</div>
                  <div class="common-btn">支付宝</div>
                  <div class="common-btn">微信支付</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Input, Select, Option} from 'element-ui'
export default {
  name: 'QuickBuy',
  components: {
    [Input.name]: Input,
    [Select.name]: Select,
    [Option.name]: Option,
  },
  data() {
    return {
      curIdx: 0,
      tokenList: [
        {
          token: 'USDT',
          code: "ETH_USDT",
          cnyRate: 7,
        },
        {
          token: 'BTC',
          code: "BTC_BTC",
          cnyRate: 50000,
        },
        {
          token: 'ETH',
          code: "ETH_ETH",
          cnyRate: 1200,
        },
        {
          token: 'EOS',
          code: "EOS_EOS",
          cnyRate: 22,
        },
      ],

      inputAmount: '',
      select: '',
      options: [{
          value: '选项1',
          label: 'RMB'
        }, {
          value: '选项2',
          label: 'test'
        }],
      value: 'RMB',
      amountOptions: {
        currentAmount: '',
        options: ['100', '500', '1000', '2000', '5000', '10000'],
      },
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ],
      activeItem: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/mixin.scss';
$bg: #23252B;

.token-options-wrap{
  background-color: $bg;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  padding: 20px 60px 40px;

  .token-item{
    padding: 0 25px;
    cursor: pointer;
    position: relative;

    &.active{
      color: #FFCF35;

      &::after{
        @include active;
        background-color: #FFCF35;
        bottom: -60%;
      }
    }
  }
}
.buy-input-container{
  margin: 20px 0;
  background-color: #1D1F24;
  border-radius: 6px;
  padding: 30px 20px 30px 80px;

  .part{
    .title{ font-size: 20px; margin-bottom: 10px;}
    span{ font-size: 14px; color: #7B7B7B; }
  } 

  .common-btn{ margin-left: 20px; padding: 12px 20px; width: 150px; border-radius:4px; }
  .amount-options{ margin-top: 20px; }
  .amount-options-item{
    cursor: pointer;
    line-height: 2;
    width: 70px;
    font-size: 14px;
    text-align: center;
    background-color: #2D2E32;
    color: #ABABAB;
    border-radius: 4px;
    transition: all 250ms;

    &:hover{ background-color: lighten(#2D2E32, 10%); }
  }
}
.self-choise-buy{
  background-color: $bg;
  border-radius: 6px;
  padding: 40px 80px;

  .title-bar{
    margin-bottom: 20px;

    .title{ font-size: 20px; }
    .common-btn{
      border: 1px solid #5C5C5C;
      color: #fff;
      font-weight: 400;

      &:hover{
        background-color: lighten(#23252B, 10%)
      }
    }
  }
}
.seller-table{
  width: 100%;

  .seller-table-head{ padding: 20px 0; color: #7B7B7B; font-size: 14px; border-bottom: 1px solid #474747;}
  .seller-th, .seller-td{ flex: 1; }
  .seller-table-tr{
    padding: 20px 0;
    border-bottom: 1px solid #474747;
    position: relative;
    transition: all 250ms;

    &.active{ padding: 40px 0; }
  }

  .avatar{
    border-radius: 100%;
    width: 40px;
    height: 40px;
    background-color: #D8D8D8;
    margin-right: 20px;
  }
  .inner-dialog{
    position: absolute;
    padding: 10px 20px;
    background-color: #36383D;
    border-radius: 12px;
    width: 105%;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    box-shadow:0px 5px 16px 0px #00000070;

    .avatar{
      border-radius: 100%;
      width: 40px;
      height: 40px;
      background-color: #D8D8D8;
      margin-right: 20px;
    }
    .dialog-tr{ padding-bottom: 10px; }
    .dialog-td{ flex: 1; }
    .dialog-td.action{ flex: 2 }
    .confirm-btn{
      padding: 10px 28px;
    } 
    .cancel-btn{
      padding: 10px 20px;
      border-radius: 6px;
      cursor: pointer;
      line-height: 1;
      word-break: keep-all;
    }
    .pay-methods{
      border-top: 1px solid #474747;
      padding-top: 10px;

      .common-btn{
        margin-right: 10px;
        border: 1px solid #979797;
        color: #9A9A9A;
        font-weight: 400;
        font-size: 12px;
        transition: all 250ms;
        &:hover{ background-color: lighten($color: #36383D, $amount: 10%); }
      }
    }
    .dialog-input{
      border: 1px solid #FFC100;
      background-color: inherit;
      font-size: 16px;
      margin-right: 10px;
      width: 180px;
      line-height: 2;
      border-radius: 6px;
      padding: 0 4px;
      color: #fff;
    }
  }
}

/deep/ .el-select .el-input {
  width: 120px;
}
</style>