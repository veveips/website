<template>
  <div>
    <div class="banner bottom-line">
      <div>
        <h1>橙子星选管理系统，基于招商、推广一体化多维管理平台</h1>
        <p class="desc">
          集招商团长/二级团长/主播达人/商务BD多维一体化管理运营平台，能够通过大咖推系统一键将商品分发给主播达人、二级团长，最终实现商品精准分发，数据系统自动精准核算，提升招商团队推广效率和运营效率
        </p>

        <a href="javascript:void(0)" class="video-btn">观看宣传视频</a>
      </div>

      <div>
        <img class="pc-img" src="@/assets/images/img-01.png" alt="" />

        <div class="phone-box">
          <div class="phone-content">
            <img src="@/assets/images/phone-content.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>

    <div class="minutia block-module">
      <h1>每个细节，都是为您提升效率</h1>
      <div>
        <div class="minutia-item">
          <img src="@/assets/images/icon-09.jpg" alt="" />
          <h3>二级团长管理</h3>
          <p>
            系统将抖音后台的二级团长及二级团长下的活动自动同步到系统内，大咖推系统支持一键将商品提报给多个团长，提升提报效率。
          </p>
        </div>
        <div class="minutia-item">
          <img src="@/assets/images/icon-110.png" alt="" />
          <h3>推广达人管理</h3>
          <p>
            系统支持自动同步主播达人和手动一键EXCEL导入两种方式，支持为达人添加寄样管理，样品物流信息自动跟踪进度。
          </p>
        </div>
        <div class="minutia-item">
          <img src="@/assets/images/icon-111.png" alt="" />
          <h3>小程序/APP/H5推广</h3>
          <p>
            推广商务BD可将自己看中的商品加入到一个商品组，并且生成一个推广专辑，商务BD可将商品生成H5推广单页推送达人，便于达人选品。
          </p>
        </div>
        <div class="minutia-item">
          <img src="@/assets/images/icon-12.png" alt="" />
          <h3>集中选品集中打爆</h3>
          <p>
            推广商务BD可在选品广场选择招商专员招来的商品，告别杂乱无序的上传商品选品管理方式，构建完善高效一体化的选品推送方式。
          </p>
        </div>
      </div>
    </div>

    <div class="distribute-function">
      <div class="block-module">
        <div class="left">
          <h3>高效商品分发模块</h3>

          <div class="distribute-tabs">
            <div
              :class="index == activemodel ? 'active' : ''"
              v-for="(item, index) in model"
              :key="index"
              @click="modelclick(index)"
            >
              <h4>{{ item.title }}</h4>
              <p>{{ item.subtitle }}</p>
            </div>
          </div>
        </div>
        <div class="distribute-tabs-content">
          <div
            v-for="(item, index) in model"
            :key="index"
            :class="index == activemodel ? 'active' : ''"
          >
            <img :src="`${item.img}`" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="business-scenario block-module bottom-line">
      <h1>产品+数据同步驱动，从你的业务场景开始</h1>
      <p class="title-desc">
        不论你是招商人员、推广人员、外部代理团队人员、还是企业管理人员，都能找到契合使用场景的业务解决方案。
      </p>
      <div class="tabs">
        <div
          v-for="(item, index) in bus"
          :key="index"
          class="tab-item"
          :class="index == activebus ? 'active' : ''"
          @click="busclick(index)"
        >
          {{ item.title }}
        </div>
      </div>
      <div class="tabs-content">
        <div
          v-for="(item, index) in bus"
          :key="index"
          :class="index == activebus ? 'active' : ''"
        >
          <img :src="`${item.img}`" alt="" style="width: 620px" />
          <div class="content">
            <h3>{{ item.title }}</h3>
            <p class="desc">
              {{ item.subtitle }}
            </p>

            <div
              class="introduce"
              v-for="(item2, index2) in item.biref"
              :key="index2"
            >
              <strong>{{ item2.title }}</strong>
              <p>
                {{ item2.subtitle }}
              </p>
            </div>
          </div>
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
  data() {
    return {
      activemodel: 0,
      model: [
        {
          title: "分发给二级团长",
          subtitle:
            "大咖推系统内支持将多个商品一键高效提报给一个达人，同时也支持一键将一个商品同时提报给多个达人",
          img: require("@/assets/images/img-04.png"),
        },
        {
          title: "分发给主播达人",
          subtitle:
            "系统支持将商品自由组合成一个推广组，支持将商品多维度的方式推荐给达人，EXCEL模式、生成H5选品单页，降低达人选品成本。",
          img: require("@/assets/images/img-03.png"),
        },
      ],
      activebus: 0,
      bus: [
        {
          title: "招商专员",
          subtitle:
            "招商专员找寻优质的商家资源，提报团长活动审核商品质量、协商产品优惠力度和推广佣金细节。",
          biref: [
            {
              title: "*活动发布，商品审核，夸平台交互",
              subtitle:
                "招商员工无需进入抖音后台，直接在后台可完成“活动发布”“商品审核”工作。",
            },
            {
              title: "*系统全自动同步活动，同步商品",
              subtitle:
                "招商系统自动同步抖音后台活动和商品，无需招商专员其他导出操作。",
            },
            {
              title: "*数据成交订单同步，多维度提供榜单数据，员工工资精准核算",
              subtitle:
                "招商系统自动同步抖音成交订单，无需招商专员其他导出操作，多维度分析数据",
            },
          ],
          img: require("@/assets/images/img-10.png"),
        },
        {
          title: "推广商务BD",
          subtitle:
            "告别事倍功半的推广模式，精准定位管理主播达人和二级团长，模块化推广运营管理，让推广运营大有可为。",
          biref: [
            {
              title: "*达人管理，达人录入，商品分发给“主播达人”",
              subtitle:
                "招商员工无需进入抖音后台，直接在后台可完成“活动发布”“商品审核”工作。",
            },
            {
              title: "*二级团长管理，商品分发给“二级团长”",
              subtitle:
                "招商系统自动同步抖音后台活动和商品，无需招商专员其他导出操作。",
            },
            {
              title: "*数据成交订单同步，多维度提供榜单数据，员工工资精准核算",
              subtitle:
                "达人订单、二级团长订单数据精准统计，商务BD工资自动计算",
            },
          ],
          img: require("@/assets/images/img-11.png"),
        },
        {
          title: "团队管理者",
          subtitle:
            "管理是一门学问，优秀的企业管理工具能助力管理者高效管理企业内各个角色，招商团长业务，从“招商”到“推广”每一个环节都需要精细化管理。",
          biref: [
            {
              title: "*企业管理",
              subtitle:
                "支持独立或二级域名配置，员工无感知任何大咖推相关信息，提升员工认同感",
            },
            {
              title: "*角色权限清晰",
              subtitle:
                "系统角色清晰，数据拆分清晰，上级看下级数据，员工看自己数据。",
            },
            {
              title: "*团队管理",
              subtitle:
                "系统支持内外部团队设置，支持多级管理，数据互补干扰，老板中台集中管理",
            },
          ],
          img: require("@/assets/images/1640685850811.png"),
        },
      ],
    };
  },
  mounted() {
    setInterval(() => {
      this.activebus += 1;
      if (this.activebus >= this.bus.length) {
        this.activebus = 0;
      }
    }, 5000);
  },
  methods: {
    modelclick(index) {
      this.activemodel = index;
    },
    busclick(index) {
      this.activebus = index;
    },
  },
};
</script>

