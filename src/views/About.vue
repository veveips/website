<template>
  <div>
    <div class="header">
      <h1>专注服务招商团长</h1>
      <h3>助力招商团长-更好的服务商家/达人实现互利共赢</h3>
    </div>
    <div class="to-user-letter">
      <h3>橙子星选：</h3>
      <p>
        成都轻淘众云网络科技有限公司（简称：轻淘众云），成立于2020年8月，位于四川省成都市国家级高新技术产业园区，创业团队由来自于大淘客轻淘客联合创始人及部分高管团队组成，专注淘宝客电商生态服务六年，以淘客数字化建设运营和淘客生态圈电商服务为使命，实现电商导购生态用户数字化转型升级，赋能淘宝客电商服务，致力于成为电商导购生态中最具影响力最受尊敬的一站式电商数字化解决方案供应商。
      </p>
      <p>
        橙子星选（dakatui.com）源于抖音团长业务，成于轻淘众云团队。轻淘众云团队基于对淘客行业招商业务深度理解和思考，不断革新突破并投入巨大资源，以淘客行业数字化建设和赋能为契机，全身心打造橙子星选电商企业SAAS服务平台。2021年抖音招商数字化管理系统应运而生，轻淘众云团队推出行业内首款基于抖音电商生态的招商管理系统---橙子星选抖音招商管理系统（含web/app端）---为招商淘客用户在人员管理、商品管理、业务结算、达人管理等方面，提供一整套运营高效的OA业务操作平台。
      </p>
    </div>
    <div class="develop-course">
      <h3 class="title">我们的发展历程</h3>

      <div class="course">
        <div>
          <h4>2015年8月</h4>
          <p>
            成都小蟾科技"轻淘客"成立，轻淘客插件 1.0
            版本上线，为推广淘客提供“查佣金”，“创鹊桥”，“转链接”，上线三个月得到众多用户好评；
          </p>
        </div>
        <div>
          <h4>2016年3月</h4>
          <p>
            三月，轻淘客选品平台上线，配合轻淘客插件，为推广淘客解决了，找好品，推爆品的工作，成为行业圈首个插件+选品平台的内容型平台；
          </p>
        </div>
        <div>
          <h4>2016年5月</h4>
          <p>
            同年五月，轻淘客上线行业圈首款“CMS导购网站系统”，同月“轻淘客”和“大淘客”达成战略合作，为大淘客提供技术支撑完成CMS导购网站系统上线工作；
          </p>
        </div>
        <div>
          <h4>2018年12月</h4>
          <p>2018年轻淘客凭借多年的工具经验“爆品推招商系统”上线</p>
        </div>
        <div>
          <h4>2019年12月</h4>
          <p>
            2019爆品推上线一年以来，使用团队数超过1000家团队，合计帮助招商团队管理4W+员工，为招商团队招商效率，提升40%以上
          </p>
        </div>
        <div>
          <h4>2020年</h4>
          <p>
            2020年，爆品推上线企业CMS网站，为用户搭建一套属于自己的选品库和放单系统，赢得众多TOP级用户使用
          </p>
        </div>
        <div>
          <h4>2021年11月1日</h4>
          <p>
            直播短视频爆发的一年，抖音上线抖音招商团长业务，橙子星选同步上线抖音团长招商管理系统
          </p>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Footer,
  },
};
</script>

<style lang="less" scoped>
* {
  padding: 0;
  margin: 0;
}
.header {
  height: 460px;
  background: #15d69e;
  color: #fff;
  text-align: center;
  h1 {
    font-weight: 650;
    font-style: normal;
    color: #f0efef;
    font-size: 32px;
    padding: 200px 0 30px;
    margin: 0;
  }
  h3 {
    font-size: 24px;
    font-weight: 650;
    font-style: normal;
    color: #f0efef;
  }
}
.to-user-letter {
  text-align: left;
  box-sizing: border-box;
  width: 1120px;
  margin: -100px auto 0;
  padding: 40px 100px;
  background: #eef7fc;
  border-radius: 5px;
  h3 {
    font-weight: 650;
    font-style: normal;
    color: #000000;
    font-size: 24px;
  }
  p {
    text-indent: 2em;
    font-size: 18px;
    color: #797979;
    line-height: 32px;
    margin-top: 40px;
  }
}
.develop-course {
  padding: 60px 0;
  .title {
    text-align: center;
    font-weight: 650;
    font-style: normal;
    color: #15d69e;
    font-size: 32px;
  }
  .course {
    width: 325px;
    margin: 40px auto 0;
    position: relative;
    left: 125px;
    div:first-child h4:after {
      content: "";
      box-sizing: border-box;
      position: absolute;
      width: 50px;
      height: 50px;
      top: 50%;
      left: -75px;
      transform: translateY(-50%);
      border: 1px solid #15d69e;
      border-radius: 50px;
    }
    div:last-child p:after {
      content: "";
      position: absolute;
      border-top: 8px solid #15d69e;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      bottom: 0;
      left: -58px;
    }
    div {
      text-align: left;
      h4 {
        font-size: 20px;
        color: #15d69e;
        font-style: normal;
        font-weight: 400;
        padding: 15px 0;
        margin: 0;
        position: relative;
      }
      h4:before {
        content: "";
        position: absolute;
        width: 20px;
        height: 20px;
        background: #15d69e;
        border-radius: 50px;
        left: -60px;
        top: 50%;
        transform: translateY(-50%);
      }
      p {
        height: 110px;
        font-size: 14px;
        position: relative;
        margin: 0;
        color: #333333;
      }
      p:before {
        content: "";
        position: absolute;
        left: -50px;
        top: 0;
        bottom: 0;
        width: 1px;
        background: #15d69e;
      }
    }
  }
}
</style>