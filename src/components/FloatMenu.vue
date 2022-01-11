<template>
  <div class="fixed-right-kefu">
    <a class="kefu">
      <img class="icon" :src="`${icons[0]}`" alt="" />
      <div class="kefu-detail">
        <img :src="`${icons[4]}`" />
        <span>微信</span>
      </div>
    </a>
    <a class="kefu">
      <img class="icon" :src="`${icons[1]}`" alt="" />

      <div
        class="kefu-detail"
        style="
          left: -120px;
          width: auto;
          top: 50%;
          transform: translateY(-50%);
          background: transparent;
          border: unset;
          padding: 0 30px 0 0;
        "
      >
        <span
          style="
            display: block;
            background: #fff;
            padding: 0 5px;
            border-radius: 2px;
            border: 1px solid #efefef;
          "
          >008-00000000</span
        >
      </div>
    </a>
    <a class="kefu">
      <img class="icon" :src="`${icons[2]}`" alt="" />
      <div class="kefu-detail" style="padding-top: 0">
        <span>分享得佣金</span>
      </div>
    </a>
    <a class="kefu" target="_blank">
      <img class="icon" :src="`${icons[3]}`" alt="" />
      <div class="kefu-detail" style="padding-top: 0">
        <span>帮助中心</span>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icons: [
        require("@/assets/images/icon-01.png"),
        require("@/assets/images/icon-02.png"),
        require("@/assets/images/icon-10.png"),
        require("@/assets/images/icon-03.png"),
        require("@/assets/images/wechat.png"),
      ],
    };
  },
  mounted() {
    let kefu = document.getElementsByClassName("kefu");
    for (let i = 0; i < kefu.length; i++) {
      //   console.log(kefu[i].children[1]);
      kefu[i].addEventListener(
        "mouseenter",
        function (e) {
          e.target.children[1].style.display = "block";
        },
        false
      );
      kefu[i].addEventListener(
        "mouseleave",
        function (e) {
          e.target.children[1].style.display = "none";
        },
        false
      );
    }
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.fixed-right-kefu {
  position: fixed;
  right: 30px;
  bottom: 60px;
  background: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 100px;
  z-index: 999;
  padding: 2px 10px;
  .icon {
    width: 20px;
    height: 20px;
  }
  .kefu {
    cursor: pointer;
  }
  .kefu-detail {
    box-sizing: border-box;
    width: 100px;
    background-color: #fff;
    position: absolute;
    left: -120px;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 2px;
    border: 1px solid #efefef;
    padding: 5px;
    padding-bottom: 0;
    display: none;
    color: #777;
    text-align: center;
    font-size: 0;
    span {
      font-size: 14px;
      height: 32px;
      line-height: 32px;
    }
    img {
      width: 100%;
    }
  }
}
.fixed-right-kefu > * {
  position: relative;
  display: block;
  padding: 12px 2px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
.fixed-right-kefu > *:first-child {
  border-top: unset;
}
</style>