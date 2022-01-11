<template lang="html">
  <div class="banner">
    <img
      draggable="false"
      v-for="(item, index) in imgArray"
      :key="index"
      :src="item"
      v-show="n == index"
    />
    <div class="banner-circle">
      <ul>
        <li
          v-for="(item, index) in imgArray"
          :key="index"
          :class="index == n ? 'selected' : ''"
          @click="clickImg(index)"
        ></li>
      </ul>
    </div>
    <div class="banner-mid">
      <img src="@/assets/images/2021110210405054785547.png" />
      <div
        style="
          margin: 20px auto 30px;
          font-size: 80px;
          letter-spacing: 7.2px;
          color: #ffffff;
          line-height: 87px;
        "
      >
        <div
          v-for="(item, index) in title"
          :key="index"
          :class="index == n ? 'active' : ''"
        >
          <div>{{ item.title }}</div>
          <div>{{ item.subtitle }}</div>
        </div>
      </div>
      <a href="/index/register" class="banner-btn">注册体验</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "banner",
  data() {
    return {
      title: [
        { title: "抖音兴趣电商", subtitle: "新增量新激发" },
        { title: "橙子星选SAAS", subtitle: "招商管理系统" },
      ],
      n: 0, //默认图片是第一张开始
      imgArray: [
        require("@/assets/images/banner-01.jpg"),
        require("@/assets/images/banner-02.jpg"),
      ], //获取图片位置
    };
  },
  created() {
    this.play();
  },
  methods: {
    play() {
      this.timer = setInterval(this.autoPlay, 8000); //用定时器控制每张图的显示时间
    },
    autoPlay() {
      this.$data.n++;
      if (this.imgArray.length == this.n) {
        this.n = 0;
      }
    },
    clickImg(index) {
      console.log(index);
      //   this.n = index;
      //显示当前点击的图片
    },
  },
  beforeDestroy() {
    clearInterval(this.timer); //清除定时器
  },
};
</script>

<style lang="less" scoped>
.banner {
  width: 100%;
  position: relative;
  display: block;
  height: 750px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  text-decoration: unset;
  img {
    width: 100%;
    height: 100%;
  }
  .banner-circle {
    position: absolute;
    bottom: 14%;
    left: 50%;
    transform: translateX(-50%);
  }
  .banner-mid {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 14%;
    top: 30%;
    div {
      text-align: left;
    }
    .banner-btn {
      text-decoration: none;
      font-size: 18px;
      color: #fff;
      font-weight: 500;
      background-color: #00ff9a;
      border-radius: 3px;
      width: 189px;
      height: 50px;
      text-align: center;
      line-height: 50px;
    }
    img {
      width: 200px;
      display: inline-block;
      border: 0;
    }
  }
}

ul {
  display: flex;
}
li {
  list-style: none;
  height: 5px;
  width: 40px;
  margin: 0 5px;
  background: gray;
}
.selected {
  background: white;
}
.active {
  display: none;
}
</style>
