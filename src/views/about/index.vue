<template>
  <div class="about">
    <!-- <img src="~@/assets/about/decoration_1.png" alt="" class="decoration-1"> -->
    <div class="decoration-1" />
    <div class="decoration-2" />
    <!-- <img src="~@/assets/about/decoration_2.png" alt="" class="decoration-2"> -->
    <div class="hexagon-s"></div>
    <div class="hexagon-l"></div>
    <ul class="about-nav" ref="navList">
      <li
        v-for="item in navList"
        :key="item.value"
        :class="{active: item.value === navActive}"
        @click="onScroll(item.value)"
      >
        <label class="flex row-v-c">
          <span class="item-index">{{ '0' + (item.value + 1) }}.</span>
          <div class="item-main flex row-v-c">
            <span>{{ item.text }}</span>
            <input type="radio" :value="item.value" v-model="navActive">
          </div>
        </label>
      </li>
    </ul>
    <div class="about-container">

      <h1 class="app-title flex row-v-c page-max">
        <div class="logo-wrap flex row-v-c">
          <svg-icon icon-class="logo" class="logo-icon" />
          <span>Beex</span>
        </div>
        <span>币峰区块链</span>
      </h1>
      <div class="about-row-wrap">
        <div class="about-row_1 page-max">
          <h2 class="title">币峰区块链</h2>
          <p class="content">专注于区块链生态应用的解决方案，为数字资产赋能，创造生态价值，共同编织属于您自己的产业闭环。</p>
          <div class="common-btn">支持安卓客户端及网页端</div>
        </div>
      </div>

      <div class="about-row-wrap about-row-wrap_2" ref="nav_0">
        <div class="about-row_2 page-max">
          <h2 class="title">区块链生态是什么？</h2>
          <div class="content flex row-between">
            <div class="part">
              <p>我们都知道区块链技术的核心特点是去中心化、交易点对点及不可篡改。这些特性实现了机器信任、加密货币交易及智能合约的链上执行等实际应用。</p>
              <p>博弈业，是区块链智能合约最重要的应用场景。它将原有的博弈双方，从黑箱的无信任基础的场景中抽离出来，从而产生真正不可作弊的公平游戏产业。</p>
              <p>数字货币，是区块链产业最重要的组成部分之一，也是数字经济发展的基石。目前数字货币的自由交易及兑换已经在全球范围内得到了认可，并满足于各式各样的需求。</p>
            </div>
            <div class="part">
              <p>跨传统行业的2.0业务，许多传统行业，比如金融理财、融资租赁、小额贷等，已经慢慢走向产业末端，却被区块链重新激活，焕发又一波青春。</p>
              <p>通过资产通证化，在区块链上产生新的血液，为区块链生态注入了更多的应用场景。</p>
              <p>我们生态链中的商城、影视等其他消费类产业，为数字货币提供了实际的应用场景及消费通道。打破了现阶段数字货币行业中存在的区块链泡沫经济。</p>
              <p>更多交互类游戏和小游戏产品层出不穷，为产业链不断增添活力。</p>
            </div>
          </div>
          <div class="sub-content" />
        </div>
      </div>

      <div class="about-row-wrap about-row-wrap_3" ref="nav_1">
        <div class="about-row_3 page-max">
          <h2 class="title">什么是完全公平的游戏？</h2>
          <div class="content flex row-between">
            <div class="part">
              <p>块链发展的一大变革，在于它能够将匿名双方的交易变成一种互相可以信赖的交易模式，智能合约的出现，让博弈游戏的公平性变成了可能。</p>
              <p>游戏中所发的牌是由玩家和系统共同提供的种子，来计算决定的，保证发牌的公平性、随机性，并且这些游戏信息都是完全公开的，用户可进行验证。在游戏里，用户可以随时点开验证工具，进行公平性的验证。</p>
              <p>平台汇总每局中下注用户提供的哈希值，再加上上一轮游戏生成的哈希值结果，以及服务器在游戏开始时提供的游戏种子，进SHA256哈希运算，来生成本轮游戏的哈希值</p>
            </div>
            <div class="part">
              <p>结果，并继续对结果进行哈希运算，生成多个哈希值，作为发放的牌型的来源。</p>
              <p>
                种子的来源是确定的，计算方法也是一定的，且不可逆，得出的结果也是确定的，代码已经写入合约，不可修改，
                不论是玩家还是庄家，都没有办法在游戏中作弊。博弈游戏的2.0版本，将在区块链的浪潮中，彻底更新换代，迎来一个新时代。
              </p>
            </div>
          </div>
          <div class="description">
            <div class="item">
              <svg-icon icon-class="description_1" />
              <p>创造一个基于智能合约的博弈棋牌游戏，带来棋牌游戏2.0变革。</p>
            </div>
            <div class="item">
              <svg-icon icon-class="description_2" />
              <p>哈希值的计算，让结果不可逆，让运算过程变得复杂，使得游戏更加公平。</p>
            </div>
            <div class="item">
              <svg-icon icon-class="description_3" />
              <p>十多年的专业游戏开发、部署、运维经验的团队。</p>
            </div>
          </div>
        </div>
      </div>

      <div class="about-row-wrap about-row-wrap_4" ref="nav_2">
        <div class="about-row_4 page-max flex">
          <div>
            <h2 class="title">质押和分红 - 挖矿新玩法</h2>
            <div class="content">
              <p>
                任何一位玩家只要在公开的数字货币交易所，购买平台发行的数字货币，并将其质押在平台中，
                便可成为赌厅的股东，参与赌厅每日分红，平台将按照游戏的庄优理论值根据投注流水，直接按照50%（或自行规定和设置）的分配比例，将收益注入分红池。
              </p>
              <p>根据玩家质押比例，从当天分红池中，对玩家进行分红奖励，直接进入玩家的账户。</p>
              <p>注意，这不是传统的代理模式，代理只能从下线客户的流水或盈亏抽水，而质押分红，是从整个平台的分红池中获得收益。</p>
              <p>让玩家持币，成为最重要的获益者，这样，他们不仅仅是玩家，很快的，他们也会变成整个平台最勤劳的推广团体。</p>
            </div>
            <div class="features">
              <div class="item" v-for="(item, index) in features" :key="index">
                <div class="icon-wrap">
                  <svg-icon :icon-class="`feature_${index + 1}`" />
                </div>
                <div class="feature-title">{{ item.title }}</div>
                <p>{{ item.content }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="about-row-wrap about-row-wrap_5" ref="nav_3">
        <div class="about-row_5 page-max">
          <h2 class="title">适用多种行业场景，打破泡沫经济</h2>
          <img class="emphasis" src="~@/assets/about/about-emphasis.png" alt="">
          <div class="content">
            <ul class="application-list" v-for="(item, index) in applicationList" :key="index">
              <li class="application-item">
                <img :src="item.img">
                <div class="application-title">{{ item.title }}</div>
                <div>{{ item.content }}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="about-row-wrap about-row-wrap_6">
        <div class="about-row_6 page-max">
          <div class="application-item">
            <img src="~@/assets/about/number_7.png">
            <span>区块链投行业务</span>
          </div>
          <h2 class="title">什么是区块链投行（数字投行）？</h2>
          <div class="content">
            <p>数字投行，就是区块链数字货币行业在2019年刚刚兴起的全新的发展方向，也被称为“区块链投行业务”。</p>
            <p>通常的，其全称为“全球新兴经济数字投行”，主要通过区块链数字经济投资于前沿科技类项目领域。</p>
            <p>我们BEEX专注投资于以中国为代表的新兴经济体地区的高新科技类项目，包含区块链、互联网、人工智能、大数据等专业领域。用户将数字资产加密保存于BEEX钱包，并通过委托专业投行机构进行资产管理获得分红。</p>
            <p>BEEX平台的数字钱包旨在构建数字货币投资银行生态体系的线上平台，用以存币、投资、经营社群，让粉丝得以参与优质项目的线上众筹，并通过资本市场获取回报。</p>
            <p>除了主流币，BEEX钱包还可以存放平台币BEEX通证。BEEX通证是基于BEEX的公链技术，并通过资管分红而产生的代币，其主要用于数字投行生态体系的商业流通。</p>
          </div>
        </div>
      </div>

      <div class="about-row-wrap">
        <div class="banner page-max flex row-vh-c">
          <img src="~@/assets/about/banner-logo.png" alt="logo">
          <div class="title">盛大发布</div>
          <p>一个划时代的数字资产平台已然出现，一个改变区块链行业与金融投行产业的跨界整合型平台已然到来。让我们每一个币圈人、金融从业者共同欢呼与期待吧！</p>
        </div>
      </div>

      <div class="about-row-wrap about-row-wrap_7 ">
        <div class="about-row page-max">
          <h2 class="title">
            <span>区块链投行业务的全球扩展，</span>
            <span>将传统行业上链进行价值变现。</span>
          </h2>
          <div>
            <div class="features-top-part">
              <ul class="line-wrap">
                <li class="feature-item">
                  <svg-icon icon-class="feature_7" />
                  <div class="item-title">链游生态体系</div>
                  <p class="item-main">BEEX通证可用来兑换主流币实体矿机，从而构建了BEEX与主流币的转换通道，为BEEX提供可靠的价格支撑与变现途径。</p>
                  <p class="item-summary">BEEX可成为整个生态的流通资产。</p>
                </li>
                <li class="feature-item">
                  <svg-icon icon-class="feature_8" />
                  <div class="item-title">链游生态体系</div>
                  <p class="item-main">BEEX通证可用来兑换主流币实体矿机，从而构建了BEEX与主流币的转换通道，为BEEX提供可靠的价格支撑与变现途径。</p>
                  <p class="item-summary">通证可自由参与众筹，成为股东，通过资本市场赚取巨大回报。</p>
                </li>
                <li class="feature-item">
                  <svg-icon icon-class="feature_9" />
                  <div class="item-title">链游生态体系</div>
                  <p class="item-main">BEEX通证可用来兑换主流币实体矿机，从而构建了BEEX与主流币的转换通道，为BEEX提供可靠的价格支撑与变现途径。</p>
                  <p class="item-summary">同时也可以用以支付购买全球各地的优质产品，</p>
                </li>
              </ul>
            </div>
            <div class="features-bottom-part">
              <ul class="line-wrap">
                <li class="feature-item">
                  <img src="~@/assets/about/bg_1.png" alt="">
                  <div class="item-title">如今计算机技术的应用不断升级迭代</div>
                  <p class="item-main">金融科技对传统金融领域已经全面渗透，在这种趋势下，接受乃至于拥抱这些颠覆式的技术，已成为巨头们为将来的转型作出的共识。</p>
                </li>
                <li class="feature-item">
                  <img src="~@/assets/about/bg_2.png" alt="">
                  <div class="item-title">基于流量端的数字资产投行业务</div>
                  <p class="item-main">BEEX由区块链咨询公司到数字资产投行全面升级，全力发展基于流量端的数字资产投行业务，并推出去中心化资产发行网络STP。</p>
                </li>
                <li class="feature-item">
                  <img src="~@/assets/about/bg_3.png" alt="">
                  <div class="item-title">全球银行金融机构摩肩接踵地拥抱区块链技术</div>
                  <p class="item-main">以比特币为典型代表的数字货币已经对全球金融体系产生了不小的影响，数字货币甚至被预测为今后的主要金融支付工具。</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      navActive: 0,
      navList: [
        {
          value: 0,
          text: '区块链生态是什么？'
        },
        {
          value: 1,
          text: '什么是完全公平的游戏？链生态是什么？'
        },
        {
          value: 2,
          text: '挖矿新玩法'
        },
        {
          value: 3,
          text: '适用多种行业场景，打破泡沫经济'
        },
      ],
      features: [
        {
          title: "获得可以质押的币",
          content: "玩家从交易所或者矿主这里获得相应的币，保证可以充分质押。",
        },
        {
          title: "将币在平台中进行质押",
          content: "将币进行质押，以获得整个平台运营所带来的收益分红。",
        },
        {
          title: "所有玩家盈亏进入分红池",
          content: "整个平台收益将按照约定比例和时间转入分红池。",
        },
        {
          title: "发动更多的人到平台玩游戏",
          content: "玩家四处推广，招揽更多客户进到平台里，将平台做大做强。",
        },
        {
          title: "一天一次分红",
          content: "每天都会进行分红，质押过的玩家按比例获取相应分红收益。",
        },
        {
          title: "随时可以申请解冻质押",
          content: "玩家可以随时在平台中递交解质押请求，只需要24小时即可解冻。",
        },
      ],
      applicationList: [
        {
          title: "影视类消费场景",
          content: "玩家用币充值和消费，适合商户送券送礼品做。",
          img: require('@/assets/about/number_1.png')
        },
        {
          title: "金融交易类产品",
          content: "股票、期货、外汇、黄金、期权等传统金融领",
          img: require('@/assets/about/number_2.png')
        },
        {
          title: "矿机理财类产品",
          content: "购买矿机理财业务，也可以扩展为传统金融理",
          img: require('@/assets/about/number_3.png')
        },
        {
          title: "医疗美容消费类产品",
          content: "玩家用币消费，更适合商户送券送礼品做活动。",
          img: require('@/assets/about/number_4.png')
        },
        {
          title: "传统融资租赁类产品",
          content: "将传统的融资租赁项目搬上区块链，做成资产",
          img: require('@/assets/about/number_5.png')
        },
        {
          title: "跨境支付类类产品",
          content: "利用区块链数字货币的优势，实现跨境支付的",
          img: require('@/assets/about/number_6.png')
        },
      ]
    }
  },
  methods: {
    onScroll(target){
      window.scrollTo(0, this.$refs[`nav_${target}`].offsetTop)
    }
  }
}
</script>

