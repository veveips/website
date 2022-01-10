<template>
  <div>
    <div class="h-img">
      <div class="item">
        <a class="title" href=""> 抖音招商团长管理系统 </a>
        <div class="bottom-btn">
          <a class="bottom-text" href="">查看详情</a>
          <span class="icon-arrow"></span>
        </div>
      </div>
      <div class="item">
        <a class="title" href=""> 企业私域独立网站 </a>
        <div class="bottom-btn">
          <a class="bottom-text" href="">查看详情</a>
          <span class="icon-arrow"></span>
        </div>
      </div>
      <div class="item">
        <a class="title" href=""> 抖音直播达人管理系统 </a>
        <div class="bottom-btn">
          <a class="bottom-text" href="">查看详情</a>
          <span class="icon-arrow"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="less" scoped>
.h-img {
  width: 1150px;
  margin: -70px auto 0;
  display: flex;
  justify-content: space-evenly;
  position: relative;
  z-index: 5;
  .item {
    box-sizing: border-box;
    width: 350px;
    height: 150px;
    background-color: #fff;
    padding: 47px 20px 42px;
    border-radius: 10px;
    box-shadow: 0 20px 40px 0 rgba(153, 169, 191, 0.3);
    text-align: left;
    position: relative;
    transition: all 0.3s;
    cursor: pointer;
    background-position: center top;
    background-repeat: no-repeat;
    background-size: 370px auto;
    .title,
    .bottom-text {
      transition: all 0.3s;
      text-decoration: none;
    }
    .title {
      height: 54px;
      font-size: 18px;
      font-weight: 500;
      color: #1f2d3d;
      line-height: 27px;
    }
    .bottom-btn {
      position: absolute;
      bottom: 10px;
      left: 20px;
      display: flex;
      align-items: center;
      .icon-arrow {
        width: 20px;
        height: 20px;
        display: inline-block;
        margin-left: 5px;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: 100% auto;
      }
    }
  }
  .item:hover {
    transform: translateY(-10px);
  }
  .item:nth-child(1) {
    background-image: url("../assets/images/card-bg-01.png");
    .bottom-text {
      color: #04cb94;
    }
    .icon-arrow {
      background-image: url("../assets/images/ar1.png");
    }
  }
  .item:nth-child(1):hover {
    background-image: url("../assets/images/card-bg-01-hover.png");
    .bottom-text,
    .title {
      color: white;
    }
    .icon-arrow {
      background-image: url("../assets/images/ar.png");
    }
  }
  .item:nth-child(2) {
    background-image: url("../assets/images/card-bg-02.png");
    .bottom-text {
      color: #e581f4;
    }
    .icon-arrow {
      background-image: url("../assets/images/ar2.png");
    }
  }
  .item:nth-child(2):hover {
    background-image: url("../assets/images/card-bg-02-hover.png");
    .bottom-text,
    .title {
      color: white;
    }
    .icon-arrow {
      background-image: url("../assets/images/ar.png");
    }
  }
  .item:nth-child(3) {
    background-image: url("../assets/images/card-bg-03.png");
    .bottom-text {
      color: #ffb551;
    }
    .icon-arrow {
      background-image: url("../assets/images/ar3.png");
    }
  }
  .item:nth-child(3):hover {
    background-image: url("../assets/images/card-bg-03-hover.png");
    .bottom-text,
    .title {
      color: white;
    }
    .icon-arrow {
      background-image: url("../assets/images/ar.png");
    }
  }
}
</style>