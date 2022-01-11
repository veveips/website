<template>
  <div>
    <div class="banner">
      <div class="propaganda">
        <h1>橙子星选抖音团长招商管理SAAS系统</h1>
        <p>
          抖音招商，从招商端到商家端、如何做到细致的商家服务管理、从推广端到达人直播端，如何根据达人需求进行精准推荐，很多细节需要对接，单纯靠人力来做工作会非常繁琐。橙子星选为招商企业搭建内部管理平台，实现团长业务全流程整合，保证各部门工作顺利流转，提高人效。
        </p>

        <a href="javascript:void(0)" class="banner-btn show-video-btn"
          >观看宣传视频</a
        >
      </div>
    </div>
    <div class="system-introduce">
      <h2>全角色、多维度、全链路的SAAS系统</h2>

      <div class="swiper-navs">
        <div
          :class="index == systemindex ? 'active' : ''"
          v-for="(item, index) in system"
          :key="index"
          @click="systemclick(index)"
        >
          {{ item.title }}
        </div>
      </div>

      <div class="swiper-content">
        <div
          class="flex-row"
          :class="index == systemindex ? 'active' : ''"
          v-for="(item, index) in system"
          :key="index"
        >
          <img :src="`${item.img}`" alt="" style="border-radius: 15px" />
          <div>
            <h3>{{ item.subtitle }}</h3>
            <div v-for="(item2, index2) in item.biref" :key="index2">
              {{ item2 }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="function-introduce">
      <h2>在每一个角色中感知业务的深度细节，让招商高效</h2>

      <div class="function-list">
        <div
          class="function-list-item"
          v-for="(item, index) in intro"
          :key="index"
        >
          <img class="img" :src="`${item.img}`" alt="" />
          <div>{{ item.title }}</div>
          <div class="mask">
            <div class="title">{{ item.title }}</div>
            <p class="desc">
              {{ item.subtitle }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="special">
      <h3 class="special-title">橙子星选抖音招商系统【特色亮点功能】</h3>

      <div style="width: 1120px; margin: auto">
        <div class="special-navs">
          <div
            class=""
            :class="index == specialindex ? 'active' : ''"
            v-for="(item, index) in special"
            :key="index"
            @click="specialclick(index)"
          >
            {{ item.header }}
          </div>
        </div>

        <div class="special-content">
          <div
            class="flex-row"
            :class="index == specialindex ? 'active' : ''"
            v-for="(item, index) in special"
            :key="index"
          >
            <div>
              <h1>{{ item.title }}</h1>
              <span class="desc">{{ item.midtitle }}</span>
              <h3>{{ item.subtitle }}</h3>
              <div style="margin-top: 40px">
                <p v-for="(item2, index2) in item.biref" :key="index2">
                  {{ item2 }}
                </p>
              </div>
            </div>
            <img
              class="img"
              src="http://thumbnail.qingtaoke.com/img/bpt_zs_pic/202111/2021112510585668015265.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <div class="function-introduce">
      <h2>橙子星选功能介绍</h2>

      <table class="function-table">
        <thead style="color: #ffffff">
          <tr>
            <th
              style="background-color: #403e41; text-align: center"
              width="16%"
              class="per-4"
            >
              功能介绍
            </th>
            <th
              style="background-color: #403e41; text-align: center"
              width="14%"
              class="per-4"
            >
              功能列表
            </th>
            <th
              style="background-color: #403e41; text-align: center"
              width="50%"
              class="per-4"
            >
              详细说明
            </th>
            <th
              width="10%"
              style="background-color: #403e41; text-align: center"
            >
              功能状态
            </th>
          </tr>
        </thead>
        <tbody id="vip-feature-list" class="txt-center">
          <tr>
            <td rowspan="1">招商工具</td>
            <td>橙子星选抖音招商助手</td>
            <td>
              集团长活动自动/手动创建，发布，和团长数据联动于一体管理的招商系统辅助工具
            </td>
            <td class="txt-center">
              <img
                src="/images/v3-0/3-3/vip33.png?=20211109001"
                style="display: inline-block"
                alt=""
              />
            </td>
          </tr>
          <tr>
            <td rowspan="4">概况数据</td>
            <td>商品管理展示</td>
            <td>团队商品数据统计展示，清晰了解团队每日商品数据</td>
            <td class="txt-center">
              <img
                src="/images/v3-0/3-3/vip33.png?=20211109001"
                style="display: inline-block"
                alt=""
              />
            </td>
          </tr>
          <tr>
            <td>商品推广数据展示</td>
            <td>平台渠道商品推广数据统计展示，实时知晓团队每日商品推广数据</td>
            <td class="txt-center">
              <img
                src="/images/v3-0/3-3/vip33.png?=20211109001"
                style="display: inline-block"
                alt=""
              />
            </td>
          </tr>
          <tr>
            <td>业绩排行榜</td>
            <td>
              商品、店铺、团队、员工业绩昨日，今日，本月，上月数据排行展示，一目了然团队业绩情况
            </td>
            <td class="txt-center">
              <img
                src="/images/v3-0/3-3/vip33.png?=20211109001"
                style="display: inline-block"
                alt=""
              />
            </td>
          </tr>
          <tr>
            <td>业绩投屏</td>
            <td>
              员工今日业绩前三突出展示，员工业绩昨日，今日，本月数据滚动投放，团队本月业绩排名，有效增加团队竞争力！
            </td>
            <td class="txt-center">
              <img
                src="/images/v3-0/3-3/vip33.png?=20211109001"
                style="display: inline-block"
                alt=""
              />
            </td>
          </tr>
          <tr>
            <td rowspan="3">抖音团长招商</td>
            <td>活动发布</td>
            <td>
              在线发布团长活动，保留活动发布基本设置，实现快捷高效的秒级团长活动发布
            </td>
            <td class="txt-center">
              <img
                src="/images/v3-0/3-3/vip33.png?=20211109001"
                style="display: inline-block"
                alt=""
              />
            </td>
          </tr>
          <tr>
            <td>活动广场</td>
            <td>
              绑定团长账号的团长全部活动发布数据，支持活动ID、活动状态、对接人/团队、活动时间等高级搜索，支持活动链接复制取链
            </td>
            <td class="txt-center">
              <img
                src="/images/v3-0/3-3/vip33.png?=20211109001"
                style="display: inline-block"
                alt=""
              />
            </td>
          </tr>
          <tr>
            <td>商品列表</td>
            <td>
              商品在线审核，实时佣金变化监控提醒，从预告、商品推广中、商品推广结束、商品结算、无效商品多种分类统一管理团长商品
            </td>
            <td class="txt-center">
              <img
                src="/images/v3-0/3-3/vip33.png?=20211109001"
                style="display: inline-block"
                alt=""
              />
            </td>
          </tr>
          <tr>
            <td rowspan="3">抖音推广管理</td>
            <td>选品推广管理</td>
            <td>
              达人商品推广管理，高效中台管理达人推广商品，实时掌握达人推广详情
            </td>
            <td class="txt-center">
              <img
                src="/images/v3-0/3-3/vip33.png?=20211109001"
                style="display: inline-block"
                alt=""
              />
            </td>
          </tr>
          <tr>
            <td>推广达人管理</td>
            <td>
              系统支持自由录入达人信息，高效管理达人支持批量为达人寄样商品
            </td>
            <td class="txt-center">
              <img
                src="/images/v3-0/3-3/vip33.png?=20211109001"
                style="display: inline-block"
                alt=""
              />
            </td>
          </tr>
          <tr>
            <td>样品跟踪管理</td>
            <td>
              达人样品物流信息实时跟中，一键查询所有物流到货情况，寄样回寄流转数据清晰
            </td>
            <td class="txt-center">
              <img
                src="/images/v3-0/3-3/vip33.png?=20211109001"
                style="display: inline-block"
                alt=""
              />
            </td>
          </tr>
          <tr>
            <td rowspan="6">抖音订单统计</td>
            <td>订单明细</td>
            <td>
              每小时更新团长商品订单数据，准确掌握团长商品成交情况。支持活动ID、商品ID、对接人等多信息搜索功能
            </td>
            <td class="txt-center">
              <img
                src="/images/v3-0/3-3/vip33.png?=20211109001"
                style="display: inline-block"
                alt=""
              />
            </td>
          </tr>
          <tr>
            <td>商品排行榜</td>
            <td>
              实时查看“今日，昨日，本月，上月、以及自定义时间段”商品跑量排行；
            </td>
            <td class="txt-center">
              <img
                src="/images/v3-0/3-3/vip33.png?=20211109001"
                style="display: inline-block"
                alt=""
              />
            </td>
          </tr>
          <tr>
            <td>店铺排行榜</td>
            <td>
              实时查看“今日，昨日，本月，上月、以及自定义时间段”店铺跑量排行；
            </td>
            <td class="txt-center">
              <img
                src="/images/v3-0/3-3/vip33.png?=20211109001"
                style="display: inline-block"
                alt=""
              />
            </td>
          </tr>
          <tr>
            <td>员工排行榜</td>
            <td>
              实时查看“今日，昨日，本月，上月、以及自定义时间段”员工跑量排行；
            </td>
            <td class="txt-center">
              <img
                src="/images/v3-0/3-3/vip33.png?=20211109001"
                style="display: inline-block"
                alt=""
              />
            </td>
          </tr>
          <tr>
            <td>团队排行榜</td>
            <td>
              实时查看“今日，昨日，本月，上月、以及自定义时间段”团队跑量排行；
            </td>
            <td class="txt-center">
              <img
                src="/images/v3-0/3-3/vip33.png?=20211109001"
                style="display: inline-block"
                alt=""
              />
            </td>
          </tr>
          <tr>
            <td>账号排行榜</td>
            <td>
              实时查看“今日，昨日，本月，上月、以及自定义时间段”账号跑量排行；
            </td>
            <td class="txt-center">
              <img
                src="/images/v3-0/3-3/vip33.png?=20211109001"
                style="display: inline-block"
                alt=""
              />
            </td>
          </tr>

          <tr>
            <td rowspan="2">绩效管理</td>
            <td>工资自动核算</td>
            <td>
              每天更新联盟团长工资数据，通过联盟技术支持精准计算每月团长服务费结算数据，细化到员工每一位员工和每一个商品，支持单员工店铺和商品独立查看核算
            </td>
            <td class="txt-center">
              <img
                src="/images/v3-0/3-3/vip33.png?=20211109001"
                style="display: inline-block"
                alt=""
              />
            </td>
          </tr>
          <tr>
            <td>绩效统计</td>
            <td>
              系统自动统计每个子账号的所有业绩数据、系统在线时长、商品招商情况、结算情况、商品未结算情况
            </td>
            <td class="txt-center">
              <img
                src="/images/v3-0/3-3/vip33.png?=20211109001"
                style="display: inline-block"
                alt=""
              />
            </td>
          </tr>

          <tr>
            <td rowspan="2">培训公告</td>
            <td>通知公告</td>
            <td>
              企业内部公告系统，母账号，组长账号可以自由控制给成员发送公告
            </td>
            <td class="txt-center">
              <img
                src="/images/v3-0/3-3/vip33.png?=20211109001"
                style="display: inline-block"
                alt=""
              />
            </td>
          </tr>
          <tr>
            <td>培训知识库</td>
            <td>属于企业内部自己的知识库，主账号，子账号都可以添加招商知识</td>
            <td class="txt-center">
              <img
                src="/images/v3-0/3-3/vip33.png?=20211109001"
                style="display: inline-block"
                alt=""
              />
            </td>
          </tr>

          <tr>
            <td rowspan="3">团队管理</td>
            <td>账号管理</td>
            <td>
              支持多团长账号同时绑定，在线管理员工账号发布活动权限和各团长账号活动发布数量权限，
            </td>
            <td class="txt-center">
              <img
                src="/images/v3-0/3-3/vip33.png?=20211109001"
                style="display: inline-block"
                alt=""
              />
            </td>
          </tr>
          <tr>
            <td>员工管理</td>
            <td>
              系统支持设置分公司，支持设置外部团队分成比例
              ，外部团队可自由添加下属员工，母账号可智能化管控下属分公司，团长活动发布数量等内容；
            </td>
            <td class="txt-center">
              <img
                src="/images/v3-0/3-3/vip33.png?=20211109001"
                style="display: inline-block"
                alt=""
              />
            </td>
          </tr>
          <tr>
            <td>角色管理</td>
            <td>
              根据团队内部情况快速分配每个角色的权益，如：招商、财务、上单、结算等多种角色，独立权限保障数据安全
            </td>
            <td class="txt-center">
              <img
                src="/images/v3-0/3-3/vip33.png?=20211109001"
                style="display: inline-block"
                alt=""
              />
            </td>
          </tr>

          <tr>
            <td rowspan="6">企业自定义服务</td>
            <td>团队人数</td>
            <td>团队人数限制</td>
            <td class="txt-center">
              <img
                src="/images/v3-0/3-3/vip33.png?=20211109001"
                style="display: inline-block"
                alt=""
              />
            </td>
          </tr>
          <tr>
            <td>域名</td>
            <td>
              设置公司独有属于自己的专属域名，员工直接使用自己公司的专属域名登录系统
            </td>
            <td class="txt-center">
              <img
                src="/images/v3-0/3-3/vip33.png?=20211109001"
                style="display: inline-block"
                alt=""
              />
            </td>
          </tr>
          <tr>
            <td>公司Logo</td>
            <td>
              自由上传公司自己的Logo图标，保障公司Logo和使用系统Logo保持一致性
            </td>
            <td class="txt-center">
              <img
                src="/images/v3-0/3-3/vip33.png?=20211109001"
                style="display: inline-block"
                alt=""
              />
            </td>
          </tr>
          <tr>
            <td>公司名称</td>
            <td>
              支持设置公司名称，将系统设置成自己的公司名称，系统将变成您公司“自己的系统”。彰显公司强大实力，以及增加员工对公司的认同感和信服感。
            </td>
            <td class="txt-center">
              <img
                src="/images/v3-0/3-3/vip33.png?=20211109001"
                style="display: inline-block"
                alt=""
              />
            </td>
          </tr>
          <tr>
            <td>系统登录背景页</td>
            <td>
              支持自定义上传背景图片，公司或团队的企业文化展示图片，让员工时刻认识了解公司或团队的文化，增加团队凝聚力
            </td>
            <td class="txt-center">
              <img
                src="/images/v3-0/3-3/vip33.png?=20211109001"
                style="display: inline-block"
                alt=""
              />
            </td>
          </tr>
          <tr>
            <td>团长自己的官方网站</td>
            <td>
              集前端后端于一体，团队专属宣传网站，自定义文案及展示栏目，拖拽排版，十分钟即可拥有属于自己的官方网站。
            </td>
            <td class="txt-center">
              <img
                src="/images/v3-0/3-3/vip33.png?=20211109001"
                style="display: inline-block"
                alt=""
              />
            </td>
          </tr>
          <tr>
            <td rowspan="4">企业服务保障</td>
            <td>强大系统服务</td>
            <td>
              坐享专业研发技术团队，精心打磨的业务管理系统，专业团队为你维护系统稳定、系统功能更新、服务器运维等等…你要做的，就是团队搭建和专心去招商！
            </td>
            <td class="txt-center">
              <img
                src="/images/v3-0/3-3/vip33.png?=20211109001"
                style="display: inline-block"
                alt=""
              />
            </td>
          </tr>
          <tr>
            <td>安全数据保护</td>
            <td>
              安全云上护航服务，保障用户数据安全，联盟认证优质服务商，专家团队保障用户业务信息安全稳定
            </td>
            <td class="txt-center">
              <img
                src="/images/v3-0/3-3/vip33.png?=20211109001"
                style="display: inline-block"
                alt=""
              />
            </td>
          </tr>
          <tr>
            <td>专属产品顾问</td>
            <td>
              为客户提供专属技术服务，帮助企业在业务、架构上稳定、高效、合理的使用橙子星选产品，提供7×24小时的专人专群支持
            </td>
            <td class="txt-center">
              <img
                src="/images/v3-0/3-3/vip33.png?=20211109001"
                style="display: inline-block"
                alt=""
              />
            </td>
          </tr>
          <tr>
            <td>顶级支持计划</td>
            <td>
              专属技术服务经理（TAM）贴身跟进，保障业务平稳运行；基于最佳实践，优化线上功能；企业定制化方案，助力业务创新
              行业一流技术沉淀，双平台技术支持，助力招商数字化，系统化，移动化转型
              专属企业群，提供7x24小时技术支持，高效响应客户诉求，保障服务的及时性和有效性
            </td>
            <td class="txt-center">
              <img
                src="/images/v3-0/3-3/vip33.png?=20211109001"
                style="display: inline-block"
                alt=""
              />
            </td>
          </tr>
          <tr>
            <td colspan="4">
              <span style="color: #1588f8">更多功能持续开发中</span>
            </td>
          </tr>
        </tbody>
      </table>
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
      systemindex: 0,
      system: [
        {
          title: "企业管理",
          subtitle: "支持企业自定义域名 独立/二级域名",
          biref: [
            "企业可以选择由橙子星选提供的的中性域名进行后台登录，避免员工看到橙子星选相关信息。或者也可以直接绑定自己的独立域名进行设置，还可以在橙子星选提供的域名上进行二级域名设置，灵活可控满足不同业务需求",
            "支持自定义企业名称、LOGO等企业重要信息非常有助于提示企业品牌形象，增加员工对企业的认同感。",
          ],
          img: require("@/assets/images/2021111017191317313681.png"),
        },
        {
          title: "团队管理",
          subtitle: "多部门、多层级、多角色数据分权管理",
          biref: [
            "团队管理，系统框架支持【集团总公司】-【区域分公司】-【子公司】-【部门】-【小组】等，可支持多层级管理，支持分公司自主添加员工",
            "【集团总公司】管理员、看全部团队及全部成员业绩；",
            "【区域分公司】管理员、看区域公司以下分公司全部成员业绩；",
            "【区域子公司】管理员、看子公司及子公司全部成员业绩；",
          ],
          img: require("@/assets/images/2021111815241938906911.png"),
        },
        {
          title: "达人管理",
          subtitle: "达人自由录入、寄样管理",
          biref: [
            "自由添加录入达人信息，支持绑定达人对应的商务BD专员，支持为达人批量寄送样品",
            "程序自动监控核算出那些达人出单、那些达人未出单、达人样品寄送情况",
          ],
          img: require("@/assets/images/2021111815240789403947.png"),
        },
        {
          title: "商家管理",
          subtitle: "商品待审-进行中-已结束分类高效管理",
          biref: [
            "员工可直接在橙子星选系统内完成自己招商商品审核，无需进入抖音招商后台繁琐操作，避免数据隐私和安全性。",
            "招商专员同样也可以看到哪些达人已经寄样了，哪些商品达人推广成交所有相关信息。",
          ],
          img: require("@/assets/images/2021111815235477215937.png"),
        },
        {
          title: "活动管理",
          subtitle: "活动集中管理、活动支持多员工分配",
          biref: [
            "老板可将一个活动指派给多个人或者多个团队，避免活动不够限制招商专员招商",
            "活动状态明显区分，待审核、进行中商品直接跳转审核操作便捷",
          ],
          img: require("@/assets/images/2021111815232969507348.png"),
        },
      ],
      specialindex: 0,
      special: [
        {
          header: "达人商品推广管理",
          title: "达人商品推广管理",
          midtitle: "Talent commodity promotion management",
          subtitle: "高效中台管理达人推广商品",
          biref: [
            "商品自由选择推广达人",
            "推广数据实时同步随时掌握达人推广情况",
            "达人数据分析、达人画像",
          ],
          img: "http://thumbnail.qingtaoke.com/img/bpt_zs_pic/202111/2021112510585668015265.png",
        },
        {
          header: "推广达人管理",
          title: "推广达人管理",
          midtitle: "Promote talent management",
          subtitle: "批量为达人寄送样品",
          biref: [
            "一个达人支持多个商务BD负责",
            "系统支持快速批量为达人寄样",
            "系统支持查询寄样汇总统计",
          ],
          img: "http://thumbnail.qingtaoke.com/img/bpt_zs_pic/202111/2021112511004952073890.png",
        },
        {
          header: "样品物流跟踪",
          title: "样品物流跟踪",
          midtitle: "Sample logistics tracking",
          subtitle: "物流信息实时跟踪查询",
          biref: [
            "寄样流程回寄流程流转清晰",
            "全快递公司物流跟踪实时查询",
            "商务BD样品寄样统计汇总",
          ],
          img: "http://thumbnail.qingtaoke.com/img/bpt_zs_pic/202111/2021112511002547633288.png",
        },
      ],
      intro: [
        {
          title: "活动发布",
          subtitle:
            "母账号可为员工分配活动发布权限和活动数量，员工可以自主在系统内发布自己的活动，提升活动发布效率；",
          img: require("@/assets/images/2021111115235834308803.png"),
        },
        {
          title: "商品审核",
          subtitle:
            "员工自己可在招商系统内完成商品审核，无需登录抖音账号，保障数据安全性",
          img: require("@/assets/images/2021111115243092857928.png"),
        },
        {
          title: "商品管理",
          subtitle:
            "商品在线审核，实时佣金变化监控提醒，从预告、商品推广中、商品推广结束、商品结算、无效商品多种分类统一管理团长商品",
          img: require("@/assets/images/2021111115245666478402.png"),
        },
        {
          title: "订单管理",
          subtitle:
            "付款订单明细实时更新，精准统计助力数据化运营，系统概况可直观查看每小时销量趋势图标，精准管理每笔订单；",
          img: require("@/assets/images/2021111115251489994116.png"),
        },
        {
          title: "成交排行",
          subtitle:
            "商品排名、员工排名、团队排名、员工或管理员能清晰的实时的知道自己那个商品爆单了，那个员工和团队的排名情况",
          img: require("@/assets/images/2021111115253515853164.png"),
        },
        {
          title: "工资计算",
          subtitle:
            "系统自动核算每位员工的团长工资结算数据，将每一笔结算订单都归属到人头，数据精准度达100",
          img: require("@/assets/images/2021111115255679726044.png"),
        },
        {
          title: "达人管理",
          subtitle:
            "系统支持自由录入达人信息，高效管理达人支持批量为达人寄样商品",
          img: require("@/assets/images/2021111115261539633768.png"),
        },
        {
          title: "样品管理",
          subtitle:
            "达人样品物流信息实时跟中，一键查询所有物流到货情况，寄样回寄流转数据清晰",
          img: require("@/assets/images/2021111115263412685764.png"),
        },
        {
          title: "推广管理",
          subtitle:
            "招商行业讲究效率、团队内部各司其职；“招商专员职责”：主要负责和商家进行洽谈把商品找回来；推广专员职责：主要负责将招商专员招回来的商品推出去，把商品放到更多的渠道，进行推广，让商品成交越多越好",
          img: require("@/assets/images/2021111115272850072464.png"),
        },
        {
          title: "绩效管理",
          subtitle:
            "管理员能清晰的知道，员工每天，每周、每月招了多少个商品，成交了多少单，跑的比较好的商品有哪些，最后一次登录IP地址；",
          img: require("@/assets/images/2021111115274794654444.png"),
        },
        {
          title: "企业公告系统",
          subtitle:
            "企业内部公告系统，母账号，组长账号可以自由控制给成员发送公告",
          img: require("@/assets/images/2021111115281121562118.png"),
        },
        {
          title: "企业内部知识库",
          subtitle:
            "属于企业内部自己的知识库，主账号，子账号都可以添加招商知识",
          img: require("@/assets/images/2021111115282716937350.png"),
        },
        {
          title: "外部代理合作",
          subtitle:
            "系统支持代理合作模式，分公司、子公司、小组管理权限清晰明了，数据相互不干扰，权限分配自由控制",
          img: require("@/assets/images/2021111115284492275255.png"),
        },
        {
          title: "员工管理",
          subtitle:
            "员工管理，系统框架支持【集团总公司】-【区域分公司】-【子公司】-【部门】-【小组】等，可支持多层级管理",
          img: require("@/assets/images/2021111115290468728847.png"),
        },
        {
          title: "企业管理",
          subtitle:
            "可绑定自己的独立域名，或二级域名员工直接登录公司自己的域名进入，增强企业荣誉感让品牌创造更大价值，带来更多收益。",
          img: require("@/assets/images/2021111115292745596606.png"),
        },
      ],
    };
  },
  mounted() {
    setInterval(() => {
      this.systemindex += 1;
      if (this.systemindex >= this.system.length) {
        this.systemindex = 0;
      }
      this.specialindex += 1;
      if (this.specialindex >= this.special.length) {
        this.specialindex = 0;
      }
    }, 5000);
  },
  methods: {
    systemclick(index) {
      this.systemindex = index;
    },
    specialclick(index) {
      this.specialindex = index;
    },
  },
};
</script>