<style lang="less" scoped>
.banner {
  padding-top: 75px;
  text-align: center;
  cursor: #fff;
  h1 {
    font-weight: 650;
    font-style: normal;
    font-size: 40px;
    color: #ffffff;
    padding: 70px 0 30px;
  }
  p {
    padding: 0 110px;
    max-width: 1200px;
    margin: auto;
    font-style: normal;
    font-size: 16px;
    color: #ffffff;
    text-align: center;
    line-height: 35px;
  }
  .video-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 40px;
    margin: 20px auto 10px;
    background-color: rgba(255, 255, 255, 0.97254902);
    border-radius: 100px;
    font-weight: 500;
    color: #0ccda5;
  }
  .desc {
    // padding: 0 30px;
  }
}
.banner > div:first-child {
  height: 623px;
  background: linear-gradient(114.02022959deg, #07d39a 7%, #12c3b5 106%);
}
.banner > div:last-child {
  margin: -300px auto auto;
  position: relative;
  width: 1200px;
  padding-bottom: 100px;
  .pc-img {
    width: 1000px;
  }
  .phone-box {
    box-sizing: border-box;
    position: absolute;
    top: 90px;
    right: 102px;
    width: 225px;
    height: 491px;
    background: url("../assets/images/phone.png") no-repeat;
    background-size: contain;
    padding: 30px 5px 15px;
    overflow: hidden;
    .phone-content {
      overflow: hidden;
      height: 436px;
      border-radius: 5px;
      img {
        width: 100%;
        animation: phoneScroll 5s ease-in-out infinite alternate;
      }
    }
  }
}

@keyframes phoneScroll {
  from {
    margin-top: 0;
  }
  to {
    margin-top: -850px;
  }
}

.distribute-function {
  background: #f9fafc;
  img {
    // padding: 0 0px;
    width: 85%;
  }
  .block-module {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
      padding-left: 80px;
      h3 {
        font-weight: 650;
        font-style: normal;
        font-size: 25px;
        color: #333333;
      }
      .distribute-tabs {
        margin-top: 30px;
      }
      .distribute-tabs > div {
        padding: 20px 30px;
        width: 330px;
        border-right: 4px solid #c6c7c9;
        cursor: pointer;
      }
      .distribute-tabs > div h4 {
        line-height: 1;
        font-weight: 650;
        font-style: normal;
        color: #333;
        font-size: 18px;
      }
      .distribute-tabs > div p {
        margin-top: 20px;
        font-style: normal;
        font-size: 13px;
        color: rgba(15, 0, 0, 0.52941176);
        line-height: 23px;
      }
      .distribute-tabs > div.active {
        background: #edfbf7;
        border-color: #0ccda5;
      }
      .distribute-tabs > div.active h4 {
        color: #0ccda5;
      }
      .distribute-tabs > div.active p {
        color: rgba(51, 51, 51, 0.9372549);
      }
    }
    .distribute-tabs-content {
      width: 743px;
    }
    .distribute-tabs-content > div {
      display: none;
    }
    .distribute-tabs-content > div.active {
      display: block;
    }
  }
}
.block-module {
  width: 1200px;
  margin: auto;
  padding: 70px 0;
}
.business-scenario h1 {
  position: relative;
}
.business-scenario h1:before {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -20px;
  transform: translateX(-50%);
  width: 85px;
  height: 3px;
  border-radius: 4px;
  background-color: #57db9b;
}
.business-scenario .title-desc {
  margin-top: 50px;
  font-size: 15px;
  text-align: center;
  line-height: 32px;
  color: #333333;
}
.business-scenario .tabs {
  display: flex;
  background: #f9fafc;
  border-radius: 3px;
  padding: 12px 30px;
  width: 530px;
  margin: 32px auto;
  justify-content: space-between;
}
.business-scenario .tabs .tab-item {
  color: rgba(15, 0, 0, 0.52941176);
  font-size: 20px;
  font-weight: 500;
  padding: 8px 30px;
  cursor: pointer;
}
.business-scenario .tabs .tab-item.active {
  background: #fff;
}
.business-scenario .tabs-content > div {
  display: none;
  justify-content: space-between;
}
.business-scenario .tabs-content > div .content {
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 40px;
  width: 575px;
}
.business-scenario .tabs-content > div .content h3 {
  font-weight: 650;
  font-style: normal;
  color: #00c386;
  font-size: 28px;
}
.business-scenario .tabs-content > div .content .desc {
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  line-height: 24px;
  color: #333333;
  margin: 10px 0;
}
.business-scenario .tabs-content > div .content .introduce {
  line-height: 35px;
  margin-bottom: 10px;
}
.business-scenario .tabs-content > div .content .introduce strong {
  font-size: 18px;
  font-weight: 650;
  font-style: normal;
}
.business-scenario .tabs-content > div .content .introduce p {
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  color: rgba(15, 0, 0, 0.52941176);
}
.business-scenario .tabs-content > div.active {
  display: flex;
}
.minutia {
  width: 1200px;
}
.minutia h1 {
  margin-bottom: 90px;
}
.minutia > div {
  display: flex;
  justify-content: space-between;
}
.minutia > div .minutia-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 213px;
}
.minutia > div .minutia-item img {
  width: 80px;
  height: 80px;
}
.minutia > div .minutia-item h3 {
  font-size: 18px;
  font-weight: 650;
  color: #333333;
  margin: 22px 0;
}
.minutia > div .minutia-item p {
  font-size: 13px;
  letter-spacing: 0.3px;
  color: rgba(15, 0, 0, 0.52941176);
  line-height: 27px;
}

