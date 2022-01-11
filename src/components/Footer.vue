<template>
  <div id="bpt-footer">
    <div class="concat">
      <a :href="`${b1[1].path}`" target="_blank">{{ b1[1].name }}</a>
      <span v-for="(item, index) in blx" :key="index">{{ item }}</span>
    </div>

    <div>
      <span style="margin-right: 30px">关联平台</span>
      <a v-for="(item, index) in b2" :key="index" :href="`${item.path}`"
        >{{ item.name }}<i v-if="index != b2.length - 1" class="line"></i
      ></a>
    </div>

    <div>
      <span>{{ address }}</span>
    </div>

    <div class="copy-right">
      <span>© CopyRight 2011-2021 版权所有 </span>
      <i class="line"></i>

      <a
        v-for="(item, index) in b3"
        :key="index"
        :href="`${item.path}`"
        target="_blank"
        >{{ item.name }}<i v-if="index != b3.length - 1" class="line"></i
      ></a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      address:
        "广东省广州市黄埔区神舟路中央绿地广场A1栋2209",
      b1: [
        { name: "联系客服订购享超值优惠", path: "" },
        { name: "联系我们：000000000", path: "About" },
      ],
      blx: [
        "商务合作 000000@qq.cn",
        "企业专线 028-00000000",
        "企业微信 chengzixingxuaan",
      ],
      b2: [
        { name: "爆品推", path: "https://www.baopintui.com/" },
        { name: "橙子星选", path: "/" },
        { name: "轻淘客", path: "http://www.qingtaoke.com/" },
      ],
      b3: [
        {
          name: "备案号：蜀ICP备00000000000号-0",
          path: "https://beian.miit.gov.cn/",
        },
        { name: "增值电信业务经营许可证： 0000-0000000000", path: "/" },
        { name: "营业执照", path: "/" },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
#bpt-footer {
//   display: none;
  //   height: 100px;
  background: #2f3841;
  text-align: center;
  color: #fff;
  font-size: 13px;
  line-height: 40px;
  .concat {
    padding-top: 50px;
    span {
      display: inline-block;

      margin: 0 30px;
    }
  }
  .copy-right {
    width: 1200px;
    margin: auto;
    border-top: 1px solid #797979;
    line-height: 60px;
  }
  a,
  span {
    font-size: 12px;
    color: #797979;
    text-decoration: unset;
  }
  .line {
    display: inline-block;
    height: 12px;
    width: 1px;
    margin: 0 15px;
    background: #797979;
    vertical-align: middle;
  }
}
</style>