<template>
  <div class="trade-records">
    <h1 class="assets-inner-title">场外交易记录</h1>

    <ul class="action-options flex">
      <li class="common-btn"
        @click="activeItem = item.key"
        v-for="item in actionOptions"
        :key="item.key"
        :class="{'y-btn': item.key === activeItem}"
      >{{ item.action }}</li>
    </ul>

    <div style="margin-bottom: 20px;">
      <el-select v-model="token" style="width:100px;">
        <el-option
          v-for="item in tokenOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>

    <ul class="records">
      <li class="record-item">
        <table>
          <thead>
            <tr>
              <th>action</th>
              <th>手续费</th>
              <th>时间</th>
              <th>状态</th>
              <th>地址</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>24.23 USDT</td>
              <td>0 USDT</td>
              <td class="td-date">2019/11/11 13:24:12</td>
              <td>操作失败</td>
              <td class="td-adress">1ANR5tBHKPwpfWZo7u64XFrDz4xGvPcFtV</td>
            </tr>
          </tbody>
        </table>
      </li>
    </ul>
  </div>
</template>

<script>
import { Select, Option } from 'element-ui'
export default {
  name: 'TradeRecords',
  components: {
    [Select.name]: Select,
    [Option.name]: Option,
  },
  data() {
    return {
      activeItem: 'all',
      actionOptions: [
        {
          action: '全部',
          key: 'all'
        },
        {
          action: '购买',
          key: 'buy'
        },
        {
          action: '出售',
          key: 'sell'
        },
      ],
      token: 'USDT',
      tokenOptions: [
        {
          value: 'USDT',
          label: 'USDT'
        },
        {
          value: 'RMB',
          label: 'RMB'
        },
      ],
    }
  }
}
</script>

<style lang="scss" scoped>

.trade-records{
  padding: 20px;
}
.action-options{
  margin: 30px 0;
  > .common-btn{
    margin-right: 4px;
    padding: 12px 40px;
    background-color: #34353D;
    color: #C3C3C4;

    &.y-btn{ background-color: #FFC100; color: #000;}
    &.y-btn:hover{ background: lighten(#FFC100, 10%); color: #000;}
  }
}
.record-item{
  background-color: #36343e;
  border-radius: 7px;
  padding: 20px;
  margin-bottom: 20px;

  table{width: 100%;}
  th{
    padding-bottom: 12px;
    font-weight: 400;
    color: #989898;
  }
  td{
    word-break: break-word;
    max-width: 100px;
  }
}

/deep/ .el-tabs__header{ display: none; }
</style>