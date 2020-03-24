<template>
  <div class="quick-sell-detail page-max">
    <h1 class="title">订单详情</h1>
    <div class="detail-wrap">
      <div class="detail-header line-wrap">
        <span>出售USDT</span>
        <div class="order-id">订单号</div>
      </div>
      <div class="detail-main">
        <table class="order-table">
          <thead>
            <tr>
              <th>总价</th>
              <th>数量</th>
              <th>单价</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="price">2000</td>
              <td>288</td>
              <td>6.93</td>
            </tr>
          </tbody>
        </table>
        <div class="payment-methods">
          <div class="title">卖家收款方式</div>
          <ul class="payment-item flex" v-for="(item, index) in methods" :key="index">
            <li>{{ item.method }}</li>
            <li>{{ item.username }}</li>
            <li><span>{{ item.id }}</span></li>
            <li>{{ item.address }}</li>
          </ul>
        </div>
      </div>
      <div class="detail-footer">
        <template v-if="status">
          <div class="line-wrap" style="margin-bottom: 20px;">
            <div>
              <span>对方已标记转账成功，请确认收款并放币</span>
              <div class="actual-payments">2000 CNY</div>
            </div>
            <div class="confirm-btn common-btn g-btn" @click="status = false">我已完成转账</div>
          </div>
          <div class="cancel-btn">取消订单</div>
        </template>
        <template v-else>
          <div class="status flex row-v-c">
            <svg-icon icon-class="success" class="icon" />
            <div>
              <div>订单已完成</div>
              <p>您购买的USDT已存入您的账户，请查看账户信息。</p>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuickBuyDetail",
  data() {
    return {
      methods: [
        {
          method: "银行卡",
          username: "冰山",
          id: "1234567897898797987",
          address: "中国农业银行卡，科技园支行"
        },
        {
          method: "支付宝",
          username: "冰山",
          id: "123456",
          address: ""
        },
      ],
      status: true
    }
  }
}
</script>

<style lang="scss" scoped>
$green: #39B167;

.quick-sell-detail{
  color: #fff;
  margin-top: 40px;
  margin-bottom: 120px;
  > .title{ font-weight: 400; font-size: 1.5em; padding: 40px 0; }
}
.detail-wrap{
  background-color: #1D1F24;
}
.detail-header{
  padding: 10px 40px;
}
.detail-main{
  min-height: 200px;
  background-color: #23252B;
  padding: 20px 40px;

  .order-table{
    th, td{ min-width: 140px; text-align: start;}
    th{ color: #B7B7B7; font-weight: 400; padding-bottom: 12px;}
    .price{ color: $green; }
  }
  .payment-methods{
    border-top: 1px solid #474747;
    margin: 20px 0 0;
    padding: 20px 0;

    .title{ color: #B7B7B7; }
    .payment-item{
      li{
        color: $green;
        padding: 20px 0;
        min-width: 140px;
        border-bottom: 1px solid #474747;
        > span{ display: block; transform: translateY(20%); }
        &:first-child{ border: none;}
        &:last-child{ flex: 1; padding-left: 80px;}
      }

      &:last-child{
        li{ border: none; }
      }
    }
  }
}
.detail-footer{
  padding: 20px 40px;

  .actual-payments{ margin-top: 20px; color: $green; }
  .confirm-btn{ padding: 12px 80px; }
  .cancel-btn{ color: #fff; text-align: end; cursor: pointer;}

  .status{
    margin: 20px 0;

    .icon{ margin-right: 20px; width: 3em; height: 3em;}

    p{ color: #B7B7B7; font-size: 14px; margin-top: 20px;}
  }
}
</style>