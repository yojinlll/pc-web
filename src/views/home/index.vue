<template>
  <div class="home">
    <el-carousel height="400px" arrow="never">
      <el-carousel-item v-for="item in 1" :key="item">
        <div class="top-banner">
          <img src="./banner_1.png" alt="banner_1" />
        </div>
      </el-carousel-item>
    </el-carousel>
    <div class="container page-max">
      <div class="quotes">
        <div class="title">实时行情</div>
        <ul class="line-wrap">
          <li
            class="currency flex col row-between"
            v-for="(currency, index) in currencyList"
            :key="index"
          >
            <div class="symbol">USDT</div>
            <div class="price">￥6.93</div>
            <div class="increase line-wrap">
              <span>+1.23%</span>
              <i class="el-icon-top"></i>
            </div>
          </li>
        </ul>
      </div>

      <el-tabs v-model="activeName" class="table-tabs">
        <el-tab-pane label="USDT" name="first">
          <table class="quotes-table" style="width: 100%" cellspacing="0">
            <thead>
              <tr>
                <th style="width: 160px">名称</th>
                <th class="text-end"  style="width: 160px">现价</th>
                <th class="text-end">24h涨幅</th>
                <th class="text-end">24h最高</th>
                <th class="text-end">24h最低</th>
                <th style="text-align: center; width: 300px">7日走势</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in 6" :key="item">
                <td>11111</td>
                <td class="text-end">
                  <div>123456</div>
                  <div>≈ 123456</div>
                </td>
                <td class="text-end">5.72%</td>
                <td class="text-end">11111</td>
                <td class="text-end">11111</td>
                <td style="text-align: center;">11111</td>
              </tr>
            </tbody>
          </table>

        </el-tab-pane>

        <el-tab-pane label="ETH" name="second">
          <div style="border: 1px solid red; height: 500px;">配置管理</div>
        </el-tab-pane>
      </el-tabs>

    </div>
    <div class="app-wrap">
      <div class="inner page-max flex row-vh-c">
        <img src="./app.png" alt="app" />
        <div class="download">
          <h1 class="title">BEEX 官方APP下载</h1>
          <span class="sub-title">更多好玩的Dapp，尽在Beex！</span>
          <div class="download-channel line-wrap">
            <div class="download-btn y-theme">Android 下载</div>
            <div class="download-btn y-theme">在手机浏览器中打开</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, CarouselItem, Tabs, TabPane,} from 'element-ui'
export default {
  name: 'Home',
  components:{
    [Carousel.name]: Carousel,
    [CarouselItem.name]: CarouselItem,
    [Tabs.name]: Tabs,
    [TabPane.name]: TabPane,
  },
  data() {
    return {
      currencyList: 4,
      activeName: 'first',
      tableData: Array.from({length: 6}).map(item => {
        return {
          one: 'one',
          two: 'two',
          three: 'three',
          four: 'four',
          five: 'five',
          six: 'six',
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.top-banner {
  img {
    height: 100%;
    position: absolute;
    width: 100%;
    object-fit: cover;
  }
}
.container { padding: 20px 0; }
.quotes {
  color: #fff;
  background-color: #24252b;
  padding: 40px;
  border-radius: 8px;

  .title {
    font-size: 30px;
    margin-bottom: 20px;
  }
  .currency {
    border-radius: 8px;
    background-color: #34353c;
    height: 150px;
    width: 22%;
    padding: 20px;
    
    .symbol{ font-size: 1.3em; }
    .price{ font-size: 2em; }
  }
}
.table-tabs {
  margin: 40px 0;
  background-color: #23252b;
  color: #fff;
  padding: 20px 0;
  border-radius: 6px;
}
.app-wrap{
  background-color: #23252B;
  color: #fff;
  .inner{
    background: url(./decoration.png) -30% 100% no-repeat;
    // padding-right: 40px;
  }
  .download{
    height: 300px;
    padding: 30px 100px;
  }
  .title{
    font-weight: 400;
    margin-bottom: 20px;
  }
  .sub-title{
    opacity:0.4;
  }
  .download-channel{
    margin-top: 40px;
  }
  .download-btn{
    color: #000;
    text-align: center;
    padding: 0 20px;
    line-height: 2em;
    border-radius: 2em;
    cursor: pointer;

    &:first-child{ margin-right: 40px; }
  }
}
.quotes-table{
  .text-end{ text-align: end; }
  th{
    text-align: start;
    padding: 20px 0;
    background-color: #1B1C22;
    font-weight: 400;
    font-size: 14px;
    color: #8d8e95;

    &:first-child{ padding-left: 40px; }
  }
  td{
    padding: 20px 0;
    background-color: #23252B;
    &:first-child{ padding-left: 40px; }
  }
  tr:nth-child(even){
    td{
      background-color: #1D1F24;
    }
  }
}

/deep/ .el-tabs__item { color: #fff; font-size: 16px; }
/deep/ .el-tabs__nav-wrap { padding: 0 40px; }
/deep/ .el-tabs__nav-wrap::after { background-color: transparent; }
/deep/ .el-tabs__active-bar { background-color: #ffd239; height: 4px; }
</style>