distribute-function {
  background: #f9fafc;
}
.distribute-function .block-module {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.distribute-function .block-module .left {
  padding-left: 80px;
}
.distribute-function .block-module .left h3 {
  font-weight: 650;
  font-style: normal;
  font-size: 25px;
  color: #333333;
}
.distribute-function .block-module .left .distribute-tabs {
  margin-top: 30px;
}
.distribute-function .block-module .left .distribute-tabs > div {
  padding: 20px 30px;
  width: 330px;
  border-right: 4px solid #c6c7c9;
  cursor: pointer;
}
.distribute-function .block-module .left .distribute-tabs > div h4 {
  line-height: 1;
  font-weight: 650;
  font-style: normal;
  color: #333;
  font-size: 18px;
}
.distribute-function .block-module .left .distribute-tabs > div p {
  margin-top: 20px;
  font-style: normal;
  font-size: 13px;
  color: rgba(15, 0, 0, 0.52941176);
  line-height: 23px;
}
.distribute-function .block-module .left .distribute-tabs > div.active {
  background: #edfbf7;
  border-color: #0ccda5;
}
.distribute-function .block-module .left .distribute-tabs > div.active h4 {
  color: #0ccda5;
}
.distribute-function .block-module .left .distribute-tabs > div.active p {
  color: rgba(51, 51, 51, 0.9372549);
}
.distribute-function .block-module .distribute-tabs-content {
  width: 743px;
}
.distribute-function .block-module .distribute-tabs-content > div {
  display: none;
}
.distribute-function .block-module .distribute-tabs-content > div.active {
  display: block;
}
</style>