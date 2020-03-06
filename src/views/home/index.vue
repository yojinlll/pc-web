<template>
  <div class="home">
    <el-carousel height="400px" arrow="never">
      <el-carousel-item v-for="item in 1" :key="item">
        <div class="top-banner">
          <img src="./banner_1.png" alt="banner_1" />
        </div>
      </el-carousel-item>
    </el-carousel>
    <div class="container page-main">
      <div class="quotes">
        <div class="title">实时行情</div>
        <ul class="line-wrap">
          <li
            class="currency"
            v-for="(currency, index) in currencyList"
            :key="index"
          ></li>
        </ul>
      </div>

      <el-tabs v-model="activeName" class="table-tabs">
        <el-tab-pane label="用户管理" name="first">
          <div style="border: 1px solid red; height: 500px;">
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
        </el-tab-pane>

        <el-tab-pane label="配置管理" name="second">
          <div style="border: 1px solid red; height: 500px;">配置管理</div>
        </el-tab-pane>
      </el-tabs>

    </div>
    <div class="app-wrap">
      <div class="inner page-main flex row-vh-c">
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
export default {
  name: 'Home',
  data() {
    return {
      currencyList: 4,
      activeName: 'second',
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

/deep/ .el-tabs__item { color: #fff; font-size: 16px; }
/deep/ .el-tabs__nav-wrap { padding: 0 40px; }
/deep/ .el-tabs__nav-wrap::after { background-color: transparent; }
/deep/ .el-tabs__active-bar { background-color: #ffd239; height: 4px; }
</style>