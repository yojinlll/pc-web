<template>
  <div class="assets_my-assets">
    <h1 class="title">我的资产</h1>
    <div class="container">
      <div class="action-bar line-wrap">
        <el-select v-model="token" placeholder="请选择" style="width:100px;">
          <el-option
            v-for="item in tokenOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <div class="refresh">
          <i class="el-icon-refresh"></i>
          <span>刷新数据</span>
        </div>
      </div>

      <ul class="sub-account-list">
        <li class="sub-account-item sub-account_wallet line-wrap y-theme">
          <span class="sub-account-title">钱包余额</span>
          <span class="sub-account-amount">100 {{ token }}</span>
          <div class="btn-wrap line-wrap">
            <div class="common-btn" @click="$router.push('withdraw')">提币</div>
            <div class="common-btn" @click="$router.push('deposit')">充币</div>
          </div>
        </li>
        <li class="sub-account-item line-wrap">
          <span class="sub-account-title">OTC账户</span>
          <span class="sub-account-amount">100 {{ token }}</span>
          <div class="btn-wrap line-wrap">
            <div class="common-btn y-theme" @click="transferDialogVisible = true">划入</div>
            <div class="common-btn b-btn" @click="transferDialogVisible = true">转出</div>
          </div>
        </li>
        <li class="sub-account-item line-wrap">
          <span class="sub-account-title">区块链游戏</span>
          <span class="sub-account-amount">100 {{ token }}</span>
          <div class="btn-wrap line-wrap">
            <div class="common-btn y-theme">划入</div>
            <div class="common-btn b-btn">转出</div>
          </div>
        </li>
        <li class="sub-account-item line-wrap">
          <span class="sub-account-title">真人视讯 & 体育竞猜</span>
          <span class="sub-account-amount">100 {{ token }}</span>
          <div class="btn-wrap line-wrap">
            <div class="common-btn y-theme">划入</div>
            <div class="common-btn b-btn">转出</div>
          </div>
        </li>
        <li class="sub-account-item line-wrap">
          <span class="sub-account-title">金融交易</span>
          <span class="sub-account-amount">100 {{ token }}</span>
          <div class="btn-wrap line-wrap">
            <div class="common-btn y-theme">划入</div>
            <div class="common-btn b-btn">转出</div>
          </div>
        </li>
        <li class="sub-account-item line-wrap">
          <span class="sub-account-title">精彩视频</span>
          <span class="sub-account-amount">100 {{ token }}</span>
          <div class="btn-wrap flex">
            <div class="common-btn y-theme">划入</div>
            <!-- <div class="common-btn b-btn">转出</div> -->
          </div>
        </li>
      </ul>

      <el-dialog
        title="转账"
        :visible.sync="transferDialogVisible"
        :show-close="false"
        :center="true"
        width="20%"
      >
        <el-input-number v-model="amount" :min="1" :max="10000" label="描述文字" />
        <span slot="footer" class="dialog-footer">
          <div class="common-btn cancel-btn"  @click="transferDialogVisible = false">取 消</div>
          <div class="common-btn b-btn" @click="transferDialogVisible = false">确 定</div>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { Icon, Option, Select, Dialog, InputNumber} from 'element-ui'
export default {
  name: 'MyAssets',
  components: {
    [Icon.name]: Icon,
    [Option.name]: Option,
    [Select.name]: Select,
    [Dialog.name]: Dialog,
    [InputNumber.name]: InputNumber,
  },
  data() {
    return {
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
      transferDialogVisible: false,
      amount: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.assets_my-assets{
  padding: 20px;
}
.title{
  font-size: 24px;
  font-weight: 600;
  color: #fff;
}
.action-bar{
  margin: 20px 0;
  cursor: pointer;

  .refresh{ padding: 10px; }
}
.sub-account-item{
  background-color: #36343e;
  border-radius: 7px;
  padding: 20px 20px 20px 40px;
  margin-bottom: 20px;

  .sub-account-title{ width: 180px;}
  &:hover{ background-color: lighten(#36343e, 1%); }
  .btn-wrap{ padding: 10px 0; width: 200px; justify-content: flex-end;}
}
.sub-account_wallet{ color: #000; }
.common-btn{
  border: 1px solid #000;
  padding-left: 30px;
  padding-right: 30px;
  font-weight: 600;

  &.cancel-btn{ border: none; background-color: #D8D8D8;}
  &.b-btn{ color: #fff; border: none;}
  &.y-theme{ border: none;}
  & + &{ margin-left: 10px; }
}
/deep/ .el-dialog__body{
  text-align: center;
}
/deep/ .el-dialog{
  border: 6px;
  background-color: #23252B;
}
/deep/ .el-dialog__title{
  color: #fff;
}
</style>