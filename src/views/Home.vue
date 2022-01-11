<template>
  <div>
    <Banner></Banner>
    <Banner2></Banner2>
    <div class="description">
      <h3>{{ description.header }}</h3>
      <h1>{{ description.title }}</h1>
      <span>{{ description.subtitle }}</span>
      <div class="heart-voice">
        <img :src="`${description.img}`" alt="" />
        <div>
          <strong>{{ description.ctitle }}</strong>
          <p>
            {{ description.content }}
          </p>
        </div>
      </div>
    </div>

    <div class="innovate">
      <div class="title">{{ innovate[0].title }}</div>
      <div class="sub-title">
        {{ innovate[1].subtitle }}
      </div>

      <div class="innovate-desc-list">
        <div
          v-for="(item, index) in innovate[2].list"
          :key="index"
          class="wow animate__animated animate__slideInUp wrap"
          :data-wow-duration="`${(index + 1) * 0.5}s`"
        >
          <div>
            <img :src="`${item.img}`" alt="" />
          </div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.subtitle }}</p>
        </div>
      </div>
    </div>

    <div
      style="
        background: url('@/assets/images/2021102111501768568520.png') no-repeat;
        background-size: auto 100%;
        background-position: -600px 130px;
      "
    >
      <div class="solution">
        <h3 class="line-title">{{ solution[0].title }}</h3>
        <div class="solution-list">
          <div
            class="wow animate__animated animate__slideInUp wrap"
            :data-wow-duration="`${
              (solution[1].list.length - index + 1) * 0.5
            }s`"
            v-for="(item, index) in solution[1].list"
            :key="index"
          >
            <div>
              <img :src="`${item.img}`" alt="" />
            </div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.subtitle }}</p>
          </div>
        </div>
      </div>

      <div class="advantage" id="advantage">
        <h3 class="line-title">{{ advantage[0].title }}</h3>

        <div class="advantage-box">
          <div class="tab-list">
            <div
              :class="index == tablistnum ? 'active' : ''"
              v-for="(item, index) in advantage[1].list"
              :key="index"
            >
              <h3>{{ item.title }}</h3>
              <p>{{ item.subtitle }}</p>
            </div>
          </div>
          <div
            class="tab-content"
            style="position: relative; width: 515px; height: 515px"
          >
            <img
              :src="`${item.img}`"
              :class="index == tablistnum ? 'active' : ''"
              v-for="(item, index) in advantage[1].list"
              :key="index"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="system-desc">
      <h3 class="line-title">{{ system[0].title }}</h3>

      <div class="system-desc-box">
        <div class="wrap1">
          <div
            class="item"
            v-for="(item, index) in system[1].list"
            :key="index"
          >
            <h3>{{ item.title }}</h3>
            <p>{{ item.subtitle }}</p>
          </div>
        </div>

        <div class="wrap2">
          <div
            class="item"
            v-for="(item, index) in system[1].list2"
            :key="index"
          >
            <h3>{{ item.title }}</h3>
            <p>{{ item.subtitle }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="footer">
      <h3>抖音招商系统重磅上线</h3>
      <a target="_blank" :href="`${b1[0].path}`">{{ b1[0].name }}</a>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
// import { WOW } from "wowjs";
import Banner from "@/components/Banner.vue";
import Banner2 from "@/components/Banner2.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Banner,
    Banner2,
    Footer,
  },
  data() {
    return {
      tablistnum: 0,
      description: {
        header: "橙子星选-抖音招商系统",
        title: "助力伙伴成长、共创未来新生态",
        subtitle: "建立与招商团长的深度合作构建抖音兴趣电商新时代",
        ctitle: "TOP级用户的心声",
        content:
          "从2018年开始用橙子星选SAAS团长招商系统，从当初的阿里招商到后来的京东招商，到现在的抖音招商。橙子星选一直紧跟行业最新发展动态给我们众多TOP级团队企业内部各项管理带来了质的变化，抖音招商新的业务起航希望能和橙子星选一起进行二次变革",
        img: require("@/assets/images/2021102110401365271990.png"),
      },

      solution: [
        { title: "一站式产品解决方案" },
        {
          list: [
            {
              title: "0开发成本",
              subtitle: "0开发成本0门槛秒级拥有企业管理系统",
              img: require("@/assets/images/2021102113365482307765.png"),
            },
            {
              title: "免服务器运维",
              subtitle: "无需技术人员运营维护官方统一运维",
              img: require("@/assets/images/2021102113370485534328.png"),
            },
            {
              title: "招商/推广中台控制",
              subtitle: "系统智能化管理招商/推广中台集中管理控制",
              img: require("@/assets/images/2021102113371324791732.png"),
            },
            {
              title: "移动APP高效招商",
              subtitle: "高效便捷的移动APP提升团长招商效率",
              img: require("@/assets/images/2021102113372033443288.png"),
            },
          ],
        },
      ],
      advantage: [
        {
          title: "橙子星选产品优势",
        },
        {
          list: [
            {
              title: "专业SAAS工具服务商",
              subtitle:
                "橙子星选集淘宝、京东、抖音等多家电商平台专注服务中大型企业级招商团队及媒体机构",
              img: require("@/assets/images/2021102114361510482241.png"),
            },
            {
              title: "数据安全稳定极致体验",
              subtitle:
                "橙子星选多年技术积累，混合云部署，云防火墙，多地互备，服务治理，弹性伸缩能力，全方位监控，为淘客企业业务保驾护航。",
              img: require("@/assets/images/2021102114362996604815.png"),
            },
            {
              title: "洞察市场产品迭代快速",
              subtitle:
                "橙子星选紧跟市场脚步，专业的产品运营团队极速迭代产品需求保驾用户招商需求",
              img: require("@/assets/images/2021102114365564324690.png"),
            },
          ],
        },
      ],
      innovate: [
        { title: "我们用新的产品思维做抖音招商系统" },
        {
          subtitle:
            "对企业管理的每一个角色都进行新的深度思考和重新定义，旨在为抖音团长搭建易用、实用、有用的企业管理系统",
        },
        {
          list: [
            {
              title: "达人",
              subtitle: "签约达人播主，工具化高效管理",
              img: require("@/assets/images/2021102111322870453969.png"),
            },
            {
              title: "商家",
              subtitle: "批量管理商家及商品，工具化高效操作",
              img: require("@/assets/images/2021102111354018465352.png"),
            },
            {
              title: "员工",
              subtitle: "员工统一管理，支持内部外部代理团队",
              img: require("@/assets/images/2021102111355483247849.png"),
            },
            {
              title: "企业",
              subtitle: "企业自定义独立运营网站，支持自定义域名",
              img: require("@/assets/images/2021102111360533707992.png"),
            },
          ],
        },
      ],
      system: [
        { title: "橙子星选行业首家SAAS抖音团长招商管理系统" },
        {
          list: [
            { title: "<200毫秒", subtitle: "服务器平均响应" },
            { title: "4年3个月", subtitle: "稳定运行" },
            { title: "百人级研发团队", subtitle: "专业的技术团队" },
          ],
          list2: [
            {
              title: "安全稳定",
              subtitle:
                "橙子星选多年技术积累，混合云部署，云防火墙，多地互备，服务治理，弹性伸缩能力，全方位监控，为淘客企业业务保驾护航。",
            },
            {
              title: "极致体验",
              subtitle:
                "BGP网络，CDN加速，单页面技术，优秀的端技术，让你的用户无论身在全球何处，均能获得灵活流畅的极致体验。",
            },
            {
              title: "智慧高效",
              subtitle:
                "大数据和人工智能技术，为您提供BI报表，智能客服，精准会员营销等，橙子星选智慧科技助您全面飞跃发展。",
            },
          ],
        },
      ],
      b1: [
        { name: "联系客服订购享超值优惠", path: "" },
        { name: "联系我们", path: "About" },
      ],
    };
  },
  mounted() {
    // new WOW().init();
    this.$nextTick(() => {
      this.$wow.init();
    });
    let _this = this;
    let tablist = document
      .getElementsByClassName("tab-list")[0]
      .getElementsByTagName("div");
    for (let i = 0; i < tablist.length; i++) {
      // console.log(tablist[i]);
      tablist[i].addEventListener(
        "mouseenter",
        function () {
          _this.tablistnum = i;
        },
        false
      );
    }
  },
};
</script>

<style lang="less" scoped>
.description {
  width: 1200px;
  margin: auto;
  padding: 170px 0;
  text-align: left;
  h3 {
    font-weight: 650;
    font-style: normal;
    font-size: 36px;
    color: #ff9b1f;
  }
  h1 {
    font-weight: 400;
    font-style: normal;
    font-size: 60px;
    letter-spacing: 1px;
    color: #000000;
    line-height: 1.7;
  }
  span {
    font-weight: 400;
    font-style: normal;
    font-size: 20px;
  }
  .heart-voice {
    display: flex;
    align-items: center;
    width: 1185px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.2);
    padding: 20px 30px;
    margin-top: 28px;
    img {
      flex-shrink: 0;
      margin-right: 20px;
    }
    strong {
      font-weight: 500;
      font-style: normal;
      font-size: 20px;
    }
    p {
      margin-top: 10px;
      font-weight: 100;
      font-style: normal;
      font-size: 20px;
      color: rgba(0, 0, 0, 0.34901961);
    }
  }
}

.innovate {
  text-align: center;
  padding: 75px 0 150px;
  background: url("../assets/images/2021102111411765922163.png") no-repeat
    center center;
  background-size: auto 70%;
  .title {
    font-weight: 400;
    font-style: normal;
    font-size: 48px;
    letter-spacing: 1px;
    color: #000000;
    line-height: 72px;
  }
  .sub-title {
    font-weight: 400;
    font-style: normal;
    font-size: 20px;
    margin: 30px 0 90px;
  }
  .innovate-desc-list {
    display: flex;
    justify-content: space-between;
    width: 1200px;
    margin: auto;
    .wrap {
      box-sizing: border-box;
      width: 259px;
      height: 377px;
      padding: 55px 25px;
      border-radius: 5px;
      box-shadow: 1px 1px 5px rgba(219, 60, 60, 0.35);
      img {
        margin-top: 40px;
        width: 88px;
      }
      h3 {
        font-weight: 650;
        font-style: normal;
        color: #ffffff;
        font-size: 24px;
        margin: 30px auto;
      }
      p {
        font-weight: 200;
        font-style: normal;
        font-size: 20px;
        color: #ffffff;
        text-align: left;
      }
    }
    .wrap:nth-child(1) {
      background: linear-gradient(
        rgba(251, 202, 148, 1),
        rgba(247, 101, 74, 1)
      );
    }
    .wrap:nth-child(2) {
      background: linear-gradient(
        rgba(252, 190, 184, 1),
        rgba(237, 63, 111, 1)
      );
    }
    .wrap:nth-child(3) {
      background: linear-gradient(
        rgba(106, 236, 232, 1),
        rgba(106, 128, 236, 1)
      );
    }
    .wrap:nth-child(4) {
      background: linear-gradient(
        rgba(181, 171, 244, 1),
        rgba(135, 86, 187, 1)
      );
    }
  }
}
.solution {
  padding: 75px 0 150px;
  .solution-list {
    width: 1200px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    .wrap {
      box-sizing: border-box;
      width: 261px;
      height: 337px;
      padding: 20px 30px 30px;
      background-color: #ffffff;
      border-radius: 5px;
      box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.35);
      div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 168px;
        height: 160px;
        margin: auto;
      }
      h3 {
        font-weight: 400;
        font-style: normal;
        font-size: 22px;
        margin: 25px 0 20px;
        text-align: center;
      }
      p {
        font-weight: 100;
        font-style: normal;
        font-size: 20px;
        color: #574c4c;
      }
      img {
        max-width: 100%;
        display: inline-block;
        border: 0;
      }
    }
  }
}

.advantage {
  padding: 75px 0 150px;
  .advantage-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    width: 1100px;
    img {
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
      width: 515px;
      height: 515px;
      transition: all 0.3s linear;
    }
    img.active {
      opacity: 1;
    }
    .tab-list > div.active {
      background: linear-gradient(270deg, #ffffff 3%, #a1e8d7 147%);
      height: 187px;
      border-radius: 40px 0 0 40px;
    }
    .tab-list > div.active p {
      height: 104px;
      opacity: 1;
    }
    .tab-list > div p {
      margin-top: 12px;
      font-weight: 100;
      font-style: normal;
      font-size: 20px;
      height: 0;
      opacity: 0;
    }
    .tab-list > div h3 {
      font-weight: 400;
      font-style: normal;
      font-size: 22px;
    }
    .tab-list > div:not(:last-child) {
      margin-bottom: 20px;
    }
    .tab-list > div {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 45px;
      width: 408px;
      height: 109px;
      background: linear-gradient(270deg, #ffffff -8%, #f2f6fe 108%);
      border-radius: 100px 0 0 100px;
      transition: all 0.3s linear;
      overflow: hidden;
    }
  }
}

.system-desc {
  overflow: hidden;
  background: #fafbfd;
  padding: 100px 0 40px;
  .system-desc-box {
    width: 1120px;
    margin: auto;
    position: relative;
    .wrap1 {
      margin: 80px auto 30px;
      display: flex;
      justify-content: space-between;
      .item {
        padding: 0 30px;
        h3 {
          font-weight: 650;
          font-size: 32px;
          margin-bottom: 20px;
          position: relative;
        }
        p {
          font-size: 18px;
        }
      }
      .item:nth-child(1) h3 {
        color: #7293f5;
      }
      .item:nth-child(2) h3 {
        color: #3ed0bc;
      }
      .item:nth-child(3) h3 {
        color: #fad532;
      }
    }
    .wrap2 {
      display: flex;
      justify-content: space-between;
      box-sizing: border-box;
      width: 1120px;
      height: 171px;
      background: #02cc96;
      border-radius: 5px;
      .item {
        padding: 20px 30px;
        color: #fff;
        width: 330px;
        text-align: left;
        h3 {
          font-size: 18px;
          font-weight: 650;
          margin: 20px 0;
        }
        p {
          font-size: 14px;
        }
      }
    }
  }
  .system-desc-box:after {
    content: "";
    position: absolute;
    width: 124px;
    height: 122px;
    background: url("../assets/images/2021110211490356586512.png") no-repeat;
    right: -140px;
    top: -193px;
  }
  .system-desc-box:before {
    content: "";
    position: absolute;
    width: 124px;
    height: 122px;
    background: url("../assets/images/2021110211483454921542.png") no-repeat;
    left: -140px;
    bottom: -30px;
  }
}
.footer {
  height: 280px;
  background-color: #250049;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  h3 {
    font-weight: 650;
    font-style: normal;
    font-size: 30px;
    color: #fff8f8;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 315px;
    height: 49px;
    background-color: #f74646;
    border-radius: 50px;
    font-weight: 400;
    font-style: normal;
    font-size: 18px;
    color: white;
    text-decoration: none;
  }
}
.line-title {
  position: relative;
  font-weight: 650;
  font-style: normal;
  font-size: 30px;
  color: #333333;
  text-align: center;
  margin-bottom: 60px;
}
.line-title:before {
  content: "";
  position: absolute;
  width: 70px;
  height: 3px;
  background: #02cc96;
  bottom: -25px;
  left: 50%;
  transform: translateX(-50%);
}
</style>