<style lang="scss" scoped>
@mixin hexagon-ab{
  position: absolute;
  left: 0;
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
}

.about{ color: #EEEEEE; padding: 0 20px; position: relative;}
.about-container{ position: relative;}
.decoration-1{
  position: absolute; left: 0; top: 6.4%;
  width: 20%; height: 400px;
  max-width: 400px;
  background: url('~@/assets/about/decoration_1.png') 0 no-repeat;
  background-size: 60%;
}
.decoration-2{
  position: absolute; right: 0; top: 20%;
  width: 20%; height: 300px;
  max-width: 300px;
  background: url('~@/assets/about/decoration_2.png') 100% no-repeat;
  background-size: 60%;
}
.hexagon-l {
  width: 100px; height: 55px;
  background:linear-gradient(169deg,#FBCD00 0%,#F2A926 100%);
  position: absolute;
  left: 78%; top: 9.4%;
  transform: scale(.7);

  &::before {
    content: "";
    @include hexagon-ab;
    top: -24px;
    border-bottom: 25px solid #FBCD00;
    box-shadow: 0px 10px 16px -5px #FBCD00;
  }
  &::after {
    content: "";
    @include hexagon-ab;
    bottom: -24px;
    border-top: 25px solid #F2A926;
    box-shadow: 0px -8px 8px -16px #F2A926;
  }
}
.hexagon-s{
  @extend .hexagon-l;
  left: 72%; top: 8%;
  transform: scale(.45);
  // &::before { top: -2px; }

}

.about-nav{
  background-color: #000;
  position: fixed;
  top: 20%;
  right: 20px;
  width: 63px;
  z-index: 2;
  color: #888;
  font-size: 14px;
  transition: all 500ms;

  &:hover{
    width: 220px;
  }
  
  li{
    position: relative;
    overflow: hidden;
    border-bottom: 1px solid #29292b;

    input{visibility: hidden;}
    label{min-height: 62px; cursor: pointer;}
    .item-main{ transition: all 550ms; word-break: keep-all; }
    .item-index{
      margin-right: 10px;
      font-weight: 600;
      font-size: 24px;
      padding-left: 20px;
    }

    &:last-child{ border: none; }
    &.active{
      color: #eee;

      &::after{
        content: '';
        display: block;
        height: 24px;
        width: 4px;
        background-color: #E7BF28;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
}

.app-title{
  max-width: 1200px;
  font-weight: 400; font-size: 18px;
  margin-top: 40px; margin-bottom: 60px;
  .logo-wrap{
    margin-right: 12px; font-size: 24px; font-weight: 600;
    svg{ width: 1.5em; height: 1.5em; margin-right: 8px;}
  }
}
.about-row-wrap{
  margin-bottom: 200px;
  .content p{ line-height: 2; }
}
.title{ font-size: 2em; font-weight: 400;}

.about-row_1{
  min-height: 560px;
  background: url('~@/assets/about/about-row_1.png') 100% no-repeat;
  background-size: 70%;

  p{ line-height: 1.3; }
  .content{
    margin: 20px 0;
    font-size: 1.8em;
    width: 440px;
  }
  .common-btn{
    font-weight: 400; padding: 20px 30px;
    background:linear-gradient(45deg,rgba(251,205,0,1) 0%,rgba(242,169,38,1) 100%);
    cursor: text; color: #373737;
  }
}
.about-row_2,
.about-row_3,
.about-row_4,
.about-row_5,
.about-row_6{
  .content{
    margin-top: 40px;
    max-width: 500px;
    font-size: 14px;
    color: #BEBEBE;

    .part{ max-width: 230px; }
    p{ margin-bottom: 20px; }
  }
}

.about-row-wrap_2{
  min-height: 650px;
  background: url('~@/assets/about/about-row_2.png') 80% 0 no-repeat;
  background-size: 35%;

  .sub-content{
    min-height: 250px;
    background: url('~@/assets/about/row_2-decoration.png') 50% 100% no-repeat;
  }
}
.about-row-wrap_3{
  min-height: 950px;
  background: url('~@/assets/about/about-row_3.png') 90% 20% no-repeat;
  background-size: 40%;
  padding-top: 50px;
  .about-row_3 > .content{ max-width: 560px; }
  .about-row_3 .part{ max-width: 260px; }

  .description{
    margin-top: 100px;
    display: grid;
    grid-template-columns: 300px 300px;

    .item{
      margin-bottom: 50px;
      padding-right: 50px;
      svg{ width: 56px; height: 56px; margin-bottom: 20px; }
    }
  }
}
.about-row-wrap_4{
  min-height: 1340px;
  margin-bottom: 200px;
  background: url('~@/assets/about/about-row_4.png') 0 0 no-repeat;
  background-size: 42%;

  .about-row_4{
    justify-content: flex-end;
    .content{ max-width: 580px; margin-bottom: 120px;}
    .features{
      display: grid;
      grid-template-columns: 300px 300px;
  
      .item{
        margin-right: 40px;
        margin-bottom: 40px;
  
        .icon-wrap{
          min-height: 56px;
          svg{ width: 56px; height: 56px; }
        }
        .feature-title{ color: #fff; margin: 12px 0;}
        p{ color: #8D8D8D; font-size: 14px;}
      }
    }
  }
}
.about-row-wrap_5{
  min-height: 1000px;
  background: url('~@/assets/about/about-row_5.png') 80% 20% no-repeat;
  background-size: 40%;
  .emphasis{ margin: 40px 0 0 50px}
  .application-list{ padding-left: 26px; }
  .application-item{
    background-color: #2D2D2D;
    padding: 12px 40px;
    max-width: 340px;
    display: inline-block;
    border-radius: 6px;
    color: #F6F7F7;
    margin-bottom: 20px;
    position: relative;

    .application-title{ color: #FAC906; }
    img{
      position: absolute;
      top: 50%; left: 0;
      transform: translate(-55%, -50%);
    }
  }
}

.about-row-wrap_6{
  min-height: 400px;
  .about-row_6{ background: url('~@/assets/about/about-row_6.png') 95% no-repeat; }
  .application-item{
    background-color: #2D2D2D;
    padding: 12px 40px;
    max-width: 340px;
    border-radius: 6px;
    color: #E7BF28;
    margin-bottom: 20px;
    font-size: 1.5em;
    font-weight: 600;
    position: relative;
    transform: translateX(24px);

    img{
      position: absolute;
      top: 50%; left: 0;
      transform: translate(-55%, -50%);
    }
  }
}

.banner{
  background:linear-gradient(143deg,rgba(251,205,0,1) 0%,rgba(242,169,38,1) 100%);
  padding: 40px;
  color: #000;
  .title{ font-weight: 600; margin: 0 20px; }
  p{ width: 65%; }
}

.about-row-wrap_7{
  .about-row{
    > .title{
      margin: 0 auto;
      text-align: center;
      width: 580px;
      font-size: 28px;
      span:last-child{ color: #FAC906; }
    }
  }
  .item-title{ font-size: 1.2em; margin: 20px 0;}
  .item-main{
      line-height: 1.4;
      color: #BEBEBE;
      font-size: 14px;
      margin-bottom: 30px;
    }
  .feature-item{
    min-height: 320px;
    margin-right: 16px;
    background-color: #2D2D2D;
    flex: 1;
    padding: 20px 60px 20px 20px;

    &:last-child{ margin: 0; }
  }
  .features-top-part{
    margin: 80px 0;
    width: 100%;

    .svg-icon{ width: 56px; height: 56px; }
    .item-summary{
      color: #D58B00;
      line-height: 1.5;
      font-size: 14px;
      vertical-align: bottom;
    }
  }
  .features-bottom-part{
    width: 100%;

    .feature-item{ background-color: transparent; padding: 0; min-height: 440px;}
    img{ width: 100%; height: 100%; }
    .item-title{ font-size: 1em; margin: 32px 0;}
  }
}


</style>