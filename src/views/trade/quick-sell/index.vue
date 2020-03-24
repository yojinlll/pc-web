<template>
  <div class="quick-sell">
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

    <div class="sell-input-container flex row-between">
      <div class="part">
        <div class="title">一键卖币</div>
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
          <div class="common-btn g-btn" @click="$router.push('quickSell')"> 出售 {{ tokenList[curIdx].token }} </div>
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

    <div class="self-choise-sell">
      <div class="title-bar line-wrap">
        <div class="title">自选交易</div>
        <div class="refresh common-btn">
          <i class="el-icon-refresh"></i>
          刷新数据
        </div>
      </div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column
          prop="date"
          label="日期"
          width="180"
        ></el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180"
        ></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { Table, TableColumn, Input, Select, Option} from 'element-ui'
export default {
  name: 'QuickSell',
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
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
      ]
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
      color: #39B167;

      &::after{
        @include active;
        background-color: #39B167;
        bottom: -60%;
      }
    }
  }
}
.sell-input-container{
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
.self-choise-sell{
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

/deep/ .el-select .el-input {
  width: 120px;
}
</style>