<style lang="less" scoped>
.banner {
  display: flex;
  align-items: center;
  margin-top: 75px;
  height: 600px;
  background: url("http://thumbnail.qingtaoke.com/img/bpt_zs_pic/202111/2021111016453554972287.png")
    no-repeat;
  background-size: contain;
  background-position: right center;
  .propaganda {
    text-align: left;
    padding-left: 90px;
    width: 1200px;
    margin: auto;
    h1 {
      font-weight: 550;
      font-style: normal;
      color: #030000;
      font-size: 32px;
      margin: 20px 0;
    }
    p {
      width: 520px;
      font-weight: 400;
      font-style: normal;
      font-size: 16px;
      line-height: 30px;
      color: #333333;
    }
    .banner-btn {
      display: block;
      margin-top: 50px;
      background-color: #06cb94;
      border-radius: 3px;
      width: 220px;
      height: 50px;
      text-align: center;
      line-height: 50px;
      font-weight: 100;
      font-style: normal;
      color: #ffffff;
      font-size: 18px;
    }
  }
}

.system-introduce {
  height: 730px;
  background: url("http://thumbnail.qingtaoke.com/img/bpt_zs_pic/202111/2021111016545622162416.png")
    no-repeat;
  background-size: 1920px 100%;
  background-position: center top;
  margin-top: 40px;
  h2 {
    position: relative;
    font-size: 32px;
    line-height: 48px;
    color: #fff;
    padding-top: 40px;
    text-align: center;
    padding-bottom: 20px;
    margin-bottom: 40px;
    font-weight: bold;
  }
  h2:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 85px;
    height: 3px;
    margin-left: -42.5px;
    background-color: #fff;
    border-radius: 4px;
  }
  .swiper-navs {
    display: flex;
    justify-content: center;
    width: 1200px;
    margin: 0 auto 60px;
  }
  .swiper-navs > div {
    height: 40px;
    padding: 0 30px;
    font-size: 16px;
    line-height: 24px;
    color: #1f2d3d;
    position: relative;
    transition: all 0.1s linear;
    cursor: pointer;
  }
  .swiper-navs > div:hover {
    color: #fff;
  }
  .swiper-navs > div:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1px;
    background: #c8d2e0;
    border-radius: 3px;
  }
  .swiper-navs > div.active {
    color: #fff;
  }
  .swiper-navs > div.active:before {
    height: 2px;
    background: #fff;
  }
  .swiper-content {
    width: 1200px;
    margin: auto;
    position: relative;
  }
  .swiper-content > div {
    justify-content: center;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    transition: all 0.1s linear;
  }
  .swiper-content > div.active {
    opacity: 1;
    z-index: 5;
  }
  .swiper-content > div > img {
    margin-right: 58px;
    flex-shrink: 0;
    width: 565px;
    height: 401px;
  }
  .swiper-content > div > div {
    width: 460px;
  }
  .swiper-content > div > div h3 {
    position: relative;
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 30px;
    color: #fff;
    font-weight: bold;
  }
  .swiper-content > div > div > div {
    text-align: left;
    position: relative;
    color: #fff;
    padding-left: 34px;
    font-size: 14px;
    line-height: 28px;
    background: url("http://thumbnail.qingtaoke.com/img/bpt_zs_pic/202111/2021111115181323089463.png")
      no-repeat;
    background-size: 16px 16px;
    background-position: left 5px;
    margin-bottom: 15px;
  }
}

.function-introduce {
  background: #f2f4fa;
  padding: 50px 0;
  h2 {
    position: relative;
    font-size: 32px;
    line-height: 48px;
    color: #333333;
    padding-top: 80px;
    text-align: center;
    padding-bottom: 20px;
    margin-bottom: 40px;
    font-weight: bold;
  }
  h2:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 85px;
    height: 3px;
    margin-left: -42.5px;
    background-color: #00c699;
    border-radius: 4px;
  }
  .function-list {
    width: 1200px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .function-list-item {
      box-sizing: border-box;
      vertical-align: middle;
      background: #fff;
      width: 180px;
      height: 180px;
      margin-right: 32px;
      margin-bottom: 32px;
      overflow: hidden;
      position: relative;
      text-align: center;
      padding-top: 42px;
      font-size: 14px;
      border-radius: 3px;
      .img {
        width: 50px;
        height: 50px;
        margin-bottom: 15px;
      }
      .mask {
        position: absolute;
        left: 0;
        right: 0;
        top: 300px;
        bottom: 0;
        background: #00c699;
        color: #fff;
        padding: 10px 20px;
        font-size: 14px;
        transition: all 0.3s ease;
        .title {
          padding: 5px 0 15px;
          position: relative;
        }
        .title:before {
          content: "";
          position: absolute;
          width: 30px;
          height: 2px;
          background: #fff;
          bottom: 6px;
          left: 50%;
          transform: translateX(-50%);
        }
        .desc {
          text-align: left;
          word-break: break-all;
        }
      }
    }
    .function-list-item:nth-child(5n) {
      margin-right: 0;
    }
    .function-list-item:hover .mask {
      top: 0;
    }
  }
  .function-table {
    width: 1120px;
    margin: auto;
    border-top: 1px solid #cecece;
    border-left: 1px solid #cecece;
    font-size: 13px;
    color: #474e56;
    td,
    th {
      border-right: 1px solid #cecece;
      border-bottom: 1px solid #cecece;
      padding: 8px;
    }
    td {
      background: #fff;
    }
    img {
      width: 26px;
    }
  }
}

.special {
  background: #fff;
  padding: 20px 0;
  .special-title {
    position: relative;
    width: 1120px;
    height: 149px;
    text-align: center;
    line-height: 149px;
    margin: 30px auto 80px;
    font-weight: 650;
    font-style: normal;
    color: #ffffff;
    font-size: 32px;
    background: url("../assets/images/title-bg.png") no-repeat 100% 100%;
  }
  .special-title:before {
    content: "";
    position: absolute;
    height: 7px;
    left: 0;
    right: 0;
    bottom: -40px;
    background: url("../assets/images/line.png") no-repeat 100% 100%;
  }
  .special-navs {
    display: flex;
    justify-content: space-between;
    margin-bottom: 70px;
  }
  .special-navs > div {
    position: relative;
    height: 70px;
    width: 28%;
    padding-left: 60px;
    background-repeat: no-repeat;
    background-size: 50px 50px;
    background-position: left center;
    text-align: center;
    font-size: 18px;
    font-weight: 650;
    cursor: pointer;
  }
  .special-navs > div:nth-child(3) {
    background-image: url("../assets/images/swiper-nav-icon-03.png");
  }
  .special-navs > div:nth-child(3):hover {
    background-image: url("../assets/images/swiper-nav-icon-03-hover.png");
  }
  .special-navs > div.active:nth-child(3) {
    background-image: url("../assets/images/swiper-nav-icon-03-hover.png");
  }
  .special-navs > div:nth-child(2) {
    background-image: url("../assets/images/swiper-nav-icon-02.png");
  }
  .special-navs > div:nth-child(2):hover {
    background-image: url("../assets/images/swiper-nav-icon-02-hover.png");
  }
  .special-navs > div.active:nth-child(2) {
    background-image: url("../assets/images/swiper-nav-icon-02-hover.png");
  }
  .special-navs > div:nth-child(1) {
    background-image: url("../assets/images/swiper-nav-icon-01.png");
  }
  .special-navs > div:nth-child(1):hover {
    background-image: url("../assets/images/swiper-nav-icon-01-hover.png");
  }
  .special-navs > div.active:nth-child(1) {
    background-image: url("../assets/images/swiper-nav-icon-01-hover.png");
  }
  .special-navs > div:before {
    content: "";
    position: absolute;
    left: 60px;
    right: 0;
    top: 50%;
    height: 1px;
    background: rgba(121, 121, 121, 0.53);
  }
  .special-navs > div:hover:before {
    background: #06cb94;
  }
  .special-navs > div.active {
    color: #06cb94;
  }
  .special-navs > div.active:before {
    background: #06cb94;
  }
  .special-content {
    position: relative;
    height: 400px;
  }
  .special-content > div {
    text-align: left;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    justify-content: space-between;
    opacity: 0;
    transition: all 0.1s linear;
  }
  .special-content > div .img {
    width: 730px;
    height: 350px;
    flex-shrink: 0;
  }
  .special-content > div h1 {
    font-weight: 650;
    font-style: normal;
    font-size: 28px;
    color: #333333;
    margin: 0;
  }
  .special-content > div .desc {
    display: block;
    margin: 0 0 8px;
    font-weight: 400;
    font-style: normal;
    font-size: 12px;
    color: #797979;
  }
  .special-content > div h3 {
    font-weight: 650;
    font-style: normal;
    color: #06cb94;
    font-size: 18px;
  }
  .special-content > div p {
    font-style: normal;
    font-size: 16px;
    line-height: 30px;
    margin-bottom: 10px;
    color: #333;
    padding-left: 30px;
    background: url("http://thumbnail.qingtaoke.com/img/bpt_zs_pic/202111/2021111513554166348617.png")
      no-repeat;
    background-size: 20px 20px;
    background-position: left center;
  }
  .special-content > div.active {
    z-index: 9;
    opacity: 1;
  }
}

.flex-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
}
p,
div {
  word-wrap: break-word;
  word-break: break-all;
}
</style>
